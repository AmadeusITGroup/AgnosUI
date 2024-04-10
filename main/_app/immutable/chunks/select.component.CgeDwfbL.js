const t=`import { __decorate } from "tslib";
import { BaseWidgetDirective, CachedProperty, SlotDirective, UseDirective, auBooleanAttribute, createSelect, mergeDirectives, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
const _c0 = ["auSelect", ""];
const _c1 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
function SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("keydown", function SelectComponent_Conditional_0_Conditional_1_For_1_Template_div_keydown_0_listener($event) { const itemContext_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3._widget.actions.onBadgeKeydown($event, itemContext_r3.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r3 = ctx.$implicit;
    const state_r5 = i0.ɵɵnextContext(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(state_r5.badgeClassName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c1, state_r5, ctx_r3.widget, itemContext_r3));
} }
function SelectComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_0_Conditional_1_For_1_Template, 2, 8, "div", 3, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 8);
    i0.ɵɵlistener("click", function SelectComponent_Conditional_0_Conditional_3_For_2_Template_li_click_0_listener() { const itemContext_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r3 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r3.widget.api.toggleItem(itemContext_r8.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r8 = ctx.$implicit;
    const state_r5 = i0.ɵɵnextContext(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("cursor", "pointer");
    i0.ɵɵclassProp("text-bg-primary", itemContext_r8 === state_r5.highlighted)("selected", itemContext_r8.selected);
    i0.ɵɵattribute("aria-selected", itemContext_r8.selected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r5.slotItem)("auSlotProps", i0.ɵɵpureFunction3(9, _c1, state_r5, ctx_r3.widget, itemContext_r8));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵlistener("mousedown", function SelectComponent_Conditional_0_Conditional_3_Template_ul_mousedown_0_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.preventDefault()); });
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 13, "li", 7, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r5 = i0.ɵɵnextContext();
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dropdown-menu show " + (ctx_r3.menuClassName || ""));
    i0.ɵɵproperty("id", state_r5.id + "-menu")("auUse", ctx_r3.menuDirective);
    i0.ɵɵattribute("data-popper-placement", state_r5.placement);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r5.visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelementStart(2, "input", 1);
    i0.ɵɵlistener("input", function SelectComponent_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3._widget.actions.onInput($event)); })("keydown", function SelectComponent_Conditional_0_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3._widget.actions.onInputKeydown($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 5, "ul", 2);
} if (rf & 2) {
    let tmp_5_0;
    const state_r5 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", ctx_r3.controlContainerDirective);
    i0.ɵɵattribute("aria-controls", state_r5.id + "-menu")("aria-expanded", state_r5.open);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, (tmp_5_0 = state_r5.selectedContexts) ? 1 : -1, tmp_5_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", state_r5.filterText);
    i0.ɵɵattribute("id", state_r5.id)("aria-label", state_r5.ariaLabel);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r5.open && state_r5.visibleItems.length ? 3 : -1);
} }
export class SelectBadgeLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectBadgeLabelDirective_Factory(t) { return new (t || SelectBadgeLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectBadgeLabelDirective, selectors: [["ng-template", "auSelectBadgeLabel", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectBadgeLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectBadgeLabel]', standalone: true }]
    }], null, null); })();
export class SelectItemDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectItemDirective_Factory(t) { return new (t || SelectItemDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectItemDirective, selectors: [["ng-template", "auSelectItem", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectItemDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectItem]', standalone: true }]
    }], null, null); })();
export class SelectComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * Callback called when the text filter change
         */
        this.filterTextChange = new EventEmitter();
        /**
         * Callback called when the selection change
         */
        this.selectedChange = new EventEmitter();
        /**
         * Callback called dropdown open state change
         */
        this.openChange = new EventEmitter();
        this._widget = callWidgetFactory({
            factory: createSelect,
            widgetName: 'select',
            events: {
                onOpenChange: (event) => this.openChange.emit(event),
                onSelectedChange: (event) => this.selectedChange.emit(event),
                onFilterTextChange: (event) => this.filterTextChange.emit(event),
            },
            afterInit: () => {
                useDirectiveForHost(this._widget.directives.referenceDirective);
            },
        });
    }
    get menuDirective() {
        return mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.floatingDirective);
    }
    get controlContainerDirective() {
        return mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.inputContainerDirective);
    }
    itemCtxTrackBy(_, itemContext) {
        return itemContext.id;
    }
    ngAfterContentChecked() {
        this._widget.patchSlots({
            slotBadgeLabel: this.slotSelectBadgeLabelFromContent?.templateRef,
            slotItem: this.slotSelectItemFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSelectComponent_BaseFactory; return function SelectComponent_Factory(t) { return (ɵSelectComponent_BaseFactory || (ɵSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SelectComponent)))(t || SelectComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["", "auSelect", ""]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SelectBadgeLabelDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SelectItemDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectBadgeLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectItemFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("au-select dropdown border border-1 p-1 mb-3 d-block" + ctx.state().className);
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], id: [i0.ɵɵInputFlags.None, "auId", "id"], items: [i0.ɵɵInputFlags.None, "auItems", "items"], allowedPlacements: [i0.ɵɵInputFlags.None, "auAllowedPlacements", "allowedPlacements"], open: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auOpen", "open", auBooleanAttribute], filterText: [i0.ɵɵInputFlags.None, "auFilterText", "filterText"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], selected: [i0.ɵɵInputFlags.None, "auSelected", "selected"], loading: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auLoading", "loading", auBooleanAttribute], itemIdFn: [i0.ɵɵInputFlags.None, "auItemIdFn", "itemIdFn"], menuClassName: [i0.ɵɵInputFlags.None, "auMenuClassName", "menuClassName"], slotBadgeLabel: [i0.ɵɵInputFlags.None, "auSlotBadgeLabel", "slotBadgeLabel"], slotItem: [i0.ɵɵInputFlags.None, "auSlotItem", "slotItem"], menuItemClassName: [i0.ɵɵInputFlags.None, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [i0.ɵɵInputFlags.None, "auBadgeClassName", "badgeClassName"], navSelector: [i0.ɵɵInputFlags.None, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "input", "keydown", "value"], ["role", "listbox", 3, "id", "auUse", "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "keydown"], [3, "auSlot", "auSlotProps"], ["role", "listbox", 3, "mousedown", "id", "auUse"], ["role", "option", 1, "au-select-item", "dropdown-item", "position-relative", 3, "text-bg-primary", "selected", "cursor"], ["role", "option", 1, "au-select-item", "dropdown-item", "position-relative", 3, "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 8);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional(0, (tmp_0_0 = ctx.state()) ? 0 : -1, tmp_0_0);
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    CachedProperty
], SelectComponent.prototype, "menuDirective", null);
__decorate([
    CachedProperty
], SelectComponent.prototype, "controlContainerDirective", null);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [UseDirective, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auSelect]',
                host: {
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state().className',
                },
                template: \`
		@if (state(); as state) {
			<div
				[auUse]="controlContainerDirective"
				role="combobox"
				class="d-flex align-items-center flex-wrap"
				[attr.aria-controls]="state.id + '-menu'"
				aria-haspopup="listbox"
				[attr.aria-expanded]="state.open"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div
							tabindex="-1"
							class="au-select-badge me-1"
							[class]="state.badgeClassName"
							(keydown)="_widget.actions.onBadgeKeydown($event, itemContext.item)"
						>
							<ng-template [auSlot]="state.slotBadgeLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</div>
					}
				}
				<input
					attr.id="{{ state.id }}"
					attr.aria-label="{{ state.ariaLabel }}"
					type="text"
					class="au-select-input flex-grow-1 border-0"
					[value]="state.filterText"
					aria-autocomplete="list"
					autoCorrect="off"
					autoCapitalize="none"
					autoComplete="off"
					(input)="_widget.actions.onInput($event)"
					(keydown)="_widget.actions.onInputKeydown($event)"
				/>
			</div>
			@if (state.open && state.visibleItems.length) {
				<ul
					role="listbox"
					[id]="state.id + '-menu'"
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state.placement"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							role="option"
							[attr.aria-selected]="itemContext.selected"
							class="au-select-item dropdown-item position-relative "
							[class.text-bg-primary]="itemContext === state.highlighted"
							[class.selected]="itemContext.selected"
							(click)="widget.api.toggleItem(itemContext.item)"
							[style.cursor]="'pointer'"
						>
							<ng-template [auSlot]="state.slotItem" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</li>
					}
				</ul>
			}
		}
	\`,
            }]
    }], null, { ariaLabel: [{
            type: Input,
            args: ['auAriaLabel']
        }], id: [{
            type: Input,
            args: ['auId']
        }], items: [{
            type: Input,
            args: ['auItems']
        }], allowedPlacements: [{
            type: Input,
            args: ['auAllowedPlacements']
        }], open: [{
            type: Input,
            args: [{ alias: 'auOpen', transform: auBooleanAttribute }]
        }], filterText: [{
            type: Input,
            args: ['auFilterText']
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], disabled: [{
            type: Input,
            args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
        }], selected: [{
            type: Input,
            args: ['auSelected']
        }], loading: [{
            type: Input,
            args: [{ alias: 'auLoading', transform: auBooleanAttribute }]
        }], itemIdFn: [{
            type: Input,
            args: ['auItemIdFn']
        }], menuClassName: [{
            type: Input,
            args: ['auMenuClassName']
        }], slotBadgeLabel: [{
            type: Input,
            args: ['auSlotBadgeLabel']
        }], slotSelectBadgeLabelFromContent: [{
            type: ContentChild,
            args: [SelectBadgeLabelDirective, { static: false }]
        }], slotItem: [{
            type: Input,
            args: ['auSlotItem']
        }], slotSelectItemFromContent: [{
            type: ContentChild,
            args: [SelectItemDirective, { static: false }]
        }], filterTextChange: [{
            type: Output,
            args: ['auFilterTextChange']
        }], selectedChange: [{
            type: Output,
            args: ['auSelectedChange']
        }], openChange: [{
            type: Output,
            args: ['auOpenChange']
        }], menuItemClassName: [{
            type: Input,
            args: ['auMenuItemClassName']
        }], badgeClassName: [{
            type: Input,
            args: ['auBadgeClassName']
        }], navSelector: [{
            type: Input,
            args: ['auNavSelector']
        }], menuDirective: [], controlContainerDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 104 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osZUFBZSxFQUNmLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7Ozs7OztJQXNDekMsOEJBS0M7SUFEQSxnUEFBVyxrRUFBd0QsS0FBQztJQUVwRSxrSEFBMEY7SUFDM0YsaUJBQU07Ozs7O0lBSkwsc0NBQThCO0lBR2pCLGNBQStCO0lBQUMsQUFBaEMsZ0RBQStCLG9GQUE2Qzs7O0lBUDNGLGlKQVNDOztJQVRELGtCQVNDOzs7OztJQTBCQSw2QkFRQztJQUZBLHFPQUFTLGlEQUF1QyxLQUFDO0lBR2pELGtIQUFvRjtJQUNyRixpQkFBSzs7Ozs7SUFISixtQ0FBMEI7SUFGMUIsQUFEQSwwRUFBMkQscUNBQ3BCOztJQUkxQixjQUF5QjtJQUFDLEFBQTFCLDBDQUF5QixvRkFBNkM7Ozs7SUFsQnRGLDZCQU9DO0lBREEsd0tBQWEsdUJBQXVCLEtBQUM7SUFFckMsaUpBWUM7SUFDRixpQkFBSzs7OztJQWpCSixtRUFBdUQ7SUFEdkQsQUFEQSwwQ0FBeUIsK0JBQ0Y7O0lBS3ZCLGNBWUM7SUFaRCxvQ0FZQzs7OztJQXZESCw4QkFPQztJQUNBLDRFQUFtRDtJQVluRCxnQ0FZRTtJQURELEFBREEs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QUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUt0QyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFLeUMsT0FBTztrQkFBbEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTXJDLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUtPLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRUcsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFDaUMsK0JBQStCO2tCQUF4RixZQUFZO21CQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUVuQyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFDaUMseUJBQXlCO2tCQUE1RSxZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUtwQixnQkFBZ0I7a0JBQTdDLE1BQU07bUJBQUMsb0JBQW9CO1lBS0EsY0FBYztrQkFBekMsTUFBTTttQkFBQyxrQkFBa0I7WUFLRixVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFLUSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBS0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFLRCxXQUFXO2tCQUFsQyxLQUFLO21CQUFDLGVBQWU7WUFnQmxCLGFBQWEsTUFLYix5QkFBeUI7a0ZBdEhqQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgSXRlbUNvbnRleHQsIFNlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXQsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDYWNoZWRQcm9wZXJ0eSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGNyZWF0ZVNlbGVjdCxcblx0bWVyZ2VEaXJlY3RpdmVzLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1BsYWNlbWVudH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0QmFkZ2VMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTZWxlY3RJdGVtXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c2VsZWN0b3I6ICdbYXVTZWxlY3RdJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYXUtc2VsZWN0IGRyb3Bkb3duIGJvcmRlciBib3JkZXItMSBwLTEgbWItMyBkLWJsb2NrXCIgKyBzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmIChzdGF0ZSgpOyBhcyBzdGF0ZSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VdPVwiY29udHJvbENvbnRhaW5lckRpcmVjdGl2ZVwiXG5cdFx0XHRcdHJvbGU9XCJjb21ib2JveFwiXG5cdFx0XHRcdGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWNvbnRyb2xzXT1cInN0YXRlLmlkICsgJy1tZW51J1wiXG5cdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJzdGF0ZS5vcGVuXCJcblx0XHRcdD5cblx0XHRcdFx0QGlmIChzdGF0ZS5zZWxlY3RlZENvbnRleHRzOyBhcyBzZWxlY3RlZENvbnRleHRzKSB7XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc2VsZWN0ZWRDb250ZXh0czsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0dGFiaW5kZXg9XCItMVwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWJhZGdlIG1lLTFcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3NdPVwic3RhdGUuYmFkZ2VDbGFzc05hbWVcIlxuXHRcdFx0XHRcdFx0XHQoa2V5ZG93bik9XCJfd2lkZ2V0LmFjdGlvbnMub25CYWRnZUtleWRvd24oJGV2ZW50LCBpdGVtQ29udGV4dC5pdGVtKVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RCYWRnZUxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGF0dHIuaWQ9XCJ7eyBzdGF0ZS5pZCB9fVwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWxhYmVsPVwie3sgc3RhdGUuYXJpYUxhYmVsIH19XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhdS1zZWxlY3QtaW5wdXQgZmxleC1ncm93LTEgYm9yZGVyLTBcIlxuXHRcdFx0XHRcdFt2YWx1ZV09XCJzdGF0ZS5maWx0ZXJUZXh0XCJcblx0XHRcdFx0XHRhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuXHRcdFx0XHRcdGF1dG9Db3JyZWN0PVwib2ZmXCJcblx0XHRcdFx0XHRhdXRvQ2FwaXRhbGl6ZT1cIm5vbmVcIlxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0KGlucHV0KT1cIl93aWRnZXQuYWN0aW9ucy5vbklucHV0KCRldmVudClcIlxuXHRcdFx0XHRcdChrZXlkb3duKT1cIl93aWRnZXQuYWN0aW9ucy5vbklucHV0S2V5ZG93bigkZXZlbnQpXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0QGlmIChzdGF0ZS5vcGVuICYmIHN0YXRlLnZpc2libGVJdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0PHVsXG5cdFx0XHRcdFx0cm9sZT1cImxpc3Rib3hcIlxuXHRcdFx0XHRcdFtpZF09XCJzdGF0ZS5pZCArICctbWVudSdcIlxuXHRcdFx0XHRcdFthdVVzZV09XCJtZW51RGlyZWN0aXZlXCJcblx0XHRcdFx0XHRbY2xhc3NdPVwiJ2Ryb3Bkb3duLW1lbnUgc2hvdyAnICsgKG1lbnVDbGFzc05hbWUgfHwgJycpXCJcblx0XHRcdFx0XHRbYXR0ci5kYXRhLXBvcHBlci1wbGFjZW1lbnRdPVwic3RhdGUucGxhY2VtZW50XCJcblx0XHRcdFx0XHQobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHN0YXRlLnZpc2libGVJdGVtczsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRyb2xlPVwib3B0aW9uXCJcblx0XHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1zZWxlY3RlZF09XCJpdGVtQ29udGV4dC5zZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWl0ZW0gZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZSBcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MudGV4dC1iZy1wcmltYXJ5XT1cIml0ZW1Db250ZXh0ID09PSBzdGF0ZS5oaWdobGlnaHRlZFwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtQ29udGV4dC5zZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYXBpLnRvZ2dsZUl0ZW0oaXRlbUNvbnRleHQuaXRlbSlcIlxuXHRcdFx0XHRcdFx0XHRbc3R5bGUuY3Vyc29yXT1cIidwb2ludGVyJ1wiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHR9XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNlbGVjdFdpZGdldDxJdGVtPj4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIGFyaWEtbGFiZWwgdXNlZCBmb3IgdGhlIGlucHV0IGluc2lkZSB0aGUgc2VsZWN0XG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIGlkIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUlkJykgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhdmFpbGFibGUgaXRlbXMgZm9yIHRoZSBkcm9wZG93blxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1zJykgaXRlbXM6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhbGxvd2VkIHBsYWNlbWVudHMgZm9yIHRoZSBkcm9wZG93bi5cblx0ICogVGhpcyByZWZlcnMgdG8gdGhlIFthbGxvd2VkUGxhY2VtZW50cyBmcm9tIGZsb2F0aW5nIFVJXShodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnQjYWxsb3dlZHBsYWNlbWVudHMpLCBnaXZlbiB0aGUgZGlmZmVyZW50IFtQbGFjZW1lbnQgcG9zc2liaWxpdGllc10oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9jb21wdXRlUG9zaXRpb24jcGxhY2VtZW50KS5cblx0ICovXG5cdEBJbnB1dCgnYXVBbGxvd2VkUGxhY2VtZW50cycpIGFsbG93ZWRQbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIG9wZW5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU9wZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZpbHRlcmVkIHRleHQgdG8gYmUgZGlzcGxheSBpbiB0aGUgZmlsdGVyIGlucHV0XG5cdCAqL1xuXHRASW5wdXQoJ2F1RmlsdGVyVGV4dCcpIGZpbHRlclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHNlbGVjdGVkIGl0ZW0gaWRzXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2VsZWN0ZWQnKSBzZWxlY3RlZDogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIGEgbG9hZGluZyBwcm9jZXNzIGlzIGJlaW5nIGRvbmVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUxvYWRpbmcnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBnZXQgdGhlIGlkIG9mIGFuIGl0ZW1cblx0ICogQnkgZGVmYXVsdCwgdGhlIGl0ZW0gaXMgcmV0dXJuZWRcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWRGbicpIGl0ZW1JZEZuOiAoKGl0ZW06IEl0ZW0pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdU1lbnVDbGFzc05hbWUnKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RCYWRnZUxhYmVsJykgc2xvdEJhZGdlTGFiZWw6IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RJdGVtJykgc2xvdEl0ZW06IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RJdGVtRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ6IFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGZpbHRlciBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1RmlsdGVyVGV4dENoYW5nZScpIGZpbHRlclRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHNlbGVjdGlvbiBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1U2VsZWN0ZWRDaGFuZ2UnKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVtdPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1T3BlbkNoYW5nZScpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIG1lbnUgaXRlbXNcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51SXRlbUNsYXNzTmFtZScpIG1lbnVJdGVtQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHNlbGVjdGVkIGl0ZW1zIChkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IHpvbmUpXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFkZ2VDbGFzc05hbWUnKSBiYWRnZUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgbmF2aWdhYmxlIGVsZW1lbnRzIHdpdGhpbiBhbiBIVE1MIGVsZW1lbnQgY29udGFpbmluZyBiYWRnZXMgYW5kIHRoZSBpbnB1dC5cblx0ICovXG5cdEBJbnB1dCgnYXVOYXZTZWxlY3RvcicpIG5hdlNlbGVjdG9yOiAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBOb2RlTGlzdE9mPEhUTUxTcGFuRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+KSB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8U2VsZWN0V2lkZ2V0PEl0ZW0+Pih7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2VsZWN0LFxuXHRcdHdpZGdldE5hbWU6ICdzZWxlY3QnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25PcGVuQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMub3BlbkNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uU2VsZWN0ZWRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uRmlsdGVyVGV4dENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLmZpbHRlclRleHRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMucmVmZXJlbmNlRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRAQ2FjaGVkUHJvcGVydHlcblx0Z2V0IG1lbnVEaXJlY3RpdmUoKSB7XG5cdFx0cmV0dXJuIG1lcmdlRGlyZWN0aXZlcyh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuZmxvYXRpbmdEaXJlY3RpdmUpO1xuXHR9XG5cblx0QENhY2hlZFByb3BlcnR5XG5cdGdldCBjb250cm9sQ29udGFpbmVyRGlyZWN0aXZlKCkge1xuXHRcdHJldHVybiBtZXJnZURpcmVjdGl2ZXModGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmUsIHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmlucHV0Q29udGFpbmVyRGlyZWN0aXZlKTtcblx0fVxuXG5cdGl0ZW1DdHhUcmFja0J5KF86IG51bWJlciwgaXRlbUNvbnRleHQ6IEl0ZW1Db250ZXh0PEl0ZW0+KSB7XG5cdFx0cmV0dXJuIGl0ZW1Db250ZXh0LmlkO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RCYWRnZUxhYmVsOiB0aGlzLnNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW06IHRoaXMuc2xvdFNlbGVjdEl0ZW1Gcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
