const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createSelect, mergeDirectives, useDirectiveForHost, } from '@agnos-ui/angular-headless';
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
        super();
        /**
         * Callback called when the text filter change
         */
        this.filterTextChange = new EventEmitter(true);
        /**
         * Callback called when the selection change
         */
        this.selectedChange = new EventEmitter(true);
        /**
         * Callback called dropdown open state change
         */
        this.openChange = new EventEmitter(true);
        this._widget = callWidgetFactory({
            factory: createSelect,
            widgetName: 'select',
            events: {
                onOpenChange: (event) => this.openChange.emit(event),
                onSelectedChange: (event) => this.selectedChange.emit(event),
                onFilterTextChange: (event) => this.filterTextChange.emit(event),
            },
        });
        this.menuDirective = mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.floatingDirective);
        useDirectiveForHost(this._widget.directives.referenceDirective);
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
    static { this.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); }; }
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
    }], () => [], { ariaLabel: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 93 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixlQUFlLEVBQ2YsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQXVDdEksOEJBQWlFO0lBQ2hFLGtIQUF3RztJQUN6RyxpQkFBTTs7Ozs7SUFGNEIsc0NBQThCO0lBQ2xELGVBQStCO0lBQS9CLGdEQUErQixvRkFBQTs7O0lBRjlDLDJJQUlDOztJQUpELGtCQUlDOzs7OztJQXdCQSw2QkFLQztJQURBLDBQQUFTLGVBQUEsbURBQXVDLENBQUEsSUFBQztJQUVqRCxrSEFBa0c7SUFDbkcsaUJBQUs7Ozs7O0lBTEosb0VBQW9ELHNDQUFBO0lBSXZDLGVBQXlCO0lBQXpCLDBDQUF5QixzRkFBQTs7O0lBYnpDLDZCQUtDO0lBREEsa0lBQWEsdUJBQXVCLElBQUM7SUFFckMsMklBU0M7SUFDRixpQkFBSzs7OztJQWRKLG1FQUF1RDtJQUR2RCw0Q0FBdUI7SUFFdkIsMkRBQThDO0lBRzlDLGVBU0M7SUFURCxvQ0FTQzs7OztJQTVDSCw4QkFNQztJQUNBLDRFQU1DO0lBQ0QsZ0NBWUU7SUFGRCwrS0FBVyxlQUFBLDhDQUFzQyxDQUFBLElBQUMsOEpBQ3pDLGVBQUEsdUNBQStCLENBQUEsSUFEVTtJQVZuRCxpQkFZRSxFQUFBO0lBRUgscUZBa0JDOzs7O0lBN0NB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LEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRW5DLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUNpQyx5QkFBeUI7a0JBQTVFLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS3BCLGdCQUFnQjtrQkFBN0MsTUFBTTttQkFBQyxvQkFBb0I7WUFLQSxjQUFjO2tCQUF6QyxNQUFNO21CQUFDLGtCQUFrQjtZQUtGLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQUtRLGlCQUFpQjtrQkFBOUMsS0FBSzttQkFBQyxxQkFBcUI7WUFLRCxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjs7a0ZBNUZiLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBJdGVtQ29udGV4dCwgU2VsZWN0SXRlbUNvbnRleHQsIFNlbGVjdFdpZGdldCwgU2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0YXVCb29sZWFuQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlU2VsZWN0LFxuXHRtZXJnZURpcmVjdGl2ZXMsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7UGxhY2VtZW50fSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEJhZGdlTGFiZWxdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0SXRlbV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0SXRlbURpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnW2F1U2VsZWN0XScsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImF1LXNlbGVjdCBkcm9wZG93biBib3JkZXIgYm9yZGVyLTEgcC0xIG1iLTMgZC1ibG9ja1wiICsgc3RhdGUoKS5jbGFzc05hbWUnLFxuXHR9LFxuXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmIChzdGF0ZSgpOyBhcyBzdGF0ZSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VdPVwiX3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlXCJcblx0XHRcdFx0cm9sZT1cImNvbWJvYm94XCJcblx0XHRcdFx0Y2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcFwiXG5cdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJzdGF0ZS5vcGVuXCJcblx0XHRcdD5cblx0XHRcdFx0QGlmIChzdGF0ZS5zZWxlY3RlZENvbnRleHRzOyBhcyBzZWxlY3RlZENvbnRleHRzKSB7XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc2VsZWN0ZWRDb250ZXh0czsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdS1zZWxlY3QtYmFkZ2UgbWUtMVwiIFtjbGFzc109XCJzdGF0ZS5iYWRnZUNsYXNzTmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90QmFkZ2VMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRhdHRyLmlkPVwie3sgc3RhdGUuaWQgfX1cIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cInt7IHN0YXRlLmFyaWFMYWJlbCB9fVwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWlucHV0IGZsZXgtZ3Jvdy0xIGJvcmRlci0wXCJcblx0XHRcdFx0XHRbdmFsdWVdPVwic3RhdGUuZmlsdGVyVGV4dFwiXG5cdFx0XHRcdFx0YXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJub25lXCJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdChrZXlkb3duKT1cIl93aWRnZXQuYWN0aW9ucy5vbklucHV0S2V5ZG93bigkZXZlbnQpXCJcblx0XHRcdFx0XHQoaW5wdXQpPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXQoJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUub3BlbiAmJiBzdGF0ZS52aXNpYmxlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdFthdVVzZV09XCJtZW51RGlyZWN0aXZlXCJcblx0XHRcdFx0XHRbY2xhc3NdPVwiJ2Ryb3Bkb3duLW1lbnUgc2hvdyAnICsgKG1lbnVDbGFzc05hbWUgfHwgJycpXCJcblx0XHRcdFx0XHRbYXR0ci5kYXRhLXBvcHBlci1wbGFjZW1lbnRdPVwic3RhdGUucGxhY2VtZW50XCJcblx0XHRcdFx0XHQobW91c2Vkb3duKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHN0YXRlLnZpc2libGVJdGVtczsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImF1LXNlbGVjdC1pdGVtIGRyb3Bkb3duLWl0ZW0gcG9zaXRpb24tcmVsYXRpdmVcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MuYmctbGlnaHRdPVwiaXRlbUNvbnRleHQgPT09IHN0YXRlLmhpZ2hsaWdodGVkXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLnNlbGVjdGVkXT1cIml0ZW1Db250ZXh0LnNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hcGkudG9nZ2xlSXRlbShpdGVtQ29udGV4dC5pdGVtKVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHR9XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNlbGVjdFdpZGdldDxJdGVtPj4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIGFyaWEtbGFiZWwgdXNlZCBmb3IgdGhlIGlucHV0IGluc2lkZSB0aGUgc2VsZWN0XG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIGlkIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUlkJykgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhdmFpbGFibGUgaXRlbXMgZm9yIHRoZSBkcm9wZG93blxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1zJykgaXRlbXM6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhbGxvd2VkIHBsYWNlbWVudHMgZm9yIHRoZSBkcm9wZG93bi5cblx0ICogVGhpcyByZWZlcnMgdG8gdGhlIFthbGxvd2VkUGxhY2VtZW50cyBmcm9tIGZsb2F0aW5nIFVJXShodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnQjYWxsb3dlZHBsYWNlbWVudHMpLCBnaXZlbiB0aGUgZGlmZmVyZW50IFtQbGFjZW1lbnQgcG9zc2liaWxpdGllc10oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9jb21wdXRlUG9zaXRpb24jcGxhY2VtZW50KS5cblx0ICovXG5cdEBJbnB1dCgnYXVBbGxvd2VkUGxhY2VtZW50cycpIGFsbG93ZWRQbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIG9wZW5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU9wZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZpbHRlcmVkIHRleHQgdG8gYmUgZGlzcGxheSBpbiB0aGUgZmlsdGVyIGlucHV0XG5cdCAqL1xuXHRASW5wdXQoJ2F1RmlsdGVyVGV4dCcpIGZpbHRlclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHNlbGVjdGVkIGl0ZW0gaWRzXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2VsZWN0ZWQnKSBzZWxlY3RlZDogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIGEgbG9hZGluZyBwcm9jZXNzIGlzIGJlaW5nIGRvbmVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUxvYWRpbmcnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBnZXQgdGhlIGlkIG9mIGFuIGl0ZW1cblx0ICogQnkgZGVmYXVsdCwgdGhlIGl0ZW0gaXMgcmV0dXJuZWRcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWRGbicpIGl0ZW1JZEZuOiAoKGl0ZW06IEl0ZW0pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdU1lbnVDbGFzc05hbWUnKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RCYWRnZUxhYmVsJykgc2xvdEJhZGdlTGFiZWw6IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RJdGVtJykgc2xvdEl0ZW06IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RJdGVtRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ6IFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGZpbHRlciBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1RmlsdGVyVGV4dENoYW5nZScpIGZpbHRlclRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNlbGVjdGVkQ2hhbmdlJykgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZVxuXHQgKi9cblx0QE91dHB1dCgnYXVPcGVuQ2hhbmdlJykgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIG1lbnUgaXRlbXNcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51SXRlbUNsYXNzTmFtZScpIG1lbnVJdGVtQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHNlbGVjdGVkIGl0ZW1zIChkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IHpvbmUpXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFkZ2VDbGFzc05hbWUnKSBiYWRnZUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeTxTZWxlY3RXaWRnZXQ8SXRlbT4+KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTZWxlY3QsXG5cdFx0d2lkZ2V0TmFtZTogJ3NlbGVjdCcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbk9wZW5DaGFuZ2U6IChldmVudCkgPT4gdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25TZWxlY3RlZENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25GaWx0ZXJUZXh0Q2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuZmlsdGVyVGV4dENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9LFxuXHR9KTtcblxuXHRyZWFkb25seSBtZW51RGlyZWN0aXZlID0gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5mbG9hdGluZ0RpcmVjdGl2ZSk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnJlZmVyZW5jZURpcmVjdGl2ZSk7XG5cdH1cblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90QmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtOiB0aGlzLnNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
