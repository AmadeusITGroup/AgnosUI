import type {Directive, Widget, WidgetFactory} from '@agnos-ui/core';
import {stateStores, typeFunction, typeString, writablesForProps} from '@agnos-ui/core';
import {computed, readable, writable} from '@amadeus-it-group/tansu';
import type {OnChanges, SimpleChanges} from '@angular/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, effect} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {UseDirective} from './use.directive';
import {callWidgetFactoryWithConfig, patchSimpleChanges, toAngularSignal} from './utils';

describe('utils', () => {
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

	describe('toAngularSignal', () => {
		it('works synchronously', () => {
			const tansuStore = writable(1);
			const signal = TestBed.runInInjectionContext(() => toAngularSignal(tansuStore));
			expect(signal()).toBe(1);
			tansuStore.set(2);
			expect(signal()).toBe(2);
			TestBed.resetTestEnvironment(); // this ends the subscription
			tansuStore.set(3);
			expect(signal()).toBe(2); // no change as the subscription was ended
		});

		it('subscribes and unsubscribes outside Angular zone', async () => {
			const ngZone = TestBed.inject(NgZone);
			const tansuStore = readable(0 as number, {
				onUse: createZoneCheckFn('onUse', (set) => {
					set(1);
					return createZoneCheckFn('destroy', () => {});
				}),
			});
			ngZone.run(
				createZoneCheckFn('ngZone.run', () => {
					const signal = TestBed.runInInjectionContext(() => toAngularSignal(tansuStore));
					expect(signal()).toBe(1);
					TestBed.resetTestingModule();
				})
			);
			expect(log).toStrictEqual([
				'begin ngZone.run, ngZone = true',
				'begin onUse, ngZone = false',
				'end onUse, ngZone = false',
				'begin destroy, ngZone = false',
				'end destroy, ngZone = false',
				'end ngZone.run, ngZone = true',
			]);
		});

		@Component({
			standalone: true,
			template: `{{ mySignal() }}`,
		})
		class MyTestComponent {
			myStore = writable(1);
			mySignal = toAngularSignal(this.myStore);
			changes = (() => {
				const res: number[] = [];
				effect(() => {
					res.push(this.mySignal());
				});
				return res;
			})();
		}

		it('works in a template (inside Angular zone)', () => {
			const fixture = TestBed.createComponent(MyTestComponent);
			fixture.autoDetectChanges();
			expect(fixture.nativeElement.textContent).toBe('1');
			expect(fixture.componentInstance.changes).toStrictEqual([1]);
			const zone = TestBed.inject(NgZone);
			zone.run(() => {
				expect(NgZone.isInAngularZone()).toBeTruthy();
				fixture.componentInstance.myStore.set(2);
				fixture.componentInstance.myStore.set(3);
			});
			expect(fixture.nativeElement.textContent).toBe('3');
			expect(fixture.componentInstance.changes).toStrictEqual([1, 3]);
			fixture.destroy();
		});

		it('works in a template (outside Angular zone)', async () => {
			const fixture = TestBed.createComponent(MyTestComponent);
			fixture.autoDetectChanges();
			expect(fixture.nativeElement.textContent).toBe('1');
			expect(fixture.componentInstance.changes).toStrictEqual([1]);
			expect(NgZone.isInAngularZone()).toBeFalsy();
			fixture.componentInstance.myStore.set(2);
			fixture.componentInstance.myStore.set(3);
			await 0;
			expect(fixture.nativeElement.textContent).toBe('3');
			expect(fixture.componentInstance.changes).toStrictEqual([1, 3]);
			fixture.destroy();
		});
	});

	describe('callWidgetFactoryWithConfig', () => {
		it('calls the core outside angular zone and events in angular zone', async () => {
			const noop = () => {};
			type MyWidget = Widget<
				{onMyAction: () => void; myValue: string},
				{derivedValue: string},
				{myApiFn: () => void},
				{myAction: () => void},
				{myDirective: Directive}
			>;

			const factory: WidgetFactory<MyWidget> = createZoneCheckFn('factory', (propsConfig) => {
				const [{onMyAction$, myValue$}, patch] = writablesForProps(
					{
						onMyAction: noop,
						myValue: 'defValue',
					},
					propsConfig,
					{
						onMyAction: typeFunction,
						myValue: typeString,
					}
				);
				const derivedValue$ = computed(createZoneCheckFn('computeDerivedValue', () => `derived from ${myValue$()}`));
				return {
					...stateStores({
						derivedValue$,
					}),
					api: {
						myApiFn: createZoneCheckFn('myApiFn', () => {}),
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
					{{ state$().derivedValue }}
				</button>`,
				changeDetection: ChangeDetectionStrategy.OnPush,
			})
			class MyWidgetComponent implements OnChanges {
				@Output('auMyAction') myAction = new EventEmitter<void>();
				@Input('auMyValue') myValue: string | undefined;

				_widget = createZoneCheckFn(
					'callWidgetFactoryWithConfig',
					callWidgetFactoryWithConfig
				)({
					factory,
					events: {
						onMyAction: () => this.myAction.emit(),
					},
				});
				api = this._widget.api;
				state$ = toAngularSignal(this._widget.state$);

				ngOnChanges(changes: SimpleChanges): void {
					patchSimpleChanges(this._widget.patch, changes);
				}

				onClick = createZoneCheckFn('onClick', this._widget.actions.myAction);
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
			fixture.autoDetectChanges(true);
			log.push('after autoDetectChanges');
			expect(fixture.nativeElement.innerText.trim()).toBe('derived from defValue');
			log.push('before first await 0');
			await 0;
			log.push('after first await 0');
			ngZone.run(
				createZoneCheckFn('ngZone.run', () => {
					fixture.componentRef.setInput('auMyValue', 'newValue');
					fixture.componentInstance.api.myApiFn();
				})
			);
			log.push('after ngZone.run');
			expect(fixture.nativeElement.innerText.trim()).toBe('derived from newValue');
			log.push('before click');
			fixture.nativeElement.querySelector('button').click();
			log.push('after click');
			log.push('before destroy');
			fixture.destroy();
			log.push('after destroy');
			log.push('before last await 0');
			await 0;
			log.push('after last await 0');
			expect(log).toStrictEqual([
				'enter ngZone',
				'begin callWidgetFactoryWithConfig, ngZone = true',
				'begin factory, ngZone = false',
				'end factory, ngZone = false',
				'end callWidgetFactoryWithConfig, ngZone = true',
				'begin computeDerivedValue, ngZone = false',
				'end computeDerivedValue, ngZone = false',
				'leave ngZone',
				'before autoDetectChanges',
				'enter ngZone',
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
				'before destroy',
				'after destroy',
				'before last await 0',
				'begin myDirectiveDestroy, ngZone = false',
				'end myDirectiveDestroy, ngZone = false',
				'after last await 0',
			]);
		});
	});
});
