const t=`import { __decorate } from "tslib";
import { BaseWidgetDirective, CachedProperty, SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createSelect, mergeDirectives, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["auSelect", ""];
function SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
const _c1 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
function SelectComponent_Conditional_0_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵlistener("keydown", function SelectComponent_Conditional_0_Conditional_1_For_1_Template_div_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r13); const itemContext_r6 = restoredCtx.$implicit; const ctx_r12 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r12._widget.actions.onBadgeKeydown($event, itemContext_r6.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r6 = ctx.$implicit;
    const state_r1 = i0.ɵɵnextContext(2);
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(state_r1.badgeClassName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c1, state_r1, ctx_r5.widget, itemContext_r6));
} }
function SelectComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_0_Conditional_1_For_1_Template, 2, 8, "div", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function SelectComponent_Conditional_0_Conditional_3_For_2_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r23); const itemContext_r16 = restoredCtx.$implicit; const ctx_r22 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r22.widget.api.toggleItem(itemContext_r16.item)); });
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r16 = ctx.$implicit;
    const state_r1 = i0.ɵɵnextContext(2);
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("au-select-item dropdown-item position-relative" + (itemContext_r16 === state_r1.highlighted ? " bg-primary text-light" : ""));
    i0.ɵɵclassProp("selected", itemContext_r16.selected);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r1.slotItem)("auSlotProps", i0.ɵɵpureFunction3(6, _c1, state_r1, ctx_r15.widget, itemContext_r16));
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
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r1.visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelementStart(2, "input", 1);
    i0.ɵɵlistener("input", function SelectComponent_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27._widget.actions.onInput($event)); })("keydown", function SelectComponent_Conditional_0_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r29._widget.actions.onInputKeydown($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 4, "ul", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    let SelectComponent_Conditional_0_contFlowTmp;
    i0.ɵɵproperty("auUse", ctx_r0.controlContainerDirective);
    i0.ɵɵattribute("aria-expanded", ctx.open);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, (SelectComponent_Conditional_0_contFlowTmp = ctx.selectedContexts) ? 1 : -1, SelectComponent_Conditional_0_contFlowTmp);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx.filterText);
    i0.ɵɵattribute("id", ctx.id)("aria-label", ctx.ariaLabel);
    i0.ɵɵadvance();
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
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], id: [i0.ɵɵInputFlags.None, "auId", "id"], items: [i0.ɵɵInputFlags.None, "auItems", "items"], allowedPlacements: [i0.ɵɵInputFlags.None, "auAllowedPlacements", "allowedPlacements"], open: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auOpen", "open", auBooleanAttribute], filterText: [i0.ɵɵInputFlags.None, "auFilterText", "filterText"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], selected: [i0.ɵɵInputFlags.None, "auSelected", "selected"], loading: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auLoading", "loading", auBooleanAttribute], itemIdFn: [i0.ɵɵInputFlags.None, "auItemIdFn", "itemIdFn"], menuClassName: [i0.ɵɵInputFlags.None, "auMenuClassName", "menuClassName"], slotBadgeLabel: [i0.ɵɵInputFlags.None, "auSlotBadgeLabel", "slotBadgeLabel"], slotItem: [i0.ɵɵInputFlags.None, "auSlotItem", "slotItem"], menuItemClassName: [i0.ɵɵInputFlags.None, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [i0.ɵɵInputFlags.None, "auBadgeClassName", "badgeClassName"], navSelector: [i0.ɵɵInputFlags.None, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "value", "input", "keydown"], [3, "auUse", "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "keydown"], [3, "auSlot", "auSlotProps"], ["tabindex", "-1", "class", "au-select-badge me-1", 3, "class"], [3, "auUse", "mousedown"], [3, "click"], [3, "class", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 7);
        } if (rf & 2) {
            let SelectComponent_contFlowTmp;
            i0.ɵɵconditional(0, (SelectComponent_contFlowTmp = ctx.state()) ? 0 : -1, SelectComponent_contFlowTmp);
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
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state.placement"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							[class]="'au-select-item dropdown-item position-relative' + (itemContext === state.highlighted ? ' bg-primary text-light' : '')"
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
        }], navSelector: [{
            type: Input,
            args: ['auNavSelector']
        }], menuDirective: [], controlContainerDirective: [] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 97 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLGVBQWUsRUFDZixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQXNDdEksOEJBS0M7SUFEQSxvUUFBVyxlQUFBLG1FQUF3RCxDQUFBLElBQUM7SUFFcEUsa0hBQXdHO0lBQ3pHLGlCQUFNOzs7OztJQUpMLHNDQUE4QjtJQUdqQixjQUErQjtJQUEvQixnREFBK0Isb0ZBQUE7OztJQVA5QywySUFTQzs7SUFURCxrQkFTQzs7Ozs7SUF3QkEsNkJBSUM7SUFEQSwwUEFBUyxlQUFBLG1EQUF1QyxDQUFBLElBQUM7SUFFakQsa0hBQWtHO0lBQ25HLGlCQUFLOzs7OztJQUxKLDRJQUFnSTtJQUNoSSxvREFBdUM7SUFHMUIsY0FBeUI7SUFBekIsMENBQXlCLHNGQUFBOzs7SUFaekMsNkJBS0M7SUFEQSxrSUFBYSx1QkFBdUIsSUFBQztJQUVyQywySUFRQztJQUNGLGlCQUFLOzs7O0lBYkosbUVBQXVEO0lBRHZELDRDQUF1QjtJQUV2QiwyREFBOEM7SUFHOUMsY0FRQztJQVJELG9DQVFDOzs7O0lBaERILDhCQU1DO0lBQ0EsNEVBV0M7SUFDRCxnQ0FZRTtJQUZELDJLQUFTLGVBQUEsdUNBQStCLENBQUEsSUFBQyxrS0FDOUIsZUFBQSw4Q0FB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QUt0QyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFLeUMsT0FBTztrQkFBbEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBTXJDLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUtPLGFBQWE7a0JBQXRDLEtBQUs7bUJBQUMsaUJBQWlCO1lBRUcsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFDaUMsK0JBQStCO2tCQUF4RixZQUFZO21CQUFDLHlCQUF5QixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUVuQyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFDaUMseUJBQXlCO2tCQUE1RSxZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUtwQixnQkFBZ0I7a0JBQTdDLE1BQU07bUJBQUMsb0JBQW9CO1lBS0EsY0FBYztrQkFBekMsTUFBTTttQkFBQyxrQkFBa0I7WUFLRixVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFLUSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBS0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFLRCxXQUFXO2tCQUFsQyxLQUFLO21CQUFDLGVBQWU7WUFnQmxCLGFBQWEsTUFLYix5QkFBeUI7a0ZBdEhqQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgSXRlbUNvbnRleHQsIFNlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXQsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDYWNoZWRQcm9wZXJ0eSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVTZWxlY3QsXG5cdG1lcmdlRGlyZWN0aXZlcyxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtQbGFjZW1lbnR9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0QmFkZ2VMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTZWxlY3RJdGVtXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c2VsZWN0b3I6ICdbYXVTZWxlY3RdJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYXUtc2VsZWN0IGRyb3Bkb3duIGJvcmRlciBib3JkZXItMSBwLTEgbWItMyBkLWJsb2NrXCIgKyBzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmIChzdGF0ZSgpOyBhcyBzdGF0ZSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VdPVwiY29udHJvbENvbnRhaW5lckRpcmVjdGl2ZVwiXG5cdFx0XHRcdHJvbGU9XCJjb21ib2JveFwiXG5cdFx0XHRcdGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXBcIlxuXHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic3RhdGUub3BlblwiXG5cdFx0XHQ+XG5cdFx0XHRcdEBpZiAoc3RhdGUuc2VsZWN0ZWRDb250ZXh0czsgYXMgc2VsZWN0ZWRDb250ZXh0cykge1xuXHRcdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHNlbGVjdGVkQ29udGV4dHM7IHRyYWNrIGl0ZW1DdHhUcmFja0J5KCRpbmRleCwgaXRlbUNvbnRleHQpKSB7XG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImF1LXNlbGVjdC1iYWRnZSBtZS0xXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzXT1cInN0YXRlLmJhZGdlQ2xhc3NOYW1lXCJcblx0XHRcdFx0XHRcdFx0KGtleWRvd24pPVwiX3dpZGdldC5hY3Rpb25zLm9uQmFkZ2VLZXlkb3duKCRldmVudCwgaXRlbUNvbnRleHQuaXRlbSlcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90QmFkZ2VMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRhdHRyLmlkPVwie3sgc3RhdGUuaWQgfX1cIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cInt7IHN0YXRlLmFyaWFMYWJlbCB9fVwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWlucHV0IGZsZXgtZ3Jvdy0xIGJvcmRlci0wXCJcblx0XHRcdFx0XHRbdmFsdWVdPVwic3RhdGUuZmlsdGVyVGV4dFwiXG5cdFx0XHRcdFx0YXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJub25lXCJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdChpbnB1dCk9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dCgkZXZlbnQpXCJcblx0XHRcdFx0XHQoa2V5ZG93bik9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dEtleWRvd24oJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUub3BlbiAmJiBzdGF0ZS52aXNpYmxlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdFthdVVzZV09XCJtZW51RGlyZWN0aXZlXCJcblx0XHRcdFx0XHRbY2xhc3NdPVwiJ2Ryb3Bkb3duLW1lbnUgc2hvdyAnICsgKG1lbnVDbGFzc05hbWUgfHwgJycpXCJcblx0XHRcdFx0XHRbYXR0ci5kYXRhLXBvcHBlci1wbGFjZW1lbnRdPVwic3RhdGUucGxhY2VtZW50XCJcblx0XHRcdFx0XHQobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHN0YXRlLnZpc2libGVJdGVtczsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRbY2xhc3NdPVwiJ2F1LXNlbGVjdC1pdGVtIGRyb3Bkb3duLWl0ZW0gcG9zaXRpb24tcmVsYXRpdmUnICsgKGl0ZW1Db250ZXh0ID09PSBzdGF0ZS5oaWdobGlnaHRlZCA/ICcgYmctcHJpbWFyeSB0ZXh0LWxpZ2h0JyA6ICcnKVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5zZWxlY3RlZF09XCJpdGVtQ29udGV4dC5zZWxlY3RlZFwiXG5cdFx0XHRcdFx0XHRcdChjbGljayk9XCJ3aWRnZXQuYXBpLnRvZ2dsZUl0ZW0oaXRlbUNvbnRleHQuaXRlbSlcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0fVxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50PEl0ZW0+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBhcmlhLWxhYmVsIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVJZCcpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYWxsb3dlZCBwbGFjZW1lbnRzIGZvciB0aGUgZHJvcGRvd24uXG5cdCAqIFRoaXMgcmVmZXJzIHRvIHRoZSBbYWxsb3dlZFBsYWNlbWVudHMgZnJvbSBmbG9hdGluZyBVSV0oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50I2FsbG93ZWRwbGFjZW1lbnRzKSwgZ2l2ZW4gdGhlIGRpZmZlcmVudCBbUGxhY2VtZW50IHBvc3NpYmlsaXRpZXNdKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI3BsYWNlbWVudCkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWxsb3dlZFBsYWNlbWVudHMnKSBhbGxvd2VkUGxhY2VtZW50czogUGxhY2VtZW50W10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBvcGVuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVPcGVuJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKi9cblx0QElucHV0KCdhdUZpbHRlclRleHQnKSBmaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBzZWxlY3RlZCBpdGVtIGlkc1xuXHQgKi9cblx0QElucHV0KCdhdVNlbGVjdGVkJykgc2VsZWN0ZWQ6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiBhIGxvYWRpbmcgcHJvY2VzcyBpcyBiZWluZyBkb25lXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVMb2FkaW5nJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBsb2FkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZnVuY3Rpb24gdG8gZ2V0IHRoZSBpZCBvZiBhbiBpdGVtXG5cdCAqIEJ5IGRlZmF1bHQsIHRoZSBpdGVtIGlzIHJldHVybmVkXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkRm4nKSBpdGVtSWRGbjogKChpdGVtOiBJdGVtKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiB0aGUgZHJvcGRvd24gbWVudSBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51Q2xhc3NOYW1lJykgbWVudUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90QmFkZ2VMYWJlbCcpIHNsb3RCYWRnZUxhYmVsOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50OiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90SXRlbScpIHNsb3RJdGVtOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0SXRlbURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0SXRlbUZyb21Db250ZW50OiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUZpbHRlclRleHRDaGFuZ2UnKSBmaWx0ZXJUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNlbGVjdGVkQ2hhbmdlJykgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIGRyb3Bkb3duIG9wZW4gc3RhdGUgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdU9wZW5DaGFuZ2UnKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBtZW51IGl0ZW1zXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUl0ZW1DbGFzc05hbWUnKSBtZW51SXRlbUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBzZWxlY3RlZCBpdGVtcyAoZGlzcGxheWVkIGluIHRoZSBpbnB1dCB6b25lKVxuXHQgKi9cblx0QElucHV0KCdhdUJhZGdlQ2xhc3NOYW1lJykgYmFkZ2VDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0cmlldmVzIG5hdmlnYWJsZSBlbGVtZW50cyB3aXRoaW4gYW4gSFRNTCBlbGVtZW50IGNvbnRhaW5pbmcgYmFkZ2VzIGFuZCB0aGUgaW5wdXQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TmF2U2VsZWN0b3InKSBuYXZTZWxlY3RvcjogKChub2RlOiBIVE1MRWxlbWVudCkgPT4gTm9kZUxpc3RPZjxIVE1MU3BhbkVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PFNlbGVjdFdpZGdldDxJdGVtPj4oe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNlbGVjdCxcblx0XHR3aWRnZXROYW1lOiAnc2VsZWN0Jyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uT3BlbkNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLm9wZW5DaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvblNlbGVjdGVkQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvbkZpbHRlclRleHRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5maWx0ZXJUZXh0Q2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnJlZmVyZW5jZURpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0QENhY2hlZFByb3BlcnR5XG5cdGdldCBtZW51RGlyZWN0aXZlKCkge1xuXHRcdHJldHVybiBtZXJnZURpcmVjdGl2ZXModGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmUsIHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmZsb2F0aW5nRGlyZWN0aXZlKTtcblx0fVxuXG5cdEBDYWNoZWRQcm9wZXJ0eVxuXHRnZXQgY29udHJvbENvbnRhaW5lckRpcmVjdGl2ZSgpIHtcblx0XHRyZXR1cm4gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5pbnB1dENvbnRhaW5lckRpcmVjdGl2ZSk7XG5cdH1cblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90QmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtOiB0aGlzLnNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
