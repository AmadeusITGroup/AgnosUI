export * from '@agnos-ui/core/types';

import type {SlotContent as CoreSlotContent} from '@agnos-ui/core/types';

/**
 * Represents the content that can be rendered within a slot.
 *
 * @template Props - The type of the props that can be passed to the slot content.
 *
 * This type can be one of the following:
 * - A nullish value, i.e. `null` or `undefined`
 * - A static `string`
 * - A function that takes `props` of type `Props` and returns a `React.ReactNode`.
 * - A `React.ComponentType<Props>`, which is a React component that accepts `Props`.
 * - A `React.ReactNode`, which is any renderable React node.
 */
export type SlotContent<Props extends object = object> =
	| CoreSlotContent<Props>
	| ((props: Props) => React.ReactNode)
	| React.ComponentType<Props>
	| React.ReactNode;
