export * from '@agnos-ui/core/types';

import type {Snippet} from 'svelte';

/**
 * Represents the content of a slot, which can either be a string or a Snippet.
 *
 * @template Props - The type of the properties that the Snippet can accept.
 */
export type SlotContent<Props extends object = object> = string | Snippet<[Props]>;
