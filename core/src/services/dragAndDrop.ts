import type {ReadableSignal, Writable} from '@amadeus-it-group/tansu';
import {asReadable, writable} from '@amadeus-it-group/tansu';
import type {Directive, SSRHTMLElement} from '../types';
import {browserDirective} from '../utils/directive';

/**
 * Represents a manager for drag and drop operations.
 * @template T - Type of the arguments to be passed to the handlers.
 */
export type DragAndDropManager<T = any> = {
	/**
	 * The directive to make an element draggable.
	 */
	draggableDirective: Directive<DragAndDropConfig<T>, SSRHTMLElement>;
	/**
	 * HTMLElement reference to currently dragged item.
	 */
	draggableItem: ReadableSignal<HTMLElement | undefined>;
	/**
	 * Custom user context for the drag operation.
	 */
	dragContext: Writable<T | undefined>;
};

/**
 * Configuration for drag and drop operations.
 * @template T - Type of the arguments to be passed to the handlers.
 */
export interface DragAndDropConfig<T = any> {
	/**
	 * Custom handler for the `dragstart` event.
	 * @param this default parameter for the event handler
	 * @param event Drag event object.
	 * @returns void
	 *
	 * @remarks To override the behavior follow the standard way: (event: DragEvent) => void
	 */
	dragStartHandler: (this: HTMLElement, event: DragEvent) => void;
	/**
	 * Custom handler for the `drop` event.
	 * @param this default parameter for the event handler
	 * @param event Drag event object.
	 * @returns void
	 *
	 * @remarks To override the behavior follow the standard way: (event: DragEvent) => void
	 */
	dropHandler: (this: HTMLElement, event: DragEvent) => void;
	/**
	 * Custom handler for the `dragEnter` event.
	 * @param this default parameter for the event handler
	 * @param event Drag event object.
	 * @returns void
	 *
	 * @remarks To override the behavior follow the standard way: (event: DragEvent) => void
	 */
	dragEnterHandler: (this: HTMLElement, event: DragEvent) => void;
	/**
	 * Custom handler for the `dragEnd` event.
	 * @param this default parameter for the event handler
	 * @param event Drag event object.
	 * @returns void
	 *
	 * @remarks To override the behavior follow the standard way: (event: DragEvent) => void
	 */
	dragEndHandler: (this: HTMLElement, event: DragEvent) => void;
	/**
	 * Custom handler for the `dragLeave` event.
	 * @param this default parameter for the event handler
	 * @param event Drag event object.
	 * @returns void
	 *
	 * @remarks To override the behavior follow the standard way: (event: DragEvent) => void
	 */
	dragLeaveHandler: (this: HTMLElement, event: DragEvent) => void;
	/**
	 * Custom handler for the `dragOver` event.
	 * @param this default parameter for the event handler
	 * @param event Drag event object.
	 * @returns void
	 *
	 * @remarks To override the behavior follow the standard way: (event: DragEvent) => void
	 * If you want to override `dragOver` you need to call the `event.preventDefault();` as
	 * by default dragOver prevents `drop` event to be fired by setting `dropEffect` to 'none'
	 */
	dragOverHandler: (this: HTMLElement, event: DragEvent) => void;
	/**
	 * Additional context to be passed to the handlers.
	 */
	context?: T;
}

/**
 * Creates a manager for drag and drop operations.
 * @returns The drag and drop manager.
 */
export const createDragAndDropManager = <T>(): DragAndDropManager<T> => {
	const currentDraggedItem = writable<HTMLElement | undefined>(undefined);
	const dragContext = writable<T | undefined>(undefined);

	const directive = browserDirective((draggableItemElement: HTMLElement, config: DragAndDropConfig<T>) => {
		const destroy = () => {
			currentDraggedItem.set(undefined);
			// remove the handlers
			draggableItemElement.removeEventListener('dragstart', config.dragStartHandler);
			draggableItemElement.removeEventListener('dragend', config.dragEndHandler);
			draggableItemElement.removeEventListener('dragenter', config.dragEnterHandler);
			draggableItemElement.removeEventListener('dragleave', config.dragLeaveHandler);
			draggableItemElement.removeEventListener('dragover', config.dragOverHandler);
			draggableItemElement.removeEventListener('drop', config.dropHandler);
			// remove the draggable attribute
			draggableItemElement.removeAttribute('draggable');
		};
		currentDraggedItem.set(draggableItemElement);
		draggableItemElement.draggable = true;
		// TODO: customize the cursor in the context ?
		draggableItemElement.style.cursor = 'move';

		// add the handler as a configuration for the service
		draggableItemElement.addEventListener('dragstart', config.dragStartHandler);
		draggableItemElement.addEventListener('dragend', config.dragEndHandler);
		draggableItemElement.addEventListener('dragenter', config.dragEnterHandler);
		draggableItemElement.addEventListener('dragleave', config.dragLeaveHandler);
		draggableItemElement.addEventListener('dragover', config.dragOverHandler);
		draggableItemElement.addEventListener('drop', config.dropHandler);

		return {
			destroy,
		};
	});

	return {
		draggableDirective: directive,
		draggableItem: asReadable(currentDraggedItem),
		dragContext,
	};
};
