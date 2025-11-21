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
export interface MousePosition {
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
export interface MousedownPositionProps {
	/**
	 * Callback function invoked when the mouse moves after a mousedown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMoveStart?: (position: MousePosition) => void;

	/**
	 * Callback function invoked when the mouse moves after a mousedown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMove?: (position: MousePosition) => void;

	/**
	 * Callback function invoked when the mouse moves after a mousedown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMoveEnd?: (position: MousePosition) => void;
}

/**
 * Creates a directive for tracking mouse position during drag operations.
 *
 * This function sets up event listeners that track mouse movements from an initial mousedown event
 * through mousemove and mouseup events. It provides a directive that can be attached to DOM elements
 * to enable drag tracking functionality.
 *
 * @param options - Configuration options for the mousedown position tracker.
 * @param options.onMoveStart - Callback function invoked when the move starts (mousedown).
 * @param options.onMove - Callback function invoked when the mouse moves during a drag operation.
 * @param options.onMoveEnd - Callback function invoked when the move ends (mouseup).
 *
 * @returns The mousedownPositionDirective that can be applied to elements.
 *
 * @example
 * ```typescript
 * const mousedownPositionDirective = createMousedownPosition({
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
export function createMousedownPositionDirective({onMoveStart, onMove, onMoveEnd}: MousedownPositionProps = {}): Directive {
	const mousedownPositionDirective: Directive = browserDirective((element) => {
		let removeMouseMoveEvent = noop;
		let removeMouseUpEvent = noop;

		let position: MousePosition = {xOrigin: 0, yOrigin: 0, dx: 0, dy: 0};
		function assignPosition(e: MouseEvent) {
			return Object.assign(position, {
				dx: e.clientX - position.xOrigin,
				dy: e.clientY - position.yOrigin,
			});
		}

		const removeMouseDownEvent = addEvent(element, 'mousedown', (e) => {
			position = {xOrigin: e.clientX, yOrigin: e.clientY, dx: 0, dy: 0};
			onMoveStart?.(position);

			removeMouseMoveEvent();
			removeMouseMoveEvent = addEvent(document, 'mousemove', (e) => {
				e.preventDefault(); // Prevent text selection
				onMove?.(assignPosition(e));
			});

			removeMouseUpEvent();

			removeMouseUpEvent = addEvent(document, 'mouseup', (e) => {
				removeMouseMoveEvent();
				removeMouseUpEvent();

				onMoveEnd?.(assignPosition(e));
			});
		});

		return {
			destroy() {
				removeMouseDownEvent();
				removeMouseMoveEvent();
				removeMouseUpEvent();
			},
		};
	});

	return mousedownPositionDirective;
}
