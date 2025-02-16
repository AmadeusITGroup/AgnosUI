const e=`import type { SelectApi, SelectProps } from './select.gen';
import { type Ref } from 'react';
/**
 * A generic Select component that provides a customizable dropdown selection interface.
 *
 * @template Item - The type of the items in the selection.
 * @param props - The properties for the Select component.
 * @returns The rendered Select component.
 *
 * @remarks
 * This component uses a widget context to manage its state and directives. It supports
 * custom badge labels and item labels through the widget configuration.
 */
export declare function Select<Item>(props: Partial<SelectProps<Item>> & {
    ref?: Ref<SelectApi<Item>>;
}): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
