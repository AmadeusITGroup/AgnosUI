import {afterEach, beforeEach, describe, expect, test} from 'vitest';
import type {Directive} from '../types';
import {createPointerdownPositionDirective} from './pointerdownPosition';

describe('createPointerdownPositionDirective', () => {
	let element: HTMLElement;
	let directiveInstance: ReturnType<Directive>;

	const events: {type: 'start' | 'end' | 'move'; x?: number; y?: number}[] = [];

	function dispatchEvent(node: HTMLElement, type: string, clientX: number, clientY: number) {
		node.dispatchEvent(
			new PointerEvent(type, {
				pointerId: 1,
				clientX,
				clientY,
				pointerType: 'mouse',
				isPrimary: true,
				bubbles: true,
				cancelable: true,
			}),
		);
	}

	beforeEach(() => {
		events.length = 0;
		element = document.createElement('div');
		element.style.cssText = 'position: absolute; top: 0; left: 0; width: 100px; height: 100px;';
		document.body.appendChild(element);
		const directive = createPointerdownPositionDirective((event) => {
			events.push({type: 'start', x: event.clientX, y: event.clientY});
			return {
				onMove(event) {
					events.push({type: 'move', x: event.clientX, y: event.clientY});
				},
				onEnd(event) {
					events.push({type: 'end', x: event?.clientX, y: event?.clientY});
				},
			};
		});
		directiveInstance = directive(element);
	});

	afterEach(() => {
		directiveInstance?.destroy?.();
		document.body.innerHTML = '';
	});

	test('do not follow the position before the pointer down', () => {
		dispatchEvent(element, 'pointermove', 50, 50);
		dispatchEvent(element, 'pointermove', 200, 200);
		dispatchEvent(element, 'pointerup', 300, 300);

		expect(events).toMatchInlineSnapshot(`[]`);
	});

	test('follow the position after the pointer down', () => {
		dispatchEvent(element, 'pointerdown', 100, 100);
		dispatchEvent(element, 'pointermove', 200, 200);
		dispatchEvent(element, 'pointermove', 300, 300);
		dispatchEvent(element, 'pointerup', 300, 300);

		expect(events).toMatchInlineSnapshot(`
			[
			  {
			    "type": "start",
			    "x": 100,
			    "y": 100,
			  },
			  {
			    "type": "move",
			    "x": 200,
			    "y": 200,
			  },
			  {
			    "type": "move",
			    "x": 300,
			    "y": 300,
			  },
			  {
			    "type": "end",
			    "x": 300,
			    "y": 300,
			  },
			]
		`);
	});

	test('do not follow the position after the pointer up', () => {
		dispatchEvent(element, 'pointerdown', 100, 100);
		dispatchEvent(element, 'pointerup', 100, 100);
		dispatchEvent(element, 'pointermove', 200, 200);

		expect(events).toMatchInlineSnapshot(`
			[
			  {
			    "type": "start",
			    "x": 100,
			    "y": 100,
			  },
			  {
			    "type": "end",
			    "x": 100,
			    "y": 100,
			  },
			]
		`);
	});
});
