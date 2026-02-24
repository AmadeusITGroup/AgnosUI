import {readable, writable} from '@amadeus-it-group/tansu';
import {ChangeDetectionStrategy, Component, effect} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {describe, expect, it} from 'vitest';
import {toAngularSignal, toAngularWritableSignal} from './stores';

describe('toAngularSignals', () => {
	it('[toAngularSignal] works synchronously', () => {
		const tansuStore = writable(1);
		const signal = TestBed.runInInjectionContext(() => toAngularSignal(tansuStore));
		expect(signal()).toBe(1);
		tansuStore.set(2);
		expect(signal()).toBe(2);
		TestBed.resetTestingModule(); // this ends the subscription
		tansuStore.set(3);
		expect(signal()).toBe(2); // no change as the subscription was ended
	});

	it('[toAngularWritableSignal] works synchronously', () => {
		const tansuStore = writable(1);
		const signal = TestBed.runInInjectionContext(() => toAngularWritableSignal(tansuStore));
		expect(signal()).toBe(1);
		tansuStore.set(2);
		expect(signal()).toBe(2);
		signal.set(3);
		expect(tansuStore.get()).toBe(3);
		signal.set(4);
		expect(tansuStore.get()).toBe(4);
		TestBed.resetTestingModule(); // this ends the subscription
		tansuStore.set(5);
		expect(signal()).toBe(4); // no change as the subscription was ended
	});

	it('[toAngularSignal] subscribes and unsubscribes', () => {
		const log: string[] = [];
		const tansuStore = readable(0 as number, {
			onUse: (set) => {
				log.push('onUse');
				set(1);
				return () => {
					log.push('destroy');
				};
			},
		});
		const signal = TestBed.runInInjectionContext(() => toAngularSignal(tansuStore));
		expect(signal()).toBe(1);
		TestBed.resetTestingModule();
		expect(log).toStrictEqual(['onUse', 'destroy']);
	});

	@Component({
		selector: '[auMyTestWithoutEffect]',
		changeDetection: ChangeDetectionStrategy.OnPush,
		template: `{{ mySignal() }}`,
	})
	class MyTestWithoutEffectComponent {
		myStore = writable(1);
		mySignal = toAngularSignal(this.myStore);
		changes: number[] = [];
	}

	@Component({
		selector: '[auMyTestWithEffect]',
		changeDetection: ChangeDetectionStrategy.OnPush,
		template: `{{ mySignal() }}`,
	})
	class MyTestWithEffectComponent {
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

	for (const MyComponent of [MyTestWithEffectComponent, MyTestWithoutEffectComponent]) {
		it(`[toAngularSignal] works in ${MyComponent.name}`, async () => {
			const fixture = TestBed.createComponent(MyComponent);
			fixture.autoDetectChanges();
			await fixture.whenStable();
			expect(fixture.nativeElement.textContent).toBe('1');
			if (MyComponent === MyTestWithEffectComponent) {
				// eslint-disable-next-line vitest/no-conditional-expect
				expect(fixture.componentInstance.changes).toStrictEqual([1]);
			}
			fixture.componentInstance.myStore.set(2);
			fixture.componentInstance.myStore.set(3);
			await fixture.whenStable();
			expect(fixture.nativeElement.textContent).toBe('3');
			if (MyComponent === MyTestWithEffectComponent) {
				// eslint-disable-next-line vitest/no-conditional-expect
				expect(fixture.componentInstance.changes).toStrictEqual([1, 3]);
			}
			fixture.destroy();
		});
	}
});
