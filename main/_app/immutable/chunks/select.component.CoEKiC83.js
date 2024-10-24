const t=`import { BaseWidgetDirective, SlotDirective, UseDirective, UseMultiDirective, auBooleanAttribute, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, ContentChild, Directive, EventEmitter, Input, Output, TemplateRef, inject } from '@angular/core';
import { callWidgetFactory } from '../../config';
import { createSelect } from './select.gen';
import * as i0 from "@angular/core";
const _c0 = ["auSelect", ""];
const _c1 = (a0, a1) => [a0, a1];
const _c2 = (a0, a1, a2, a3) => ({ state: a0, api: a1, directives: a2, itemContext: a3 });
const _c3 = (a0, a1, a2) => [a0, a1, a2];
function SelectComponent_Conditional_1_For_1_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_1_For_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(3, _c1, ctx_r1.directives.badgeAttributesDirective, itemContext_r1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state.badgeLabel())("auSlotProps", i0.ɵɵpureFunction4(6, _c2, ctx_r1.state, ctx_r1.api, ctx_r1.directives, itemContext_r1));
} }
function SelectComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, SelectComponent_Conditional_1_For_1_Template, 2, 11, "div", 3, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
} if (rf & 2) {
    i0.ɵɵrepeater(ctx);
} }
function SelectComponent_Conditional_3_For_2_ng_template_1_Template(rf, ctx) { }
function SelectComponent_Conditional_3_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 6);
    i0.ɵɵtemplate(1, SelectComponent_Conditional_3_For_2_ng_template_1_Template, 0, 0, "ng-template", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const itemContext_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("text-bg-primary", itemContext_r3 === ctx_r1.state.highlighted());
    i0.ɵɵproperty("auUse", i0.ɵɵpureFunction2(5, _c1, ctx_r1.directives.itemAttributesDirective, itemContext_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("auSlot", ctx_r1.state.itemLabel())("auSlotProps", i0.ɵɵpureFunction4(8, _c2, ctx_r1.state, ctx_r1.api, ctx_r1.directives, itemContext_r3));
} }
function SelectComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 2);
    i0.ɵɵrepeaterCreate(1, SelectComponent_Conditional_3_For_2_Template, 2, 13, "li", 5, i0.ɵɵcomponentInstance().itemCtxTrackBy, true);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction3(1, _c3, ctx_r1.directives.hasFocusDirective, ctx_r1.directives.floatingDirective, ctx_r1.directives.menuAttributesDirective));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.state.visibleItems());
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
        super(callWidgetFactory({
            factory: createSelect,
            widgetName: 'select',
            events: {
                onOpenChange: (event) => this.openChange.emit(event),
                onSelectedChange: (event) => this.selectedChange.emit(event),
                onFilterTextChange: (event) => this.filterTextChange.emit(event),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.referenceDirective);
            },
            slotTemplates: () => ({
                badgeLabel: this.slotSelectBadgeLabelFromContent?.templateRef,
                itemLabel: this.slotSelectItemLabelFromContent?.templateRef,
            }),
        }));
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
    }
    itemCtxTrackBy(_, itemContext) {
        return itemContext.id;
    }
    static { this.ɵfac = function SelectComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SelectComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["", "auSelect", ""]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, SelectBadgeLabelDirective, 5);
            i0.ɵɵcontentQuery(dirIndex, SelectItemLabelDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectBadgeLabelFromContent = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.slotSelectItemLabelFromContent = _t.first);
        } }, hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap("au-select dropdown border border-1 p-1 mb-3 d-block" + ctx.state.className());
        } }, inputs: { ariaLabel: [0, "auAriaLabel", "ariaLabel"], id: [0, "auId", "id"], items: [0, "auItems", "items"], allowedPlacements: [0, "auAllowedPlacements", "allowedPlacements"], open: [2, "auOpen", "open", auBooleanAttribute], filterText: [0, "auFilterText", "filterText"], className: [0, "auClassName", "className"], disabled: [2, "auDisabled", "disabled", auBooleanAttribute], selected: [0, "auSelected", "selected"], loading: [2, "auLoading", "loading", auBooleanAttribute], itemIdFn: [0, "auItemIdFn", "itemIdFn"], menuClassName: [0, "auMenuClassName", "menuClassName"], badgeLabel: [0, "auBadgeLabel", "badgeLabel"], itemLabel: [0, "auItemLabel", "itemLabel"], menuItemClassName: [0, "auMenuItemClassName", "menuItemClassName"], badgeClassName: [0, "auBadgeClassName", "badgeClassName"], navSelector: [0, "auNavSelector", "navSelector"] }, outputs: { filterTextChange: "auFilterTextChange", selectedChange: "auSelectedChange", openChange: "auOpenChange" }, standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], attrs: _c0, decls: 4, vars: 8, consts: [[1, "d-flex", "align-items-center", "flex-wrap", "gap-1", 3, "auUseMulti"], [3, "auUse", "value"], [1, "dropdown-menu", "show", 3, "auUseMulti"], [3, "auUse"], [3, "auSlot", "auSlotProps"], [1, "dropdown-item", "position-relative", 3, "auUse", "text-bg-primary"], [1, "dropdown-item", "position-relative", 3, "auUse"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, SelectComponent_Conditional_1_Template, 2, 0);
            i0.ɵɵelement(2, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, SelectComponent_Conditional_3_Template, 3, 5, "ul", 2);
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵproperty("auUseMulti", i0.ɵɵpureFunction2(5, _c1, ctx.directives.hasFocusDirective, ctx.directives.inputContainerDirective));
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_1_0 = ctx.state.selectedContexts()) ? 1 : -1, tmp_1_0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("auUse", ctx.directives.inputDirective)("value", ctx.state.filterText());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.state.open() && ctx.state.visibleItems().length ? 3 : -1);
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
                    '[class]': '"au-select dropdown border border-1 p-1 mb-3 d-block" + state.className()',
                },
                template: \`
		<div [auUseMulti]="[directives.hasFocusDirective, directives.inputContainerDirective]" class="d-flex align-items-center flex-wrap gap-1">
			@if (state.selectedContexts(); as selectedContexts) {
				@for (itemContext of selectedContexts; track itemCtxTrackBy($index, itemContext)) {
					<div [auUse]="[directives.badgeAttributesDirective, itemContext]">
						<ng-template [auSlot]="state.badgeLabel()" [auSlotProps]="{state, api, directives, itemContext}"></ng-template>
					</div>
				}
			}
			<input [auUse]="directives.inputDirective" [value]="state.filterText()" />
		</div>
		@if (state.open() && state.visibleItems().length) {
			<ul [auUseMulti]="[directives.hasFocusDirective, directives.floatingDirective, directives.menuAttributesDirective]" class="dropdown-menu show">
				@for (itemContext of state.visibleItems(); track itemCtxTrackBy($index, itemContext)) {
					<li
						class="dropdown-item position-relative"
						[auUse]="[directives.itemAttributesDirective, itemContext]"
						[class.text-bg-primary]="itemContext === state.highlighted()"
					>
						<ng-template [auSlot]="state.itemLabel()" [auSlotProps]="{state, api, directives, itemContext}"></ng-template>
					</li>
				}
			</ul>
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 66 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7OztJQThCckMsOEJBQWtFO0lBQ2pFLG9HQUFpRztJQUNsRyxpQkFBTTs7OztJQUZELDhHQUE0RDtJQUNuRCxjQUE2QjtJQUFDLEFBQTlCLGtEQUE2Qix3R0FBc0Q7OztJQUZsRyxvSUFJQzs7SUFKRCxrQkFJQzs7OztJQU9BLDZCQUlDO0lBQ0Esb0dBQWdHO0lBQ2pHLGlCQUFLOzs7O0lBSEosZ0ZBQTZEO0lBRDdELDZHQUEyRDtJQUc5QyxjQUE0QjtJQUFDLEFBQTdCLGlEQUE0Qix3R0FBc0Q7OztJQVBsRyw2QkFBK0k7SUFDOUksbUlBUUM7SUFDRixpQkFBSzs7O0lBVkQsNEtBQStHO0lBQ2xILGNBUUM7SUFSRCxjQUFBLDJCQUFvQixDQVFuQjs7QUE1Q0wsTUFBTSxPQUFPLHlCQUF5QjtJQUR0QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBb0MsQ0FBQSxDQUFDLENBQUM7S0FJbEU7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENBQU8sSUFBcUMsRUFBRSxP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QVdGLFVBQVU7a0JBQWpDLE1BQU07bUJBQUMsY0FBYztZQU9RLGlCQUFpQjtrQkFBOUMsS0FBSzttQkFBQyxxQkFBcUI7WUFPRCxjQUFjO2tCQUF4QyxLQUFLO21CQUFDLGtCQUFrQjtZQVlELFdBQVc7a0JBQWxDLEtBQUs7bUJBQUMsZUFBZTs7a0ZBM0tWLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xvdENvbnRlbnR9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdEJhc2VXaWRnZXREaXJlY3RpdmUsXG5cdFNsb3REaXJlY3RpdmUsXG5cdFVzZURpcmVjdGl2ZSxcblx0VXNlTXVsdGlEaXJlY3RpdmUsXG5cdGF1Qm9vbGVhbkF0dHJpYnV0ZSxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB0eXBlIHtQbGFjZW1lbnR9IGZyb20gJ0BmbG9hdGluZy11aS9kb20nO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB0eXBlIHtJdGVtQ29udGV4dCwgU2VsZWN0SXRlbUNvbnRleHQsIFNlbGVjdFdpZGdldH0gZnJvbSAnLi9zZWxlY3QuZ2VuJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0fSBmcm9tICcuL3NlbGVjdC5nZW4nO1xuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0QmFkZ2VMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0SXRlbUxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1MYWJlbERpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RJdGVtTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG5AQ29tcG9uZW50KHtcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0aW1wb3J0czogW1VzZU11bHRpRGlyZWN0aXZlLCBTbG90RGlyZWN0aXZlLCBVc2VEaXJlY3RpdmVdLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c2VsZWN0b3I6ICdbYXVTZWxlY3RdJyxcblx0aG9zdDoge1xuXHRcdCdbY2xhc3NdJzogJ1wiYXUtc2VsZWN0IGRyb3Bkb3duIGJvcmRlciBib3JkZXItMSBwLTEgbWItMyBkLWJsb2NrXCIgKyBzdGF0ZS5jbGFzc05hbWUoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbYXVVc2VNdWx0aV09XCJbZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgZGlyZWN0aXZlcy5pbnB1dENvbnRhaW5lckRpcmVjdGl2ZV1cIiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC0xXCI+XG5cdFx0XHRAaWYgKHN0YXRlLnNlbGVjdGVkQ29udGV4dHMoKTsgYXMgc2VsZWN0ZWRDb250ZXh0cykge1xuXHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzZWxlY3RlZENvbnRleHRzOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdDxkaXYgW2F1VXNlXT1cIltkaXJlY3RpdmVzLmJhZGdlQXR0cmlidXRlc0RpcmVjdGl2ZSwgaXRlbUNvbnRleHRdXCI+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5iYWRnZUxhYmVsKClcIiBbYXVTbG90UHJvcHNdPVwie3N0YXRlLCBhcGksIGRpcmVjdGl2ZXMsIGl0ZW1Db250ZXh0fVwiPjwvbmctdGVtcGxhdGU+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdDxpbnB1dCBbYXVVc2VdPVwiZGlyZWN0aXZlcy5pbnB1dERpcmVjdGl2ZVwiIFt2YWx1ZV09XCJzdGF0ZS5maWx0ZXJUZXh0KClcIiAvPlxuXHRcdDwvZGl2PlxuXHRcdEBpZiAoc3RhdGUub3BlbigpICYmIHN0YXRlLnZpc2libGVJdGVtcygpLmxlbmd0aCkge1xuXHRcdFx0PHVsIFthdVVzZU11bHRpXT1cIltkaXJlY3RpdmVzLmhhc0ZvY3VzRGlyZWN0aXZlLCBkaXJlY3RpdmVzLmZsb2F0aW5nRGlyZWN0aXZlLCBkaXJlY3RpdmVzLm1lbnVBdHRyaWJ1dGVzRGlyZWN0aXZlXVwiIGNsYXNzPVwiZHJvcGRvd24tbWVudSBzaG93XCI+XG5cdFx0XHRcdEBmb3IgKGl0ZW1Db250ZXh0IG9mIHN0YXRlLnZpc2libGVJdGVtcygpOyB0cmFjayBpdGVtQ3R4VHJhY2tCeSgkaW5kZXgsIGl0ZW1Db250ZXh0KSkge1xuXHRcdFx0XHRcdDxsaVxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJkcm9wZG93bi1pdGVtIHBvc2l0aW9uLXJlbGF0aXZlXCJcblx0XHRcdFx0XHRcdFthdVVzZV09XCJbZGlyZWN0aXZlcy5pdGVtQXR0cmlidXRlc0RpcmVjdGl2ZSwgaXRlbUNvbnRleHRdXCJcblx0XHRcdFx0XHRcdFtjbGFzcy50ZXh0LWJnLXByaW1hcnldPVwiaXRlbUNvbnRleHQgPT09IHN0YXRlLmhpZ2hsaWdodGVkKClcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSBbYXVTbG90XT1cInN0YXRlLml0ZW1MYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzLCBpdGVtQ29udGV4dH1cIj48L25nLXRlbXBsYXRlPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdH1cblx0XHRcdDwvdWw+XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQ8SXRlbT4gZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPFNlbGVjdFdpZGdldDxJdGVtPj4ge1xuXHQvKipcblx0ICogYXJpYS1sYWJlbCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJ1NlbGVjdCdgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsJykgYXJpYUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIGlkIHVzZWQgZm9yIHRoZSBpbnB1dCBpbnNpZGUgdGhlIHNlbGVjdFxuXHQgKi9cblx0QElucHV0KCdhdUlkJykgaWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBhdmFpbGFibGUgaXRlbXMgZm9yIHRoZSBkcm9wZG93blxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBbXWBcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtcycpIGl0ZW1zOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYWxsb3dlZCBwbGFjZW1lbnRzIGZvciB0aGUgZHJvcGRvd24uXG5cdCAqIFRoaXMgcmVmZXJzIHRvIHRoZSBbYWxsb3dlZFBsYWNlbWVudHMgZnJvbSBmbG9hdGluZyBVSV0oaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy9hdXRvUGxhY2VtZW50I2FsbG93ZWRwbGFjZW1lbnRzKSwgZ2l2ZW4gdGhlIGRpZmZlcmVudCBbUGxhY2VtZW50IHBvc3NpYmlsaXRpZXNdKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvY29tcHV0ZVBvc2l0aW9uI3BsYWNlbWVudCkuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogWydib3R0b20tc3RhcnQnLCAndG9wLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAndG9wLWVuZCddXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUFsbG93ZWRQbGFjZW1lbnRzJykgYWxsb3dlZFBsYWNlbWVudHM6IFBsYWNlbWVudFtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiB0cnVlIGlmIHRoZSBzZWxlY3QgaXMgb3BlblxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU9wZW4nLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIG9wZW46IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEZpbHRlcmVkIHRleHQgdG8gYmUgZGlzcGxheSBpbiB0aGUgZmlsdGVyIGlucHV0XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUZpbHRlclRleHQnKSBmaWx0ZXJUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIGRpc2FibGVkXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIHNlbGVjdGVkIGl0ZW0gaWRzXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYFtdYFxuXHQgKi9cblx0QElucHV0KCdhdVNlbGVjdGVkJykgc2VsZWN0ZWQ6IEl0ZW1bXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiBhIGxvYWRpbmcgcHJvY2VzcyBpcyBiZWluZyBkb25lXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TG9hZGluZycsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgbG9hZGluZzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VzdG9tIGZ1bmN0aW9uIHRvIGdldCB0aGUgaWQgb2YgYW4gaXRlbVxuXHQgKiBCeSBkZWZhdWx0LCB0aGUgaXRlbSBpcyByZXR1cm5lZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIChpdGVtOiBhbnkpID0+ICcnICsgaXRlbVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtSWRGbicpIGl0ZW1JZEZuOiAoKGl0ZW06IEl0ZW0pID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHRoZSBkcm9wZG93biBtZW51IGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51Q2xhc3NOYW1lJykgbWVudUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBUaGUgdGVtcGxhdGUgdG8gb3ZlcnJpZGUgdGhlIHdheSBlYWNoIGJhZGdlIG9uIHRoZSBsZWZ0IG9mIHRoZSBpbnB1dCBpcyBkaXNwbGF5ZWQuXG5cdCAqIFRoaXMgZGVmaW5lIHRoZSBjb250ZW50IG9mIHRoZSBiYWRnZSBpbnNpZGUgdGhlIGJhZGdlIGNvbnRhaW5lci5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoe2l0ZW1Db250ZXh0fTogU2VsZWN0SXRlbUNvbnRleHQ8YW55PikgPT4gaXRlbUNvbnRleHQuaXRlbVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVCYWRnZUxhYmVsJykgYmFkZ2VMYWJlbDogU2xvdENvbnRlbnQ8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+O1xuXHRAQ29udGVudENoaWxkKFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFNlbGVjdEJhZGdlTGFiZWxGcm9tQ29udGVudDogU2VsZWN0QmFkZ2VMYWJlbERpcmVjdGl2ZTxJdGVtPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIG92ZXJyaWRlIHRoZSB3YXkgZWFjaCBpdGVtIGlzIGRpc3BsYXllZCBpbiB0aGUgbGlzdC5cblx0ICogVGhpcyBkZWZpbmUgdGhlIGNvbnRlbnQgb2YgdGhlIGJhZGdlIGluc2lkZSB0aGUgYmFkZ2UgY29udGFpbmVyLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICh7aXRlbUNvbnRleHR9OiBTZWxlY3RJdGVtQ29udGV4dDxhbnk+KSA9PiBpdGVtQ29udGV4dC5pdGVtXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdUl0ZW1MYWJlbCcpIGl0ZW1MYWJlbDogU2xvdENvbnRlbnQ8U2VsZWN0SXRlbUNvbnRleHQ8SXRlbT4+O1xuXHRAQ29udGVudENoaWxkKFNlbGVjdEl0ZW1MYWJlbERpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBzbG90U2VsZWN0SXRlbUxhYmVsRnJvbUNvbnRlbnQ6IFNlbGVjdEl0ZW1MYWJlbERpcmVjdGl2ZTxJdGVtPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHRleHQgZmlsdGVyIGNoYW5nZVxuXHQgKiBAcGFyYW0gdGV4dCAtIEZpbHRlcmVkIHRleHRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1RmlsdGVyVGV4dENoYW5nZScpIGZpbHRlclRleHRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIHNlbGVjdGlvbiBjaGFuZ2Vcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1U2VsZWN0ZWRDaGFuZ2UnKSBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8SXRlbVtdPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgZHJvcGRvd24gb3BlbiBzdGF0ZSBjaGFuZ2Vcblx0ICogQHBhcmFtIGlzT3BlbiAtIHVwZGF0ZWQgb3BlbiBzdGF0ZVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVPcGVuQ2hhbmdlJykgb3BlbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogQ2xhc3MgdG8gYmUgYWRkZWQgb24gbWVudSBpdGVtc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVNZW51SXRlbUNsYXNzTmFtZScpIG1lbnVJdGVtQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIHNlbGVjdGVkIGl0ZW1zIChkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IHpvbmUpXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUJhZGdlQ2xhc3NOYW1lJykgYmFkZ2VDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0cmlldmVzIG5hdmlnYWJsZSBlbGVtZW50cyB3aXRoaW4gYW4gSFRNTCBlbGVtZW50IGNvbnRhaW5pbmcgYmFkZ2VzIGFuZCB0aGUgaW5wdXQuXG5cdCAqXG5cdCAqIEBwYXJhbSBub2RlIC0gSFRNTEVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgYmFkZ2VzIGFuZCB0aGUgaW5wdXRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAobm9kZTogSFRNTEVsZW1lbnQpID0+IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnLmF1LXNlbGVjdC1iYWRnZSxpbnB1dCcpXG5cdCAqIGBgYFxuXHQgKi9cblx0QElucHV0KCdhdU5hdlNlbGVjdG9yJykgbmF2U2VsZWN0b3I6ICgobm9kZTogSFRNTEVsZW1lbnQpID0+IE5vZGVMaXN0T2Y8SFRNTFNwYW5FbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD4pIHwgdW5kZWZpbmVkO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnk8U2VsZWN0V2lkZ2V0PEl0ZW0+Pih7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZVNlbGVjdCxcblx0XHRcdFx0d2lkZ2V0TmFtZTogJ3NlbGVjdCcsXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdG9uT3BlbkNoYW5nZTogKGV2ZW50KSA9PiB0aGlzLm9wZW5DaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRcdFx0b25TZWxlY3RlZENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0XHRcdG9uRmlsdGVyVGV4dENoYW5nZTogKGV2ZW50KSA9PiB0aGlzLmZpbHRlclRleHRDaGFuZ2UuZW1pdChldmVudCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFmdGVySW5pdDogKHdpZGdldCkgPT4ge1xuXHRcdFx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3Qod2lkZ2V0LmRpcmVjdGl2ZXMucmVmZXJlbmNlRGlyZWN0aXZlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0c2xvdFRlbXBsYXRlczogKCkgPT4gKHtcblx0XHRcdFx0XHRiYWRnZUxhYmVsOiB0aGlzLnNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHRcdGl0ZW1MYWJlbDogdGhpcy5zbG90U2VsZWN0SXRlbUxhYmVsRnJvbUNvbnRlbnQ/LnRlbXBsYXRlUmVmLFxuXHRcdFx0XHR9KSxcblx0XHRcdH0pLFxuXHRcdCk7XG5cdH1cblxuXHRpdGVtQ3R4VHJhY2tCeShfOiBudW1iZXIsIGl0ZW1Db250ZXh0OiBJdGVtQ29udGV4dDxJdGVtPikge1xuXHRcdHJldHVybiBpdGVtQ29udGV4dC5pZDtcblx0fVxufVxuIl19`;export{t as default};
