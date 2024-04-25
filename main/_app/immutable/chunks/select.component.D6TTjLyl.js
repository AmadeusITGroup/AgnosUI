const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createSelect } from './select';
import * as i0 from "@angular/core";
const _c0 = ["auSelect", ""];
const _c1 = (a0, a1) => [a0, a1];
const _c2 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
const _c3 = (a0, a1, a2) => [a0, a1, a2];
function SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r2 = ctx.$implicit;
    const state_r3 = i0.ɵɵnextContext(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c1, ctx_r3._widget.directives.badgeAttributesDirective, itemContext_r2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c2, state_r3, ctx_r3.widget, itemContext_r2));
} }
function SelectComponent_Conditional_0_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_0_Conditional_1_For_1_Template, 2, 10, "div", 3, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_0_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r5 = ctx.$implicit;
    const state_r3 = i0.ɵɵnextContext(2);
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("text-bg-primary", itemContext_r5 === state_r3.highlighted);
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c1, ctx_r3._widget.directives.itemAttributesDirective, itemContext_r5));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r3.slotItem)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r3, ctx_r3.widget, itemContext_r5));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 12, "li", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r3 = i0.ɵɵnextContext();
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(1, _c3, ctx_r3.widget.directives.hasFocusDirective, ctx_r3.widget.directives.floatingDirective, ctx_r3.widget.directives.menuAttributesDirective));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r3.visibleItems);
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
    let tmp_3_0;
    const state_r3 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(6, _c1, ctx_r3.widget.directives.hasFocusDirective, ctx_r3.widget.directives.inputContainerDirective));
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, (tmp_3_0 = state_r3.selectedContexts) ? 1 : -1, tmp_3_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", state_r3.filterText);
    i0.ɵɵattribute("id", state_r3.id)("aria-label", state_r3.ariaLabel);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, state_r3.open && state_r3.visibleItems.length ? 3 : -1);
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
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], id: [i0.ɵɵInputFlags.None, "auId", "id"], items: [i0.ɵɵInputFlags.None, "auItems", "items"], allowedPlacements: [i0.ɵɵInputFlags.None, "auAllowedPlacements", "allowedPlacements"], open: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auOpen", "open", auBooleanAttribute], filterText: [i0.ɵɵInputFlags.None, "auFilterText", "filterText"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], selected: [i0.ɵɵInputFlags.None, "auSelected", "selected"], loading: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auLoading", "loading", auBooleanAttribute], itemIdFn: [i0.ɵɵInputFlags.None, "auItemIdFn", "itemIdFn"], menuClassName: [i0.ɵɵInputFlags.None, "auMenuClassName", "menuClassName"], slotBadgeLabel: [i0.ɵɵInputFlags.None, "auSlotBadgeLabel", "slotBadgeLabel"], slotItem: [i0.ɵɵInputFlags.None, "auSlotItem", "slotItem"], menuItemClassName: [i0.ɵɵInputFlags.None, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [i0.ɵɵInputFlags.None, "auBadgeClassName", "badgeClassName"], navSelector: [i0.ɵɵInputFlags.None, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [[1, "d-flex", "align-items-center", "flex-wrap", "gap-1", 3, "auUseMulti"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "input", "keydown", "value"], [1, "dropdown-menu", "show", 3, "auUseMulti"], [3, "auUse"], [3, "auSlot", "auSlotProps"], [1, "dropdown-item", "position-relative", 3, "auUse", "text-bg-primary"], [1, "dropdown-item", "position-relative", 3, "auUse"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 9);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional(0, (tmp_0_0 = ctx.state()) ? 0 : -1, tmp_0_0);
        } }, dependencies: [UseMultiDirective, SlotDirective, UseDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [UseMultiDirective, SlotDirective, UseDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auSelect]',
                host: {
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state().className',
                },
                template: \`
		@if (state(); as state) {
			<div
				[auUseMulti]="[widget.directives.hasFocusDirective, widget.directives.inputContainerDirective]"
				class="d-flex align-items-center flex-wrap gap-1"
			>
				@if (state.selectedContexts; as selectedContexts) {
					@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
						<div [auUse]="[_widget.directives.badgeAttributesDirective, itemContext]">
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
					[auUseMulti]="[widget.directives.hasFocusDirective, widget.directives.floatingDirective, widget.directives.menuAttributesDirective]"
					class="dropdown-menu show"
				>
					@for (itemContext of state.visibleItems; track itemCtxTrackBy($index, itemContext)) {
						<li
							class="dropdown-item position-relative"
							[auUse]="[_widget.directives.itemAttributesDirective, itemContext]"
							[class.text-bg-primary]="itemContext === state.highlighted"
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 87 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sVUFBVSxDQUFDOzs7Ozs7OztJQWtDaEMsOEJBQTBFO0lBQ3pFLGtIQUEwRjtJQUMzRixpQkFBTTs7Ozs7SUFGRCxzSEFBb0U7SUFDM0QsY0FBK0I7SUFBQyxBQUFoQyxnREFBK0Isb0ZBQTZDOzs7SUFGM0Ysa0pBSUM7O0lBSkQsa0JBSUM7Ozs7SUFzQkEsNkJBSUM7SUFDQSxrSEFBb0Y7SUFDckYsaUJBQUs7Ozs7O0lBSEosMEVBQTJEO0lBRDNELHFIQUFtRTtJQUd0RCxjQUF5QjtJQUFDLEFBQTFCLDBDQUF5QixvRkFBNkM7OztJQVZ0Riw2QkFHQztJQUNBLGlKQVFDO0lBQ0YsaUJBQUs7Ozs7SUFaSixpTUFBb0k7SUFHcEksY0FRQztJQVJELG9DQVFDOzs7O0lBdENILDhCQUdDO0lBQ0EsNEVBQW1EO0lBT25ELGdDQVlFO0lBREQsQUFEQSx3TEFBUyxzQ0FBK0IsS0FBQywrS0FDOUIsNkNBQXNDLEtBQUM7SUFFcEQsQUFiQyxpQkFZRSxFQUNHO0lBQ04scUZBQStDOzs7OztJQXhCOUMscUpBQStG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LE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFLcEIsZ0JBQWdCO2tCQUE3QyxNQUFNO21CQUFDLG9CQUFvQjtZQUtBLGNBQWM7a0JBQXpDLE1BQU07bUJBQUMsa0JBQWtCO1lBS0YsVUFBVTtrQkFBakMsTUFBTTttQkFBQyxjQUFjO1lBS1EsaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQUtELGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBS0QsV0FBVztrQkFBbEMsS0FBSzttQkFBQyxlQUFlOztrRkFqR1YsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBZGFwdFNsb3RDb250ZW50UHJvcHMsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdFVzZU11bHRpRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7UGxhY2VtZW50fSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7SXRlbUNvbnRleHQsIFNlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXR9IGZyb20gJy4vc2VsZWN0JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0fSBmcm9tICcuL3NlbGVjdCc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTZWxlY3RCYWRnZUxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEl0ZW1dJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SXRlbURpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZU11bHRpRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c2VsZWN0b3I6ICdbYXVTZWxlY3RdJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYXUtc2VsZWN0IGRyb3Bkb3duIGJvcmRlciBib3JkZXItMSBwLTEgbWItMyBkLWJsb2NrXCIgKyBzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGlmIChzdGF0ZSgpOyBhcyBzdGF0ZSkge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRbYXVVc2VNdWx0aV09XCJbd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmUsIHdpZGdldC5kaXJlY3RpdmVzLmlucHV0Q29udGFpbmVyRGlyZWN0aXZlXVwiXG5cdFx0XHRcdGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LXdyYXAgZ2FwLTFcIlxuXHRcdFx0PlxuXHRcdFx0XHRAaWYgKHN0YXRlLnNlbGVjdGVkQ29udGV4dHM7IGFzIHNlbGVjdGVkQ29udGV4dHMpIHtcblx0XHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzZWxlY3RlZENvbnRleHRzOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGRpdiBbYXVVc2VdPVwiW193aWRnZXQuZGlyZWN0aXZlcy5iYWRnZUF0dHJpYnV0ZXNEaXJlY3RpdmUsIGl0ZW1Db250ZXh0XVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90QmFkZ2VMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRhdHRyLmlkPVwie3sgc3RhdGUuaWQgfX1cIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cInt7IHN0YXRlLmFyaWFMYWJlbCB9fVwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWlucHV0IGZsZXgtZ3Jvdy0xIGJvcmRlci0wXCJcblx0XHRcdFx0XHRbdmFsdWVdPVwic3RhdGUuZmlsdGVyVGV4dFwiXG5cdFx0XHRcdFx0YXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJub25lXCJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdChpbnB1dCk9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dCgkZXZlbnQpXCJcblx0XHRcdFx0XHQoa2V5ZG93bik9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dEtleWRvd24oJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUub3BlbiAmJiBzdGF0ZS52aXNpYmxlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdFthdVVzZU11bHRpXT1cIlt3aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgd2lkZ2V0LmRpcmVjdGl2ZXMuZmxvYXRpbmdEaXJlY3RpdmUsIHdpZGdldC5kaXJlY3RpdmVzLm1lbnVBdHRyaWJ1dGVzRGlyZWN0aXZlXVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3dcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc3RhdGUudmlzaWJsZUl0ZW1zOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHRcdFthdVVzZV09XCJbX3dpZGdldC5kaXJlY3RpdmVzLml0ZW1BdHRyaWJ1dGVzRGlyZWN0aXZlLCBpdGVtQ29udGV4dF1cIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MudGV4dC1iZy1wcmltYXJ5XT1cIml0ZW1Db250ZXh0ID09PSBzdGF0ZS5oaWdobGlnaHRlZFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLnNsb3RJdGVtXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHR9XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNlbGVjdFdpZGdldDxJdGVtPj4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkIHtcblx0LyoqXG5cdCAqIGFyaWEtbGFiZWwgdXNlZCBmb3IgdGhlIGlucHV0IGluc2lkZSB0aGUgc2VsZWN0XG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIGlkIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUlkJykgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhdmFpbGFibGUgaXRlbXMgZm9yIHRoZSBkcm9wZG93blxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1zJykgaXRlbXM6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhbGxvd2VkIHBsYWNlbWVudHMgZm9yIHRoZSBkcm9wZG93bi5cblx0ICogVGhpcyByZWZlcnMgdG8gdGhlIFthbGxvd2VkUGxhY2VtZW50cyBmcm9tIGZsb2F0aW5nIFVJXShodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnQjYWxsb3dlZHBsYWNlbWVudHMpLCBnaXZlbiB0aGUgZGlmZmVyZW50IFtQbGFjZW1lbnQgcG9zc2liaWxpdGllc10oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9jb21wdXRlUG9zaXRpb24jcGxhY2VtZW50KS5cblx0ICovXG5cdEBJbnB1dCgnYXVBbGxvd2VkUGxhY2VtZW50cycpIGFsbG93ZWRQbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIG9wZW5cblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU9wZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZpbHRlcmVkIHRleHQgdG8gYmUgZGlzcGxheSBpbiB0aGUgZmlsdGVyIGlucHV0XG5cdCAqL1xuXHRASW5wdXQoJ2F1RmlsdGVyVGV4dCcpIGZpbHRlclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHNlbGVjdGVkIGl0ZW0gaWRzXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2VsZWN0ZWQnKSBzZWxlY3RlZDogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIGEgbG9hZGluZyBwcm9jZXNzIGlzIGJlaW5nIGRvbmVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUxvYWRpbmcnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBnZXQgdGhlIGlkIG9mIGFuIGl0ZW1cblx0ICogQnkgZGVmYXVsdCwgdGhlIGl0ZW0gaXMgcmV0dXJuZWRcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWRGbicpIGl0ZW1JZEZuOiAoKGl0ZW06IEl0ZW0pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdU1lbnVDbGFzc05hbWUnKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RCYWRnZUxhYmVsJykgc2xvdEJhZGdlTGFiZWw6IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0QElucHV0KCdhdVNsb3RJdGVtJykgc2xvdEl0ZW06IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RJdGVtRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ6IFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGZpbHRlciBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1RmlsdGVyVGV4dENoYW5nZScpIGZpbHRlclRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHNlbGVjdGlvbiBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1U2VsZWN0ZWRDaGFuZ2UnKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVtdPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2Vcblx0ICovXG5cdEBPdXRwdXQoJ2F1T3BlbkNoYW5nZScpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIG1lbnUgaXRlbXNcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51SXRlbUNsYXNzTmFtZScpIG1lbnVJdGVtQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHNlbGVjdGVkIGl0ZW1zIChkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IHpvbmUpXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFkZ2VDbGFzc05hbWUnKSBiYWRnZUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgbmF2aWdhYmxlIGVsZW1lbnRzIHdpdGhpbiBhbiBIVE1MIGVsZW1lbnQgY29udGFpbmluZyBiYWRnZXMgYW5kIHRoZSBpbnB1dC5cblx0ICovXG5cdEBJbnB1dCgnYXVOYXZTZWxlY3RvcicpIG5hdlNlbGVjdG9yOiAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBOb2RlTGlzdE9mPEhUTUxTcGFuRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+KSB8IHVuZGVmaW5lZDtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnk8U2VsZWN0V2lkZ2V0PEl0ZW0+Pih7XG5cdFx0ZmFjdG9yeTogY3JlYXRlU2VsZWN0LFxuXHRcdHdpZGdldE5hbWU6ICdzZWxlY3QnLFxuXHRcdGV2ZW50czoge1xuXHRcdFx0b25PcGVuQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMub3BlbkNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uU2VsZWN0ZWRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdG9uRmlsdGVyVGV4dENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLmZpbHRlclRleHRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0fSxcblx0XHRhZnRlckluaXQ6ICgpID0+IHtcblx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3QodGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMucmVmZXJlbmNlRGlyZWN0aXZlKTtcblx0XHR9LFxuXHR9KTtcblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90QmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtOiB0aGlzLnNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
