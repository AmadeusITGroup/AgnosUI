import type {Directive} from '../types';
import {browserDirective} from '../utils/directive';
import {noop} from '../utils/func';
import {addEvent} from '../utils/internal/dom';

/**
 * Configuration options for tracking pointer position after a pointerdown event.
 */
export interface PointerPositionHandlers {
	/**
	 * Callback function invoked when the mouse moves after a pointerdown event.
	 * @param position - The current mouse position information including origin and current coordinates.
	 */
	onMove?: (event: PointerEvent) => void;

	/**
	 * Callback function invoked when the move ends after a pointerdown event.
	 */
	onEnd?: (event?: PointerEvent) => void;
}

/**
 * Creates a directive for tracking pointer position during drag operations.
 *
 * This function sets up event listeners that track pointer movements from an initial pointerdown event
 * through pointermover and pointerup events. It provides a directive that can be attached to DOM elements
 * to enable drag tracking functionality.
 *
 * @param onStart - Callback function invoked when the pointerdown event happens.
 *
 * @returns The pointerdownPositionDirective that can be applied to elements.
 *
 * @example
 * ```typescript
 * const pointerPositionDirective = createPointerdownPositionDirective((event) => {
 *   console.log(`Drag started at (${event.clientX}, ${event.clientY})`);
 *   return {
 *     onMove: (event) => {
 *       console.log(`Dragging: ${event.clientX}, dy=${event.clientY}`);
 *     },
 *     onEnd: () => {
 *       console.log(`Drag ended`);
 *     }
 *   };
 * });
 * ```
 */
export const createPointerdownPositionDirective = <T = void>(
	onStart: (position: PointerEvent, arg: T) => PointerPositionHandlers | undefined,
): Directive<T> =>
	browserDirective((element, arg: T) => {
		let activePointerId: number | null = null;
		let activeHandlers: PointerPositionHandlers | null = null;

		let removePointerMoveEvent = noop;
		let removePointerUpEvent = noop;
		let removePointerCancelEvent = noop;

		const onMove = (e: PointerEvent) => {
			if (e.pointerId === activePointerId) {
				e.preventDefault();
				activeHandlers?.onMove?.(e);
			}
		};

		const endCurrent = (e?: PointerEvent) => {
			removePointerMoveEvent();
			removePointerUpEvent();
			removePointerCancelEvent();
			removePointerMoveEvent = noop;
			removePointerUpEvent = noop;
			removePointerCancelEvent = noop;
			const handlers = activeHandlers;
			activeHandlers = null;
			activePointerId = null;
			handlers?.onEnd?.(e);
		};

		const onEnd = (e: PointerEvent) => {
			if (e.pointerId === activePointerId) {
				e.preventDefault();
				endCurrent(e);
			}
		};

		const removePointerDownEvent = addEvent(element, 'pointerdown', (e: PointerEvent) => {
			if (activeHandlers) {
				endCurrent();
			}
			const pointerId = e.pointerId;
			const startResult = onStart(e, arg);
			if (startResult) {
				e.preventDefault();
				activePointerId = pointerId;
				activeHandlers = startResult;
				// notes:
				// - ideally we should add the event handler only on element and use element.setPointerCapture(pointer)
				// however, this is not compatible with the multi-handles slider because handles can be reordered in the DOM
				// (as they are sorted by value), which cancels the pointer capture
				// - using setPointerCapture on some other element prevents the right cursor (that should be defined by CSS on
				// element) from being used
				// - when setPointerCapture is not used, adding the event on the document (rather than document.body) allows us
				// to receive events even when the mouse is moved outside the viewport
				removePointerMoveEvent = addEvent(document, 'pointermove', onMove);
				removePointerUpEvent = addEvent(document, 'pointerup', onEnd);
				removePointerCancelEvent = addEvent(document, 'pointercancel', onEnd);
			}
		});

		return {
			update(newArg) {
				arg = newArg;
			},
			destroy() {
				removePointerDownEvent();
				endCurrent();
			},
		};
	});
