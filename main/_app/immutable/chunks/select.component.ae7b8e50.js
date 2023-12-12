const t=`import { SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createSelect, patchSimpleChanges, toAngularSignal, toSlotContextWidget, } from '@agnos-ui/angular-headless';
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
    i0.ɵɵclassProp("bg-light", itemContext_r14 === ctx_r13.state$().highlighted)("selected", itemContext_r14.selected);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("auSlot", state_r1.slotItem)("auSlotProps", i0.ɵɵpureFunction3(6, _c1, state_r1, ctx_r13.widget, itemContext_r14));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 6);
    i0.ɵɵlistener("mousedown", function SelectComponent_Conditional_0_Conditional_3_Template_ul_mousedown_0_listener($event) { return $event.preventDefault(); });
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 10, "li", 8, i0.ɵɵcomponentInstance().itemCtxTrackBy);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap("dropdown-menu show " + (ctx_r3.menuClassName || ""));
    i0.ɵɵproperty("auUse", ctx_r3._widget.directives.hasFocusDirective);
    i0.ɵɵadvance(1);
    i0.ɵɵrepeater(ctx_r3.state$().visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelementStart(2, "input", 1);
    i0.ɵɵlistener("keydown", function SelectComponent_Conditional_0_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24._widget.actions.onInputKeydown($event)); })("input", function SelectComponent_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26._widget.actions.onInput($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 3, "ul", 2);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    let SelectComponent_Conditional_0_contFlowTmp;
    i0.ɵɵproperty("auUse", ctx_r0._widget.directives.hasFocusDirective);
    i0.ɵɵattribute("aria-expanded", ctx.open);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(1, (SelectComponent_Conditional_0_contFlowTmp = ctx.selectedContexts) ? 1 : -1, SelectComponent_Conditional_0_contFlowTmp);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.state$().filterText);
    i0.ɵɵattribute("id", ctx_r0.state$().id)("aria-label", ctx_r0.state$().ariaLabel);
    i0.ɵɵadvance(1);
    i0.ɵɵconditional(3, ctx_r0.state$().open && ctx_r0.state$().visibleItems.length ? 3 : -1);
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
export class SelectComponent {
    constructor() {
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
        this.widget = toSlotContextWidget(this._widget);
        this.api = this._widget.api;
        this.state$ = toAngularSignal(this._widget.state$);
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
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
            i0.ɵɵclassMap("au-select dropdown border border-1 p-1 mb-3 d-block" + ctx.state$().className);
        } }, inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], id: ["auId", "id"], items: ["auItems", "items"], open: ["auOpen", "open", auBooleanAttribute], filterText: ["auFilterText", "filterText"], className: ["auClassName", "className"], disabled: ["auDisabled", "disabled", auBooleanAttribute], selected: ["auSelected", "selected"], loading: ["auLoading", "loading", auBooleanAttribute], itemIdFn: ["auItemIdFn", "itemIdFn"], menuClassName: ["auMenuClassName", "menuClassName"], slotBadgeLabel: ["auSlotBadgeLabel", "slotBadgeLabel"], slotItem: ["auSlotItem", "slotItem"], menuItemClassName: ["auMenuItemClassName", "menuItemClassName"], badgeClassName: ["auBadgeClassName", "badgeClassName"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "value", "keydown", "input"], ["data-popper-placement", "bottom-start", "data-bs-popper", "static", 3, "auUse", "class"], [1, "au-select-badge", "me-1"], [3, "auSlot", "auSlotProps"], ["class", "au-select-badge me-1", 3, "class"], ["data-popper-placement", "bottom-start", "data-bs-popper", "static", 3, "auUse", "mousedown"], [1, "au-select-item", "dropdown-item", "position-relative", 3, "click"], ["class", "au-select-item dropdown-item position-relative", 3, "bg-light", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 7);
        } if (rf & 2) {
            let SelectComponent_contFlowTmp;
            i0.ɵɵconditional(0, (SelectComponent_contFlowTmp = ctx.widget.state$()) ? 0 : -1, SelectComponent_contFlowTmp);
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
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state$().className',
                },
                template: \`
		@if (widget.state$(); as state) {
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
					attr.id="{{ state$().id }}"
					attr.aria-label="{{ state$().ariaLabel }}"
					type="text"
					class="au-select-input flex-grow-1 border-0"
					[value]="state$().filterText"
					aria-autocomplete="list"
					autoCorrect="off"
					autoCapitalize="none"
					autoComplete="off"
					(keydown)="_widget.actions.onInputKeydown($event)"
					(input)="_widget.actions.onInput($event)"
				/>
			</div>
			@if (state$().open && state$().visibleItems.length) {
				<ul
					[auUse]="_widget.directives.hasFocusDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					data-popper-placement="bottom-start"
					data-bs-popper="static"
					(mousedown)="$event.preventDefault()"
				>
					@for (itemContext of state$().visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							class="au-select-item dropdown-item position-relative"
							[class.bg-light]="itemContext === state$().highlighted"
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "select/select.component.ts", lineNumber: 93 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQ04sYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUFzQ3RJLDhCQUFpRTtJQUNoRSxrSEFBd0c7SUFDekcsaUJBQU07Ozs7O0lBRjRCLHNDQUE4QjtJQUNsRCxlQUErQjtJQUEvQixnREFBK0Isb0ZBQUE7OztJQUY5QywySUFJQzs7SUFKRCxrQkFJQzs7Ozs7SUF5QkEsNkJBS0M7SUFEQSwwUEFBUyxlQUFBLG1EQUF1QyxDQUFBLElBQUM7SUFFakQsa0hBQWtHO0lBQ25HLGlCQUFLOzs7OztJQUxKLDRFQUF1RCxzQ0FBQTtJQUkxQyxlQUF5QjtJQUF6QiwwQ0FBeUIsc0ZBQUE7OztJQWR6Qyw2QkFNQztJQURBLGtJQUFhLHVCQUF1QixJQUFDO0lBRXJDLDJJQVNDO0lBQ0YsaUJBQUs7OztJQWZKLG1FQUF1RDtJQUR2RCxtRUFBOEM7SUFNOUMsZUFTQztJQVRELDJDQVNDOzs7O0lBN0NILDhCQU1DO0lBQ0EsNEVBTUM7SUFDRCxnQ0FZRTtJQUZELCtLQUFXLGVBQUEsOENBQXNDLENBQUEsSUFBQyw4SkFDekMsZUFBQSx1Q0FBK0IsQ0FBQSxJQURVO0lBVm5ELGlCQVlFLEVBQUE7SUFFSCxxRkFtQkM7Ozs7SUE5Q0EsbUVBQThDO0lBSTlDLHlDQUFpQztJQUVqQyxl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RUFBQztZQUVuQyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFDaUMseUJBQXlCO2tCQUE1RSxZQUFZO21CQUFDLG1CQUFtQixFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUtwQixnQkFBZ0I7a0JBQTdDLE1BQU07bUJBQUMsb0JBQW9CO1lBS0EsY0FBYztrQkFBekMsTUFBTTttQkFBQyxrQkFBa0I7WUFLRixVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFLUSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBS0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7O2tGQXRGYixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge0FkYXB0U2xvdENvbnRlbnRQcm9wcywgSXRlbUNvbnRleHQsIFNlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXQsIFNsb3RDb250ZW50LCBXaWRnZXRTdGF0ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVTZWxlY3QsXG5cdHBhdGNoU2ltcGxlQ2hhbmdlcyxcblx0dG9Bbmd1bGFyU2lnbmFsLFxuXHR0b1Nsb3RDb250ZXh0V2lkZ2V0LFxufSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEJhZGdlTGFiZWxdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0SXRlbV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0SXRlbURpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnW2F1U2VsZWN0XScsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImF1LXNlbGVjdCBkcm9wZG93biBib3JkZXIgYm9yZGVyLTEgcC0xIG1iLTMgZC1ibG9ja1wiICsgc3RhdGUkKCkuY2xhc3NOYW1lJyxcblx0fSxcblxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBpZiAod2lkZ2V0LnN0YXRlJCgpOyBhcyBzdGF0ZSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VdPVwiX3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlXCJcblx0XHRcdFx0cm9sZT1cImNvbWJvYm94XCJcblx0XHRcdFx0Y2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcFwiXG5cdFx0XHRcdGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1leHBhbmRlZF09XCJzdGF0ZS5vcGVuXCJcblx0XHRcdD5cblx0XHRcdFx0QGlmIChzdGF0ZS5zZWxlY3RlZENvbnRleHRzOyBhcyBzZWxlY3RlZENvbnRleHRzKSB7XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc2VsZWN0ZWRDb250ZXh0czsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhdS1zZWxlY3QtYmFkZ2UgbWUtMVwiIFtjbGFzc109XCJzdGF0ZS5iYWRnZUNsYXNzTmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90QmFkZ2VMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRhdHRyLmlkPVwie3sgc3RhdGUkKCkuaWQgfX1cIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cInt7IHN0YXRlJCgpLmFyaWFMYWJlbCB9fVwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWlucHV0IGZsZXgtZ3Jvdy0xIGJvcmRlci0wXCJcblx0XHRcdFx0XHRbdmFsdWVdPVwic3RhdGUkKCkuZmlsdGVyVGV4dFwiXG5cdFx0XHRcdFx0YXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJub25lXCJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdChrZXlkb3duKT1cIl93aWRnZXQuYWN0aW9ucy5vbklucHV0S2V5ZG93bigkZXZlbnQpXCJcblx0XHRcdFx0XHQoaW5wdXQpPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXQoJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUkKCkub3BlbiAmJiBzdGF0ZSQoKS52aXNpYmxlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdFthdVVzZV09XCJfd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmVcIlxuXHRcdFx0XHRcdFtjbGFzc109XCInZHJvcGRvd24tbWVudSBzaG93ICcgKyAobWVudUNsYXNzTmFtZSB8fCAnJylcIlxuXHRcdFx0XHRcdGRhdGEtcG9wcGVyLXBsYWNlbWVudD1cImJvdHRvbS1zdGFydFwiXG5cdFx0XHRcdFx0ZGF0YS1icy1wb3BwZXI9XCJzdGF0aWNcIlxuXHRcdFx0XHRcdChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc3RhdGUkKCkudmlzaWJsZUl0ZW1zOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWl0ZW0gZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5iZy1saWdodF09XCJpdGVtQ29udGV4dCA9PT0gc3RhdGUkKCkuaGlnaGxpZ2h0ZWRcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbUNvbnRleHQuc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFwaS50b2dnbGVJdGVtKGl0ZW1Db250ZXh0Lml0ZW0pXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1cIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW1Db250ZXh0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC91bD5cblx0XHRcdH1cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBhcmlhLWxhYmVsIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVJZCcpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBvcGVuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVPcGVuJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKi9cblx0QElucHV0KCdhdUZpbHRlclRleHQnKSBmaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBzZWxlY3RlZCBpdGVtIGlkc1xuXHQgKi9cblx0QElucHV0KCdhdVNlbGVjdGVkJykgc2VsZWN0ZWQ6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiBhIGxvYWRpbmcgcHJvY2VzcyBpcyBiZWluZyBkb25lXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVMb2FkaW5nJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBsb2FkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZnVuY3Rpb24gdG8gZ2V0IHRoZSBpZCBvZiBhbiBpdGVtXG5cdCAqIEJ5IGRlZmF1bHQsIHRoZSBpdGVtIGlzIHJldHVybmVkXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkRm4nKSBpdGVtSWRGbjogKChpdGVtOiBJdGVtKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiB0aGUgZHJvcGRvd24gbWVudSBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51Q2xhc3NOYW1lJykgbWVudUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90QmFkZ2VMYWJlbCcpIHNsb3RCYWRnZUxhYmVsOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50OiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90SXRlbScpIHNsb3RJdGVtOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0SXRlbURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0SXRlbUZyb21Db250ZW50OiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUZpbHRlclRleHRDaGFuZ2UnKSBmaWx0ZXJUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KHRydWUpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgc2VsZWN0aW9uIGNoYW5nZVxuXHQgKi9cblx0QE91dHB1dCgnYXVTZWxlY3RlZENoYW5nZScpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtW10+KHRydWUpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1T3BlbkNoYW5nZScpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBtZW51IGl0ZW1zXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUl0ZW1DbGFzc05hbWUnKSBtZW51SXRlbUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBzZWxlY3RlZCBpdGVtcyAoZGlzcGxheWVkIGluIHRoZSBpbnB1dCB6b25lKVxuXHQgKi9cblx0QElucHV0KCdhdUJhZGdlQ2xhc3NOYW1lJykgYmFkZ2VDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8U2VsZWN0V2lkZ2V0PEl0ZW0+Pih7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2VsZWN0LFxuXHRcdHdpZGdldE5hbWU6ICdzZWxlY3QnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25PcGVuQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMub3BlbkNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uU2VsZWN0ZWRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uRmlsdGVyVGV4dENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLmZpbHRlclRleHRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0fSxcblx0fSk7XG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHRzdGF0ZSQ6IFNpZ25hbDxXaWRnZXRTdGF0ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+PiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90QmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtOiB0aGlzLnNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
