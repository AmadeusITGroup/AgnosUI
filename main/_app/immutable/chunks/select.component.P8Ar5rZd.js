const t=`import { __decorate } from "tslib";
import { BaseWidgetDirective, CachedProperty, SlotDirective, UseDirective, auBooleanAttribute, mergeDirectives, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createSelect } from './select';
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 105 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQ04sbUJBQW1CLEVBQ25CLGNBQWMsRUFDZCxhQUFhLEVBQ2IsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsbUJBQW1CLEdBQ25CLE1BQU0sNEJBQTRCLENBQUM7QUFFcEMsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRS9DLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7SUFzQ2hDLDhCQUtDO0lBREEsZ1BBQVcsa0VBQXdELEtBQUM7SUFFcEUsa0hBQTBGO0lBQzNGLGlCQUFNOzs7OztJQUpMLHNDQUE4QjtJQUdqQixjQUErQjtJQUFDLEFBQWhDLGdEQUErQixvRkFBNkM7OztJQVAzRixpSkFTQzs7SUFURCxrQkFTQzs7Ozs7SUEwQkEsNkJBUUM7SUFGQSxxT0FBUyxpREFBdUMsS0FBQztJQUdqRCxrSEFBb0Y7SUFDckYsaUJBQUs7Ozs7O0lBSEosbUNBQTBCO0lBRjFCLEFBREEsMEVBQTJELHFDQUNwQjs7SUFJMUIsY0FBeUI7SUFBQyxBQUExQiwwQ0FBeUIsb0ZBQTZDOzs7O0lBbEJ0Riw2QkFPQztJQURBLHdLQUFhLHVCQUF1QixLQUFDO0lBRXJDLGlKQVlDO0lBQ0YsaUJBQUs7Ozs7SUFqQkosbUVBQXVEO0lBRHZELEFBREEsMENBQXlCLCtCQUNGOztJQUt2QixjQVlDO0lBWkQsb0NBWUM7Ozs7SUF2REgsOEJBT0M7SUFD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QyxRQUFRO2tCQUFwRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFLdEMsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBS3lDLE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU1yQyxRQUFRO2tCQUE1QixLQUFLO21CQUFDLFlBQVk7WUFLTyxhQUFhO2tCQUF0QyxLQUFLO21CQUFDLGlCQUFpQjtZQUVHLGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBQ2lDLCtCQUErQjtrQkFBeEYsWUFBWTttQkFBQyx5QkFBeUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFFbkMsUUFBUTtrQkFBNUIsS0FBSzttQkFBQyxZQUFZO1lBQ2lDLHlCQUF5QjtrQkFBNUUsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUM7WUFLcEIsZ0JBQWdCO2tCQUE3QyxNQUFNO21CQUFDLG9CQUFvQjtZQUtBLGNBQWM7a0JBQXpDLE1BQU07bUJBQUMsa0JBQWtCO1lBS0YsVUFBVTtrQkFBakMsTUFBTTttQkFBQyxjQUFjO1lBS1EsaUJBQWlCO2tCQUE5QyxLQUFLO21CQUFDLHFCQUFxQjtZQUtELGNBQWM7a0JBQXhDLEtBQUs7bUJBQUMsa0JBQWtCO1lBS0QsV0FBVztrQkFBbEMsS0FBSzttQkFBQyxlQUFlO1lBZ0JsQixhQUFhLE1BS2IseUJBQXlCO2tGQXRIakIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtBZGFwdFNsb3RDb250ZW50UHJvcHMsIFNsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRDYWNoZWRQcm9wZXJ0eSxcblx0U2xvdERpcmVjdGl2ZSxcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdG1lcmdlRGlyZWN0aXZlcyxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0FmdGVyQ29udGVudENoZWNrZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtQbGFjZW1lbnR9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtTZWxlY3RJdGVtQ29udGV4dCwgU2VsZWN0V2lkZ2V0LCBJdGVtQ29udGV4dH0gZnJvbSAnLi9zZWxlY3QnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3R9IGZyb20gJy4vc2VsZWN0JztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEJhZGdlTGFiZWxdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxBZGFwdFNsb3RDb250ZW50UHJvcHM8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0SXRlbV0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPEFkYXB0U2xvdENvbnRlbnRQcm9wczxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0SXRlbURpcmVjdGl2ZTxJdGVtPiwgY29udGV4dDogdW5rbm93bik6IGNvbnRleHQgaXMgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbkBDb21wb25lbnQoe1xuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnW2F1U2VsZWN0XScsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImF1LXNlbGVjdCBkcm9wZG93biBib3JkZXIgYm9yZGVyLTEgcC0xIG1iLTMgZC1ibG9ja1wiICsgc3RhdGUoKS5jbGFzc05hbWUnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBpZiAoc3RhdGUoKTsgYXMgc3RhdGUpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2F1VXNlXT1cImNvbnRyb2xDb250YWluZXJEaXJlY3RpdmVcIlxuXHRcdFx0XHRyb2xlPVwiY29tYm9ib3hcIlxuXHRcdFx0XHRjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1jb250cm9sc109XCJzdGF0ZS5pZCArICctbWVudSdcIlxuXHRcdFx0XHRhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtZXhwYW5kZWRdPVwic3RhdGUub3BlblwiXG5cdFx0XHQ+XG5cdFx0XHRcdEBpZiAoc3RhdGUuc2VsZWN0ZWRDb250ZXh0czsgYXMgc2VsZWN0ZWRDb250ZXh0cykge1xuXHRcdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHNlbGVjdGVkQ29udGV4dHM7IHRyYWNrIGl0ZW1DdHhUcmFja0J5KCRpbmRleCwgaXRlbUNvbnRleHQpKSB7XG5cdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdHRhYmluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImF1LXNlbGVjdC1iYWRnZSBtZS0xXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzXT1cInN0YXRlLmJhZGdlQ2xhc3NOYW1lXCJcblx0XHRcdFx0XHRcdFx0KGtleWRvd24pPVwiX3dpZGdldC5hY3Rpb25zLm9uQmFkZ2VLZXlkb3duKCRldmVudCwgaXRlbUNvbnRleHQuaXRlbSlcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90QmFkZ2VMYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRhdHRyLmlkPVwie3sgc3RhdGUuaWQgfX1cIlxuXHRcdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cInt7IHN0YXRlLmFyaWFMYWJlbCB9fVwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGNsYXNzPVwiYXUtc2VsZWN0LWlucHV0IGZsZXgtZ3Jvdy0xIGJvcmRlci0wXCJcblx0XHRcdFx0XHRbdmFsdWVdPVwic3RhdGUuZmlsdGVyVGV4dFwiXG5cdFx0XHRcdFx0YXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcblx0XHRcdFx0XHRhdXRvQ29ycmVjdD1cIm9mZlwiXG5cdFx0XHRcdFx0YXV0b0NhcGl0YWxpemU9XCJub25lXCJcblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdChpbnB1dCk9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dCgkZXZlbnQpXCJcblx0XHRcdFx0XHQoa2V5ZG93bik9XCJfd2lkZ2V0LmFjdGlvbnMub25JbnB1dEtleWRvd24oJGV2ZW50KVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUub3BlbiAmJiBzdGF0ZS52aXNpYmxlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdHJvbGU9XCJsaXN0Ym94XCJcblx0XHRcdFx0XHRbaWRdPVwic3RhdGUuaWQgKyAnLW1lbnUnXCJcblx0XHRcdFx0XHRbYXVVc2VdPVwibWVudURpcmVjdGl2ZVwiXG5cdFx0XHRcdFx0W2NsYXNzXT1cIidkcm9wZG93bi1tZW51IHNob3cgJyArIChtZW51Q2xhc3NOYW1lIHx8ICcnKVwiXG5cdFx0XHRcdFx0W2F0dHIuZGF0YS1wb3BwZXItcGxhY2VtZW50XT1cInN0YXRlLnBsYWNlbWVudFwiXG5cdFx0XHRcdFx0KG1vdXNlZG93bik9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzdGF0ZS52aXNpYmxlSXRlbXM7IHRyYWNrIGl0ZW1DdHhUcmFja0J5KCRpbmRleCwgaXRlbUNvbnRleHQpKSB7XG5cdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0cm9sZT1cIm9wdGlvblwiXG5cdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwiaXRlbUNvbnRleHQuc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImF1LXNlbGVjdC1pdGVtIGRyb3Bkb3duLWl0ZW0gcG9zaXRpb24tcmVsYXRpdmUgXCJcblx0XHRcdFx0XHRcdFx0W2NsYXNzLnRleHQtYmctcHJpbWFyeV09XCJpdGVtQ29udGV4dCA9PT0gc3RhdGUuaGlnaGxpZ2h0ZWRcIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3Muc2VsZWN0ZWRdPVwiaXRlbUNvbnRleHQuc2VsZWN0ZWRcIlxuXHRcdFx0XHRcdFx0XHQoY2xpY2spPVwid2lkZ2V0LmFwaS50b2dnbGVJdGVtKGl0ZW1Db250ZXh0Lml0ZW0pXCJcblx0XHRcdFx0XHRcdFx0W3N0eWxlLmN1cnNvcl09XCIncG9pbnRlcidcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5zbG90SXRlbVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0fVxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50PEl0ZW0+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBhcmlhLWxhYmVsIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVJZCcpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYWxsb3dlZCBwbGFjZW1lbnRzIGZvciB0aGUgZHJvcGRvd24uXG5cdCAqIFRoaXMgcmVmZXJzIHRvIHRoZSBbYWxsb3dlZFBsYWNlbWVudHMgZnJvbSBmbG9hdGluZyBVSV0oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50I2FsbG93ZWRwbGFjZW1lbnRzKSwgZ2l2ZW4gdGhlIGRpZmZlcmVudCBbUGxhY2VtZW50IHBvc3NpYmlsaXRpZXNdKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI3BsYWNlbWVudCkuXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWxsb3dlZFBsYWNlbWVudHMnKSBhbGxvd2VkUGxhY2VtZW50czogUGxhY2VtZW50W10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBvcGVuXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVPcGVuJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKi9cblx0QElucHV0KCdhdUZpbHRlclRleHQnKSBmaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBzZWxlY3RlZCBpdGVtIGlkc1xuXHQgKi9cblx0QElucHV0KCdhdVNlbGVjdGVkJykgc2VsZWN0ZWQ6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiBhIGxvYWRpbmcgcHJvY2VzcyBpcyBiZWluZyBkb25lXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVMb2FkaW5nJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBsb2FkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZnVuY3Rpb24gdG8gZ2V0IHRoZSBpZCBvZiBhbiBpdGVtXG5cdCAqIEJ5IGRlZmF1bHQsIHRoZSBpdGVtIGlzIHJldHVybmVkXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkRm4nKSBpdGVtSWRGbjogKChpdGVtOiBJdGVtKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiB0aGUgZHJvcGRvd24gbWVudSBjb250YWluZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51Q2xhc3NOYW1lJykgbWVudUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90QmFkZ2VMYWJlbCcpIHNsb3RCYWRnZUxhYmVsOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50OiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgnYXVTbG90SXRlbScpIHNsb3RJdGVtOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0SXRlbURpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0SXRlbUZyb21Db250ZW50OiBTZWxlY3RJdGVtRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUZpbHRlclRleHRDaGFuZ2UnKSBmaWx0ZXJUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNlbGVjdGVkQ2hhbmdlJykgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIGRyb3Bkb3duIG9wZW4gc3RhdGUgY2hhbmdlXG5cdCAqL1xuXHRAT3V0cHV0KCdhdU9wZW5DaGFuZ2UnKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBtZW51IGl0ZW1zXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUl0ZW1DbGFzc05hbWUnKSBtZW51SXRlbUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBzZWxlY3RlZCBpdGVtcyAoZGlzcGxheWVkIGluIHRoZSBpbnB1dCB6b25lKVxuXHQgKi9cblx0QElucHV0KCdhdUJhZGdlQ2xhc3NOYW1lJykgYmFkZ2VDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0cmlldmVzIG5hdmlnYWJsZSBlbGVtZW50cyB3aXRoaW4gYW4gSFRNTCBlbGVtZW50IGNvbnRhaW5pbmcgYmFkZ2VzIGFuZCB0aGUgaW5wdXQuXG5cdCAqL1xuXHRASW5wdXQoJ2F1TmF2U2VsZWN0b3InKSBuYXZTZWxlY3RvcjogKChub2RlOiBIVE1MRWxlbWVudCkgPT4gTm9kZUxpc3RPZjxIVE1MU3BhbkVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PFNlbGVjdFdpZGdldDxJdGVtPj4oe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNlbGVjdCxcblx0XHR3aWRnZXROYW1lOiAnc2VsZWN0Jyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uT3BlbkNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLm9wZW5DaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvblNlbGVjdGVkQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvbkZpbHRlclRleHRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5maWx0ZXJUZXh0Q2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnJlZmVyZW5jZURpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0QENhY2hlZFByb3BlcnR5XG5cdGdldCBtZW51RGlyZWN0aXZlKCkge1xuXHRcdHJldHVybiBtZXJnZURpcmVjdGl2ZXModGhpcy5fd2lkZ2V0LmRpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmUsIHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmZsb2F0aW5nRGlyZWN0aXZlKTtcblx0fVxuXG5cdEBDYWNoZWRQcm9wZXJ0eVxuXHRnZXQgY29udHJvbENvbnRhaW5lckRpcmVjdGl2ZSgpIHtcblx0XHRyZXR1cm4gbWVyZ2VEaXJlY3RpdmVzKHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlLCB0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5pbnB1dENvbnRhaW5lckRpcmVjdGl2ZSk7XG5cdH1cblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxuXG5cdG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2hTbG90cyh7XG5cdFx0XHRzbG90QmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdHNsb3RJdGVtOiB0aGlzLnNsb3RTZWxlY3RJdGVtRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
