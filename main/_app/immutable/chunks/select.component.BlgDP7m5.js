const t=`import { BaseWidgetDirective, SlotDirective, UseMultiDirective, auBooleanAttribute, useDirectiveForHost } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createSelect } from './select';
import * as i0 from "@angular/core";
const _c0 = ["auSelect", ""];
const _c1 = (a0, a1) => [a0, a1];
const _c2 = (a0, a1, a2) => ({ state: a0, widget: a1, itemContext: a2 });
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
    i0.ɵɵproperty("auSlot", state_r5.slotBadgeLabel)("auSlotProps", i0.ɵɵpureFunction3(4, _c2, state_r5, ctx_r3.widget, itemContext_r3));
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
    i0.ɵɵproperty("auSlot", state_r5.slotItem)("auSlotProps", i0.ɵɵpureFunction3(9, _c2, state_r5, ctx_r3.widget, itemContext_r8));
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
    i0.ɵɵproperty("id", state_r5.id + "-menu")("auUseMulti", i0.ɵɵpureFunction2(5, _c1, ctx_r3.widget.directives.hasFocusDirective, ctx_r3.widget.directives.floatingDirective));
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
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 8, "ul", 2);
} if (rf & 2) {
    let tmp_5_0;
    const state_r5 = ctx;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(8, _c1, ctx_r3.widget.directives.hasFocusDirective, ctx_r3.widget.directives.inputContainerDirective));
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
        } }, inputs: { ariaLabel: [i0.ɵɵInputFlags.None, "auAriaLabel", "ariaLabel"], id: [i0.ɵɵInputFlags.None, "auId", "id"], items: [i0.ɵɵInputFlags.None, "auItems", "items"], allowedPlacements: [i0.ɵɵInputFlags.None, "auAllowedPlacements", "allowedPlacements"], open: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auOpen", "open", auBooleanAttribute], filterText: [i0.ɵɵInputFlags.None, "auFilterText", "filterText"], className: [i0.ɵɵInputFlags.None, "auClassName", "className"], disabled: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auDisabled", "disabled", auBooleanAttribute], selected: [i0.ɵɵInputFlags.None, "auSelected", "selected"], loading: [i0.ɵɵInputFlags.HasDecoratorInputTransform, "auLoading", "loading", auBooleanAttribute], itemIdFn: [i0.ɵɵInputFlags.None, "auItemIdFn", "itemIdFn"], menuClassName: [i0.ɵɵInputFlags.None, "auMenuClassName", "menuClassName"], slotBadgeLabel: [i0.ɵɵInputFlags.None, "auSlotBadgeLabel", "slotBadgeLabel"], slotItem: [i0.ɵɵInputFlags.None, "auSlotItem", "slotItem"], menuItemClassName: [i0.ɵɵInputFlags.None, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [i0.ɵɵInputFlags.None, "auBadgeClassName", "badgeClassName"], navSelector: [i0.ɵɵInputFlags.None, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [["role", "combobox", "aria-haspopup", "listbox", 1, "d-flex", "align-items-center", "flex-wrap", 3, "auUseMulti"], ["type", "text", "aria-autocomplete", "list", "autoCorrect", "off", "autoCapitalize", "none", "autoComplete", "off", 1, "au-select-input", "flex-grow-1", "border-0", 3, "input", "keydown", "value"], ["role", "listbox", 3, "id", "auUseMulti", "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "class"], ["tabindex", "-1", 1, "au-select-badge", "me-1", 3, "keydown"], [3, "auSlot", "auSlotProps"], ["role", "listbox", 3, "mousedown", "id", "auUseMulti"], ["role", "option", 1, "au-select-item", "dropdown-item", "position-relative", 3, "text-bg-primary", "selected", "cursor"], ["role", "option", 1, "au-select-item", "dropdown-item", "position-relative", 3, "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 11);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional(0, (tmp_0_0 = ctx.state()) ? 0 : -1, tmp_0_0);
        } }, dependencies: [UseMultiDirective, SlotDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{
                standalone: true,
                imports: [UseMultiDirective, SlotDirective],
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: '[auSelect]',
                host: {
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state().className',
                },
                template: \`
		@if (state(); as state) {
			<div
				[auUseMulti]="[widget.directives.hasFocusDirective, widget.directives.inputContainerDirective]"
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
					[auUseMulti]="[widget.directives.hasFocusDirective, widget.directives.floatingDirective]"
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 97 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUUxSSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU1SSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFL0MsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFVBQVUsQ0FBQzs7Ozs7Ozs7SUFzQ2hDLDhCQUtDO0lBREEsZ1BBQVcsa0VBQXdELEtBQUM7SUFFcEUsa0hBQTBGO0lBQzNGLGlCQUFNOzs7OztJQUpMLHNDQUE4QjtJQUdqQixjQUErQjtJQUFDLEFBQWhDLGdEQUErQixvRkFBNkM7OztJQVAzRixpSkFTQzs7SUFURCxrQkFTQzs7Ozs7SUEwQkEsNkJBUUM7SUFGQSxxT0FBUyxpREFBdUMsS0FBQztJQUdqRCxrSEFBb0Y7SUFDckYsaUJBQUs7Ozs7O0lBSEosbUNBQTBCO0lBRjFCLEFBREEsMEVBQTJELHFDQUNwQjs7SUFJMUIsY0FBeUI7SUFBQyxBQUExQiwwQ0FBeUIsb0ZBQTZDOzs7O0lBbEJ0Riw2QkFPQztJQURBLHdLQUFhLHVCQUF1QixLQUFDO0lBRXJDLGlKQVlDO0lBQ0YsaUJBQUs7Ozs7SUFqQkosbUVBQXVEO0lBRHZELEFBREEsMENBQXlCLGtJQUNnRTs7SUFLekYsY0FZQztJQVpELG9DQVlDOzs7O0lBdkRILDhCQU9DO0lBQ0EsNEVBQW1EO0lBWW5ELGdDQVlF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QUFNLEVBQUUsS0FBSyxFQUFDO1lBRW5DLFFBQVE7a0JBQTVCLEtBQUs7bUJBQUMsWUFBWTtZQUNpQyx5QkFBeUI7a0JBQTVFLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDO1lBS3BCLGdCQUFnQjtrQkFBN0MsTUFBTTttQkFBQyxvQkFBb0I7WUFLQSxjQUFjO2tCQUF6QyxNQUFNO21CQUFDLGtCQUFrQjtZQUtGLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQUtRLGlCQUFpQjtrQkFBOUMsS0FBSzttQkFBQyxxQkFBcUI7WUFLRCxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQUtELFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTs7a0ZBakdWLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7QWRhcHRTbG90Q29udGVudFByb3BzLCBTbG90Q29udGVudH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtCYXNlV2lkZ2V0RGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBVc2VNdWx0aURpcmVjdGl2ZSwgYXVCb29sZWFuQXR0cmlidXRlLCB1c2VEaXJlY3RpdmVGb3JIb3N0fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7QWZ0ZXJDb250ZW50Q2hlY2tlZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHR5cGUge1BsYWNlbWVudH0gZnJvbSAnQGZsb2F0aW5nLXVpL2RvbSc7XG5pbXBvcnQge2NhbGxXaWRnZXRGYWN0b3J5fSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHR5cGUge1NlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXQsIEl0ZW1Db250ZXh0fSBmcm9tICcuL3NlbGVjdCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdH0gZnJvbSAnLi9zZWxlY3QnO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0QmFkZ2VMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbmctdGVtcGxhdGVbYXVTZWxlY3RJdGVtXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1EaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8QWRhcHRTbG90Q29udGVudFByb3BzPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZV0sXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRzZWxlY3RvcjogJ1thdVNlbGVjdF0nLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzc10nOiAnXCJhdS1zZWxlY3QgZHJvcGRvd24gYm9yZGVyIGJvcmRlci0xIHAtMSBtYi0zIGQtYmxvY2tcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0fSxcblx0dGVtcGxhdGU6IGBcblx0XHRAaWYgKHN0YXRlKCk7IGFzIHN0YXRlKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFthdVVzZU11bHRpXT1cIlt3aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgd2lkZ2V0LmRpcmVjdGl2ZXMuaW5wdXRDb250YWluZXJEaXJlY3RpdmVdXCJcblx0XHRcdFx0cm9sZT1cImNvbWJvYm94XCJcblx0XHRcdFx0Y2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtY29udHJvbHNdPVwic3RhdGUuaWQgKyAnLW1lbnUnXCJcblx0XHRcdFx0YXJpYS1oYXNwb3B1cD1cImxpc3Rib3hcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWV4cGFuZGVkXT1cInN0YXRlLm9wZW5cIlxuXHRcdFx0PlxuXHRcdFx0XHRAaWYgKHN0YXRlLnNlbGVjdGVkQ29udGV4dHM7IGFzIHNlbGVjdGVkQ29udGV4dHMpIHtcblx0XHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzZWxlY3RlZENvbnRleHRzOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHR0YWJpbmRleD1cIi0xXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJhdS1zZWxlY3QtYmFkZ2UgbWUtMVwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzc109XCJzdGF0ZS5iYWRnZUNsYXNzTmFtZVwiXG5cdFx0XHRcdFx0XHRcdChrZXlkb3duKT1cIl93aWRnZXQuYWN0aW9ucy5vbkJhZGdlS2V5ZG93bigkZXZlbnQsIGl0ZW1Db250ZXh0Lml0ZW0pXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEJhZGdlTGFiZWxcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW1Db250ZXh0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0YXR0ci5pZD1cInt7IHN0YXRlLmlkIH19XCJcblx0XHRcdFx0XHRhdHRyLmFyaWEtbGFiZWw9XCJ7eyBzdGF0ZS5hcmlhTGFiZWwgfX1cIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRjbGFzcz1cImF1LXNlbGVjdC1pbnB1dCBmbGV4LWdyb3ctMSBib3JkZXItMFwiXG5cdFx0XHRcdFx0W3ZhbHVlXT1cInN0YXRlLmZpbHRlclRleHRcIlxuXHRcdFx0XHRcdGFyaWEtYXV0b2NvbXBsZXRlPVwibGlzdFwiXG5cdFx0XHRcdFx0YXV0b0NvcnJlY3Q9XCJvZmZcIlxuXHRcdFx0XHRcdGF1dG9DYXBpdGFsaXplPVwibm9uZVwiXG5cdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHQoaW5wdXQpPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXQoJGV2ZW50KVwiXG5cdFx0XHRcdFx0KGtleWRvd24pPVwiX3dpZGdldC5hY3Rpb25zLm9uSW5wdXRLZXlkb3duKCRldmVudClcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRAaWYgKHN0YXRlLm9wZW4gJiYgc3RhdGUudmlzaWJsZUl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHQ8dWxcblx0XHRcdFx0XHRyb2xlPVwibGlzdGJveFwiXG5cdFx0XHRcdFx0W2lkXT1cInN0YXRlLmlkICsgJy1tZW51J1wiXG5cdFx0XHRcdFx0W2F1VXNlTXVsdGldPVwiW3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlLCB3aWRnZXQuZGlyZWN0aXZlcy5mbG9hdGluZ0RpcmVjdGl2ZV1cIlxuXHRcdFx0XHRcdFtjbGFzc109XCInZHJvcGRvd24tbWVudSBzaG93ICcgKyAobWVudUNsYXNzTmFtZSB8fCAnJylcIlxuXHRcdFx0XHRcdFthdHRyLmRhdGEtcG9wcGVyLXBsYWNlbWVudF09XCJzdGF0ZS5wbGFjZW1lbnRcIlxuXHRcdFx0XHRcdChtb3VzZWRvd24pPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc3RhdGUudmlzaWJsZUl0ZW1zOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdHJvbGU9XCJvcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIml0ZW1Db250ZXh0LnNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJhdS1zZWxlY3QtaXRlbSBkcm9wZG93bi1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlIFwiXG5cdFx0XHRcdFx0XHRcdFtjbGFzcy50ZXh0LWJnLXByaW1hcnldPVwiaXRlbUNvbnRleHQgPT09IHN0YXRlLmhpZ2hsaWdodGVkXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLnNlbGVjdGVkXT1cIml0ZW1Db250ZXh0LnNlbGVjdGVkXCJcblx0XHRcdFx0XHRcdFx0KGNsaWNrKT1cIndpZGdldC5hcGkudG9nZ2xlSXRlbShpdGVtQ29udGV4dC5pdGVtKVwiXG5cdFx0XHRcdFx0XHRcdFtzdHlsZS5jdXJzb3JdPVwiJ3BvaW50ZXInXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuc2xvdEl0ZW1cIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCB3aWRnZXQsIGl0ZW1Db250ZXh0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC91bD5cblx0XHRcdH1cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudDxJdGVtPiBleHRlbmRzIEJhc2VXaWRnZXREaXJlY3RpdmU8U2VsZWN0V2lkZ2V0PEl0ZW0+PiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuXHQvKipcblx0ICogYXJpYS1sYWJlbCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogaWQgdXNlZCBmb3IgdGhlIGlucHV0IGluc2lkZSB0aGUgc2VsZWN0XG5cdCAqL1xuXHRASW5wdXQoJ2F1SWQnKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIGF2YWlsYWJsZSBpdGVtcyBmb3IgdGhlIGRyb3Bkb3duXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbXMnKSBpdGVtczogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIGFsbG93ZWQgcGxhY2VtZW50cyBmb3IgdGhlIGRyb3Bkb3duLlxuXHQgKiBUaGlzIHJlZmVycyB0byB0aGUgW2FsbG93ZWRQbGFjZW1lbnRzIGZyb20gZmxvYXRpbmcgVUldKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudCNhbGxvd2VkcGxhY2VtZW50cyksIGdpdmVuIHRoZSBkaWZmZXJlbnQgW1BsYWNlbWVudCBwb3NzaWJpbGl0aWVzXShodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2NvbXB1dGVQb3NpdGlvbiNwbGFjZW1lbnQpLlxuXHQgKi9cblx0QElucHV0KCdhdUFsbG93ZWRQbGFjZW1lbnRzJykgYWxsb3dlZFBsYWNlbWVudHM6IFBsYWNlbWVudFtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgb3BlblxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1T3BlbicsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgb3BlbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRmlsdGVyZWQgdGV4dCB0byBiZSBkaXNwbGF5IGluIHRoZSBmaWx0ZXIgaW5wdXRcblx0ICovXG5cdEBJbnB1dCgnYXVGaWx0ZXJUZXh0JykgZmlsdGVyVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIGRpc2FibGVkXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2Ygc2VsZWN0ZWQgaXRlbSBpZHNcblx0ICovXG5cdEBJbnB1dCgnYXVTZWxlY3RlZCcpIHNlbGVjdGVkOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgYSBsb2FkaW5nIHByb2Nlc3MgaXMgYmVpbmcgZG9uZVxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TG9hZGluZycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgbG9hZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VzdG9tIGZ1bmN0aW9uIHRvIGdldCB0aGUgaWQgb2YgYW4gaXRlbVxuXHQgKiBCeSBkZWZhdWx0LCB0aGUgaXRlbSBpcyByZXR1cm5lZFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1JZEZuJykgaXRlbUlkRm46ICgoaXRlbTogSXRlbSkgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3MgdG8gYmUgYWRkZWQgb24gdGhlIGRyb3Bkb3duIG1lbnUgY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUNsYXNzTmFtZScpIG1lbnVDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEJhZGdlTGFiZWwnKSBzbG90QmFkZ2VMYWJlbDogU2xvdENvbnRlbnQ8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+O1xuXHRAQ29udGVudENoaWxkKFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFNlbGVjdEJhZGdlTGFiZWxGcm9tQ29udGVudDogU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoJ2F1U2xvdEl0ZW0nKSBzbG90SXRlbTogU2xvdENvbnRlbnQ8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+O1xuXHRAQ29udGVudENoaWxkKFNlbGVjdEl0ZW1EaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFNlbGVjdEl0ZW1Gcm9tQ29udGVudDogU2VsZWN0SXRlbURpcmVjdGl2ZTxJdGVtPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHRleHQgZmlsdGVyIGNoYW5nZVxuXHQgKi9cblx0QE91dHB1dCgnYXVGaWx0ZXJUZXh0Q2hhbmdlJykgZmlsdGVyVGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgc2VsZWN0aW9uIGNoYW5nZVxuXHQgKi9cblx0QE91dHB1dCgnYXVTZWxlY3RlZENoYW5nZScpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtW10+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZVxuXHQgKi9cblx0QE91dHB1dCgnYXVPcGVuQ2hhbmdlJykgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogQ2xhc3MgdG8gYmUgYWRkZWQgb24gbWVudSBpdGVtc1xuXHQgKi9cblx0QElucHV0KCdhdU1lbnVJdGVtQ2xhc3NOYW1lJykgbWVudUl0ZW1DbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3MgdG8gYmUgYWRkZWQgb24gc2VsZWN0ZWQgaXRlbXMgKGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgem9uZSlcblx0ICovXG5cdEBJbnB1dCgnYXVCYWRnZUNsYXNzTmFtZScpIGJhZGdlQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyBuYXZpZ2FibGUgZWxlbWVudHMgd2l0aGluIGFuIEhUTUwgZWxlbWVudCBjb250YWluaW5nIGJhZGdlcyBhbmQgdGhlIGlucHV0LlxuXHQgKi9cblx0QElucHV0KCdhdU5hdlNlbGVjdG9yJykgbmF2U2VsZWN0b3I6ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IE5vZGVMaXN0T2Y8SFRNTFNwYW5FbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD4pIHwgdW5kZWZpbmVkO1xuXG5cdHJlYWRvbmx5IF93aWRnZXQgPSBjYWxsV2lkZ2V0RmFjdG9yeTxTZWxlY3RXaWRnZXQ8SXRlbT4+KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTZWxlY3QsXG5cdFx0d2lkZ2V0TmFtZTogJ3NlbGVjdCcsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvbk9wZW5DaGFuZ2U6IChldmVudCkgPT4gdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25TZWxlY3RlZENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0b25GaWx0ZXJUZXh0Q2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuZmlsdGVyVGV4dENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHR9LFxuXHRcdGFmdGVySW5pdDogKCkgPT4ge1xuXHRcdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5yZWZlcmVuY2VEaXJlY3RpdmUpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGl0ZW1DdHhUcmFja0J5KF86IG51bWJlciwgaXRlbUNvbnRleHQ6IEl0ZW1Db250ZXh0PEl0ZW0+KSB7XG5cdFx0cmV0dXJuIGl0ZW1Db250ZXh0LmlkO1xuXHR9XG5cblx0bmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuXHRcdHRoaXMuX3dpZGdldC5wYXRjaFNsb3RzKHtcblx0XHRcdHNsb3RCYWRnZUxhYmVsOiB0aGlzLnNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0c2xvdEl0ZW06IHRoaXMuc2xvdFNlbGVjdEl0ZW1Gcm9tQ29udGVudD8udGVtcGxhdGVSZWYsXG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
