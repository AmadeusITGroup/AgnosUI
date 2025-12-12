import {afterEach, beforeEach, describe, expect, test} from 'vitest';
import type {Directive} from '../types';
import type {MousePosition} from './mousedownPosition';
import {createMousedownPositionDirective} from './mousedownPosition';

describe('createMousedownPositionDirective', () => {
	let element: HTMLElement;
	let directiveInstance: ReturnType<Directive>;

	const positions: MousePosition[] = [];

	function dispatchEvent(node: HTMLElement, type: string, clientX: number, clientY: number) {
		node.dispatchEvent(
			new MouseEvent(type, {
				clientX,
				clientY,
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
		const directive = createMousedownPositionDirective({
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

	test('do not follow the position before the mouse down', () => {
		dispatchEvent(element, 'mousemove', 50, 50);
		dispatchEvent(document.body, 'mousemove', 200, 200);
		dispatchEvent(document.body, 'mouseup', 300, 300);

		expect(positions).toMatchInlineSnapshot(`[]`);
	});

	test('follow the position after the mouse down', () => {
		dispatchEvent(element, 'mousedown', 100, 100);
		dispatchEvent(document.body, 'mousemove', 200, 200);
		dispatchEvent(document.body, 'mouseup', 300, 300);

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

	test('do not follow the position after the mouse up', () => {
		dispatchEvent(element, 'mousedown', 100, 100);
		dispatchEvent(document.body, 'mouseup', 100, 100);
		dispatchEvent(document.body, 'mousemove', 200, 200);

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
