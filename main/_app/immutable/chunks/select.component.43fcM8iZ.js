const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createSelect } from './select.gen';
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
    const itemContext_r1 = ctx.$implicit;
    const state_r2 = i0.ɵɵnextContext(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c1, ctx_r2.widget.directives.badgeAttributesDirective, itemContext_r1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.badgeLabel)("auSlotProps", i0.ɵɵpureFunction3(6, _c2, state_r2, ctx_r2.widget, itemContext_r1));
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
    const itemContext_r4 = ctx.$implicit;
    const state_r2 = i0.ɵɵnextContext(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("text-bg-primary", itemContext_r4 === state_r2.highlighted);
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c1, ctx_r2._widget.directives.itemAttributesDirective, itemContext_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", state_r2.itemLabel)("auSlotProps", i0.ɵɵpureFunction3(8, _c2, state_r2, ctx_r2.widget, itemContext_r4));
} }
function SelectComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_0_Conditional_3_For_2_Template, 2, 12, "li", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r2 = i0.ɵɵnextContext();
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(1, _c3, ctx_r2.widget.directives.hasFocusDirective, ctx_r2.widget.directives.floatingDirective, ctx_r2.widget.directives.menuAttributesDirective));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(state_r2.visibleItems);
} }
function SelectComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_0_Conditional_1_Template, 2, 0);
    i0.ɵɵelement(2, "input", 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, SelectComponent_Conditional_0_Conditional_3_Template, 3, 5, "ul", 2);
} if (rf & 2) {
    let tmp_3_0;
    const state_r2 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(5, _c1, ctx_r2.widget.directives.hasFocusDirective, ctx_r2.widget.directives.inputContainerDirective));
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_3_0 = state_r2.selectedContexts) ? 1 : -1, tmp_3_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("auUse", ctx_r2.widget.directives.inputDirective)("value", state_r2.filterText);
    i0.ɵɵadvance();
    i0.ɵɵconditional(state_r2.open && state_r2.visibleItems.length ? 3 : -1);
} }
export class SelectBadgeLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectBadgeLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectBadgeLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectBadgeLabelDirective, selectors: [["ng-template", "auSelectBadgeLabel", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectBadgeLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectBadgeLabel]', standalone: true }]
    }], null, null); })();
export class SelectItemLabelDirective {
    constructor() {
        this.templateRef = inject((TemplateRef));
    }
    static ngTemplateContextGuard(_dir, context) {
        return true;
    }
    static { this.ɵfac = function SelectItemLabelDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectItemLabelDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: SelectItemLabelDirective, selectors: [["ng-template", "auSelectItemLabel", ""]], standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectItemLabelDirective, [{
        type: Directive,
        args: [{ selector: 'ng-template[auSelectItemLabel]', standalone: true }]
    }], null, null); })();
export class SelectComponent extends BaseWidgetDirective {
    constructor() {
        super(...arguments);
        /**
         * Callback called when the text filter change
         * @param text - Filtered text
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.filterTextChange = new EventEmitter();
        /**
         * Callback called when the selection change
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.selectedChange = new EventEmitter();
        /**
         * Callback called dropdown open state change
         * @param isOpen - updated open state
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
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
            badgeLabel: this.slotSelectBadgeLabelFromContent?.templateRef,
            itemLabel: this.slotSelectItemLabelFromContent?.templateRef,
        });
    }
    static { this.ɵfac = /*@__PURE__*/ (() => { let ɵSelectComponent_BaseFactory; return function SelectComponent_Factory(__ngFactoryType__) { return (ɵSelectComponent_BaseFactory || (ɵSelectComponent_BaseFactory = i0.ɵɵgetInheritedFactory(SelectComponent)))(__ngFactoryType__ || SelectComponent); }; })(); }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["", "auSelect", ""]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SelectBadgeLabelDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SelectItemLabelDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectBadgeLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectItemLabelFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("au-select dropdown border border-1 p-1 mb-3 d-block" + ctx.state().className);
        } }, inputs: { ariaLabel: [0, "auAriaLabel", "ariaLabel"], id: [0, "auId", "id"], items: [0, "auItems", "items"], allowedPlacements: [0, "auAllowedPlacements", "allowedPlacements"], open: [2, "auOpen", "open", auBooleanAttribute], filterText: [0, "auFilterText", "filterText"], className: [0, "auClassName", "className"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], selected: [0, "auSelected", "selected"], loading: [2, "auLoading", "loading", auBooleanAttribute], itemIdFn: [0, "auItemIdFn", "itemIdFn"], menuClassName: [0, "auMenuClassName", "menuClassName"], badgeLabel: [0, "auBadgeLabel", "badgeLabel"], itemLabel: [0, "auItemLabel", "itemLabel"], menuItemClassName: [0, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [0, "auBadgeClassName", "badgeClassName"], navSelector: [0, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 1, vars: 1, consts: [[1, "d-flex", "align-items-center", "flex-wrap", "gap-1", 3, "auUseMulti"], [3, "auUse", "value"], [1, "dropdown-menu", "show", 3, "auUseMulti"], [3, "auUse"], [3, "auSlot", "auSlotProps"], [1, "dropdown-item", "position-relative", 3, "auUse", "text-bg-primary"], [1, "dropdown-item", "position-relative", 3, "auUse"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_Conditional_0_Template, 4, 8);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional((tmp_0_0 = ctx.state()) ? 0 : -1, tmp_0_0);
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
						<div [auUse]="[widget.directives.badgeAttributesDirective, itemContext]">
							<ng-template [auSlot]="state.badgeLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
						</div>
					}
				}
				<input [auUse]="widget.directives.inputDirective" [value]="state.filterText" />
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
							<ng-template [auSlot]="state.itemLabel" [auSlotProps]="{state, widget, itemContext}"></ng-template>
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
        }], badgeLabel: [{
            type: Input,
            args: ['auBadgeLabel']
        }], slotSelectBadgeLabelFromContent: [{
            type: ContentChild,
            args: [SelectBadgeLabelDirective, { static: false }]
        }], itemLabel: [{
            type: Input,
            args: ['auItemLabel']
        }], slotSelectItemLabelFromContent: [{
            type: ContentChild,
            args: [SelectItemLabelDirective, { static: false }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 75 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7OztJQWtDcEMsOEJBQXlFO0lBQ3hFLGtIQUFzRjtJQUN2RixpQkFBTTs7Ozs7SUFGRCxxSEFBbUU7SUFDMUQsY0FBMkI7SUFBQyxBQUE1Qiw0Q0FBMkIsb0ZBQTZDOzs7SUFGdkYsa0pBSUM7O0lBSkQsa0JBSUM7Ozs7SUFVQSw2QkFJQztJQUNBLGtIQUFxRjtJQUN0RixpQkFBSzs7Ozs7SUFISiwwRUFBMkQ7SUFEM0QscUhBQW1FO0lBR3RELGNBQTBCO0lBQUMsQUFBM0IsMkNBQTBCLG9GQUE2Qzs7O0lBVnZGLDZCQUdDO0lBQ0EsaUpBUUM7SUFDRixpQkFBSzs7OztJQVpKLGlNQUFvSTtJQUdwSSxjQVFDO0lBUkQsb0NBUUM7OztJQTFCSCw4QkFHQztJQUNBLDRFQUFtRDtJQU9uRCwyQkFBK0U7SUFDaEYsaUJBQU07SUFDTixxRkFBK0M7Ozs7O0lBWjlDLHFKQUErRjtJQUcvRixjQU1DO0lBTkQseUVBTUM7SUFDTSxjQUEwQztJQUFDLEFBQTNDLCtEQUEwQyw4QkFBMkI7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QU07bUJBQUMsb0JBQW9CO1lBVUEsY0FBYztrQkFBekMsTUFBTTttQkFBQyxrQkFBa0I7WUFXRixVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFPUSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBT0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFZRCxXQUFXO2tCQUFsQyxLQUFLO21CQUFDLGVBQWU7O2tGQTNLVixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdFVzZU11bHRpRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtBZnRlckNvbnRlbnRDaGVja2VkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7UGxhY2VtZW50fSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7SXRlbUNvbnRleHQsIFNlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXR9IGZyb20gJy4vc2VsZWN0Lmdlbic7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdH0gZnJvbSAnLi9zZWxlY3QuZ2VuJztcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEJhZGdlTGFiZWxdJywgc3RhbmRhbG9uZTogdHJ1ZX0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICduZy10ZW1wbGF0ZVthdVNlbGVjdEl0ZW1MYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtTGFiZWxEaXJlY3RpdmU8SXRlbT4ge1xuXHRwdWJsaWMgdGVtcGxhdGVSZWYgPSBpbmplY3QoVGVtcGxhdGVSZWY8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+KTtcblx0c3RhdGljIG5nVGVtcGxhdGVDb250ZXh0R3VhcmQ8SXRlbT4oX2RpcjogU2VsZWN0SXRlbUxhYmVsRGlyZWN0aXZlPEl0ZW0+LCBjb250ZXh0OiB1bmtub3duKTogY29udGV4dCBpcyBTZWxlY3RJdGVtQ29udGV4dDxJdGVtPiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnW2F1U2VsZWN0XScsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImF1LXNlbGVjdCBkcm9wZG93biBib3JkZXIgYm9yZGVyLTEgcC0xIG1iLTMgZC1ibG9ja1wiICsgc3RhdGUoKS5jbGFzc05hbWUnLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdEBpZiAoc3RhdGUoKTsgYXMgc3RhdGUpIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0W2F1VXNlTXVsdGldPVwiW3dpZGdldC5kaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlLCB3aWRnZXQuZGlyZWN0aXZlcy5pbnB1dENvbnRhaW5lckRpcmVjdGl2ZV1cIlxuXHRcdFx0XHRjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC0xXCJcblx0XHRcdD5cblx0XHRcdFx0QGlmIChzdGF0ZS5zZWxlY3RlZENvbnRleHRzOyBhcyBzZWxlY3RlZENvbnRleHRzKSB7XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc2VsZWN0ZWRDb250ZXh0czsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHRcdDxkaXYgW2F1VXNlXT1cIlt3aWRnZXQuZGlyZWN0aXZlcy5iYWRnZUF0dHJpYnV0ZXNEaXJlY3RpdmUsIGl0ZW1Db250ZXh0XVwiPlxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5iYWRnZUxhYmVsXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgd2lkZ2V0LCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdDxpbnB1dCBbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMuaW5wdXREaXJlY3RpdmVcIiBbdmFsdWVdPVwic3RhdGUuZmlsdGVyVGV4dFwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdEBpZiAoc3RhdGUub3BlbiAmJiBzdGF0ZS52aXNpYmxlSXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdDx1bFxuXHRcdFx0XHRcdFthdVVzZU11bHRpXT1cIlt3aWRnZXQuZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgd2lkZ2V0LmRpcmVjdGl2ZXMuZmxvYXRpbmdEaXJlY3RpdmUsIHdpZGdldC5kaXJlY3RpdmVzLm1lbnVBdHRyaWJ1dGVzRGlyZWN0aXZlXVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1tZW51IHNob3dcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc3RhdGUudmlzaWJsZUl0ZW1zOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHRcdFthdVVzZV09XCJbX3dpZGdldC5kaXJlY3RpdmVzLml0ZW1BdHRyaWJ1dGVzRGlyZWN0aXZlLCBpdGVtQ29udGV4dF1cIlxuXHRcdFx0XHRcdFx0XHRbY2xhc3MudGV4dC1iZy1wcmltYXJ5XT1cIml0ZW1Db250ZXh0ID09PSBzdGF0ZS5oaWdobGlnaHRlZFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLml0ZW1MYWJlbFwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIHdpZGdldCwgaXRlbUNvbnRleHR9XCI+PC9uZy10ZW1wbGF0ZT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0fVxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50PEl0ZW0+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cdC8qKlxuXHQgKiBhcmlhLWxhYmVsIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnU2VsZWN0J2Bcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWwnKSBhcmlhTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogaWQgdXNlZCBmb3IgdGhlIGlucHV0IGluc2lkZSB0aGUgc2VsZWN0XG5cdCAqL1xuXHRASW5wdXQoJ2F1SWQnKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIGF2YWlsYWJsZSBpdGVtcyBmb3IgdGhlIGRyb3Bkb3duXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYFtdYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1zJykgaXRlbXM6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhbGxvd2VkIHBsYWNlbWVudHMgZm9yIHRoZSBkcm9wZG93bi5cblx0ICogVGhpcyByZWZlcnMgdG8gdGhlIFthbGxvd2VkUGxhY2VtZW50cyBmcm9tIGZsb2F0aW5nIFVJXShodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2F1dG9QbGFjZW1lbnQjYWxsb3dlZHBsYWNlbWVudHMpLCBnaXZlbiB0aGUgZGlmZmVyZW50IFtQbGFjZW1lbnQgcG9zc2liaWxpdGllc10oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9jb21wdXRlUG9zaXRpb24jcGxhY2VtZW50KS5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiBbJ2JvdHRvbS1zdGFydCcsICd0b3Atc3RhcnQnLCAnYm90dG9tLWVuZCcsICd0b3AtZW5kJ11cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QWxsb3dlZFBsYWNlbWVudHMnKSBhbGxvd2VkUGxhY2VtZW50czogUGxhY2VtZW50W10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBvcGVuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1T3BlbicsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgb3BlbjogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogRmlsdGVyZWQgdGV4dCB0byBiZSBkaXNwbGF5IGluIHRoZSBmaWx0ZXIgaW5wdXRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1RmlsdGVyVGV4dCcpIGZpbHRlclRleHQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVEaXNhYmxlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgZGlzYWJsZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2Ygc2VsZWN0ZWQgaXRlbSBpZHNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgW11gXG5cdCAqL1xuXHRASW5wdXQoJ2F1U2VsZWN0ZWQnKSBzZWxlY3RlZDogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIGEgbG9hZGluZyBwcm9jZXNzIGlzIGJlaW5nIGRvbmVcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVMb2FkaW5nJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBsb2FkaW5nOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZnVuY3Rpb24gdG8gZ2V0IHRoZSBpZCBvZiBhbiBpdGVtXG5cdCAqIEJ5IGRlZmF1bHQsIHRoZSBpdGVtIGlzIHJldHVybmVkXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKGl0ZW06IGFueSkgPT4gJycgKyBpdGVtXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1JZEZuJykgaXRlbUlkRm46ICgoaXRlbTogSXRlbSkgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3MgdG8gYmUgYWRkZWQgb24gdGhlIGRyb3Bkb3duIG1lbnUgY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdU1lbnVDbGFzc05hbWUnKSBtZW51Q2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byBvdmVycmlkZSB0aGUgd2F5IGVhY2ggYmFkZ2Ugb24gdGhlIGxlZnQgb2YgdGhlIGlucHV0IGlzIGRpc3BsYXllZC5cblx0ICogVGhpcyBkZWZpbmUgdGhlIGNvbnRlbnQgb2YgdGhlIGJhZGdlIGluc2lkZSB0aGUgYmFkZ2UgY29udGFpbmVyLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7aXRlbUNvbnRleHR9OiBTZWxlY3RJdGVtQ29udGV4dDxhbnk+KSA9PiBpdGVtQ29udGV4dC5pdGVtXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUJhZGdlTGFiZWwnKSBiYWRnZUxhYmVsOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50OiBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gb3ZlcnJpZGUgdGhlIHdheSBlYWNoIGl0ZW0gaXMgZGlzcGxheWVkIGluIHRoZSBsaXN0LlxuXHQgKiBUaGlzIGRlZmluZSB0aGUgY29udGVudCBvZiB0aGUgYmFkZ2UgaW5zaWRlIHRoZSBiYWRnZSBjb250YWluZXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHtpdGVtQ29udGV4dH06IFNlbGVjdEl0ZW1Db250ZXh0PGFueT4pID0+IGl0ZW1Db250ZXh0Lml0ZW1cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUxhYmVsJykgaXRlbUxhYmVsOiBTbG90Q29udGVudDxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj47XG5cdEBDb250ZW50Q2hpbGQoU2VsZWN0SXRlbUxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RJdGVtTGFiZWxGcm9tQ29udGVudDogU2VsZWN0SXRlbUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgdGV4dCBmaWx0ZXIgY2hhbmdlXG5cdCAqIEBwYXJhbSB0ZXh0IC0gRmlsdGVyZWQgdGV4dFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVGaWx0ZXJUZXh0Q2hhbmdlJykgZmlsdGVyVGV4dENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgc2VsZWN0aW9uIGNoYW5nZVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVTZWxlY3RlZENoYW5nZScpIHNlbGVjdGVkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxJdGVtW10+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCBkcm9wZG93biBvcGVuIHN0YXRlIGNoYW5nZVxuXHQgKiBAcGFyYW0gaXNPcGVuIC0gdXBkYXRlZCBvcGVuIHN0YXRlXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdU9wZW5DaGFuZ2UnKSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBtZW51IGl0ZW1zXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdU1lbnVJdGVtQ2xhc3NOYW1lJykgbWVudUl0ZW1DbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2xhc3MgdG8gYmUgYWRkZWQgb24gc2VsZWN0ZWQgaXRlbXMgKGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgem9uZSlcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFkZ2VDbGFzc05hbWUnKSBiYWRnZUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgbmF2aWdhYmxlIGVsZW1lbnRzIHdpdGhpbiBhbiBIVE1MIGVsZW1lbnQgY29udGFpbmluZyBiYWRnZXMgYW5kIHRoZSBpbnB1dC5cblx0ICpcblx0ICogQHBhcmFtIG5vZGUgLSBIVE1MRWxlbWVudCB0aGF0IGNvbnRhaW5zIHRoZSBiYWRnZXMgYW5kIHRoZSBpbnB1dFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChub2RlOiBIVE1MRWxlbWVudCkgPT4gbm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcuYXUtc2VsZWN0LWJhZGdlLGlucHV0Jylcblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TmF2U2VsZWN0b3InKSBuYXZTZWxlY3RvcjogKChub2RlOiBIVE1MRWxlbWVudCkgPT4gTm9kZUxpc3RPZjxIVE1MU3BhbkVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgfCB1bmRlZmluZWQ7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5PFNlbGVjdFdpZGdldDxJdGVtPj4oe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNlbGVjdCxcblx0XHR3aWRnZXROYW1lOiAnc2VsZWN0Jyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uT3BlbkNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLm9wZW5DaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvblNlbGVjdGVkQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRvbkZpbHRlclRleHRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5maWx0ZXJUZXh0Q2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdH0sXG5cdFx0YWZ0ZXJJbml0OiAoKSA9PiB7XG5cdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnJlZmVyZW5jZURpcmVjdGl2ZSk7XG5cdFx0fSxcblx0fSk7XG5cblx0aXRlbUN0eFRyYWNrQnkoXzogbnVtYmVyLCBpdGVtQ29udGV4dDogSXRlbUNvbnRleHQ8SXRlbT4pIHtcblx0XHRyZXR1cm4gaXRlbUNvbnRleHQuaWQ7XG5cdH1cblxuXHRuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoU2xvdHMoe1xuXHRcdFx0YmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdGl0ZW1MYWJlbDogdGhpcy5zbG90U2VsZWN0SXRlbUxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
