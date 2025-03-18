import {describe, expect, test, vitest} from 'vitest';
import {defaultToasterProps, Toaster} from './toaster';

interface ToastPropsTest {
	children: string;
	dismissible?: boolean;
}

describe('Toaster', () => {
	test('Create a core Toaster', () => {
		const toaster = new Toaster();
		expect(toaster.toasts()).toStrictEqual([]);
		expect(toaster.options()).toStrictEqual(defaultToasterProps);
	});
	test('Create a core Toaster with props', () => {
		const toaster = new Toaster({limit: 5, duration: 10000});
		expect(toaster.options()).toStrictEqual({...defaultToasterProps, limit: 5, duration: 10000});
	});
	test('Define a toaster with own props', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		expect(toaster.toasts()).toStrictEqual([{id: 0, props: {children: 'Hello world'}}]);
	});
	test('Add timer to the toaster', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addTimer(1, 5000);
		expect(toaster.timers.get(1)).toBeDefined();
		expect(toaster.timers.get(1)?.duration).toBe(5000);
	});
	test('Add timer does nothing to the toaster when duration is 0', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addTimer(1, 0);
		expect(toaster.timers.get(1)).toBeUndefined();
	});
	test('Pause timer clears the timeout and adds the pause value', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.pauseTimer(0);
		const timer = toaster.timers.get(0);
		expect(timer).toBeDefined();
		expect(timer?.paused).toBeDefined();
		expect(timer?.timeout).toBeNull();
	});
	test('Pause timer does nothing when a timer is not found', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.pauseTimer(1);
		const timer = toaster.timers.get(1);
		expect(timer).toBeUndefined();
	});
	test('Pause timer does nothing when a timer has no timeout', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		const timer = toaster.timers.get(0);
		if (timer) timer.timeout = null;
		toaster.pauseTimer(0);
		expect(timer!.paused).toBe(undefined);
	});
	test('Resume timer clears the pause value and adds the timeout', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.pauseTimer(0);
		toaster.resumeTimer(0);
		const timer = toaster.timers.get(0);
		expect(timer).toBeDefined();
		expect(timer?.paused).toBeUndefined();
		expect(timer?.timeout).toBeDefined();
	});
	test('Resume timer does nothing when a timer is not found', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.resumeTimer(1);
		const timer = toaster.timers.get(1);
		expect(timer).toBeUndefined();
	});
	test('Resume timer check the duration is correct', async () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addTimer(1, 2000);
		// Time pass, my timer is decreasing
		await new Promise((resolve) => setTimeout(resolve, 500));
		toaster.pauseTimer(1);
		// Time pass, but the timer duration won't be affected
		await new Promise((resolve) => setTimeout(resolve, 500));
		toaster.resumeTimer(1);
		expect(toaster.timers.get(1)!.duration).toBeLessThanOrEqual(1500);
		// Time pass and then I pause my timer again
		await new Promise((resolve) => setTimeout(resolve, 500));
		toaster.pauseTimer(1);
		// Time pass, but the timer duration won't be affected
		await new Promise((resolve) => setTimeout(resolve, 500));
		toaster.resumeTimer(1);
		expect(toaster.timers.get(1)!.duration).toBeLessThanOrEqual(1000);
	});
	test('Add a toast to the toaster and verify the timer exists', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		expect(toaster.toasts()).toStrictEqual([{id: 0, props: {children: 'Hello world'}}]);
		expect(toaster.timers.get(0)).toBeDefined();
	});
	test('Add multiple toasts to the toaster and verify the timers exists and ordered', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.addToast({children: 'Hello world 1'});
		toaster.addToast({children: 'Hello world 2'});
		expect(toaster.toasts()).toStrictEqual([
			{id: 2, props: {children: 'Hello world 2'}},
			{id: 1, props: {children: 'Hello world 1'}},
			{id: 0, props: {children: 'Hello world'}},
		]);
		expect(toaster.timers.get(0)).toBeDefined();
		expect(toaster.timers.get(1)).toBeDefined();
		expect(toaster.timers.get(2)).toBeDefined();
	});
	test('Add a toast to the toaster and verify the timer is not created if duration is 0', () => {
		const toaster = new Toaster<ToastPropsTest>({duration: 0});
		toaster.addToast({children: 'Hello world'});
		expect(toaster.toasts()).toStrictEqual([{id: 0, props: {children: 'Hello world'}}]);
		expect(toaster.timers.get(0)).toBeUndefined();
	});
	test('Check the timer is cleaned after duration', async () => {
		const toaster = new Toaster<ToastPropsTest>({duration: 500});
		toaster.addToast({children: 'Hello world'});
		expect(toaster.toasts()).toStrictEqual([{id: 0, props: {children: 'Hello world'}}]);
		expect(toaster.timers.get(0)).toBeDefined();
		await new Promise((resolve) => setTimeout(resolve, 510));
		expect(toaster.toasts()).toStrictEqual([]);
		expect(toaster.timers.get(0)).toBeUndefined();
	});
	test('Remove a toast', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.addToast({children: 'Hello world 1'});
		toaster.addToast({children: 'Hello world 2'});
		toaster.removeToast(1);
		expect(toaster.toasts()).toStrictEqual([
			{id: 2, props: {children: 'Hello world 2'}},
			{id: 0, props: {children: 'Hello world'}},
		]);
	});
	test('Remove last index toast', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.addToast({children: 'Hello world 1'});
		toaster.addToast({children: 'Hello world 2'});
		toaster.removeToast(2);
		expect(toaster.toasts()).toStrictEqual([
			{id: 1, props: {children: 'Hello world 1'}},
			{id: 0, props: {children: 'Hello world'}},
		]);
	});
	test('Remove first index toast', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.addToast({children: 'Hello world 1'});
		toaster.addToast({children: 'Hello world 2'});
		toaster.removeToast(0);
		expect(toaster.toasts()).toStrictEqual([
			{id: 2, props: {children: 'Hello world 2'}},
			{id: 1, props: {children: 'Hello world 1'}},
		]);
	});
	test('Close all remove all the toasts and clean timers', () => {
		const toaster = new Toaster<ToastPropsTest>();
		toaster.addToast({children: 'Hello world'});
		toaster.addToast({children: 'Hello world 1'});
		toaster.addToast({children: 'Hello world 2'});
		toaster.closeAll();
		expect(toaster.toasts()).toStrictEqual([]);
		expect(Array.from(toaster.timers.entries())).toStrictEqual([]);
	});
	test('Force dismissible when the duration is 0', () => {
		const toaster = new Toaster<ToastPropsTest>();
		const updateToastsSpy = vitest.spyOn(toaster, 'updateToasts');
		toaster.addToast({children: 'Hello world'});
		expect(toaster.options().dismissible).toBe(false);
		toaster.options.set({...toaster.options(), duration: 0});
		expect(updateToastsSpy).toHaveBeenCalled();
		expect(toaster.options().dismissible).toBe(true);
	});
	test('Events directive should pause and resume timer on pointerenter and pointerleave', () => {
		const toaster = new Toaster<ToastPropsTest>({pauseOnHover: true});
		const element = document.createElement('div');
		element.setAttribute('data-testid', 'toast-0');
		document.body.appendChild(element);
		toaster.addToast({children: 'Hello world'});
		toaster.eventsDirective(element, 0);
		// Simulate pointerenter event
		element.dispatchEvent(new Event('pointerenter'));
		let timer = toaster.timers.get(0);
		expect(timer?.paused).toBeDefined();
		expect(timer?.timeout).toBeNull();

		// Simulate pointerleave event
		element.dispatchEvent(new Event('pointerleave'));
		timer = toaster.timers.get(0);
		expect(timer?.paused).toBeUndefined();
		expect(timer?.timeout).toBeDefined();
	});
	test('Events directive should not pause timer if pauseOnHover is false', () => {
		const toaster = new Toaster<ToastPropsTest>({pauseOnHover: false});
		const element = document.createElement('div');
		element.setAttribute('data-testid', 'toast-0');
		toaster.addToast({children: 'Hello world'});
		toaster.eventsDirective(element, 0);

		// Simulate pointerenter event
		element.dispatchEvent(new Event('pointerenter'));
		const timer = toaster.timers.get(0);
		expect(timer?.paused).toBeUndefined();
		expect(timer?.timeout).toBeDefined();
	});
});
