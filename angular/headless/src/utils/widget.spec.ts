import type {Directive, Widget, WidgetFactory} from '@agnos-ui/core/types';
import {stateStores, writablesForProps} from '@agnos-ui/core/utils/stores';
import {typeFunction, typeString} from '@agnos-ui/core/utils/writables';

import {computed, writable} from '@amadeus-it-group/tansu';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {UseDirective} from './directive';
import {BaseWidgetDirective, CachedProperty, callWidgetFactoryWithConfig} from './widget';

describe('callWidgetFactoryWithConfig', () => {
	let log: string[] = [];

	beforeEach(() => {
		log = [];
	});

	const createZoneCheckFn =
		<T extends any[], R>(name: string, fn: (...args: T) => R) =>
		(...args: T): R => {
			log.push(`begin ${name}, ngZone = ${NgZone.isInAngularZone()}`);
			try {
				return fn(...args);
			} finally {
				log.push(`end ${name}, ngZone = ${NgZone.isInAngularZone()}`);
			}
		};

	it('calls the core outside angular zone and events in angular zone', async () => {
		const noop = () => {};
		type MyWidget = Widget<
			{onMyAction: () => void; onCounterChange: (value: number) => void; myValue: string},
			{derivedValue: string; counter: number},
			{myApiFn: () => void; incrementCounter: () => void},
			{myAction: () => void},
			{myDirective: Directive}
		>;

		const factory: WidgetFactory<MyWidget> = createZoneCheckFn('factory', (propsConfig) => {
			const [{onMyAction$, onCounterChange$, myValue$}, patch] = writablesForProps(
				{
					onMyAction: noop,
					onCounterChange: noop,
					myValue: 'defValue',
				},
				propsConfig,
				{
					onMyAction: typeFunction,
					myValue: typeString,
				},
			);
			const derivedValue$ = computed(createZoneCheckFn('computeDerivedValue', () => `derived from ${myValue$()}`));
			const counter$ = writable(0);
			return {
				...stateStores({
					derivedValue$,
					counter$,
				}),
				api: {
					myApiFn: createZoneCheckFn('myApiFn', () => {}),
					incrementCounter: createZoneCheckFn('incrementCounter', () => {
						const value = counter$() + 1;
						counter$.set(value);
						onCounterChange$()(value);
					}),
				},
				actions: {
					myAction: createZoneCheckFn('myAction', () => {
						onMyAction$()();
					}),
				},
				directives: {
					myDirective: createZoneCheckFn('myDirective', (arg) => ({
						update: createZoneCheckFn('myDirectiveUpdate', noop),
						destroy: createZoneCheckFn('myDirectiveDestroy', noop),
					})),
				},
				patch: createZoneCheckFn('patch', patch),
			};
		});

		@Component({
			standalone: true,
			imports: [UseDirective],
			template: `<button type="button" [auUse]="_widget.directives.myDirective" (click)="onClick()">
				{{ state().derivedValue }} {{ state().counter }}
			</button>`,
			changeDetection: ChangeDetectionStrategy.OnPush,
		})
		class MyWidgetComponent extends BaseWidgetDirective<MyWidget> {
			@Output('auMyAction') myAction = new EventEmitter<void>();
			@Output('auCounterChange') counterChange = new EventEmitter<number>();
			@Input('auMyValue') myValue: string | undefined;

			_widget = createZoneCheckFn(
				'callWidgetFactoryWithConfig',
				callWidgetFactoryWithConfig,
			)({
				factory,
				events: {
					onCounterChange: (event) => this.counterChange.emit(event),
					onMyAction: () => this.myAction.emit(),
				},
			});

			@CachedProperty
			get onClick() {
				return createZoneCheckFn('onClick', this._widget.actions.myAction);
			}
		}

		const ngZone = TestBed.inject(NgZone);
		ngZone.onUnstable.subscribe(() => {
			log.push('enter ngZone');
		});
		ngZone.onStable.subscribe(() => {
			log.push('leave ngZone');
		});
		const fixture = TestBed.createComponent(MyWidgetComponent);
		log.push('before autoDetectChanges');
		fixture.componentInstance.myAction.subscribe(createZoneCheckFn('myActionListener', noop));
		fixture.componentInstance.counterChange.subscribe(createZoneCheckFn('counterChangeListener', noop));
		fixture.autoDetectChanges(true);
		log.push('after autoDetectChanges');
		expect(fixture.nativeElement.innerText.trim()).toBe('derived from defValue 0');
		log.push('before first await 0');
		await 0;
		log.push('after first await 0');
		ngZone.run(
			createZoneCheckFn('ngZone.run', () => {
				fixture.componentRef.setInput('auMyValue', 'newValue');
				fixture.componentInstance.api.myApiFn();
			}),
		);
		log.push('after ngZone.run');
		expect(fixture.nativeElement.innerText.trim()).toBe('derived from newValue 0');
		log.push('before click');
		fixture.nativeElement.querySelector('button').click();
		log.push('after click');
		log.push('before incrementCounter');
		fixture.componentInstance.api.incrementCounter();
		log.push('after incrementCounter');
		expect(fixture.nativeElement.innerText.trim()).toBe('derived from newValue 1');
		log.push('before destroy');
		fixture.destroy();
		log.push('after destroy');
		log.push('before last await 0');
		await 0;
		log.push('after last await 0');
		expect(log).toStrictEqual([
			'enter ngZone',
			'begin callWidgetFactoryWithConfig, ngZone = true',
			'end callWidgetFactoryWithConfig, ngZone = true',
			'leave ngZone',
			'before autoDetectChanges',
			'enter ngZone',
			'begin factory, ngZone = false',
			'end factory, ngZone = false',
			'begin computeDerivedValue, ngZone = false',
			'end computeDerivedValue, ngZone = false',
			'leave ngZone',
			'after autoDetectChanges',
			'before first await 0',
			'begin myDirective, ngZone = false',
			'end myDirective, ngZone = false',
			'after first await 0',
			'enter ngZone',
			'begin ngZone.run, ngZone = true',
			'begin myApiFn, ngZone = false',
			'end myApiFn, ngZone = false',
			'end ngZone.run, ngZone = true',
			'begin patch, ngZone = false',
			'begin computeDerivedValue, ngZone = false',
			'end computeDerivedValue, ngZone = false',
			'end patch, ngZone = false',
			'leave ngZone',
			'after ngZone.run',
			'before click',
			'enter ngZone',
			'begin onClick, ngZone = true',
			'begin myAction, ngZone = false',
			'begin myActionListener, ngZone = true',
			'end myActionListener, ngZone = true',
			'end myAction, ngZone = false',
			'end onClick, ngZone = true',
			'leave ngZone',
			'after click',
			'before incrementCounter',
			'begin incrementCounter, ngZone = false',
			'enter ngZone',
			'begin counterChangeListener, ngZone = true',
			'end counterChangeListener, ngZone = true',
			'leave ngZone',
			'end incrementCounter, ngZone = false',
			'after incrementCounter',
			'before destroy',
			'after destroy',
			'before last await 0',
			'begin myDirectiveDestroy, ngZone = false',
			'end myDirectiveDestroy, ngZone = false',
			'after last await 0',
		]);
	});

	it('calls the core with the correct init values', async () => {
		type MyWidget = Widget<{myValue: string}, {myValue: string}, Record<string, never>, Record<string, never>, Record<string, never>>;

		const factory: WidgetFactory<MyWidget> = (propsConfig) => {
			const [{myValue$}, patch] = writablesForProps(
				{
					myValue: 'defValue',
				},
				propsConfig,
				{
					myValue: typeString,
				},
			);
			log.push(`in factory: myValue = ${myValue$()}`);
			return {
				...stateStores({
					myValue$,
				}),
				api: {},
				actions: {},
				directives: {},
				patch,
			};
		};

		@Component({
			standalone: true,
			template: `{{ state().myValue }}`,
			changeDetection: ChangeDetectionStrategy.OnPush,
			selector: '[auTestMyWidget]',
		})
		class MyWidgetComponent extends BaseWidgetDirective<MyWidget> {
			@Input('auMyValue') myValue: string | undefined;

			_widget = callWidgetFactoryWithConfig({
				factory,
				events: {},
			});
		}
		@Component({
			standalone: true,
			imports: [MyWidgetComponent],
			template: `<div auTestMyWidget [auMyValue]="value"></div>`,
			changeDetection: ChangeDetectionStrategy.OnPush,
		})
		class MyTestComponent {
			value = 'myInitValue';
		}

		const fixture = TestBed.createComponent(MyTestComponent);
		log.push('before autoDetectChanges');
		fixture.autoDetectChanges(true);
		log.push('after autoDetectChanges');
		expect((fixture.nativeElement as HTMLElement).firstElementChild?.innerHTML).toBe('myInitValue');
		fixture.destroy();
		expect(log).toStrictEqual(['before autoDetectChanges', 'in factory: myValue = myInitValue', 'after autoDetectChanges']);
	});
});

describe('CachedProperty', () => {
	it('should work', () => {
		const logs: string[] = [];
		class Person {
			constructor(
				private readonly firstName: string,
				private readonly lastName: string,
			) {}

			@CachedProperty
			get fullName() {
				const res = `${this.firstName} ${this.lastName}`;
				logs.push(`computing fullName: ${res}`);
				return res;
			}

			@CachedProperty
			get lastNameUpperCase() {
				const res = `${this.lastName.toUpperCase()}`;
				logs.push(`computing lastNameUpperCase: ${res}`);
				return res;
			}
		}
		logs.push('before creating person 1');
		const person1 = new Person('Arsène', 'Lupin');
		logs.push('before creating person 2');
		const person2 = new Person('Sherlock', 'Holmes');
		logs.push('before person1.fullName');
		expect(person1.fullName).toBe('Arsène Lupin');
		logs.push('before person1.fullName again');
		expect(person1.fullName).toBe('Arsène Lupin');
		logs.push('before person2.fullName');
		expect(person2.fullName).toBe('Sherlock Holmes');
		logs.push('before person2.fullName again');
		expect(person2.fullName).toBe('Sherlock Holmes');
		logs.push('before person1.fullName again');
		expect(person1.fullName).toBe('Arsène Lupin');
		logs.push('before person1.lastNameUpperCase');
		expect(person1.lastNameUpperCase).toBe('LUPIN');
		logs.push('end');
		expect(logs).toEqual([
			'before creating person 1',
			'before creating person 2',
			'before person1.fullName',
			'computing fullName: Arsène Lupin',
			'before person1.fullName again',
			'before person2.fullName',
			'computing fullName: Sherlock Holmes',
			'before person2.fullName again',
			'before person1.fullName again',
			'before person1.lastNameUpperCase',
			'computing lastNameUpperCase: LUPIN',
			'end',
		]);
	});
});
