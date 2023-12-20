import {readable, writable} from '@amadeus-it-group/tansu';
import {TestBed} from '@angular/core/testing';
import {beforeEach, describe, expect, it} from 'vitest';
import {toAngularSignal} from './stores';
import {Component, NgZone, effect} from '@angular/core';

describe('toAngularSignal', () => {
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
