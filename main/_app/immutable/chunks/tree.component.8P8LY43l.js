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
					<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: node}"></ng-template>
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
				<ng-template [auSlot]="state.itemToggle()" [auSlotProps]="{state, api, directives, item}"></ng-template>
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
				<ng-template [auSlot]="state.itemContent()" [auSlotProps]="{state, api, directives, item}"></ng-template>
				@if (state.expandedMap().get(item)) {
					<ul role="group">
						@for (child of item.children; track trackNode($index, child)) {
							<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: child}"></ng-template>
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
        } }, dependencies: [SlotDirective], encapsulation: 2 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeComponent, [{
        type: Component,
        args: [{
                selector: '[auTree]',
                standalone: true,
                imports: [SlotDirective],
                template: \` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}"></ng-template> \`,
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeComponent, { className: "TreeComponent", filePath: "components/tree/tree.component.ts", lineNumber: 188 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy90cmVlL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDbEksT0FBTyxFQUNOLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sWUFBWSxDQUFDOzs7Ozs7SUF1QmpDLHNIQUEwRjs7Ozs7OztJQUFyRCxBQUF4Qix3Q0FBdUIscUZBQXFEOzs7SUFGM0YsNkJBQWlHO0lBQ2hHLCtJQUVDO0lBQ0YsaUJBQUs7Ozs7SUFKVywrREFBdUM7SUFBQyx5REFBd0M7SUFDL0YsY0FFQztJQUZELGNBQUEsMEJBQXVCLENBRXRCOzs7Ozs7SUFzQ0QsNEJBQW9FOzs7OztJQUE1RCwwSEFBa0Q7OztJQUUxRCwwQkFBcUQ7OztJQURwRCxBQUZGLDRHQUFnQyw2RkFFdkI7OztJQUZULHFEQUlDOzs7OztJQWdDRCwrQkFBMkI7SUFDMUIsa0hBQTBGO0lBQzFGLFlBQ0Q7SUFBQSxpQkFBTzs7Ozs7O0lBRk8sY0FBNkI7SUFBQyxBQUE5Qiw4Q0FBNkIscUZBQStDO0lBQ3pGLGNBQ0Q7SUFEQyw4Q0FDRDs7Ozs7O0lBd0NJLCtIQUEyRjs7Ozs7OztJQUF0RCxBQUF4Qix3Q0FBdUIsc0ZBQXNEOzs7SUFGNUYsNkJBQWlCO0lBQ2hCLHdKQUVDO0lBQ0YsaUJBQUs7OztJQUhKLGNBRUM7SUFGRCwrQkFFQzs7O0lBTkosNkJBQTJEO0lBRTFELEFBREEsMkdB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QUM7WUFLbEMsTUFBTTtrQkFBeEIsS0FBSzttQkFBQyxVQUFVO1lBQ3VDLHlCQUF5QjtrQkFBaEYsWUFBWTttQkFBQyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFLckMsSUFBSTtrQkFBcEIsS0FBSzttQkFBQyxRQUFRO1lBQ21DLG1CQUFtQjtrQkFBcEUsWUFBWTttQkFBQyxpQkFBaUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7O2tGQWxHcEMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0RGlyZWN0aXZlLCBjYWxsV2lkZ2V0RmFjdG9yeSwgQ29tcG9uZW50VGVtcGxhdGUsIFNsb3REaXJlY3RpdmUsIFVzZURpcmVjdGl2ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG5cdENvbXBvbmVudCxcblx0Q29udGVudENoaWxkLFxuXHREaXJlY3RpdmUsXG5cdEV2ZW50RW1pdHRlcixcblx0aW5qZWN0LFxuXHRJbnB1dCxcblx0T3V0cHV0LFxuXHRUZW1wbGF0ZVJlZixcblx0Vmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtUcmVlQ29udGV4dCwgVHJlZUl0ZW0sIE5vcm1hbGl6ZWRUcmVlSXRlbSwgVHJlZVNsb3RJdGVtQ29udGV4dCwgVHJlZVdpZGdldH0gZnJvbSAnLi90cmVlLmdlbic7XG5pbXBvcnQge2NyZWF0ZVRyZWV9IGZyb20gJy4vdHJlZS5nZW4nO1xuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIGEgdGVtcGxhdGUgcmVmZXJlbmNlIGZvciB0cmVlIHN0cnVjdHVyZS5cbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSB1c2VzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHJlbmRlciB0aGUge0BsaW5rIFRyZWVDb250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRyZWVTdHJ1Y3R1cmVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgVHJlZVN0cnVjdHVyZURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUcmVlQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUcmVlU3RydWN0dXJlRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBUcmVlQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBUcmVlU3RydWN0dXJlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVUcmVlU3RydWN0dXJlICNzdHJ1Y3R1cmUgbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIiBsZXQtYXBpPVwiYXBpXCI+XG5cdFx0XHQ8dWwgcm9sZT1cInRyZWVcIiBjbGFzcz1cImF1LXRyZWUge3sgc3RhdGUuY2xhc3NOYW1lKCkgfX1cIiBbYXVVc2VdPVwiZGlyZWN0aXZlcy5uYXZpZ2F0aW9uRGlyZWN0aXZlXCI+XG5cdFx0XHRcdEBmb3IgKG5vZGUgb2Ygc3RhdGUubm9ybWFsaXplZE5vZGVzKCk7IHRyYWNrIHRyYWNrTm9kZSgkaW5kZXgsIG5vZGUpKSB7XG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuaXRlbSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzLCBpdGVtOiBub2RlfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBUcmVlRGVmYXVsdFN0cnVjdHVyZVNsb3RDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCdzdHJ1Y3R1cmUnLCB7c3RhdGljOiB0cnVlfSkgcmVhZG9ubHkgc3RydWN0dXJlITogVGVtcGxhdGVSZWY8VHJlZUNvbnRleHQ+O1xuXG5cdHRyYWNrTm9kZShpbmRleDogbnVtYmVyLCBub2RlOiBOb3JtYWxpemVkVHJlZUl0ZW0pOiBzdHJpbmcge1xuXHRcdHJldHVybiBub2RlLmxhYmVsICsgbm9kZS5sZXZlbCArIGluZGV4O1xuXHR9XG59XG5cbi8qKlxuICogQSBjb25zdGFudCByZXByZXNlbnRpbmcgdGhlIGRlZmF1bHQgc2xvdCBmb3IgdHJlZSBzdHJ1Y3R1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCB0cmVlRGVmYXVsdFNsb3RTdHJ1Y3R1cmU6IFNsb3RDb250ZW50PFRyZWVDb250ZXh0PiA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShUcmVlRGVmYXVsdFN0cnVjdHVyZVNsb3RDb21wb25lbnQsICdzdHJ1Y3R1cmUnKTtcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdHJlZSBpdGVtIHRvZ2dsZS5cbiAqXG4gKiBUaGlzIGRpcmVjdGl2ZSB1c2VzIGEgdGVtcGxhdGUgcmVmZXJlbmNlIHRvIHJlbmRlciB0aGUge0BsaW5rIFRyZWVTbG90SXRlbUNvbnRleHR9LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1VHJlZUl0ZW1Ub2dnbGVdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgVHJlZUl0ZW1Ub2dnbGVEaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VHJlZVNsb3RJdGVtQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUcmVlSXRlbVRvZ2dsZURpcmVjdGl2ZSwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgVHJlZVNsb3RJdGVtQ29udGV4dCB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBUcmVlSXRlbVRvZ2dsZURpcmVjdGl2ZV0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PG5nLXRlbXBsYXRlIGF1VHJlZUl0ZW1Ub2dnbGUgI3RvZ2dsZSBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIiBsZXQtaXRlbT1cIml0ZW1cIj5cblx0XHRcdEBpZiAoaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdDxidXR0b24gW2F1VXNlXT1cIltkaXJlY3RpdmVzLml0ZW1Ub2dnbGVEaXJlY3RpdmUsIHtpdGVtfV1cIj48L2J1dHRvbj5cblx0XHRcdH0gQGVsc2Uge1xuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImF1LXRyZWUtZXhwYW5kLWljb24tcGxhY2Vob2xkZXJcIj48L3NwYW4+XG5cdFx0XHR9XG5cdFx0PC9uZy10ZW1wbGF0ZT5cblx0YCxcbn0pXG5jbGFzcyBUcmVlRGVmYXVsdEl0ZW1Ub2dnbGVTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgndG9nZ2xlJywge3N0YXRpYzogdHJ1ZX0pIHJlYWRvbmx5IHRvZ2dsZSE6IFRlbXBsYXRlUmVmPFRyZWVTbG90SXRlbUNvbnRleHQ+O1xufVxuXG4vKipcbiAqIEEgY29uc3RhbnQgcmVwcmVzZW50aW5nIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRyZWUgaXRlbSB0b2dnbGUuXG4gKi9cbmV4cG9ydCBjb25zdCB0cmVlRGVmYXVsdEl0ZW1Ub2dnbGU6IFNsb3RDb250ZW50PFRyZWVTbG90SXRlbUNvbnRleHQ+ID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFRyZWVEZWZhdWx0SXRlbVRvZ2dsZVNsb3RDb21wb25lbnQsICd0b2dnbGUnKTtcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdHJlZSBpdGVtIGNvbnRlbnQuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgdXNlcyBhIHRlbXBsYXRlIHJlZmVyZW5jZSB0byByZW5kZXIgdGhlIHtAbGluayBUcmVlU2xvdEl0ZW1Db250ZXh0fS5cbiAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVRyZWVJdGVtQ29udGVudF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUcmVlSXRlbUNvbnRlbnREaXJlY3RpdmUge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8VHJlZVNsb3RJdGVtQ29udGV4dD4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZChfZGlyOiBUcmVlSXRlbUNvbnRlbnREaXJlY3RpdmUsIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFRyZWVTbG90SXRlbUNvbnRleHQge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgVHJlZUl0ZW1Db250ZW50RGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVUcmVlSXRlbSAjdHJlZUl0ZW1Db250ZW50IGxldC1zdGF0ZT1cInN0YXRlXCIgbGV0LWRpcmVjdGl2ZXM9XCJkaXJlY3RpdmVzXCIgbGV0LWl0ZW09XCJpdGVtXCIgbGV0LWFwaT1cImFwaVwiPlxuXHRcdFx0PHNwYW4gY2xhc3M9XCJhdS10cmVlLWl0ZW1cIj5cblx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuaXRlbVRvZ2dsZSgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzLCBpdGVtfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdHt7IGl0ZW0ubGFiZWwgfX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmNsYXNzIFRyZWVEZWZhdWx0SXRlbUNvbnRlbnRTbG90Q29tcG9uZW50IHtcblx0QFZpZXdDaGlsZCgndHJlZUl0ZW1Db250ZW50Jywge3N0YXRpYzogdHJ1ZX0pIHJlYWRvbmx5IHRyZWVJdGVtQ29udGVudCE6IFRlbXBsYXRlUmVmPFRyZWVTbG90SXRlbUNvbnRleHQ+O1xufVxuXG4vKipcbiAqIEEgY29uc3RhbnQgcmVwcmVzZW50aW5nIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRyZWUgaXRlbS5cbiAqL1xuZXhwb3J0IGNvbnN0IHRyZWVEZWZhdWx0U2xvdEl0ZW1Db250ZW50OiBTbG90Q29udGVudDxUcmVlU2xvdEl0ZW1Db250ZXh0PiA9IG5ldyBDb21wb25lbnRUZW1wbGF0ZShcblx0VHJlZURlZmF1bHRJdGVtQ29udGVudFNsb3RDb21wb25lbnQsXG5cdCd0cmVlSXRlbUNvbnRlbnQnLFxuKTtcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSBhIHRlbXBsYXRlIHJlZmVyZW5jZSBmb3IgdHJlZSBpdGVtLlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgVHJlZVNsb3RJdGVtQ29udGV4dH0uXG4gKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVUcmVlSXRlbV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBUcmVlSXRlbURpcmVjdGl2ZSB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxUcmVlU2xvdEl0ZW1Db250ZXh0Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkKF9kaXI6IFRyZWVJdGVtRGlyZWN0aXZlLCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBUcmVlU2xvdEl0ZW1Db250ZXh0IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmUsIFRyZWVJdGVtRGlyZWN0aXZlXSxcblx0dGVtcGxhdGU6IGBcblx0XHQ8bmctdGVtcGxhdGUgYXVUcmVlSXRlbSAjdHJlZUl0ZW0gbGV0LXN0YXRlPVwic3RhdGVcIiBsZXQtZGlyZWN0aXZlcz1cImRpcmVjdGl2ZXNcIiBsZXQtaXRlbT1cIml0ZW1cIiBsZXQtYXBpPVwiYXBpXCI+XG5cdFx0XHQ8bGkgW2F1VXNlXT1cIltkaXJlY3RpdmVzLml0ZW1BdHRyaWJ1dGVzRGlyZWN0aXZlLCB7aXRlbX1dXCI+XG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLml0ZW1Db250ZW50KClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIGl0ZW19XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0QGlmIChzdGF0ZS5leHBhbmRlZE1hcCgpLmdldChpdGVtKSkge1xuXHRcdFx0XHRcdDx1bCByb2xlPVwiZ3JvdXBcIj5cblx0XHRcdFx0XHRcdEBmb3IgKGNoaWxkIG9mIGl0ZW0uY2hpbGRyZW47IHRyYWNrIHRyYWNrTm9kZSgkaW5kZXgsIGNoaWxkKSkge1xuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5pdGVtKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIGl0ZW06IGNoaWxkfVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0fVxuXHRcdFx0PC9saT5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxufSlcbmNsYXNzIFRyZWVEZWZhdWx0SXRlbVNsb3RDb21wb25lbnQge1xuXHRAVmlld0NoaWxkKCd0cmVlSXRlbScsIHtzdGF0aWM6IHRydWV9KSByZWFkb25seSB0cmVlSXRlbSE6IFRlbXBsYXRlUmVmPFRyZWVTbG90SXRlbUNvbnRleHQ+O1xuXG5cdHRyYWNrTm9kZShpbmRleDogbnVtYmVyLCBub2RlOiBOb3JtYWxpemVkVHJlZUl0ZW0pIHtcblx0XHRyZXR1cm4gbm9kZS5sYWJlbCArIG5vZGUubGV2ZWwgKyBpbmRleDtcblx0fVxufVxuXG4vKipcbiAqIEEgY29uc3RhbnQgcmVwcmVzZW50aW5nIHRoZSBkZWZhdWx0IHNsb3QgZm9yIHRyZWUgaXRlbS5cbiAqL1xuZXhwb3J0IGNvbnN0IHRyZWVEZWZhdWx0U2xvdEl0ZW06IFNsb3RDb250ZW50PFRyZWVTbG90SXRlbUNvbnRleHQ+ID0gbmV3IENvbXBvbmVudFRlbXBsYXRlKFRyZWVEZWZhdWx0SXRlbVNsb3RDb21wb25lbnQsICd0cmVlSXRlbScpO1xuXG4vKipcbiAqIFRyZWVDb21wb25lbnQgaXMgYW4gQW5ndWxhciBjb21wb25lbnQgdGhhdCBleHRlbmRzIHRoZSBCYXNlV2lkZ2V0RGlyZWN0aXZlXG4gKiB0byBwcm92aWRlIGEgY3VzdG9taXphYmxlIHRyZWUgd2lkZ2V0LiBUaGlzIGNvbXBvbmVudCBhbGxvd3MgZm9yIHZhcmlvdXNcbiAqIGNvbmZpZ3VyYXRpb25zIGFuZCBjdXN0b21pemF0aW9ucyB0aHJvdWdoIGl0cyBpbnB1dHMgYW5kIG91dHB1dHMuXG4gKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVRyZWVdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1Nsb3REaXJlY3RpdmVdLFxuXHR0ZW1wbGF0ZTogYCA8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zdHJ1Y3R1cmUoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlc31cIj48L25nLXRlbXBsYXRlPiBgLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlQ29tcG9uZW50IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxUcmVlV2lkZ2V0PiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdFx0XHRmYWN0b3J5OiBjcmVhdGVUcmVlLFxuXHRcdFx0XHR3aWRnZXROYW1lOiAndHJlZScsXG5cdFx0XHRcdGRlZmF1bHRDb25maWc6IHtcblx0XHRcdFx0XHRzdHJ1Y3R1cmU6IHRyZWVEZWZhdWx0U2xvdFN0cnVjdHVyZSxcblx0XHRcdFx0XHRpdGVtOiB0cmVlRGVmYXVsdFNsb3RJdGVtLFxuXHRcdFx0XHRcdGl0ZW1Db250ZW50OiB0cmVlRGVmYXVsdFNsb3RJdGVtQ29udGVudCxcblx0XHRcdFx0XHRpdGVtVG9nZ2xlOiB0cmVlRGVmYXVsdEl0ZW1Ub2dnbGUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdG9uRXhwYW5kVG9nZ2xlOiAoaXRlbTogTm9ybWFsaXplZFRyZWVJdGVtKSA9PiB0aGlzLmV4cGFuZFRvZ2dsZS5lbWl0KGl0ZW0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzbG90VGVtcGxhdGVzOiAoKSA9PiAoe1xuXHRcdFx0XHRcdHN0cnVjdHVyZTogdGhpcy5zbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGl0ZW06IHRoaXMuc2xvdEl0ZW1Gcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdFx0aXRlbUNvbnRlbnQ6IHRoaXMuc2xvdEl0ZW1Db250ZW50RnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGl0ZW1Ub2dnbGU6IHRoaXMuc2xvdEl0ZW1Ub2dnbGVGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRcdH0pLFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxuXHQvKipcblx0ICogT3B0aW9uYWwgYWNjZXNzaWJpbGl0eSBsYWJlbCBmb3IgdGhlIHRyZWUgaWYgdGhlcmUgaXMgbm8gZXhwbGljaXQgbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBBcnJheSBvZiB0aGUgdHJlZSBub2RlcyB0byBkaXNwbGF5XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYFtdYFxuXHQgKi9cblx0QElucHV0KCdhdU5vZGVzJykgbm9kZXM6IFRyZWVJdGVtW10gfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgZXhwYW5kIGl0ZW1zIG9mIHRoZSBUcmVlSXRlbVxuXHQgKlxuXHQgKiBAcGFyYW0gbm9kZSAtIEhUTUwgZWxlbWVudCB0aGF0IGlzIHJlcHJlc2VudGluZyB0aGUgZXhwYW5kIGl0ZW1cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAobm9kZTogSFRNTEVsZW1lbnQpID0+IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TmF2U2VsZWN0b3InKSBuYXZTZWxlY3RvcjogKChub2RlOiBIVE1MRWxlbWVudCkgPT4gTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4pIHwgdW5kZWZpbmVkO1xuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLWxhYmVsJyBhdHRyaWJ1dGUgb2YgdGhlIHRvZ2dsZVxuXHQgKiBAcGFyYW0gbGFiZWwgLSB0cmVlIGl0ZW0gbGFiZWxcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAobGFiZWw6IHN0cmluZykgPT4gYFRvZ2dsZSAke2xhYmVsfWBcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsVG9nZ2xlRm4nKSBhcmlhTGFiZWxUb2dnbGVGbjogKChsYWJlbDogc3RyaW5nKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gdGhlIHVzZXIgdG9nZ2xlcyB0aGUgZXhwYW5kIG9mIHRoZSBUcmVlSXRlbS5cblx0ICpcblx0ICogRXZlbnQgcGF5bG9hZCBpcyBlcXVhbCB0byB0aGUgVHJlZUl0ZW0gY2xpY2tlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1RXhwYW5kVG9nZ2xlJykgZXhwYW5kVG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcjxUcmVlSXRlbT4oKTtcblxuXHQvKipcblx0ICogU2xvdCB0byBjaGFuZ2UgdGhlIGRlZmF1bHQgdHJlZSBpdGVtIGNvbnRlbnRcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtQ29udGVudCcpIGl0ZW06IFNsb3RDb250ZW50PFRyZWVTbG90SXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRyZWVJdGVtQ29udGVudERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90SXRlbUNvbnRlbnRGcm9tQ29udGVudDogVHJlZUl0ZW1Db250ZW50RGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCBkaXNwbGF5IG9mIHRoZSB0cmVlXG5cdCAqL1xuXHRASW5wdXQoJ2F1U3RydWN0dXJlJykgc3RydWN0dXJlOiBTbG90Q29udGVudDxUcmVlQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVHJlZVN0cnVjdHVyZURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U3RydWN0dXJlRnJvbUNvbnRlbnQ6IFRyZWVTdHJ1Y3R1cmVEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFNsb3QgdG8gY2hhbmdlIHRoZSBkZWZhdWx0IHRyZWUgaXRlbSB0b2dnbGVcblx0ICovXG5cdEBJbnB1dCgnYXVUb2dnbGUnKSB0b2dnbGU6IFNsb3RDb250ZW50PFRyZWVTbG90SXRlbUNvbnRleHQ+O1xuXHRAQ29udGVudENoaWxkKFRyZWVJdGVtVG9nZ2xlRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RJdGVtVG9nZ2xlRnJvbUNvbnRlbnQ6IFRyZWVJdGVtVG9nZ2xlRGlyZWN0aXZlIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBTbG90IHRvIGNoYW5nZSB0aGUgZGVmYXVsdCB0cmVlIGl0ZW1cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtJykgcm9vdDogU2xvdENvbnRlbnQ8VHJlZVNsb3RJdGVtQ29udGV4dD47XG5cdEBDb250ZW50Q2hpbGQoVHJlZUl0ZW1EaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdEl0ZW1Gcm9tQ29udGVudDogVHJlZUl0ZW1EaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG59XG4iXX0=`;export{e as default};
