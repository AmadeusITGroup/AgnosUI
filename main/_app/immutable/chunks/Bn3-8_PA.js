const e=`import type { TreeContext, TreeProps, TreeSlotItemContext } from './tree.gen';
/**
 * A functional component that renders a toggle element with a directive applied to it.
 * The directive is provided through the \`slotContext\` parameter.
 *
 * @param slotContext - The context object containing the directives and item the toggle.
 * @returns A toggle element with the applied directive.
 */
export declare const DefaultTreeSlotItemToggle: (slotContext: TreeSlotItemContext) => import("react/jsx-runtime").JSX.Element;
/**
 * A functional component that renders a tree item content element.
 *
 * @param slotContext - The context object containing the item content for display.
 * @returns A tree item element.
 */
export declare const DefaultTreeSlotItemContent: (slotContext: TreeSlotItemContext) => import("react/jsx-runtime").JSX.Element;
/**
 * A functional component that renders a tree item element with a directive applied to it.
 * The directive is provided through the \`slotContext\` parameter.
 *
 * @param slotContext - The context object containing the directives and item for the tree item element.
 * @returns A tree root element with the applied directive.
 */
export declare const DefaultTreeSlotItem: (slotContext: TreeSlotItemContext) => import("react/jsx-runtime").JSX.Element;
/**
 * A functional component that renders a tree structure with a directive applied to it.
 * The directive is provided through the \`slotContext\` parameter.
 *
 * @param slotContext - The context object containing the directives and items for the tree display.
 * @returns A tree structure with the applied directive.
 */
export declare const DefaultTreeSlotStructure: (slotContext: TreeContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Tree component that integrates with a widget context and renders a slot structure.
 *
 * @param props - The properties for the Tree component.
 * @returns The rendered Tree component.
 *
 * The Tree component uses the {@link useWidgetWithConfig} hook to create a widget context with the provided
 * configuration. It renders the slot content using the \`Slot\` component.
 */
export declare function Tree(props: Partial<TreeProps>): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
