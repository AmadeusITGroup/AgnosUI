import {readable, writable} from '@amadeus-it-group/tansu';
import {ChangeDetectionStrategy, Component, NgZone, effect} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {toAngularSignal, toAngularWritableSignal} from './stores';

describe('toAngularSignals', () => {
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

	it('[toAngularSignal] works synchronously', () => {
		const tansuStore = writable(1);
		const signal = TestBed.runInInjectionContext(() => toAngularSignal(tansuStore));
		expect(signal()).toBe(1);
		tansuStore.set(2);
		expect(signal()).toBe(2);
		TestBed.resetTestEnvironment(); // this ends the subscription
		tansuStore.set(3);
		expect(signal()).toBe(2); // no change as the subscription was ended
	});

	it('[toAngularWritableSignal] works synchronously', () => {
		const tansuStore = writable(1);
		const signal = TestBed.runInInjectionContext(() => toAngularWritableSignal(tansuStore));
		expect(signal()).toBe(1);
		tansuStore.set(2);
		expect(signal()).toBe(2);
		const ngZone = TestBed.inject(NgZone);
		ngZone.run(() => {
			signal.set(3);
		});
		expect(tansuStore.get()).toBe(3);
		ngZone.run(() => {
			signal.set(4);
		});
		expect(tansuStore.get()).toBe(4);
		TestBed.resetTestEnvironment(); // this ends the subscription
		tansuStore.set(5);
		expect(signal()).toBe(4); // no change as the subscription was ended
	});

	it('[toAngularSignal] subscribes and unsubscribes outside Angular zone', () => {
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
			}),
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
		changeDetection: ChangeDetectionStrategy.OnPush,
		template: `{{ mySignal() }}`,
	})
	class MyTestWithoutEffectComponent {
		myStore = writable(1);
		mySignal = toAngularSignal(this.myStore);
		changes: number[] = [];
	}

	@Component({
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
		it(`[toAngularSignal] works in ${MyComponent.name} (inside Angular zone)`, async () => {
			const fixture = TestBed.createComponent(MyComponent);
			fixture.autoDetectChanges();
			await fixture.whenStable();
			expect(fixture.nativeElement.textContent).toBe('1');
			if (MyComponent === MyTestWithEffectComponent) {
				expect(fixture.componentInstance.changes).toStrictEqual([1]);
			}
			const zone = TestBed.inject(NgZone);
			expect(NgZone.isInAngularZone()).toBeFalsy();
			zone.run(() => {
				expect(NgZone.isInAngularZone()).toBeTruthy();
				fixture.componentInstance.myStore.set(2);
				fixture.componentInstance.myStore.set(3);
			});
			await fixture.whenStable();
			expect(fixture.nativeElement.textContent).toBe('3');
			if (MyComponent === MyTestWithEffectComponent) {
				expect(fixture.componentInstance.changes).toStrictEqual([1, 3]);
			}
			fixture.destroy();
		});

		it(`[toAngularSignal] works in ${MyComponent.name} (outside Angular zone)`, async () => {
			const fixture = TestBed.createComponent(MyComponent);
			fixture.autoDetectChanges();
			await fixture.whenStable();
			expect(fixture.nativeElement.textContent).toBe('1');
			if (MyComponent === MyTestWithEffectComponent) {
				expect(fixture.componentInstance.changes).toStrictEqual([1]);
			}
			expect(NgZone.isInAngularZone()).toBeFalsy();
			fixture.componentInstance.myStore.set(2);
			fixture.componentInstance.myStore.set(3);
			await fixture.whenStable();
			expect(fixture.nativeElement.textContent).toBe('3');
			if (MyComponent === MyTestWithEffectComponent) {
				expect(fixture.componentInstance.changes).toStrictEqual([1, 3]);
			}
			fixture.destroy();
		});
	}
});
