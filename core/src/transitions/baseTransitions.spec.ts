import {expect, test, describe, beforeEach} from 'vitest';
import {createTransition} from './baseTransitions';
import type {TransitionFn} from './baseTransitions';
import {promiseFromStore} from '../utils/internal/promise';
import {writable} from '@amadeus-it-group/tansu';

describe(`createTransition`, () => {
	let events: string[] = [];
	let transitionCalls = 0;
	const onShown = () => events.push('onShown');
	const onHidden = () => events.push('onHidden');
	const onVisibleChange = (value: boolean) => events.push(`onVisibleChange:${value}`);
	const transition: TransitionFn = async (element, direction, animated, signal, context: {callNumber?: number}) => {
		transitionCalls++;
		const callNumber = transitionCalls;
		if (!context.callNumber) {
			context.callNumber = callNumber;
		}
		events.push(`transitionStart:${callNumber}:${(element as any).id}:${direction}:anim=${animated}:ctxt=${context.callNumber}`);
		let aborted = false;
		const abort = new Promise<void>((resolve) => {
			signal.addEventListener('abort', () => {
				events.push(`transitionAbort:${callNumber}`);
				aborted = true;
				resolve();
			});
		});
		await Promise.race([abort, new Promise((resolve) => setTimeout(resolve, 50))]);
		events.push(`transitionEnd:${callNumber}:aborted=${aborted}`);
	};

	beforeEach(() => {
		transitionCalls = 0;
		events = [];
	});

	test(`basic case`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		const transitionInstance = createTransition({
			props: {
				animatedOnInit: true,
				visible: true,
				transition,
				onShown,
				onHidden,
				onVisibleChange,
			},
		});
		const directiveInstance = transitionInstance.directives.directive(element);
		await transitionInstance.api.show();
		events.push('here');
		await transitionInstance.api.hide();
		events.push('finished');
		directiveInstance?.destroy?.();
		expect(events).toEqual([
			'transitionStart:1:domEl:show:anim=true:ctxt=1',
			'transitionEnd:1:aborted=false',
			'onShown',
			'here',
			'onVisibleChange:false',
			'transitionStart:2:domEl:hide:anim=true:ctxt=2',
			'transitionEnd:2:aborted=false',
			'onHidden',
			'finished',
		]);
	});

	test(`simultaneous calls show/hide`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		const transitionInstance = createTransition({
			props: {
				animatedOnInit: true,
				visible: true,
				transition,
				onShown,
				onHidden,
				onVisibleChange,
			},
		});
		const directiveInstance = transitionInstance.directives.directive(element);
		const transition1 = transitionInstance.api.show();
		void transition1.finally(() => {
			throw new Error('transition1 is expected not to resolve');
		});
		events.push('afterRunTransition1');
		expect(transitionInstance.stores.transitioning$()).toBe(true);
		const transition2 = transitionInstance.api.hide();
		events.push('afterRunTransition2');
		expect(transitionInstance.stores.transitioning$()).toBe(true);
		await transition2;
		events.push('afterAwaitRunTransition2');
		expect(transitionInstance.stores.transitioning$()).toBe(false);
		directiveInstance?.destroy?.();
		expect(events).toEqual([
			'transitionStart:1:domEl:show:anim=true:ctxt=1',
			'afterRunTransition1',
			'onVisibleChange:false',
			'transitionAbort:1',
			'transitionStart:2:domEl:hide:anim=true:ctxt=1', // the first context is reused
			'afterRunTransition2',
			'transitionEnd:1:aborted=true',
			'transitionEnd:2:aborted=false',
			'onHidden',
			'afterAwaitRunTransition2',
		]);
	});

	test(`simultaneous calls show/hide/show`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		const transitionInstance = createTransition({
			props: {
				animatedOnInit: true,
				visible: true,
				transition,
				onShown,
				onHidden,
				onVisibleChange,
			},
		});
		const directiveInstance = transitionInstance.directives.directive(element);
		const transition1 = transitionInstance.api.show();
		void transition1.finally(() => {
			throw new Error('transition1 is expected not to resolve');
		});
		events.push('afterRunTransition1');
		await new Promise((resolve) => setTimeout(resolve, 2));
		events.push('afterTimeoutTransition1');
		const transition2 = transitionInstance.api.hide();
		void transition2.finally(() => {
			throw new Error('transition2 is expected not to resolve');
		});
		events.push('afterRunTransition2');
		await new Promise((resolve) => setTimeout(resolve, 2));
		events.push('afterTimeoutTransition2');
		const transition3 = transitionInstance.api.show();
		events.push('afterRunTransition3');
		await new Promise((resolve) => setTimeout(resolve, 2));
		events.push('afterTimeoutTransition3');
		await transition3;
		events.push('afterAwaitRunTransition3');
		directiveInstance?.destroy?.();
		expect(events).toEqual([
			'transitionStart:1:domEl:show:anim=true:ctxt=1',
			'afterRunTransition1',
			'afterTimeoutTransition1',
			'onVisibleChange:false',
			'transitionAbort:1',
			'transitionStart:2:domEl:hide:anim=true:ctxt=1',
			'afterRunTransition2',
			'transitionEnd:1:aborted=true',
			'afterTimeoutTransition2',
			'onVisibleChange:true',
			'transitionAbort:2',
			'transitionStart:3:domEl:show:anim=true:ctxt=1',
			'afterRunTransition3',
			'transitionEnd:2:aborted=true',
			'afterTimeoutTransition3',
			'transitionEnd:3:aborted=false',
			'onShown',
			'afterAwaitRunTransition3',
		]);
	});

	test(`simultaneous calls, show/show`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		const transitionInstance = createTransition({
			props: {
				animatedOnInit: true,
				visible: true,
				onShown,
				onHidden,
				onVisibleChange,
				transition,
			},
		});
		const directiveInstance = transitionInstance.directives.directive(element);
		const transition1 = transitionInstance.api.show();
		events.push('afterRunTransition1');
		const transition2 = transitionInstance.api.show();
		void transition1.finally(() => {
			throw new Error('transition1 is expected not to resolve');
		});
		events.push('afterRunTransition2');
		await transition2;
		events.push('afterAwaitRunTransition2');
		directiveInstance?.destroy?.();
		expect(events).toEqual([
			'transitionStart:1:domEl:show:anim=true:ctxt=1',
			'afterRunTransition1',
			'afterRunTransition2',
			'transitionEnd:1:aborted=false',
			'onShown',
			'afterAwaitRunTransition2',
		]);
	});

	test(`changing visible to false before calling the directive`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		let hiddenCalled: () => void;
		const hiddenCalledPromise = new Promise<void>((resolve) => (hiddenCalled = resolve));
		const transitionInstance = createTransition({
			props: {
				onShown,
				onHidden: function () {
					hiddenCalled();
					onHidden();
				},
				onVisibleChange,
				transition,
			},
		});
		events.push('afterCreateTransition');
		transitionInstance.patch({visible: false});
		events.push('afterPatch');
		const directiveInstance = transitionInstance.directives.directive(element);
		events.push('afterDirective');
		await hiddenCalledPromise;
		events.push('afterHidden');
		directiveInstance?.destroy?.();
		events.push('afterDestroy');
		expect(events).toEqual([
			'afterCreateTransition',
			'afterPatch',
			'onVisibleChange:false',
			'transitionStart:1:domEl:hide:anim=false:ctxt=1',
			'afterDirective',
			'transitionEnd:1:aborted=false',
			'onHidden',
			'afterHidden',
			'afterDestroy',
		]);
	});

	test(`changing visible to true before calling the directive (with initDone = true)`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		let shownCalled: () => void;
		const shownCalledPromise = new Promise<void>((resolve) => (shownCalled = resolve));
		const transitionInstance = createTransition({
			props: {
				visible: false,
				onHidden,
				onVisibleChange,
				onShown: function () {
					shownCalled();
					onShown();
				},
				transition,
			},
		});
		events.push('afterCreateTransition');
		transitionInstance.patch({initDone: true, visible: true});
		events.push('afterPatch');
		const directiveInstance = transitionInstance.directives.directive(element);
		events.push('afterDirective');
		await shownCalledPromise;
		events.push('afterShown');
		directiveInstance?.destroy?.();
		events.push('afterDestroy');
		expect(events).toEqual([
			'afterCreateTransition',
			'afterPatch',
			'onVisibleChange:true',
			'transitionStart:1:domEl:show:anim=true:ctxt=1',
			'afterDirective',
			'transitionEnd:1:aborted=false',
			'onShown',
			'afterShown',
			'afterDestroy',
		]);
	});

	test(`changing visible to true before calling the directive (with initDone = null)`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		let shownCalled: () => void;
		const shownCalledPromise = new Promise<void>((resolve) => (shownCalled = resolve));
		const transitionInstance = createTransition({
			props: {
				visible: false,
				onHidden,
				onVisibleChange,
				onShown: function () {
					shownCalled();
					onShown();
				},
				transition,
			},
		});
		events.push('afterCreateTransition');
		transitionInstance.patch({visible: true});
		events.push('afterPatch');
		const directiveInstance = transitionInstance.directives.directive(element);
		events.push('afterDirective');
		await shownCalledPromise;
		events.push('afterShown');
		directiveInstance?.destroy?.();
		events.push('afterDestroy');
		expect(events).toEqual([
			'afterCreateTransition',
			'afterPatch',
			'onVisibleChange:true',
			'transitionStart:1:domEl:show:anim=false:ctxt=1',
			'afterDirective',
			'transitionEnd:1:aborted=false',
			'onShown',
			'afterShown',
			'afterDestroy',
		]);
	});

	test(`changing visible to true after calling the directive (with initDone = false)`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		let shownCalled: () => void;
		const initDone = writable(false);
		const shownCalledPromise = new Promise<void>((resolve) => (shownCalled = resolve));
		const transitionInstance = createTransition({
			props: {
				visible: false,
				initDone,
				onHidden,
				onVisibleChange,
				onShown: function () {
					shownCalled();
					onShown();
				},
				transition,
			},
		});
		events.push('afterCreateTransition');
		const directiveInstance = transitionInstance.directives.directive(element); // this does not change initDone
		events.push('afterDirective');
		transitionInstance.patch({visible: true}); // so this triggers the display without animation
		events.push('afterPatch');
		await shownCalledPromise;
		events.push('afterShown');
		initDone.set(true);
		events.push('beforePatch');
		transitionInstance.patch({visible: false}); // this uses animation
		events.push('afterPatch');
		await promiseFromStore(transitionInstance.stores.hidden$).promise;
		events.push('afterHidden');
		directiveInstance?.destroy?.();
		events.push('afterDestroy');
		expect(events).toEqual([
			'afterCreateTransition',
			'transitionStart:1:domEl:hide:anim=false:ctxt=1',
			'afterDirective',
			'onVisibleChange:true',
			'transitionAbort:1',
			'transitionStart:2:domEl:show:anim=false:ctxt=1',
			'afterPatch',
			'transitionEnd:1:aborted=true',
			'transitionEnd:2:aborted=false',
			'onShown',
			'afterShown',
			'beforePatch',
			'onVisibleChange:false',
			'transitionStart:3:domEl:hide:anim=true:ctxt=3',
			'afterPatch',
			'transitionEnd:3:aborted=false',
			'onHidden',
			'afterHidden',
			'afterDestroy',
		]);
	});

	test(`changing visible to true after calling the directive (with initDone = null)`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		let shownCalled: () => void;
		const shownCalledPromise = new Promise<void>((resolve) => (shownCalled = resolve));
		const transitionInstance = createTransition({
			props: {
				visible: false,
				onHidden,
				onVisibleChange,
				onShown: function () {
					shownCalled();
					onShown();
				},
				transition,
			},
		});
		events.push('afterCreateTransition');
		const directiveInstance = transitionInstance.directives.directive(element);
		events.push('afterDirective');
		transitionInstance.patch({visible: true});
		events.push('afterPatch');
		await shownCalledPromise;
		events.push('afterShown');
		directiveInstance?.destroy?.();
		events.push('afterDestroy');
		expect(events).toEqual([
			'afterCreateTransition',
			'transitionStart:1:domEl:hide:anim=false:ctxt=1',
			'afterDirective',
			'onVisibleChange:true',
			'transitionAbort:1',
			'transitionStart:2:domEl:show:anim=true:ctxt=1',
			'afterPatch',
			'transitionEnd:1:aborted=true',
			'transitionEnd:2:aborted=false',
			'onShown',
			'afterShown',
			'afterDestroy',
		]);
	});

	test(`setting visible with patch`, async () => {
		const element = <HTMLElement>{id: 'domEl'};
		const transitionInstance = createTransition({
			props: {
				transition,
				onShown,
				onHidden,
				onVisibleChange,
			},
		});
		events.push('afterCreateTransition');
		const unsubscribeState = transitionInstance.state$.subscribe((state) => {
			events.push(`state = ${JSON.stringify(state)}`);
		});
		events.push('beforeDirective');
		const directiveInstance = transitionInstance.directives.directive(element);
		events.push('afterDirective');
		await promiseFromStore(transitionInstance.stores.shown$).promise;
		events.push('beforePatch1');
		transitionInstance.patch({visible: false});
		events.push('afterPatch1');
		await promiseFromStore(transitionInstance.stores.hidden$).promise;
		events.push('beforePatch2');
		transitionInstance.patch({visible: true});
		events.push('afterPatch2');
		await promiseFromStore(transitionInstance.stores.shown$).promise;
		directiveInstance?.destroy?.();
		expect(events).toEqual([
			'afterCreateTransition',
			`state = ${JSON.stringify({visible: true, element: null, elementPresent: false, transitioning: false, shown: false, hidden: false})}`,
			'beforeDirective',
			'transitionStart:1:domEl:show:anim=false:ctxt=1',
			`state = ${JSON.stringify({visible: true, element, elementPresent: true, transitioning: true, shown: false, hidden: false})}`,
			'afterDirective',
			'transitionEnd:1:aborted=false',
			`state = ${JSON.stringify({visible: true, element, elementPresent: true, transitioning: false, shown: true, hidden: false})}`,
			'onShown',
			'beforePatch1',
			'onVisibleChange:false',
			'transitionStart:2:domEl:hide:anim=true:ctxt=2',
			`state = ${JSON.stringify({visible: false, element, elementPresent: true, transitioning: true, shown: false, hidden: false})}`,
			'afterPatch1',
			'transitionEnd:2:aborted=false',
			`state = ${JSON.stringify({visible: false, element, elementPresent: true, transitioning: false, shown: false, hidden: true})}`,
			'onHidden',
			'beforePatch2',
			'onVisibleChange:true',
			'transitionStart:3:domEl:show:anim=true:ctxt=3',
			`state = ${JSON.stringify({visible: true, element, elementPresent: true, transitioning: true, shown: false, hidden: false})}`,
			'afterPatch2',
			'transitionEnd:3:aborted=false',
			`state = ${JSON.stringify({visible: true, element, elementPresent: true, transitioning: false, shown: true, hidden: false})}`,
			'onShown',
			`state = ${JSON.stringify({visible: true, element: null, elementPresent: false, transitioning: false, shown: false, hidden: false})}`,
		]);
		unsubscribeState();
	});

	for (const animated of [true, false]) {
		for (const animatedOnInit of [true, false]) {
			test(`check initial animated with animatedOnInit = ${animatedOnInit} and animated = ${animated} and visible = true`, async () => {
				let element = <HTMLElement>{id: 'domEl1'};
				const transitionInstance = createTransition({
					props: {
						animatedOnInit,
						animated,
						onVisibleChange,
						transition,
					},
				});
				events.push('afterCreateTransition');
				const unsubscribeState = transitionInstance.state$.subscribe((state) => {
					events.push(`state = ${JSON.stringify(state)}`);
				});
				events.push('beforeCallingDirective1');
				let directiveInstance = transitionInstance.directives.directive(element, {});
				events.push('afterCallingDirective1');
				await promiseFromStore(transitionInstance.stores.shown$).promise;
				events.push('beforeDestroyingDirective1');
				directiveInstance?.destroy?.();
				events.push('afterDestroyingDirective1');
				element = <HTMLElement>{id: 'domEl2'};
				events.push('beforeCallingDirective2');
				directiveInstance = transitionInstance.directives.directive(element, {});
				events.push('afterCallingDirective2');
				await promiseFromStore(transitionInstance.stores.shown$).promise;
				events.push('beforeDestroyingDirective2');
				directiveInstance?.destroy?.();
				events.push('afterDestroyingDirective2');
				element = <HTMLElement>{id: 'domEl3'};
				events.push('beforeCallingDirective3');
				directiveInstance = transitionInstance.directives.directive(element, {visible: false});
				events.push('afterCallingDirective3');
				await promiseFromStore(transitionInstance.stores.hidden$).promise;
				events.push('beforeDestroyingDirective3');
				directiveInstance?.destroy?.();
				events.push('afterDestroyingDirective3');
				unsubscribeState();
				expect(events).toEqual([
					'afterCreateTransition',
					`state = ${JSON.stringify({visible: true, element: null, elementPresent: false, transitioning: false, shown: false, hidden: false})}`,
					'beforeCallingDirective1',
					`transitionStart:1:domEl1:show:anim=${animatedOnInit}:ctxt=1`,
					`state = ${JSON.stringify({
						visible: true,
						element: {id: 'domEl1'},
						elementPresent: true,
						transitioning: true,
						shown: false,
						hidden: false,
					})}`,
					'afterCallingDirective1',
					'transitionEnd:1:aborted=false',
					`state = ${JSON.stringify({
						visible: true,
						element: {id: 'domEl1'},
						elementPresent: true,
						transitioning: false,
						shown: true,
						hidden: false,
					})}`,
					'beforeDestroyingDirective1',
					`state = ${JSON.stringify({visible: true, element: null, elementPresent: false, transitioning: false, shown: false, hidden: false})}`,
					'afterDestroyingDirective1',
					'beforeCallingDirective2',
					`transitionStart:2:domEl2:show:anim=${animated}:ctxt=2`,
					`state = ${JSON.stringify({
						visible: true,
						element: {id: 'domEl2'},
						elementPresent: true,
						transitioning: true,
						shown: false,
						hidden: false,
					})}`,
					'afterCallingDirective2',
					'transitionEnd:2:aborted=false',
					`state = ${JSON.stringify({
						visible: true,
						element: {id: 'domEl2'},
						elementPresent: true,
						transitioning: false,
						shown: true,
						hidden: false,
					})}`,
					'beforeDestroyingDirective2',
					`state = ${JSON.stringify({visible: true, element: null, elementPresent: false, transitioning: false, shown: false, hidden: false})}`,
					'afterDestroyingDirective2',
					'beforeCallingDirective3',
					'onVisibleChange:false',
					`transitionStart:3:domEl3:hide:anim=false:ctxt=3`,
					`state = ${JSON.stringify({
						visible: false,
						element: {id: 'domEl3'},
						elementPresent: true,
						transitioning: true,
						shown: false,
						hidden: false,
					})}`,
					'afterCallingDirective3',
					'transitionEnd:3:aborted=false',
					`state = ${JSON.stringify({
						visible: false,
						element: {id: 'domEl3'},
						elementPresent: true,
						transitioning: false,
						shown: false,
						hidden: true,
					})}`,
					'beforeDestroyingDirective3',
					`state = ${JSON.stringify({visible: false, element: null, elementPresent: false, transitioning: false, shown: false, hidden: true})}`,
					'afterDestroyingDirective3',
				]);
			});

			test(`check initial animated with animatedOnInit = ${animatedOnInit} and animated = ${animated} and visible = false`, async () => {
				let element = <HTMLElement>{id: 'domEl1'};
				const transitionInstance = createTransition({
					props: {
						animatedOnInit,
						animated,
						visible: false,
						onVisibleChange,
						transition,
					},
				});
				events.push('afterCreateTransition');
				const unsubscribeState = transitionInstance.state$.subscribe((state) => {
					events.push(`state = ${JSON.stringify(state)}`);
				});
				events.push('beforeCallingDirective1');
				let directiveInstance = transitionInstance.directives.directive(element, {});
				events.push('afterCallingDirective1');
				await promiseFromStore(transitionInstance.stores.hidden$).promise;
				events.push('beforeDestroyingDirective1');
				directiveInstance?.destroy?.();
				events.push('afterDestroyingDirective1');
				element = <HTMLElement>{id: 'domEl2'};
				events.push('beforeCallingDirective2');
				directiveInstance = transitionInstance.directives.directive(element, {visible: true});
				events.push('afterCallingDirective2');
				await promiseFromStore(transitionInstance.stores.shown$).promise;
				events.push('beforeDestroyingDirective2');
				directiveInstance?.destroy?.();
				events.push('afterDestroyingDirective2');
				unsubscribeState();
				expect(events).toEqual([
					'afterCreateTransition',
					`state = ${JSON.stringify({visible: false, element: null, elementPresent: false, transitioning: false, shown: false, hidden: true})}`,
					'beforeCallingDirective1',
					'transitionStart:1:domEl1:hide:anim=false:ctxt=1',
					`state = ${JSON.stringify({
						visible: false,
						element: {id: 'domEl1'},
						elementPresent: true,
						transitioning: true,
						shown: false,
						hidden: false,
					})}`,
					'afterCallingDirective1',
					'transitionEnd:1:aborted=false',
					`state = ${JSON.stringify({
						visible: false,
						element: {id: 'domEl1'},
						elementPresent: true,
						transitioning: false,
						shown: false,
						hidden: true,
					})}`,
					'beforeDestroyingDirective1',
					`state = ${JSON.stringify({visible: false, element: null, elementPresent: false, transitioning: false, shown: false, hidden: true})}`,
					'afterDestroyingDirective1',
					'beforeCallingDirective2',
					'onVisibleChange:true',
					`transitionStart:2:domEl2:show:anim=${animated}:ctxt=2`,
					`state = ${JSON.stringify({
						visible: true,
						element: {id: 'domEl2'},
						elementPresent: true,
						transitioning: true,
						shown: false,
						hidden: false,
					})}`,
					'afterCallingDirective2',
					'transitionEnd:2:aborted=false',
					`state = ${JSON.stringify({
						visible: true,
						element: {id: 'domEl2'},
						elementPresent: true,
						transitioning: false,
						shown: true,
						hidden: false,
					})}`,
					'beforeDestroyingDirective2',
					`state = ${JSON.stringify({visible: true, element: null, elementPresent: false, transitioning: false, shown: false, hidden: false})}`,
					'afterDestroyingDirective2',
				]);
			});
		}
	}
});
