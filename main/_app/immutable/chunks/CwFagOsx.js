const e=`import type { WidgetSlotContext, SlotContent, Widget, WidgetFactory, Directive } from '@agnos-ui/angular-headless';
/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
declare const export_getTreeDefaultConfig: () => TreeProps;
export { export_getTreeDefaultConfig as getTreeDefaultConfig };
/**
 * Represents the context for a Tree widget.
 * This interface is an alias for \`WidgetSlotContext<TreeWidget>\`.
 */
export type TreeContext = WidgetSlotContext<TreeWidget>;
/**
 * Represents the context for a tree item, extending the base \`TreeContext\`
 * with an additional \`item\` property.
 */
export type TreeSlotItemContext = TreeContext & {
    item: NormalizedTreeItem;
};
/**
 * Represents the state of a Tree component.
 */
export interface TreeState {
    /**
     * Array of normalized tree nodes
     */
    normalizedNodes: NormalizedTreeItem[];
    /**
     * Getter of expanded state for each tree node
     */
    expandedMap: {
        get(item: NormalizedTreeItem): boolean | undefined;
    };
    /**
     * Optional accessibility label for the tree if there is no explicit label
     *
     * @defaultValue \`''\`
     */
    ariaLabel?: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Slot to change the default display of the tree
     */
    structure: SlotContent<TreeContext>;
    /**
     * Slot to change the default tree item
     */
    item: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item content
     */
    itemContent: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item toggle
     */
    itemToggle: SlotContent<TreeSlotItemContext>;
}
/**
 * Represents the properties for the Tree component.
 */
export interface TreeProps {
    /**
     * Array of the tree nodes to display
     *
     * @defaultValue \`[]\`
     */
    nodes: TreeItem[];
    /**
     * An event emitted when the user toggles the expand of the TreeItem.
     *
     * Event payload is equal to the TreeItem clicked.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    onExpandToggle: (node: NormalizedTreeItem) => void;
    /**
     * Retrieves expand items of the TreeItem
     *
     * @param node - HTML element that is representing the expand item
     *
     * @defaultValue
     * \`\`\`ts
     * (node: HTMLElement) => node.querySelectorAll('button')
     * \`\`\`
     */
    navSelector(node: HTMLElement): NodeListOf<HTMLElement>;
    /**
     * Return the value for the 'aria-label' attribute of the toggle
     * @param label - tree item label
     *
     * @defaultValue
     * \`\`\`ts
     * (label: string) => \`Toggle \${label}\`
     * \`\`\`
     */
    ariaLabelToggleFn: (label: string) => string;
    /**
     * Optional accessibility label for the tree if there is no explicit label
     *
     * @defaultValue \`''\`
     */
    ariaLabel?: string;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string;
    /**
     * Slot to change the default display of the tree
     */
    structure: SlotContent<TreeContext>;
    /**
     * Slot to change the default tree item
     */
    item: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item content
     */
    itemContent: SlotContent<TreeSlotItemContext>;
    /**
     * Slot to change the default tree item toggle
     */
    itemToggle: SlotContent<TreeSlotItemContext>;
}
/**
 * Represents a Tree widget component.
 */
export type TreeWidget = Widget<TreeProps, TreeState, TreeApi, TreeDirectives>;
/**
 * Create a Tree with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
declare const export_createTree: WidgetFactory<TreeWidget>;
export { export_createTree as createTree };
/**
 * Represents a tree item component.
 */
export interface TreeItem {
    /**
     * Optional accessibility label for the node
     */
    ariaLabel?: string;
    /**
     * Optional array of children nodes
     */
    children?: TreeItem[];
    /**
     * If \`true\` the node is expanded
     */
    isExpanded?: boolean;
    /**
     * String title of the node
     */
    label: string;
}
/**
 * Normalized TreeItem object
 */
export interface NormalizedTreeItem {
    /**
     * Accessibility label for the node
     */
    ariaLabel: string;
    /**
     * Level in the hierarchy, starts with 0 for a root node
     */
    level: number;
    /**
     * An array of children nodes
     */
    children: NormalizedTreeItem[];
    /**
     * If \`true\` the node is expanded
     */
    isExpanded?: boolean;
    /**
     * String title of the node
     */
    label: string;
}
/**
 * Interface representing the API for a Tree component.
 */
export interface TreeApi {
}
/**
 * Interface representing various directives used in the Tree component.
 */
export interface TreeDirectives {
    /**
     * Directive to attach navManager for the tree
     */
    navigationDirective: Directive;
    /**
     * Directive to handle toggle for the tree item
     */
    itemToggleDirective: Directive<{
        item: NormalizedTreeItem;
    }>;
    /**
     * Directive to handle attributes for the tree item
     */
    itemAttributesDirective: Directive<{
        item: NormalizedTreeItem;
    }>;
}
`;export{e as default};
