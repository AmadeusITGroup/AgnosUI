import type {Directive} from '../types';
import {browserDirective} from '../utils/directive';
import {noop} from '../utils/func';
import {addEvent} from '../utils/internal/dom';

/**
 * Represents the position of the mouse during a mousedown event.
 * Typically used to capture the x and y coordinates of the mouse
 * when the user presses a mouse button.
 *
 */
export interface PointerPosition {
	/**
	 * The initial X coordinate where the mouse button was pressed down.
	 */
	xOrigin: number;

	/**
	 * The initial Y coordinate where the mouse button was pressed down.
	 */
	yOrigin: number;

	/**
	 * The horizontal displacement (delta X) from the origin point.
	 * Represents how far the mouse has moved horizontally since mousedown.
	 */
	dx: number;

	/**
	 * The vertical displacement (delta X) from the origin point.
	 * Represents how far the mouse has moved vertically since mousedown.
	 */
	dy: number;
}

/**
 * Configuration options for tracking mouse position after a mousedown event.
 */
export interface PointerdownPositionProps {
	/**
	 * Callback function invoked when the mouse moves after a mousedown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMoveStart?: (position: PointerPosition) => void;

	/**
	 * Callback function invoked when the mouse moves after a mousedown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMove?: (position: PointerPosition) => void;

	/**
	 * Callback function invoked when the mouse moves after a mousedown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMoveEnd?: (position: PointerPosition) => void;
}

/**
 * Creates a directive for tracking mouse position during drag operations.
 *
 * This function sets up event listeners that track mouse movements from an initial mousedown event
 * through mousemove and mouseup events. It provides a directive that can be attached to DOM elements
 * to enable drag tracking functionality.
 *
 * @param options - Configuration options for the pointerdown position tracker.
 * @param options.onMoveStart - Callback function invoked when the move starts.
 * @param options.onMove - Callback function invoked when the mouse moves during a drag operation.
 * @param options.onMoveEnd - Callback function invoked when the move ends.
 *
 * @returns The mousedownPositionDirective that can be applied to elements.
 *
 * @example
 * ```typescript
 * const pointerPositionDirective = createPointerdownPositionDirective({
 *   onMoveStart: (position) => {
 *     console.log(`Drag started at (${position.xOrigin}, ${position.yOrigin})`);
 *   },
 *   onMove: (position) => {
 *     console.log(`Dragging: dx=${position.dx}, dy=${position.dy}`);
 *   },
 *   onMoveEnd: (position) => {
 *     console.log(`Drag ended at (${position.xOrigin + position.dx}, ${position.yOrigin + position.dy})`);
 *   }
 * });
 * ```
 */
export function createPointerdownPositionDirective({onMoveStart, onMove, onMoveEnd}: PointerdownPositionProps = {}): Directive {
	const pointerdownPositionDirective: Directive = browserDirective((element) => {
		let removePointerMoveEvent = noop;
		let removePointerUpEvent = noop;
		let removePointerCancelEvent = noop;

		let position: PointerPosition = {xOrigin: 0, yOrigin: 0, dx: 0, dy: 0};
		function assignPosition(e: MouseEvent) {
			return Object.assign(position, {
				dx: e.clientX - position.xOrigin,
				dy: e.clientY - position.yOrigin,
			});
		}

		const removePointerDownEvent = addEvent(element, 'pointerdown', (e: PointerEvent) => {
			e.preventDefault();

			(e.target as HTMLElement).setPointerCapture(e.pointerId);

			position = {xOrigin: e.clientX, yOrigin: e.clientY, dx: 0, dy: 0};
			onMoveStart?.(position);

			removePointerMoveEvent = addEvent(document, 'pointermove', (e: PointerEvent) => {
				e.preventDefault();
				onMove?.(assignPosition(e));
			});

			function moveEnd(e: PointerEvent) {
				e.preventDefault();
				removePointerMoveEvent();
				removePointerUpEvent();
				removePointerCancelEvent();
				onMoveEnd?.(assignPosition(e));
			}

			removePointerUpEvent = addEvent(document, 'pointerup', moveEnd);
			removePointerCancelEvent = addEvent(document, 'pointercancel', moveEnd);
		});
		return {
			destroy() {
				removePointerDownEvent();
				removePointerMoveEvent();
				removePointerUpEvent();
				removePointerCancelEvent();
			},
		};
	});

	return pointerdownPositionDirective;
}
