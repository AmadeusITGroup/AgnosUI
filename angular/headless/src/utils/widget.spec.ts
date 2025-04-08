import type {Directive, Widget, WidgetFactory} from '@agnos-ui/core/types';
import {stateStores, writablesForProps} from '@agnos-ui/core/utils/stores';
import {typeFunction, typeString} from '@agnos-ui/core/utils/writables';

import {computed, writable} from '@amadeus-it-group/tansu';
import {ChangeDetectionStrategy, Component, input, NgZone, output} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {UseDirective} from './directive';
import {BaseWidgetDirective, callWidgetFactoryWithConfig} from './widget';

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
			{myDirective: Directive}
		>;

		const factory: WidgetFactory<MyWidget> = createZoneCheckFn('factory', (propsConfig) => {
			const [{onCounterChange$, myValue$}, patch] = writablesForProps(
				{
					onMyAction: noop,
					onCounterChange: noop,
					myValue: 'defValue',
				},
				propsConfig,
				{
					onMyAction: typeFunction,
					myValue: typeString,
					onCounterChange: undefined,
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
				directives: {
					myDirective: createZoneCheckFn('myDirective', () => ({
						update: createZoneCheckFn('myDirectiveUpdate', noop),
						destroy: createZoneCheckFn('myDirectiveDestroy', noop),
					})),
				},
				patch: createZoneCheckFn('patch', patch),
			};
		});

		@Component({
			imports: [UseDirective],
			template: `<button type="button" [auUse]="directives.myDirective" (click)="onClick()">
				{{ state.derivedValue() }} {{ state.counter() }}
			</button>`,
			changeDetection: ChangeDetectionStrategy.OnPush,
		})
		class MyWidgetComponent extends BaseWidgetDirective<MyWidget> {
			readonly myAction = output({alias: 'auMyAction'});
			readonly counterChange = output<number>({alias: 'auCounterChange'});
			readonly myValue = input<string>(undefined, {alias: 'auMyValue'});

			constructor() {
				super(
					createZoneCheckFn('callWidgetFactoryWithConfig', callWidgetFactoryWithConfig)(factory, {
						events: {
							onCounterChange: (event) => this.counterChange.emit(event),
							onMyAction: () => this.myAction.emit(),
						},
					}),
				);
			}

			onClick = createZoneCheckFn('onClick', () => {});
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
		await Promise.resolve();
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
		await Promise.resolve();
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
			'begin myDirective, ngZone = false',
			'end myDirective, ngZone = false',
			'leave ngZone',
			'after autoDetectChanges',
			'before first await 0',
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
			'begin myDirectiveDestroy, ngZone = false',
			'end myDirectiveDestroy, ngZone = false',
			'after destroy',
			'before last await 0',
			'after last await 0',
		]);
	});

	it('calls the core with the correct init values', () => {
		type MyWidget = Widget<{myValue: string}, {myValue: string}, Record<string, never>, Record<string, never>>;

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
				directives: {},
				patch,
			};
		};

		@Component({
			template: `{{ state.myValue() }}`,
			changeDetection: ChangeDetectionStrategy.OnPush,
			selector: '[auTestMyWidget]',
		})
		class MyWidgetComponent extends BaseWidgetDirective<MyWidget> {
			readonly myValue = input<string>(undefined, {alias: 'auMyValue'});

			constructor() {
				super(callWidgetFactoryWithConfig(factory));
			}
		}
		@Component({
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
