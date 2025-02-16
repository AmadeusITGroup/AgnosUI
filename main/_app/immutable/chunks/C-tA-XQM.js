const e=`export * from '@agnos-ui/core/types';
import type { Snippet } from 'svelte';
/**
 * Represents the content of a slot, which can either be a \`string\` or a \`Snippet\`.
 *
 * @template Props - The type of the properties that the Snippet can accept.
 * @see {@link https://svelte.dev/docs/svelte/snippet}
 */
export type SlotContent<Props extends object = object> = string | Snippet<[Props]>;
`;export{e as default};
