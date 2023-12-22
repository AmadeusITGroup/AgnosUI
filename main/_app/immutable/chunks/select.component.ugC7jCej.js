const t=`import { __decorate } from "tslib";
import { BaseWidgetDirective, CachedProperty, SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createSelect, mergeDirectives, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["auSelect", ""];
function SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
const _c1 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
function SelectComponent_Conditional_0_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r6 = ctx.$implicit;
    const state_r1 = i0.ɵɵnextContext(2);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(state_r1.badgeClassName);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", state_r1.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c1, state_r1, ctx_r5.widget, itemContext_r6));
} }
function SelectComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_0_Conditional_1_For_1_Template, 2, 8, "div", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function SelectComponent_Conditional_0_Conditional_3_For_2_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r21); const itemContext_r14 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r20.widget.api.toggleItem(itemContext_r14.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r14 = ctx.$implicit;
    const state_r1 = i0.ɵɵnextContext(2);
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("bg-light", itemContext_r14 === state_r1.highlighted)("selected", itemContext_r14.selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", state_r1.slotItem)("auSlotProps", i0.ɵɵpureFunction3(6, _c1, state_r1, ctx_r13.widget, itemContext_r14));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵlistener("mousedown", function SelectComponent_Conditional_0_Conditional_3_Template_ul_mousedown_0_listener($event) { return $event.preventDefault(); });
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 10, "li", 8, i0.ɵɵcomponentInstance().itemCtxTrackBy);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = i0.ɵɵnextContext();
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("dropdown-menu show " + (ctx_r3.menuClassName || ""));
    i0.ɵɵproperty("auUse", ctx_r3.menuDirective);
    i0.ɵɵattribute("data-popper-placement", state_r1.placement);
    i0.ɵɵadvance(1);
    i0.ɵɵrepeater(state_r1.visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelementStart(2, "input", 1);
    i0.ɵɵlistener("keydown", function SelectComponent_Conditional_0_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25._widget.actions.onInputKeydown($event)); })("input", function SelectComponent_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27._widget.actions.onInput($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 4, "ul", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    let SelectComponent_Conditional_0_contFlowTmp;
    i0.ɵɵproperty("auUse", ctx_r0._widget.directives.hasFocusDirective);
    i0.ɵɵattribute("aria-expanded", ctx.open);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(1, (SelectComponent_Conditional_0_contFlowTmp = ctx.selectedContexts) ? 1 : -1, SelectComponent_Conditional_0_contFlowTmp);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx.filterText);
    i0.ɵɵattribute("id", ctx.id)("aria-label", ctx.ariaLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(3, ctx.open && ctx.visibleItems.length ? 3 : -1);
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
        } }, inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], id: ["auId", "id"], items: ["auItems", "items"], allowedPlacements: ["auAllowedPlacements", "allowedPlacements"], open: ["auOpen", "open", auBooleanAttribute], filterText: ["auFilterText", "filterText"], className: ["auClassName", "className"], disabled: ["auDisabled", "disabled", auBooleanAttribute], selected: ["auSelected", "selected"], loading: ["auLoading", "loading", auBooleanAttribute], itemIdFn: ["auItemIdFn", "itemIdFn"], menuClassName: ["auMenuClassName", "menuClassName"], slotBadgeLabel: ["auSlotBadgeLabel", "slotBadgeLabel"], slotItem: ["auSlotItem", "slotItem"], menuItemClassName: ["auMenuItemClassName", "menuItemClassName"], badgeClassName: ["auBadgeClassName", "badgeClassName"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "value", "keydown", "input"], [3, "auUse", "class"], [1, "au-select-badge", "me-1"], [3, "auSlot", "auSlotProps"], ["class", "au-select-badge me-1", 3, "class"], [3, "auUse", "mousedown"], [1, "au-select-item", "dropdown-item", "position-relative", 3, "click"], ["class", "au-select-item dropdown-item position-relative", 3, "bg-light", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 7);
        } if (rf & 2) {
            let SelectComponent_contFlowTmp;
            i0.ɵɵconditional(0, (SelectComponent_contFlowTmp = ctx.state()) ? 0 : -1, SelectComponent_contFlowTmp);
        } }, dependencies: [UseDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    CachedProperty
], SelectComponent.prototype, "menuDirective", null);
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
				[auUse]="_widget.directives.hasFocusDirective"
				role="combobox"
				class="d-flex align-items-center flex-wrap"
				aria-haspopup="listbox"
				[attr.aria-expanded]="state.open"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div class="au-select-badge me-1" [class]="state.badgeClassName">
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
					(keydown)="_widget.actions.onInputKeydown($event)"
					(input)="_widget.actions.onInput($event)"
				/>
			</div>
			@if (state.open && state.visibleItems.length) {
				<ul
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state.placement"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							class="au-select-item dropdown-item position-relative"
							[class.bg-light]="itemContext === state.highlighted"
							[class.selected]="itemContext.selected"
							(click)="widget.api.toggleItem(itemContext.item)"
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
        }], menuDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 94 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLGVBQWUsRUFDZixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBdUN0SSw4QkFBaUU7SUFDaEUsa0hBQXdHO0lBQ3pHLGlCQUFNOzs7OztJQUY0QixzQ0FBOEI7SUFDbEQsZUFBK0I7SUFBL0IsZ0RBQStCLG9GQUFBOzs7SUFGOUMsMklBSUM7O0lBSkQsa0JBSUM7Ozs7O0lBd0JBLDZCQUtDO0lBREEsMFBBQVMsZUFBQSxtREFBdUMsQ0FBQSxJQUFDO0lBRWpELGtIQUFrRztJQUNuRyxpQkFBSzs7Ozs7SUFMSixvRUFBb0Qsc0NBQUE7SUFJdkMsZUFBeUI7SUFBekIsMENBQXlCLHNGQUFBOzs7SUFiekMsNkJBS0M7SUFEQSxrSUFBYSx1QkFBdUIsSUFBQztJQUVyQywySUFTQztJQUNGLGlCQUFLOzs7O0lBZEosbUVBQXVEO0lBRHZELDRDQUF1QjtJQUV2QiwyREFBOEM7SUFHOUMsZUFTQztJQVRELG9DQVNDOzs7O0lBNUNILDhCQU1DO0lBQ0EsNEVBTUM7SUFDRCxnQ0FZRTtJQUZELCtLQUFXLGVBQUEsOENBQXNDLENBQUEsSUFBQyw4SkFDekMsZUFBQSx1Q0FBK0IsQ0FBQSxJQURVO0lBVm5ELGlCQVlFLEVBQUE7SUFFSCxxRkFrQkM7Ozs7SUE3Q0EsbUVBQThDO0lBSTlDLHlDQUFpQztJQUVqQyxlQU1DO0lBTkQsMklBTUM7SUFNQSxlQUEwQjtJQUExQixzQ0FBMEI7SUFKMUIsNEJBQXdCLDZCQUFBO0lBYTFCLGVBa0JDO0lBbEJELGlFQWtCQzs7QUF4RUosTUFBTSxPQUFPLHlCQUF5QjtJQUR0QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBMkQsQ0FBQSxDQUFDLENBQUM7S0FJekY7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQU8sSUFBcUMsRUFBRSxPQUFnQjtRQUMxRixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7MEZBSlcseUJBQXlCO29FQUF6Qix5QkFBeUI7O2lGQUF6Qix5QkFBeUI7Y0FEckMsU0FBUztlQUFDLEVBQUMsUUFBUSxFQUFFLGlDQUFpQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUM7O0FBUzFFLE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFUSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQTJELENBQUEsQ0FBQyxDQUFDO0tBSXpGO0lBSEEsTUFBTSxDQUFDLHNCQUFzQixDQUFPLElBQStCLEVBQUUsT0FBZ0I7UUFDcEYsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO29GQUpXLG1CQUFtQjtvRUFBbkIsbUJBQW1COztpRkFBbkIsbUJBQW1CO2NBRC9CLFNBQVM7ZUFBQyxFQUFDLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDOztBQXFFcEUsTUFBTSxPQUFPLGVBQXNCLFNBQVEsbUJBQXVDO0lBN0RsRjs7UUFrSUM7O1dBRUc7UUFDMkIscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU1RTs7V0FFRztRQUN5QixtQkFBYyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFeEU7O1dBRUc7UUFDcUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFZeEQsWUFBTyxHQUFHLGlCQUFpQixDQUFxQjtZQUN4RCxPQUFPLEVBQUUsWUFBWTtZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUU7Z0JBQ1AsWUFBWSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3BELGdCQUFnQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzVELGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoRTtZQUNELFNBQVMsRUFBRSxHQUFHLEVBQUU7Z0JBQ2YsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUNqRSxDQUFDO1NBQ0QsQ0FBQyxDQUFDO0tBaUJIO0lBZEEsSUFBSSxhQUFhO1FBQ2hCLE9BQU8sZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUVELGNBQWMsQ0FBQyxDQUFTLEVBQUUsV0FBOEI7UUFDdkQsT0FBTyxXQUFXLENBQUMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDdkIsY0FBYyxFQUFFLElBQUksQ0FBQywrQkFBK0IsRUFBRSxXQUFXO1lBQ2pFLFFBQVEsRUFBRSxJQUFJLENBQUMseUJBQXlCLEVBQUUsV0FBVztTQUNyRCxDQUFDLENBQUM7SUFDSixDQUFDO2dPQXpIVyxlQUFlLFNBQWYsZUFBZTtvRUFBZixlQUFlO3dDQWdFYix5QkFBeUI7d0NBR3pCLG1CQUFtQjs7Ozs7OzsyTUExQ0csa0JBQWtCLDZIQWVkLGtCQUFrQiwyRUFVbkIsa0JBQWtCO1lBckd4RCw4REFnREM7OztZQWhERCxzR0FnREM7NEJBeERRLFlBQVksRUFBRSxhQUFhOztBQXVLckM7SUFEQyxjQUFjO29EQUdkO2lGQTlHVyxlQUFlO2NBN0QzQixTQUFTO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsSUFBSSxFQUFFO29CQUNMLFNBQVMsRUFBRSwyRUFBMkU7aUJBQ3RGO2dCQUVELFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrRFQ7YUFDRDtnQkFLc0IsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS0wsRUFBRTtrQkFBaEIsS0FBSzttQkFBQyxNQUFNO1lBS0ssS0FBSztrQkFBdEIsS0FBSzttQkFBQyxTQUFTO1lBTWMsaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQUs2QixJQUFJO2tCQUE1RCxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLaEMsVUFBVTtrQkFBaEMsS0FBSzttQkFBQyxjQUFjO1lBS0MsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBS3lDLFFBQVE7a0JBQXBFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQUt0QyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFLeUMsT0FBTztrQkFBbEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTXJDLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUtPLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRUcsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFDaUMsK0JBQStCO2tCQUF4RixZQUFZO21CQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUVuQyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFDaUMseUJBQXlCO2tCQUE1RSxZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUtwQixnQkFBZ0I7a0JBQTdDLE1BQU07bUJBQUMsb0JBQW9CO1lBS0EsY0FBYztrQkFBekMsTUFBTTttQkFBQyxrQkFBa0I7WUFLRixVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFLUSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBS0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFnQnJCLGFBQWE7a0ZBNUdMLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBJdGVtQ29udGV4dCwgU2VsZWN0SXRlbUNvbnRleHQsIFNlbGVjdFdpZGdldCwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdENhY2hlZFByb3BlcnR5LFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVNlbGVjdCxcblx0bWVyZ2VEaXJlY3RpdmVzLFxuXHR1c2VEaXJlY3RpdmVGb3JIb3N0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1BsYWNlbWVudH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTZWxlY3RCYWRnZUxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEl0ZW1dJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SXRlbURpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzZWxlY3RvcjogJ1thdVNlbGVjdF0nLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhdS1zZWxlY3QgZHJvcGRvd24gYm9yZGVyIGJvcmRlci0xIHAtMSBtYi0zIGQtYmxvY2tcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0fSxcblxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBpZiAoc3RhdGUoKTsgYXMgc3RhdGUpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2F1VXNlXT1cIl93aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZVwiXG5cdFx0XHRcdHJvbGU9XCJjb21ib2JveFwiXG5cdFx0XHRcdGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIlxuXHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic3RhdGUub3BlblwiXG5cdFx0XHQ+XG5cdFx0XHRcdEBpZiAoc3RhdGUuc2VsZWN0ZWRDb250ZXh0czsgYXMgc2VsZWN0ZWRDb250ZXh0cykge1xuXHRcdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHNlbGVjdGVkQ29udGV4dHM7IHRyYWNrIGl0ZW1DdHhUcmFja0J5KCRpbmRleCwgaXRlbUNvbnRleHQpKSB7XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYXUtc2VsZWN0LWJhZGdlIG1lLTFcIiBbY2xhc3NdPVwic3RhdGUuYmFkZ2VDbGFzc05hbWVcIj5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEJhZGdlTGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW1Db250ZXh0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0YXR0ci5pZD1cInt7IHN0YXRlLmlkIH19XCJcblx0XHRcdFx0XHRhdHRyLmFyaWEtbGFiZWw9XCJ7eyBzdGF0ZS5hcmlhTGFiZWwgfX1cIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRjbGFzcz1cImF1LXNlbGVjdC1pbnB1dCBmbGV4LWdyb3ctMSBib3JkZXItMFwiXG5cdFx0XHRcdFx0W3ZhbHVlXT1cInN0YXRlLmZpbHRlclRleHRcIlxuXHRcdFx0XHRcdGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG5cdFx0XHRcdFx0YXV0b0NvcnJlY3Q9XCJvZmZcIlxuXHRcdFx0XHRcdGF1dG9DYXBpdGFsaXplPVwibm9uZVwiXG5cdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHQoa2V5ZG93bik9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dEtleWRvd24oJGV2ZW50KVwiXG5cdFx0XHRcdFx0KGlucHV0KT1cIl93aWRnZXQuYWN0aW9ucy5vbklucHV0KCRldmVudClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLm9wZW4gJiYgc3RhdGUudmlzaWJsZUl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHQ8dWxcblx0XHRcdFx0XHRbYXVVc2VdPVwibWVudURpcmVjdGl2ZVwiXG5cdFx0XHRcdFx0W2NsYXNzXT1cIidkcm9wZG93bi1tZW51IHNob3cgJyArIChtZW51Q2xhc3NOYW1lIHx8ICcnKVwiXG5cdFx0XHRcdFx0W2F0dHIuZGF0YS1wb3BwZXItcGxhY2VtZW50XT1cInN0YXRlLnBsYWNlbWVudFwiXG5cdFx0XHRcdFx0KG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzdGF0ZS52aXNpYmxlSXRlbXM7IHRyYWNrIGl0ZW1DdHhUcmFja0J5KCRpbmRleCwgaXRlbUNvbnRleHQpKSB7XG5cdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJhdS1zZWxlY3QtaXRlbSBkcm9wZG93bi1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLmJnLWxpZ2h0XT1cIml0ZW1Db250ZXh0ID09PSBzdGF0ZS5oaWdobGlnaHRlZFwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtQ29udGV4dC5zZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYXBpLnRvZ2dsZUl0ZW0oaXRlbUNvbnRleHQuaXRlbSlcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0fVxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50PEl0ZW0+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBhcmlhLWxhYmVsIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVJZCcpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYWxsb3dlZCBwbGFjZW1lbnRzIGZvciB0aGUgZHJvcGRvd24uXG5cdCAqIFRoaXMgcmVmZXJzIHRvIHRoZSBbYWxsb3dlZFBsYWNlbWVudHMgZnJvbSBmbG9hdGluZyBVSV0oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50I2FsbG93ZWRwbGFjZW1lbnRzKSwgZ2l2ZW4gdGhlIGRpZmZlcmVudCBbUGxhY2VtZW50IHBvc3NpYmlsaXRpZXNdKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI3BsYWNlbWVudCkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWxsb3dlZFBsYWNlbWVudHMnKSBhbGxvd2VkUGxhY2VtZW50czogUGxhY2VtZW50W10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBvcGVuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVPcGVuJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKi9cblx0QElucHV0KCdhdUZpbHRlclRleHQnKSBmaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBzZWxlY3RlZCBpdGVtIGlkc1xuXHQgKi9cblx0QElucHV0KCdhdVNlbGVjdGVkJykgc2VsZWN0ZWQ6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiBhIGxvYWRpbmcgcHJvY2VzcyBpcyBiZWluZyBkb25lXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVMb2FkaW5nJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBsb2FkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZnVuY3Rpb24gdG8gZ2V0IHRoZSBpZCBvZiBhbiBpdGVtXG5cdCAqIEJ5IGRlZmF1bHQsIHRoZSBpdGVtIGlzIHJldHVybmVkXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkRm4nKSBpdGVtSWRGbjogKChpdGVtOiBJdGVtKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiB0aGUgZHJvcGRvd24gbWVudSBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51Q2xhc3NOYW1lJykgbWVudUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90QmFkZ2VMYWJlbCcpIHNsb3RCYWRnZUxhYmVsOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50OiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90SXRlbScpIHNsb3RJdGVtOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0SXRlbURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0SXRlbUZyb21Db250ZW50OiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUZpbHRlclRleHRDaGFuZ2UnKSBmaWx0ZXJUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNlbGVjdGVkQ2hhbmdlJykgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIGRyb3Bkb3duIG9wZW4gc3RhdGUgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdU9wZW5DaGFuZ2UnKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBtZW51IGl0ZW1zXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUl0ZW1DbGFzc05hbWUnKSBtZW51SXRlbUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBzZWxlY3RlZCBpdGVtcyAoZGlzcGxheWVkIGluIHRoZSBpbnB1dCB6b25lKVxuXHQgKi9cblx0QElucHV0KCdhdUJhZGdlQ2xhc3NOYW1lJykgYmFkZ2VDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8U2VsZWN0V2lkZ2V0PEl0ZW0+Pih7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2VsZWN0LFxuXHRcdHdpZGdldE5hbWU6ICdzZWxlY3QnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25PcGVuQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMub3BlbkNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uU2VsZWN0ZWRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uRmlsdGVyVGV4dENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLmZpbHRlclRleHRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMucmVmZXJlbmNlRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRAQ2FjaGVkUHJvcGVydHlcblx0Z2V0IG1lbnVEaXJlY3RpdmUoKSB7XG5cdFx0cmV0dXJuIG1lcmdlRGlyZWN0aXZlcyh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgdGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuZmxvYXRpbmdEaXJlY3RpdmUpO1xuXHR9XG5cblx0aXRlbUN0eFRyYWNrQnkoXzogbnVtYmVyLCBpdGVtQ29udGV4dDogSXRlbUNvbnRleHQ8SXRlbT4pIHtcblx0XHRyZXR1cm4gaXRlbUNvbnRleHQuaWQ7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0c2xvdEJhZGdlTGFiZWw6IHRoaXMuc2xvdFNlbGVjdEJhZGdlTGFiZWxGcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0XHRzbG90SXRlbTogdGhpcy5zbG90U2VsZWN0SXRlbUZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHR9KTtcblx0fVxufVxuIl19`;export{t as default};
