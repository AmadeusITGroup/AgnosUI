const t=`import { SlotDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createSelect, mergeDirectives, patchSimpleChanges, toAngularSignal, toSlotContextWidget, useDirectiveForHost, } from '@agnos-ui/angular-headless';
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
    i0.ɵɵproperty("auUse", ctx_r3.menuDirective);
    i0.ɵɵattribute("data-popper-placement", ctx_r3.state$().placement);
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
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 4, "ul", 2);
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
        this.menuDirective = mergeDirectives(this._widget.directives.hasFocusDirective, this._widget.directives.floatingDirective);
        this.state$ = toAngularSignal(this._widget.state$);
        useDirectiveForHost(this._widget.directives.referenceDirective);
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
        } }, inputs: { ariaLabel: ["auAriaLabel", "ariaLabel"], id: ["auId", "id"], items: ["auItems", "items"], allowedPlacements: ["auAllowedPlacements", "allowedPlacements"], open: ["auOpen", "open", auBooleanAttribute], filterText: ["auFilterText", "filterText"], className: ["auClassName", "className"], disabled: ["auDisabled", "disabled", auBooleanAttribute], selected: ["auSelected", "selected"], loading: ["auLoading", "loading", auBooleanAttribute], itemIdFn: ["auItemIdFn", "itemIdFn"], menuClassName: ["auMenuClassName", "menuClassName"], slotBadgeLabel: ["auSlotBadgeLabel", "slotBadgeLabel"], slotItem: ["auSlotItem", "slotItem"], menuItemClassName: ["auMenuItemClassName", "menuItemClassName"], badgeClassName: ["auBadgeClassName", "badgeClassName"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUse"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "value", "keydown", "input"], [3, "auUse", "class"], [1, "au-select-badge", "me-1"], [3, "auSlot", "auSlotProps"], ["class", "au-select-badge me-1", 3, "class"], [3, "auUse", "mousedown"], [1, "au-select-item", "dropdown-item", "position-relative", 3, "click"], ["class", "au-select-item dropdown-item position-relative", 3, "bg-light", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
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
					[auUse]="menuDirective"
					[class]="'dropdown-menu show ' + (menuClassName || '')"
					[attr.data-popper-placement]="state$().placement"
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "select/select.component.ts", lineNumber: 102 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQSxPQUFPLEVBQ04sYUFBYSxFQUNiLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQXNDdEksOEJBQWlFO0lBQ2hFLGtIQUF3RztJQUN6RyxpQkFBTTs7Ozs7SUFGNEIsc0NBQThCO0lBQ2xELGVBQStCO0lBQS9CLGdEQUErQixvRkFBQTs7O0lBRjlDLDJJQUlDOztJQUpELGtCQUlDOzs7OztJQXdCQSw2QkFLQztJQURBLDBQQUFTLGVBQUEsbURBQXVDLENBQUEsSUFBQztJQUVqRCxrSEFBa0c7SUFDbkcsaUJBQUs7Ozs7O0lBTEosNEVBQXVELHNDQUFBO0lBSTFDLGVBQXlCO0lBQXpCLDBDQUF5QixzRkFBQTs7O0lBYnpDLDZCQUtDO0lBREEsa0lBQWEsdUJBQXVCLElBQUM7SUFFckMsMklBU0M7SUFDRixpQkFBSzs7O0lBZEosbUVBQXVEO0lBRHZELDRDQUF1QjtJQUV2QixrRUFBaUQ7SUFHakQsZUFTQztJQVRELDJDQVNDOzs7O0lBNUNILDhCQU1DO0lBQ0EsNEVBTUM7SUFDRCxnQ0FZRTtJQUZELCtLQUFXLGVBQUEsOENBQXNDLENBQUEsSUFBQyw4SkFDekMsZUFBQSx1Q0FBK0IsQ0FBQSxJQURVO0lBVm5ELGlCQVlFLEVBQUE7SUFFSCxxRkFrQkM7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QUs7bUJBQUMsWUFBWTtZQUt5QyxPQUFPO2tCQUFsRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFNckMsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBS08sYUFBYTtrQkFBdEMsS0FBSzttQkFBQyxpQkFBaUI7WUFFRyxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQUNpQywrQkFBK0I7a0JBQXhGLFlBQVk7bUJBQUMseUJBQXlCLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBRW5DLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUNpQyx5QkFBeUI7a0JBQTVFLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS3BCLGdCQUFnQjtrQkFBN0MsTUFBTTttQkFBQyxvQkFBb0I7WUFLQSxjQUFjO2tCQUF6QyxNQUFNO21CQUFDLGtCQUFrQjtZQUtGLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQUtRLGlCQUFpQjtrQkFBOUMsS0FBSzttQkFBQyxxQkFBcUI7WUFLRCxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjs7a0ZBNUZiLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG5cdEFkYXB0U2xvdENvbnRlbnRQcm9wcyxcblx0SXRlbUNvbnRleHQsXG5cdFNlbGVjdEl0ZW1Db250ZXh0LFxuXHRTZWxlY3RXaWRnZXQsXG5cdFNsb3RDb250ZW50LFxuXHRXaWRnZXRTdGF0ZSxcblx0ZmxvYXRpbmdVSSxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGNhbGxXaWRnZXRGYWN0b3J5LFxuXHRjcmVhdGVTZWxlY3QsXG5cdG1lcmdlRGlyZWN0aXZlcyxcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkLCBPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0QmFkZ2VMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTZWxlY3RJdGVtXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmUsIFNsb3REaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c2VsZWN0b3I6ICdbYXVTZWxlY3RdJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYXUtc2VsZWN0IGRyb3Bkb3duIGJvcmRlciBib3JkZXItMSBwLTEgbWItMyBkLWJsb2NrXCIgKyBzdGF0ZSQoKS5jbGFzc05hbWUnLFxuXHR9LFxuXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmICh3aWRnZXQuc3RhdGUkKCk7IGFzIHN0YXRlKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFthdVVzZV09XCJfd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmVcIlxuXHRcdFx0XHRyb2xlPVwiY29tYm9ib3hcIlxuXHRcdFx0XHRjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwXCJcblx0XHRcdFx0YXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWV4cGFuZGVkXT1cInN0YXRlLm9wZW5cIlxuXHRcdFx0PlxuXHRcdFx0XHRAaWYgKHN0YXRlLnNlbGVjdGVkQ29udGV4dHM7IGFzIHNlbGVjdGVkQ29udGV4dHMpIHtcblx0XHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzZWxlY3RlZENvbnRleHRzOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImF1LXNlbGVjdC1iYWRnZSBtZS0xXCIgW2NsYXNzXT1cInN0YXRlLmJhZGdlQ2xhc3NOYW1lXCI+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RCYWRnZUxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGF0dHIuaWQ9XCJ7eyBzdGF0ZSQoKS5pZCB9fVwiXG5cdFx0XHRcdFx0YXR0ci5hcmlhLWxhYmVsPVwie3sgc3RhdGUkKCkuYXJpYUxhYmVsIH19XCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJhdS1zZWxlY3QtaW5wdXQgZmxleC1ncm93LTEgYm9yZGVyLTBcIlxuXHRcdFx0XHRcdFt2YWx1ZV09XCJzdGF0ZSQoKS5maWx0ZXJUZXh0XCJcblx0XHRcdFx0XHRhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIlxuXHRcdFx0XHRcdGF1dG9Db3JyZWN0PVwib2ZmXCJcblx0XHRcdFx0XHRhdXRvQ2FwaXRhbGl6ZT1cIm5vbmVcIlxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0KGtleWRvd24pPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXRLZXlkb3duKCRldmVudClcIlxuXHRcdFx0XHRcdChpbnB1dCk9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dCgkZXZlbnQpXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0QGlmIChzdGF0ZSQoKS5vcGVuICYmIHN0YXRlJCgpLnZpc2libGVJdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0PHVsXG5cdFx0XHRcdFx0W2F1VXNlXT1cIm1lbnVEaXJlY3RpdmVcIlxuXHRcdFx0XHRcdFtjbGFzc109XCInZHJvcGRvd24tbWVudSBzaG93ICcgKyAobWVudUNsYXNzTmFtZSB8fCAnJylcIlxuXHRcdFx0XHRcdFthdHRyLmRhdGEtcG9wcGVyLXBsYWNlbWVudF09XCJzdGF0ZSQoKS5wbGFjZW1lbnRcIlxuXHRcdFx0XHRcdChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc3RhdGUkKCkudmlzaWJsZUl0ZW1zOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWl0ZW0gZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy5iZy1saWdodF09XCJpdGVtQ29udGV4dCA9PT0gc3RhdGUkKCkuaGlnaGxpZ2h0ZWRcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbUNvbnRleHQuc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFwaS50b2dnbGVJdGVtKGl0ZW1Db250ZXh0Lml0ZW0pXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1cIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW1Db250ZXh0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC91bD5cblx0XHRcdH1cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudDxJdGVtPiBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBhcmlhLWxhYmVsIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVJZCcpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYWxsb3dlZCBwbGFjZW1lbnRzIGZvciB0aGUgZHJvcGRvd24uXG5cdCAqIFRoaXMgcmVmZXJzIHRvIHRoZSBbYWxsb3dlZFBsYWNlbWVudHMgZnJvbSBmbG9hdGluZyBVSV0oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50I2FsbG93ZWRwbGFjZW1lbnRzKSwgZ2l2ZW4gdGhlIGRpZmZlcmVudCBbUGxhY2VtZW50IHBvc3NpYmlsaXRpZXNdKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI3BsYWNlbWVudCkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWxsb3dlZFBsYWNlbWVudHMnKSBhbGxvd2VkUGxhY2VtZW50czogZmxvYXRpbmdVSS5QbGFjZW1lbnRbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIG9wZW5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU9wZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZpbHRlcmVkIHRleHQgdG8gYmUgZGlzcGxheSBpbiB0aGUgZmlsdGVyIGlucHV0XG5cdCAqL1xuXHRASW5wdXQoJ2F1RmlsdGVyVGV4dCcpIGZpbHRlclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHNlbGVjdGVkIGl0ZW0gaWRzXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2VsZWN0ZWQnKSBzZWxlY3RlZDogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIGEgbG9hZGluZyBwcm9jZXNzIGlzIGJlaW5nIGRvbmVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUxvYWRpbmcnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBnZXQgdGhlIGlkIG9mIGFuIGl0ZW1cblx0ICogQnkgZGVmYXVsdCwgdGhlIGl0ZW0gaXMgcmV0dXJuZWRcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWRGbicpIGl0ZW1JZEZuOiAoKGl0ZW06IEl0ZW0pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdU1lbnVDbGFzc05hbWUnKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RCYWRnZUxhYmVsJykgc2xvdEJhZGdlTGFiZWw6IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RJdGVtJykgc2xvdEl0ZW06IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RJdGVtRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ6IFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGZpbHRlciBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1RmlsdGVyVGV4dENoYW5nZScpIGZpbHRlclRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNlbGVjdGVkQ2hhbmdlJykgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZVxuXHQgKi9cblx0QE91dHB1dCgnYXVPcGVuQ2hhbmdlJykgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIG1lbnUgaXRlbXNcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51SXRlbUNsYXNzTmFtZScpIG1lbnVJdGVtQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHNlbGVjdGVkIGl0ZW1zIChkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IHpvbmUpXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFkZ2VDbGFzc05hbWUnKSBiYWRnZUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeTxTZWxlY3RXaWRnZXQ8SXRlbT4+KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTZWxlY3QsXG5cdFx0d2lkZ2V0TmFtZTogJ3NlbGVjdCcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbk9wZW5DaGFuZ2U6IChldmVudCkgPT4gdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25TZWxlY3RlZENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25GaWx0ZXJUZXh0Q2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuZmlsdGVyVGV4dENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9LFxuXHR9KTtcblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBhcGkgPSB0aGlzLl93aWRnZXQuYXBpO1xuXG5cdHJlYWRvbmx5IG1lbnVEaXJlY3RpdmUgPSBtZXJnZURpcmVjdGl2ZXModGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmUsIHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmZsb2F0aW5nRGlyZWN0aXZlKTtcblxuXHRzdGF0ZSQ6IFNpZ25hbDxXaWRnZXRTdGF0ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+PiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnJlZmVyZW5jZURpcmVjdGl2ZSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90QmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtOiB0aGlzLnNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
