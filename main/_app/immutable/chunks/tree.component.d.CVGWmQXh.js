const e=`import type { SlotContent } from '@agnos-ui/angular-headless';
import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import { EventEmitter, TemplateRef } from '@angular/core';
import type { TreeContext, TreeItem, TreeSlotItemContext, TreeWidget } from './tree.gen';
import * as i0 from "@angular/core";
/**
 * Directive to provide a template reference for tree structure.
 *
 * This directive uses a template reference to render the {@link TreeContext}.
 */
export declare class TreeStructureDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeStructureDirective, context: unknown): context is TreeContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeStructureDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeStructureDirective, "ng-template[auTreeStructure]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree structure.
 */
export declare const treeDefaultSlotStructure: SlotContent<TreeContext>;
/**
 * Directive to provide a template reference for tree item toggle.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
export declare class TreeItemToggleDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeItemToggleDirective, context: unknown): context is TreeSlotItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeItemToggleDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeItemToggleDirective, "ng-template[auTreeItemToggle]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree item toggle.
 */
export declare const treeDefaultItemToggle: SlotContent<TreeSlotItemContext>;
/**
 * Directive to provide a template reference for tree item content.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
export declare class TreeItemContentDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeItemContentDirective, context: unknown): context is TreeSlotItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeItemContentDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeItemContentDirective, "ng-template[auTreeItemContent]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree item.
 */
export declare const treeDefaultSlotItemContent: SlotContent<TreeSlotItemContext>;
/**
 * Directive to provide a template reference for tree item.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
export declare class TreeItemDirective {
    templateRef: TemplateRef<any>;
    static ngTemplateContextGuard(_dir: TreeItemDirective, context: unknown): context is TreeSlotItemContext;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeItemDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TreeItemDirective, "ng-template[auTreeItem]", never, {}, {}, never, never, true, never>;
}
/**
 * A constant representing the default slot for tree item.
 */
export declare const treeDefaultSlotItem: SlotContent<TreeSlotItemContext>;
/**
 * TreeComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable tree widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
export declare class TreeComponent extends BaseWidgetDirective<TreeWidget> {
    constructor();
    /**
     * Optional accessibility label for the tree if there is no explicit label
     *
     * @defaultValue \`''\`
     */
    ariaLabel: string | undefined;
    /**
     * Array of the tree nodes to display
     *
     * @defaultValue \`[]\`
     */
    nodes: TreeItem[] | undefined;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
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
    navSelector: ((node: HTMLElement) => NodeListOf<HTMLButtonElement>) | undefined;
    /**
     * Return the value for the 'aria-label' attribute of the toggle
     * @param label - tree item label
     *
     * @defaultValue
     * \`\`\`ts
     * (label: string) => \`Toggle \${label}\`
     * \`\`\`
     */
    ariaLabelToggleFn: ((label: string) => string) | undefined;
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
    expandToggle: EventEmitter<TreeItem>;
    /**
     * Slot to change the default tree item content
     */
    item: SlotContent<TreeSlotItemContext>;
    slotItemContentFromContent: TreeItemContentDirective | undefined;
    /**
     * Slot to change the default display of the tree
     */
    structure: SlotContent<TreeContext>;
    slotStructureFromContent: TreeStructureDirective | undefined;
    /**
     * Slot to change the default tree item toggle
     */
    toggle: SlotContent<TreeSlotItemContext>;
    slotItemToggleFromContent: TreeItemToggleDirective | undefined;
    /**
     * Slot to change the default tree item
     */
    root: SlotContent<TreeSlotItemContext>;
    slotItemFromContent: TreeItemDirective | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<TreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TreeComponent, "[auTree]", never, { "ariaLabel": { "alias": "auAriaLabel"; "required": false; }; "nodes": { "alias": "auNodes"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "navSelector": { "alias": "auNavSelector"; "required": false; }; "ariaLabelToggleFn": { "alias": "auAriaLabelToggleFn"; "required": false; }; "item": { "alias": "auItemContent"; "required": false; }; "structure": { "alias": "auStructure"; "required": false; }; "toggle": { "alias": "auToggle"; "required": false; }; "root": { "alias": "auItem"; "required": false; }; }, { "expandToggle": "auExpandToggle"; }, ["slotItemContentFromContent", "slotStructureFromContent", "slotItemToggleFromContent", "slotItemFromContent"], never, true, never>;
}
`;export{e as default};
