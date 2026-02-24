import type {Directive, Widget, WidgetFactory} from '@agnos-ui/core/types';
import {stateStores, writablesForProps} from '@agnos-ui/core/utils/stores';
import {typeFunction, typeString} from '@agnos-ui/core/utils/writables';

import {computed, writable} from '@amadeus-it-group/tansu';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {UseDirective} from './directive';
import {BaseWidgetDirective, callWidgetFactoryWithConfig} from './widget';

describe('callWidgetFactoryWithConfig', () => {
	let log: string[] = [];

	beforeEach(() => {
		log = [];
	});

	const createCheckFn =
		<T extends any[], R>(name: string, fn: (...args: T) => R) =>
		(...args: T): R => {
			log.push(`begin ${name}`);
			try {
				return fn(...args);
			} finally {
				log.push(`end ${name}`);
			}
		};

	it('calls the core and dispatches events correctly', async () => {
		const noop = () => {};
		type MyWidget = Widget<
			{onMyAction: () => void; onCounterChange: (value: number) => void; myValue: string},
			{derivedValue: string; counter: number},
			{myApiFn: () => void; incrementCounter: () => void},
			{myDirective: Directive}
		>;

		const factory: WidgetFactory<MyWidget> = createCheckFn('factory', (propsConfig) => {
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
			const derivedValue$ = computed(createCheckFn('computeDerivedValue', () => `derived from ${myValue$()}`));
			const counter$ = writable(0);
			return {
				...stateStores({
					derivedValue$,
					counter$,
				}),
				api: {
					myApiFn: createCheckFn('myApiFn', () => {}),
					incrementCounter: createCheckFn('incrementCounter', () => {
						const value = counter$() + 1;
						counter$.set(value);
						onCounterChange$()(value);
					}),
				},
				directives: {
					myDirective: createCheckFn('myDirective', () => ({
						update: createCheckFn('myDirectiveUpdate', noop),
						destroy: createCheckFn('myDirectiveDestroy', noop),
					})),
				},
				patch: createCheckFn('patch', patch),
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
					createCheckFn('callWidgetFactoryWithConfig', callWidgetFactoryWithConfig)(factory, {
						events: {
							onCounterChange: (event) => this.counterChange.emit(event),
							onMyAction: () => this.myAction.emit(),
						},
					}),
				);
			}

			onClick = createCheckFn('onClick', () => {});
		}

		const fixture = TestBed.createComponent(MyWidgetComponent);
		log.push('before autoDetectChanges');
		fixture.componentInstance.myAction.subscribe(createCheckFn('myActionListener', noop));
		fixture.componentInstance.counterChange.subscribe(createCheckFn('counterChangeListener', noop));
		fixture.autoDetectChanges();
		log.push('after autoDetectChanges');
		expect(fixture.nativeElement.innerText.trim()).toBe('derived from defValue 0');
		log.push('before first await 0');
		await Promise.resolve();
		log.push('after first await 0');
		fixture.componentRef.setInput('auMyValue', 'newValue');
		fixture.componentInstance.api.myApiFn();
		log.push('before first whenStable');
		await fixture.whenStable();
		log.push('after first whenStable');
		expect(fixture.nativeElement.innerText.trim()).toBe('derived from newValue 0');
		log.push('before click');
		fixture.nativeElement.querySelector('button').click();
		log.push('after click');
		log.push('before incrementCounter');
		fixture.componentInstance.api.incrementCounter();
		log.push('after incrementCounter');
		log.push('before second whenStable');
		await fixture.whenStable();
		log.push('after second whenStable');
		expect(fixture.nativeElement.innerText.trim()).toBe('derived from newValue 1');
		log.push('before destroy');
		fixture.destroy();
		log.push('after destroy');
		log.push('before last await 0');
		await Promise.resolve();
		log.push('after last await 0');
		expect(log).toStrictEqual([
			'begin callWidgetFactoryWithConfig',
			'end callWidgetFactoryWithConfig',
			'before autoDetectChanges',
			'begin factory',
			'end factory',
			'begin computeDerivedValue',
			'end computeDerivedValue',
			'begin myDirective',
			'end myDirective',
			'after autoDetectChanges',
			'before first await 0',
			'after first await 0',
			'begin myApiFn',
			'end myApiFn',
			'before first whenStable',
			'begin patch',
			'begin computeDerivedValue',
			'end computeDerivedValue',
			'end patch',
			'after first whenStable',
			'before click',
			'begin onClick',
			'end onClick',
			'after click',
			'before incrementCounter',
			'begin incrementCounter',
			'begin counterChangeListener',
			'end counterChangeListener',
			'end incrementCounter',
			'after incrementCounter',
			'before second whenStable',
			'after second whenStable',
			'before destroy',
			'begin myDirectiveDestroy',
			'end myDirectiveDestroy',
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
