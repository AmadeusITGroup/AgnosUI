const e=`import type { Directive, WidgetFactory } from '../../types';
import { type Widget } from '../../types';
import type { WidgetsCommonPropsAndState } from '../commonProps';
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
export interface NormalizedTreeItem extends TreeItem {
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
}
interface TreeCommonPropsAndState extends WidgetsCommonPropsAndState {
}
/**
 * Interface representing the properties for the Tree component.
 */
export interface TreeProps extends TreeCommonPropsAndState {
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
}
/**
 * Represents the state of a Tree component.
 */
export interface TreeState extends TreeCommonPropsAndState {
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
/**
 * Represents a Tree widget component.
 */
export type TreeWidget = Widget<TreeProps, TreeState, TreeApi, TreeDirectives>;
/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
export declare function getTreeDefaultConfig(): TreeProps;
/**
 * Create a tree widget with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
export declare const createTree: WidgetFactory<TreeWidget>;
export {};
`;export{e as default};
