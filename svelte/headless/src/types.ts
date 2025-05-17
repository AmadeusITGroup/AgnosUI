export * from '@agnos-ui/core/types';

import type {Widget, WidgetState, Directive} from '@agnos-ui/core/types';
import type {Snippet} from 'svelte';
import type {Attachment} from 'svelte/attachments';

/**
 * Represents the content of a slot, which can either be a `string` or a `Snippet`.
 *
 * @template Props - The type of the properties that the Snippet can accept.
 * @see {@link https://svelte.dev/docs/svelte/snippet}
 */
export type SlotContent<Props extends object = object> = string | Snippet<[Props]>;

/**
 * Represents the context for a widget slot, providing access to the widget and its state.
 *
 * @template W - The type of the widget.
 */
export interface WidgetSlotContext<W extends Widget> extends Pick<W, 'api'> {
	/**
	 * the state of the widget
	 */
	state: WidgetState<W>;
	/**
	 * the attachments of the widget
	 */
	attachments: {
		[K in keyof W['directives']]: W['directives'][K] extends Directive<infer U extends object>
			? (params: U) => Attachment<HTMLElement>
			: () => Attachment<HTMLElement>;
	};
}
