const e=`import type { SelectProps } from './select.gen';
/**
 * A generic Select component that provides a customizable dropdown selection interface.
 *
 * @template Item - The type of the items in the selection.
 * @param {Partial<SelectProps<Item>>} props - The properties for the Select component.
 * @returns {JSX.Element} The rendered Select component.
 *
 * @remarks
 * This component uses a widget context to manage its state and directives. It supports
 * custom badge labels and item labels through the widget configuration.
 *
 * @component
 * @param {Partial<SelectProps<Item>>} props - The properties for the Select component.
 * @returns {JSX.Element} The rendered Select component.
 */
export declare function Select<Item>(props: Partial<SelectProps<Item>>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
