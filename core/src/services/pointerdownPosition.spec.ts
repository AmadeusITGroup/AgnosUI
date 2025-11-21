import {afterEach, beforeEach, describe, expect, test} from 'vitest';
import type {Directive} from '../types';
import type {PointerPosition} from './pointerdownPosition';
import {createPointerdownPositionDirective} from './pointerdownPosition';

describe('createPointerdownPositionDirective', () => {
	let element: HTMLElement;
	let directiveInstance: ReturnType<Directive>;

	const positions: PointerPosition[] = [];

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
		positions.length = 0;
		element = document.createElement('div');
		element.style.cssText = 'position: absolute; top: 0; left: 0; width: 100px; height: 100px;';
		document.body.appendChild(element);
		const directive = createPointerdownPositionDirective({
			onMoveStart(position) {
				positions.push({...position});
			},
			onMove(position) {
				positions.push({...position});
			},
			onMoveEnd(position) {
				positions.push({...position});
			},
		});
		directiveInstance = directive(element);
	});

	afterEach(() => {
		directiveInstance?.destroy?.();
		document.body.innerHTML = '';
	});

	test('do not follow the position before the pointer down', () => {
		dispatchEvent(element, 'pointermove', 50, 50);
		dispatchEvent(document.body, 'pointermove', 200, 200);
		dispatchEvent(document.body, 'pointerup', 300, 300);

		expect(positions).toMatchInlineSnapshot(`[]`);
	});

	test('follow the position after the pointer down', () => {
		dispatchEvent(element, 'pointerdown', 100, 100);
		dispatchEvent(document.body, 'pointermove', 200, 200);
		dispatchEvent(document.body, 'pointerup', 300, 300);

		expect(positions).toMatchInlineSnapshot(`
          [
            {
              "dx": 0,
              "dy": 0,
              "xOrigin": 100,
              "yOrigin": 100,
            },
            {
              "dx": 100,
              "dy": 100,
              "xOrigin": 100,
              "yOrigin": 100,
            },
            {
              "dx": 200,
              "dy": 200,
              "xOrigin": 100,
              "yOrigin": 100,
            },
          ]
        `);
	});

	test('do not follow the position after the pointer up', () => {
		dispatchEvent(element, 'pointerdown', 100, 100);
		dispatchEvent(document.body, 'pointerup', 100, 100);
		dispatchEvent(document.body, 'pointermove', 200, 200);

		expect(positions).toMatchInlineSnapshot(`
          [
            {
              "dx": 0,
              "dy": 0,
              "xOrigin": 100,
              "yOrigin": 100,
            },
            {
              "dx": 0,
              "dy": 0,
              "xOrigin": 100,
              "yOrigin": 100,
            },
          ]
        `);
	});
});
