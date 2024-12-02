const e=`import { BaseWidgetDirective, callWidgetFactory, ComponentTemplate, SlotDirective, UseDirective } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, inject, Input, Output, TemplateRef, ViewChild, } from '@angular/core';
import { createTree } from './tree.gen';
import * as i0 from "@angular/core";
const _c0 = ["structure"];
const _c1 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, item: a3 });
function TreeDefaultStructureSlotComponent_ng_template_0_For_2_ng_template_0_Template(rf, ctx) { }
function TreeDefaultStructureSlotComponent_ng_template_0_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeDefaultStructureSlotComponent_ng_template_0_For_2_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    const state_r3 = ctx_r1.state;
    const directives_r4 = ctx_r1.directives;
    const api_r5 = ctx_r1.api;
    i0.ɵɵproperty("auSlot", state_r3.item())("auSlotProps", i0.ɵɵpureFunction4(2, _c1, state_r3, api_r5, directives_r4, node_r1));
} }
function TreeDefaultStructureSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵrepeaterCreate(1, TreeDefaultStructureSlotComponent_ng_template_0_For_2_Template, 1, 7, null, 3, i0.ɵɵcomponentInstance().trackNode, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = ctx.state;
    const directives_r4 = ctx.directives;
    i0.ɵɵclassMapInterpolate1("au-tree ", state_r3.className(), "");
    i0.ɵɵproperty("auUse", directives_r4.navigationDirective);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r3.normalizedNodes());
} }
const _c2 = ["toggle"];
const _c3 = a0 => ({ item: a0 });
const _c4 = (a0, a1) => [a0, a1];
function TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const directives_r2 = ctx_r0.directives;
    const item_r3 = ctx_r0.item;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c4, directives_r2.itemToggleDirective, i0.ɵɵpureFunction1(1, _c3, item_r3)));
} }
function TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 3);
} }
function TreeDefaultItemToggleSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_0_Template, 1, 6, "button", 2)(1, TreeDefaultItemToggleSlotComponent_ng_template_0_Conditional_1_Template, 1, 0, "span", 3);
} if (rf & 2) {
    const item_r3 = ctx.item;
    i0.ɵɵconditional(item_r3.children.length > 0 ? 0 : 1);
} }
const _c5 = ["treeItemContent"];
function TreeDefaultItemContentSlotComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function TreeDefaultItemContentSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 2);
    i0.ɵɵtemplate(1, TreeDefaultItemContentSlotComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = ctx.state;
    const directives_r2 = ctx.directives;
    const item_r3 = ctx.item;
    const api_r4 = ctx.api;
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.itemToggle())("auSlotProps", i0.ɵɵpureFunction4(3, _c1, state_r1, api_r4, directives_r2, item_r3));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
const _c6 = ["treeItem"];
function TreeDefaultItemSlotComponent_ng_template_0_ng_template_1_Template(rf, ctx) { }
function TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_ng_template_0_Template(rf, ctx) { }
function TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    const child_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const state_r3 = ctx_r1.state;
    const directives_r4 = ctx_r1.directives;
    const api_r5 = ctx_r1.api;
    i0.ɵɵproperty("auSlot", state_r3.item())("auSlotProps", i0.ɵɵpureFunction4(2, _c1, state_r3, api_r5, directives_r4, child_r1));
} }
function TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 4);
    i0.ɵɵrepeaterCreate(1, TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_For_2_Template, 1, 7, null, 3, i0.ɵɵcomponentInstance().trackNode, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().item;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(item_r6.children);
} }
function TreeDefaultItemSlotComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵtemplate(1, TreeDefaultItemSlotComponent_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3)(2, TreeDefaultItemSlotComponent_ng_template_0_Conditional_2_Template, 3, 0, "ul", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = ctx.state;
    const directives_r4 = ctx.directives;
    const item_r6 = ctx.item;
    const api_r5 = ctx.api;
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(6, _c4, directives_r4.itemAttributesDirective, i0.ɵɵpureFunction1(4, _c3, item_r6)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.itemContent())("auSlotProps", i0.ɵɵpureFunction4(9, _c1, state_r3, api_r5, directives_r4, item_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r3.expandedMap().get(item_r6) ? 2 : -1);
} }
const _c7 = ["auTree", ""];
const _c8 = (a0, a1, a2) => ({ state: a0, api: a1, directives: a2 });
function TreeComponent_ng_template_0_Template(rf, ctx) { }
/**
 * Directive to provide a template reference for tree structure.
 *
 * This directive uses a template reference to render the {@link TreeContext}.
 */
export class TreeStructureDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeStructureDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeStructureDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeStructureDirective, selectors: [["ng-template", "auTreeStructure", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeStructureDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeStructure]', standalone: true }]
    }], null, null); })();
class TreeDefaultStructureSlotComponent {
    trackNode(index, node) {
        return node.label + node.level + index;
    }
    static { this.ɵfac = function TreeDefaultStructureSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultStructureSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultStructureSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultStructureSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.structure = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["structure", ""], ["auTreeStructure", ""], ["role", "tree", 3, "auUse"], [3, "auSlot", "auSlotProps"]], template: function TreeDefaultStructureSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultStructureSlotComponent_ng_template_0_Template, 3, 4, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, TreeStructureDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultStructureSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, TreeStructureDirective, SlotDirective],
                template: \`
		<ng-template auTreeStructure #structure let-state="state" let-directives="directives" let-api="api">
			<ul role="tree" class="au-tree {{ state.className() }}" [auUse]="directives.navigationDirective">
				@for (node of state.normalizedNodes(); track trackNode($index, node)) {
					<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: node}" />
				}
			</ul>
		</ng-template>
	\`,
            }]
    }], null, { structure: [{
            type: ViewChild,
            args: ['structure', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultStructureSlotComponent, { className: "TreeDefaultStructureSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 45 }); })();
/**
 * A constant representing the default slot for tree structure.
 */
export const treeDefaultSlotStructure = new ComponentTemplate(TreeDefaultStructureSlotComponent, 'structure');
/**
 * Directive to provide a template reference for tree item toggle.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
export class TreeItemToggleDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeItemToggleDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeItemToggleDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeItemToggleDirective, selectors: [["ng-template", "auTreeItemToggle", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeItemToggleDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeItemToggle]', standalone: true }]
    }], null, null); })();
class TreeDefaultItemToggleSlotComponent {
    static { this.ɵfac = function TreeDefaultItemToggleSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultItemToggleSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultItemToggleSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultItemToggleSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c2, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.toggle = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["toggle", ""], ["auTreeItemToggle", ""], [3, "auUse"], [1, "au-tree-expand-icon-placeholder"]], template: function TreeDefaultItemToggleSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultItemToggleSlotComponent_ng_template_0_Template, 2, 1, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, TreeItemToggleDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultItemToggleSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, TreeItemToggleDirective],
                template: \`
		<ng-template auTreeItemToggle #toggle let-directives="directives" let-item="item">
			@if (item.children.length > 0) {
				<button [auUse]="[directives.itemToggleDirective, {item}]"></button>
			} @else {
				<span class="au-tree-expand-icon-placeholder"></span>
			}
		</ng-template>
	\`,
            }]
    }], null, { toggle: [{
            type: ViewChild,
            args: ['toggle', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultItemToggleSlotComponent, { className: "TreeDefaultItemToggleSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 85 }); })();
/**
 * A constant representing the default slot for tree item toggle.
 */
export const treeDefaultItemToggle = new ComponentTemplate(TreeDefaultItemToggleSlotComponent, 'toggle');
/**
 * Directive to provide a template reference for tree item content.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
export class TreeItemContentDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeItemContentDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeItemContentDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeItemContentDirective, selectors: [["ng-template", "auTreeItemContent", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeItemContentDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeItemContent]', standalone: true }]
    }], null, null); })();
class TreeDefaultItemContentSlotComponent {
    static { this.ɵfac = function TreeDefaultItemContentSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultItemContentSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultItemContentSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultItemContentSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c5, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeItemContent = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["treeItemContent", ""], ["auTreeItem", ""], [1, "au-tree-item"], [3, "auSlot", "auSlotProps"]], template: function TreeDefaultItemContentSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultItemContentSlotComponent_ng_template_0_Template, 3, 8, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultItemContentSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, TreeItemContentDirective],
                template: \`
		<ng-template auTreeItem #treeItemContent let-state="state" let-directives="directives" let-item="item" let-api="api">
			<span class="au-tree-item">
				<ng-template [auSlot]="state.itemToggle()" [auSlotProps]="{state, api, directives, item}" />
				{{ item.label }}
			</span>
		</ng-template>
	\`,
            }]
    }], null, { treeItemContent: [{
            type: ViewChild,
            args: ['treeItemContent', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultItemContentSlotComponent, { className: "TreeDefaultItemContentSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 120 }); })();
/**
 * A constant representing the default slot for tree item.
 */
export const treeDefaultSlotItemContent = new ComponentTemplate(TreeDefaultItemContentSlotComponent, 'treeItemContent');
/**
 * Directive to provide a template reference for tree item.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
export class TreeItemDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function TreeItemDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeItemDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TreeItemDirective, selectors: [["ng-template", "auTreeItem", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeItemDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auTreeItem]', standalone: true }]
    }], null, null); })();
class TreeDefaultItemSlotComponent {
    trackNode(index, node) {
        return node.label + node.level + index;
    }
    static { this.ɵfac = function TreeDefaultItemSlotComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeDefaultItemSlotComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeDefaultItemSlotComponent, selectors: [["ng-component"]], viewQuery: function TreeDefaultItemSlotComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c6, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.treeItem = _t.first);
        } }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, consts: [["treeItem", ""], ["auTreeItem", ""], [3, "auUse"], [3, "auSlot", "auSlotProps"], ["role", "group"]], template: function TreeDefaultItemSlotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeDefaultItemSlotComponent_ng_template_0_Template, 3, 14, "ng-template", 1, 0, i0.ɵɵtemplateRefExtractor);
        } }, dependencies: [UseDirective, SlotDirective, TreeItemDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeDefaultItemSlotComponent, [{
        type: Component,
        args: [{
                standalone: true,
                changeDetection: ChangeDetectionStrategy.OnPush,
                imports: [UseDirective, SlotDirective, TreeItemDirective],
                template: \`
		<ng-template auTreeItem #treeItem let-state="state" let-directives="directives" let-item="item" let-api="api">
			<li [auUse]="[directives.itemAttributesDirective, {item}]">
				<ng-template [auSlot]="state.itemContent()" [auSlotProps]="{state, api, directives, item}" />
				@if (state.expandedMap().get(item)) {
					<ul role="group">
						@for (child of item.children; track trackNode($index, child)) {
							<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: child}" />
						}
					</ul>
				}
			</li>
		</ng-template>
	\`,
            }]
    }], null, { treeItem: [{
            type: ViewChild,
            args: ['treeItem', { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeDefaultItemSlotComponent, { className: "TreeDefaultItemSlotComponent", filePath: "components/tree/tree.component.ts", lineNumber: 164 }); })();
/**
 * A constant representing the default slot for tree item.
 */
export const treeDefaultSlotItem = new ComponentTemplate(TreeDefaultItemSlotComponent, 'treeItem');
/**
 * TreeComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable tree widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
export class TreeComponent extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createTree,
            widgetName: 'tree',
            defaultConfig: {
                structure: treeDefaultSlotStructure,
                item: treeDefaultSlotItem,
                itemContent: treeDefaultSlotItemContent,
                itemToggle: treeDefaultItemToggle,
            },
            events: {
                onExpandToggle: (item) => this.expandToggle.emit(item),
            },
            slotTemplates: () => ({
                structure: this.slotStructureFromContent?.templateRef,
                item: this.slotItemFromContent?.templateRef,
                itemContent: this.slotItemContentFromContent?.templateRef,
                itemToggle: this.slotItemToggleFromContent?.templateRef,
            }),
        }));
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
        this.expandToggle = new EventEmitter();
    }
    static { this.ɵfac = function TreeComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TreeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeComponent, selectors: [["", "auTree", ""]], contentQueries: function TreeComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, TreeItemContentDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, TreeStructureDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, TreeItemToggleDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, TreeItemDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemContentFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotStructureFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemToggleFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotItemFromContent = _t.first);
        } }, inputs: { ariaLabel: [0, "auAriaLabel", "ariaLabel"], nodes: [0, "auNodes", "nodes"], className: [0, "auClassName", "className"], navSelector: [0, "auNavSelector", "navSelector"], ariaLabelToggleFn: [0, "auAriaLabelToggleFn", "ariaLabelToggleFn"], item: [0, "auItemContent", "item"], structure: [0, "auStructure", "structure"], toggle: [0, "auToggle", "toggle"], root: [0, "auItem", "root"] }, outputs: { expandToggle: "auExpandToggle" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c7, decls: 1, vars: 6, consts: [[3, "auSlot", "auSlotProps"]], template: function TreeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("auSlot", ctx.state.structure())("auSlotProps", i0.ɵɵpureFunction3(2, _c8, ctx.state, ctx.api, ctx.directives));
        } }, dependencies: [SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auTree]',
                standalone: true,
                imports: [SlotDirective],
                template: \` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" /> \`,
            }]
    }], () => [], { ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], nodes: [{
            type: Input,
            args: ['auNodes']
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], navSelector: [{
            type: Input,
            args: ['auNavSelector']
        }], ariaLabelToggleFn: [{
            type: Input,
            args: ['auAriaLabelToggleFn']
        }], expandToggle: [{
            type: Output,
            args: ['auExpandToggle']
        }], item: [{
            type: Input,
            args: ['auItemContent']
        }], slotItemContentFromContent: [{
            type: ContentChild,
            args: [TreeItemContentDirective, { static: false }]
        }], structure: [{
            type: Input,
            args: ['auStructure']
        }], slotStructureFromContent: [{
            type: ContentChild,
            args: [TreeStructureDirective, { static: false }]
        }], toggle: [{
            type: Input,
            args: ['auToggle']
        }], slotItemToggleFromContent: [{
            type: ContentChild,
            args: [TreeItemToggleDirective, { static: false }]
        }], root: [{
            type: Input,
            args: ['auItem']
        }], slotItemFromContent: [{
            type: ContentChild,
            args: [TreeItemDirective, { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeComponent, { className: "TreeComponent", filePath: "components/tree/tree.component.ts", lineNumber: 189 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEksT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7SUF1QmpDLHNIQUE0Rjs7Ozs7OztJQUF2RCxBQUF4Qix3Q0FBdUIscUZBQXFEOzs7SUFGM0YsNkJBQWlHO0lBQ2hHLCtJQUVDO0lBQ0YsaUJBQUs7Ozs7SUFKVywrREFBdUM7SUFBQyx5REFBd0M7SUFDL0YsY0FFQztJQUZELGNBQUEsMEJBQXVCLENBRXRCOzs7Ozs7SUFzQ0QsNEJBQW9FOzs7OztJQUE1RCwwSEFBa0Q7OztJQUUxRCwwQkFBcUQ7OztJQURwRCxBQUZGLDRHQUFnQyw2RkFFdkI7OztJQUZULHFEQUlDOzs7OztJQWdDRCwrQkFBMkI7SUFDMUIsa0hBQTRGO0lBQzVGLFlBQ0Q7SUFBQSxpQkFBTzs7Ozs7O0lBRk8sY0FBNkI7SUFBQyxBQUE5Qiw4Q0FBNkIscUZBQStDO0lBQ3pGLGNBQ0Q7SUFEQyw4Q0FDRDs7Ozs7O0lBd0NJLCtIQUE2Rjs7Ozs7OztJQUF4RCxBQUF4Qix3Q0FBdUIsc0ZBQXNEOzs7SUFGNUYsNkJBQWlCO0lBQ2hCLHdKQUVDO0lBQ0YsaUJBQUs7OztJQUhKLGNBRUM7SUFGRCwrQkFFQzs7O0lBTkosNkJBQTJEO0lBRTFELEFBREEsMkdB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c0JBQXNCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS2xDLE1BQU07a0JBQXhCLEtBQUs7bUJBQUMsVUFBVTtZQUN1Qyx5QkFBeUI7a0JBQWhGLFlBQVk7bUJBQUMsdUJBQXVCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS3JDLElBQUk7a0JBQXBCLEtBQUs7bUJBQUMsUUFBUTtZQUNtQyxtQkFBbUI7a0JBQXBFLFlBQVk7bUJBQUMsaUJBQWlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztrRkFsR3BDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7QmFzZVdpZGdldERpcmVjdGl2ZSwgY2FsbFdpZGdldEZhY3RvcnksIENvbXBvbmVudFRlbXBsYXRlLCBTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmV9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDb21wb25lbnQsXG5cdENvbnRlbnRDaGlsZCxcblx0RGlyZWN0aXZlLFxuXHRFdmVudEVtaXR0ZXIsXG5cdGluamVjdCxcblx0SW5wdXQsXG5cdE91dHB1dCxcblx0VGVtcGxhdGVSZWYsXG5cdFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7VHJlZUNvbnRleHQsIFRyZWVJdGVtLCBOb3JtYWxpemVkVHJlZUl0ZW0sIFRyZWVTbG90SXRlbUNvbnRleHQsIFRyZWVXaWRnZXR9IGZyb20gJy4vdHJlZS5nZW4nO1xuaW1wb3J0IHtjcmVhdGVUcmVlfSBmcm9tICcuL3RyZWUuZ2VuJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdHJlZSBzdHJ1Y3R1cmUuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgdXNlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSB0byByZW5kZXIgdGhlIHtAbGluayBUcmVlQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVUcmVlU3RydWN0dXJlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRyZWVTdHJ1Y3R1cmVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VHJlZUNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogVHJlZVN0cnVjdHVyZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVHJlZUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgVHJlZVN0cnVjdHVyZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1VHJlZVN0cnVjdHVyZSAjc3RydWN0dXJlIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCIgbGV0LWFwaT1cImFwaVwiPlxuXHRcdFx0PHVsIHJvbGU9XCJ0cmVlXCIgY2xhc3M9XCJhdS10cmVlIHt7IHN0YXRlLmNsYXNzTmFtZSgpIH19XCIgW2F1VXNlXT1cImRpcmVjdGl2ZXMubmF2aWdhdGlvbkRpcmVjdGl2ZVwiPlxuXHRcdFx0XHRAZm9yIChub2RlIG9mIHN0YXRlLm5vcm1hbGl6ZWROb2RlcygpOyB0cmFjayB0cmFja05vZGUoJGluZGV4LCBub2RlKSkge1xuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLml0ZW0oKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlcywgaXRlbTogbm9kZX1cIiAvPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuY2xhc3MgVHJlZURlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgnc3RydWN0dXJlJywge3N0YXRpYzogdHJ1ZX0pIHJlYWRvbmx5IHN0cnVjdHVyZSE6IFRlbXBsYXRlUmVmPFRyZWVDb250ZXh0PjtcblxuXHR0cmFja05vZGUoaW5kZXg6IG51bWJlciwgbm9kZTogTm9ybWFsaXplZFRyZWVJdGVtKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gbm9kZS5sYWJlbCArIG5vZGUubGV2ZWwgKyBpbmRleDtcblx0fVxufVxuXG4vKipcbiAqIEEgY29uc3RhbnQgcmVwcmVzZW50aW5nIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRyZWUgc3RydWN0dXJlLlxuICovXG5leHBvcnQgY29uc3QgdHJlZURlZmF1bHRTbG90U3RydWN0dXJlOiBTbG90Q29udGVudDxUcmVlQ29udGV4dD4gPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoVHJlZURlZmF1bHRTdHJ1Y3R1cmVTbG90Q29tcG9uZW50LCAnc3RydWN0dXJlJyk7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRyZWUgaXRlbSB0b2dnbGUuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgdXNlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSB0byByZW5kZXIgdGhlIHtAbGluayBUcmVlU2xvdEl0ZW1Db250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRyZWVJdGVtVG9nZ2xlXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFRyZWVJdGVtVG9nZ2xlRGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFRyZWVTbG90SXRlbUNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogVHJlZUl0ZW1Ub2dnbGVEaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFRyZWVTbG90SXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgVHJlZUl0ZW1Ub2dnbGVEaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxuZy10ZW1wbGF0ZSBhdVRyZWVJdGVtVG9nZ2xlICN0b2dnbGUgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCIgbGV0LWl0ZW09XCJpdGVtXCI+XG5cdFx0XHRAaWYgKGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQ8YnV0dG9uIFthdVVzZV09XCJbZGlyZWN0aXZlcy5pdGVtVG9nZ2xlRGlyZWN0aXZlLCB7aXRlbX1dXCI+PC9idXR0b24+XG5cdFx0XHR9IEBlbHNlIHtcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJhdS10cmVlLWV4cGFuZC1pY29uLXBsYWNlaG9sZGVyXCI+PC9zcGFuPlxuXHRcdFx0fVxuXHRcdDwvbmctdGVtcGxhdGU+XG5cdGAsXG59KVxuY2xhc3MgVHJlZURlZmF1bHRJdGVtVG9nZ2xlU2xvdENvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3RvZ2dsZScsIHtzdGF0aWM6IHRydWV9KSByZWFkb25seSB0b2dnbGUhOiBUZW1wbGF0ZVJlZjxUcmVlU2xvdEl0ZW1Db250ZXh0Pjtcbn1cblxuLyoqXG4gKiBBIGNvbnN0YW50IHJlcHJlc2VudGluZyB0aGUgZGVmYXVsdCBzbG90IGZvciB0cmVlIGl0ZW0gdG9nZ2xlLlxuICovXG5leHBvcnQgY29uc3QgdHJlZURlZmF1bHRJdGVtVG9nZ2xlOiBTbG90Q29udGVudDxUcmVlU2xvdEl0ZW1Db250ZXh0PiA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShUcmVlRGVmYXVsdEl0ZW1Ub2dnbGVTbG90Q29tcG9uZW50LCAndG9nZ2xlJyk7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRyZWUgaXRlbSBjb250ZW50LlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgVHJlZVNsb3RJdGVtQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVUcmVlSXRlbUNvbnRlbnRdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgVHJlZUl0ZW1Db250ZW50RGlyZWN0aXZlIHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFRyZWVTbG90SXRlbUNvbnRleHQ+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQoX2RpcjogVHJlZUl0ZW1Db250ZW50RGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBUcmVlU2xvdEl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmUsIFRyZWVJdGVtQ29udGVudERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1VHJlZUl0ZW0gI3RyZWVJdGVtQ29udGVudCBsZXQtc3RhdGU9XCJzdGF0ZVwiIGxldC1kaXJlY3RpdmVzPVwiZGlyZWN0aXZlc1wiIGxldC1pdGVtPVwiaXRlbVwiIGxldC1hcGk9XCJhcGlcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwiYXUtdHJlZS1pdGVtXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLml0ZW1Ub2dnbGUoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlcywgaXRlbX1cIiAvPlxuXHRcdFx0XHR7eyBpdGVtLmxhYmVsIH19XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBUcmVlRGVmYXVsdEl0ZW1Db250ZW50U2xvdENvbXBvbmVudCB7XG5cdEBWaWV3Q2hpbGQoJ3RyZWVJdGVtQ29udGVudCcsIHtzdGF0aWM6IHRydWV9KSByZWFkb25seSB0cmVlSXRlbUNvbnRlbnQhOiBUZW1wbGF0ZVJlZjxUcmVlU2xvdEl0ZW1Db250ZXh0Pjtcbn1cblxuLyoqXG4gKiBBIGNvbnN0YW50IHJlcHJlc2VudGluZyB0aGUgZGVmYXVsdCBzbG90IGZvciB0cmVlIGl0ZW0uXG4gKi9cbmV4cG9ydCBjb25zdCB0cmVlRGVmYXVsdFNsb3RJdGVtQ29udGVudDogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD4gPSBuZXcgQ29tcG9uZW50VGVtcGxhdGUoXG5cdFRyZWVEZWZhdWx0SXRlbUNvbnRlbnRTbG90Q29tcG9uZW50LFxuXHQndHJlZUl0ZW1Db250ZW50Jyxcbik7XG5cbi8qKlxuICogRGlyZWN0aXZlIHRvIHByb3ZpZGUgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgZm9yIHRyZWUgaXRlbS5cbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSB1c2VzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHJlbmRlciB0aGUge0BsaW5rIFRyZWVTbG90SXRlbUNvbnRleHR9LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1VHJlZUl0ZW1dJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgVHJlZUl0ZW1EaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VHJlZVNsb3RJdGVtQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUcmVlSXRlbURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVHJlZVNsb3RJdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBUcmVlSXRlbURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1VHJlZUl0ZW0gI3RyZWVJdGVtIGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCIgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWFwaT1cImFwaVwiPlxuXHRcdFx0PGxpIFthdVVzZV09XCJbZGlyZWN0aXZlcy5pdGVtQXR0cmlidXRlc0RpcmVjdGl2ZSwge2l0ZW19XVwiPlxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5pdGVtQ29udGVudCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzLCBpdGVtfVwiIC8+XG5cdFx0XHRcdEBpZiAoc3RhdGUuZXhwYW5kZWRNYXAoKS5nZXQoaXRlbSkpIHtcblx0XHRcdFx0XHQ8dWwgcm9sZT1cImdyb3VwXCI+XG5cdFx0XHRcdFx0XHRAZm9yIChjaGlsZCBvZiBpdGVtLmNoaWxkcmVuOyB0cmFjayB0cmFja05vZGUoJGluZGV4LCBjaGlsZCkpIHtcblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuaXRlbSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzLCBpdGVtOiBjaGlsZH1cIiAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdH1cblx0XHRcdDwvbGk+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBUcmVlRGVmYXVsdEl0ZW1TbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgndHJlZUl0ZW0nLCB7c3RhdGljOiB0cnVlfSkgcmVhZG9ubHkgdHJlZUl0ZW0hOiBUZW1wbGF0ZVJlZjxUcmVlU2xvdEl0ZW1Db250ZXh0PjtcblxuXHR0cmFja05vZGUoaW5kZXg6IG51bWJlciwgbm9kZTogTm9ybWFsaXplZFRyZWVJdGVtKSB7XG5cdFx0cmV0dXJuIG5vZGUubGFiZWwgKyBub2RlLmxldmVsICsgaW5kZXg7XG5cdH1cbn1cblxuLyoqXG4gKiBBIGNvbnN0YW50IHJlcHJlc2VudGluZyB0aGUgZGVmYXVsdCBzbG90IGZvciB0cmVlIGl0ZW0uXG4gKi9cbmV4cG9ydCBjb25zdCB0cmVlRGVmYXVsdFNsb3RJdGVtOiBTbG90Q29udGVudDxUcmVlU2xvdEl0ZW1Db250ZXh0PiA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShUcmVlRGVmYXVsdEl0ZW1TbG90Q29tcG9uZW50LCAndHJlZUl0ZW0nKTtcblxuLyoqXG4gKiBUcmVlQ29tcG9uZW50IGlzIGFuIEFuZ3VsYXIgY29tcG9uZW50IHRoYXQgZXh0ZW5kcyB0aGUgQmFzZVdpZGdldERpcmVjdGl2ZVxuICogdG8gcHJvdmlkZSBhIGN1c3RvbWl6YWJsZSB0cmVlIHdpZGdldC4gVGhpcyBjb21wb25lbnQgYWxsb3dzIGZvciB2YXJpb3VzXG4gKiBjb25maWd1cmF0aW9ucyBhbmQgY3VzdG9taXphdGlvbnMgdGhyb3VnaCBpdHMgaW5wdXRzIGFuZCBvdXRwdXRzLlxuICovXG5AQ29tcG9uZW50KHtcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnW2F1VHJlZV0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbU2xvdERpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgIDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnN0cnVjdHVyZSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzfVwiIC8+IGAsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFRyZWVXaWRnZXQ+IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZVRyZWUsXG5cdFx0XHRcdHdpZGdldE5hbWU6ICd0cmVlJyxcblx0XHRcdFx0ZGVmYXVsdENvbmZpZzoge1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogdHJlZURlZmF1bHRTbG90U3RydWN0dXJlLFxuXHRcdFx0XHRcdGl0ZW06IHRyZWVEZWZhdWx0U2xvdEl0ZW0sXG5cdFx0XHRcdFx0aXRlbUNvbnRlbnQ6IHRyZWVEZWZhdWx0U2xvdEl0ZW1Db250ZW50LFxuXHRcdFx0XHRcdGl0ZW1Ub2dnbGU6IHRyZWVEZWZhdWx0SXRlbVRvZ2dsZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0b25FeHBhbmRUb2dnbGU6IChpdGVtOiBOb3JtYWxpemVkVHJlZUl0ZW0pID0+IHRoaXMuZXhwYW5kVG9nZ2xlLmVtaXQoaXRlbSksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNsb3RUZW1wbGF0ZXM6ICgpID0+ICh7XG5cdFx0XHRcdFx0c3RydWN0dXJlOiB0aGlzLnNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0aXRlbTogdGhpcy5zbG90SXRlbUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRpdGVtQ29udGVudDogdGhpcy5zbG90SXRlbUNvbnRlbnRGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0aXRlbVRvZ2dsZTogdGhpcy5zbG90SXRlbVRvZ2dsZUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0fSksXG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG5cdC8qKlxuXHQgKiBPcHRpb25hbCBhY2Nlc3NpYmlsaXR5IGxhYmVsIGZvciB0aGUgdHJlZSBpZiB0aGVyZSBpcyBubyBleHBsaWNpdCBsYWJlbFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIEFycmF5IG9mIHRoZSB0cmVlIG5vZGVzIHRvIGRpc3BsYXlcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgW11gXG5cdCAqL1xuXHRASW5wdXQoJ2F1Tm9kZXMnKSBub2RlczogVHJlZUl0ZW1bXSB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblx0LyoqXG5cdCAqIFJldHJpZXZlcyBleHBhbmQgaXRlbXMgb2YgdGhlIFRyZWVJdGVtXG5cdCAqXG5cdCAqIEBwYXJhbSBub2RlIC0gSFRNTCBlbGVtZW50IHRoYXQgaXMgcmVwcmVzZW50aW5nIHRoZSBleHBhbmQgaXRlbVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVOYXZTZWxlY3RvcicpIG5hdlNlbGVjdG9yOiAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBOb2RlTGlzdE9mPEhUTUxCdXR0b25FbGVtZW50PikgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHZhbHVlIGZvciB0aGUgJ2FyaWEtbGFiZWwnIGF0dHJpYnV0ZSBvZiB0aGUgdG9nZ2xlXG5cdCAqIEBwYXJhbSBsYWJlbCAtIHRyZWUgaXRlbSBsYWJlbFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChsYWJlbDogc3RyaW5nKSA9PiBgVG9nZ2xlICR7bGFiZWx9YFxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxUb2dnbGVGbicpIGFyaWFMYWJlbFRvZ2dsZUZuOiAoKGxhYmVsOiBzdHJpbmcpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiB0aGUgdXNlciB0b2dnbGVzIHRoZSBleHBhbmQgb2YgdGhlIFRyZWVJdGVtLlxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGlzIGVxdWFsIHRvIHRoZSBUcmVlSXRlbSBjbGlja2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVFeHBhbmRUb2dnbGUnKSBleHBhbmRUb2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyPFRyZWVJdGVtPigpO1xuXG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCB0cmVlIGl0ZW0gY29udGVudFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1Db250ZW50JykgaXRlbTogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVHJlZUl0ZW1Db250ZW50RGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RJdGVtQ29udGVudEZyb21Db250ZW50OiBUcmVlSXRlbUNvbnRlbnREaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IGRpc3BsYXkgb2YgdGhlIHRyZWVcblx0ICovXG5cdEBJbnB1dCgnYXVTdHJ1Y3R1cmUnKSBzdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFRyZWVDb250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChUcmVlU3RydWN0dXJlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTdHJ1Y3R1cmVGcm9tQ29udGVudDogVHJlZVN0cnVjdHVyZURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgdHJlZSBpdGVtIHRvZ2dsZVxuXHQgKi9cblx0QElucHV0KCdhdVRvZ2dsZScpIHRvZ2dsZTogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVHJlZUl0ZW1Ub2dnbGVEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEl0ZW1Ub2dnbGVGcm9tQ29udGVudDogVHJlZUl0ZW1Ub2dnbGVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IHRyZWUgaXRlbVxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW0nKSByb290OiBTbG90Q29udGVudDxUcmVlU2xvdEl0ZW1Db250ZXh0Pjtcblx0QENvbnRlbnRDaGlsZChUcmVlSXRlbURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90SXRlbUZyb21Db250ZW50OiBUcmVlSXRlbURpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcbn1cbiJdfQ==`;export{e as default};
