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
/**
 * Directive to provide a custom template for the badge label in a select component.
 *
 * @template Item - The type of the item in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
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
/**
 * Directive to provide a custom label template for select items.
 *
 * This directive allows you to define a custom template for the labels of items
 * in a select component. The template can be specified using an Angular \`TemplateRef\`.
 *
 * @template Item - The type of the items in the select component.
 *
 * This directive uses a template reference to render the {@link SelectItemContext<Item>}.
 */
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
/**
 * A component that represents a customizable select dropdown widget.
 *
 * @template Item - The type of items in the select dropdown.
 */
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
						<ng-template [auSlot]="state.badgeLabel()" [auSlotProps]="{state, api, directives, itemContext}" />
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
						<ng-template [auSlot]="state.itemLabel()" [auSlotProps]="{state, api, directives, itemContext}" />
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "components/select/select.component.ts", lineNumber: 88 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixtQkFBbUIsRUFDbkIsYUFBYSxFQUNiLFlBQVksRUFDWixpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTVJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7Ozs7OztJQW9EckMsOEJBQWtFO0lBQ2pFLG9HQUFtRztJQUNwRyxpQkFBTTs7OztJQUZELDhHQUE0RDtJQUNuRCxjQUE2QjtJQUFDLEFBQTlCLGtEQUE2Qix3R0FBc0Q7OztJQUZsRyxvSUFJQzs7SUFKRCxrQkFJQzs7OztJQU9BLDZCQUlDO0lBQ0Esb0dBQWtHO0lBQ25HLGlCQUFLOzs7O0lBSEosZ0ZBQTZEO0lBRDdELDZHQUEyRDtJQUc5QyxjQUE0QjtJQUFDLEFBQTdCLGlEQUE0Qix3R0FBc0Q7OztJQVBsRyw2QkFBK0k7SUFDOUksbUlBUUM7SUFDRixpQkFBSzs7O0lBVkQsNEtBQStHO0lBQ2xILGNBUUM7SUFSRCxjQUFBLDJCQUFvQixDQVFuQjs7QUFuRUw7Ozs7OztHQU1HO0FBRUgsTUFBTSxPQUFPLHlCQUF5QjtJQUR0QztRQUVRLGdCQUFXLEdBQUcsTUFBTSxDQUFDLENBQUEsV0FBb0MsQ0FBQSxDQUFDLENBQUM7S0FJbEU7SUFIQSxNQUFNLENBQUMsc0JBQXNCLENB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QUMsb0JBQW9CO1lBVUEsY0FBYztrQkFBekMsTUFBTTttQkFBQyxrQkFBa0I7WUFXRixVQUFVO2tCQUFqQyxNQUFNO21CQUFDLGNBQWM7WUFPUSxpQkFBaUI7a0JBQTlDLEtBQUs7bUJBQUMscUJBQXFCO1lBT0QsY0FBYztrQkFBeEMsS0FBSzttQkFBQyxrQkFBa0I7WUFZRCxXQUFXO2tCQUFsQyxLQUFLO21CQUFDLGVBQWU7O2tGQTNLVixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUge1Nsb3RDb250ZW50fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQge1xuXHRCYXNlV2lkZ2V0RGlyZWN0aXZlLFxuXHRTbG90RGlyZWN0aXZlLFxuXHRVc2VEaXJlY3RpdmUsXG5cdFVzZU11bHRpRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVGVtcGxhdGVSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgdHlwZSB7UGxhY2VtZW50fSBmcm9tICdAZmxvYXRpbmctdWkvZG9tJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgdHlwZSB7SXRlbUNvbnRleHQsIFNlbGVjdEl0ZW1Db250ZXh0LCBTZWxlY3RXaWRnZXR9IGZyb20gJy4vc2VsZWN0Lmdlbic7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdH0gZnJvbSAnLi9zZWxlY3QuZ2VuJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gcHJvdmlkZSBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgdGhlIGJhZGdlIGxhYmVsIGluIGEgc2VsZWN0IGNvbXBvbmVudC5cbiAqXG4gKiBAdGVtcGxhdGUgSXRlbSAtIFRoZSB0eXBlIG9mIHRoZSBpdGVtIGluIHRoZSBzZWxlY3QgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT59LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0QmFkZ2VMYWJlbF0nLCBzdGFuZGFsb25lOiB0cnVlfSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlPEl0ZW0+IHtcblx0cHVibGljIHRlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pik7XG5cdHN0YXRpYyBuZ1RlbXBsYXRlQ29udGV4dEd1YXJkPEl0ZW0+KF9kaXI6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIERpcmVjdGl2ZSB0byBwcm92aWRlIGEgY3VzdG9tIGxhYmVsIHRlbXBsYXRlIGZvciBzZWxlY3QgaXRlbXMuXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgYWxsb3dzIHlvdSB0byBkZWZpbmUgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHRoZSBsYWJlbHMgb2YgaXRlbXNcbiAqIGluIGEgc2VsZWN0IGNvbXBvbmVudC4gVGhlIHRlbXBsYXRlIGNhbiBiZSBzcGVjaWZpZWQgdXNpbmcgYW4gQW5ndWxhciBgVGVtcGxhdGVSZWZgLlxuICpcbiAqIEB0ZW1wbGF0ZSBJdGVtIC0gVGhlIHR5cGUgb2YgdGhlIGl0ZW1zIGluIHRoZSBzZWxlY3QgY29tcG9uZW50LlxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIHVzZXMgYSB0ZW1wbGF0ZSByZWZlcmVuY2UgdG8gcmVuZGVyIHRoZSB7QGxpbmsgU2VsZWN0SXRlbUNvbnRleHQ8SXRlbT59LlxuICovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ25nLXRlbXBsYXRlW2F1U2VsZWN0SXRlbUxhYmVsXScsIHN0YW5kYWxvbmU6IHRydWV9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEl0ZW1MYWJlbERpcmVjdGl2ZTxJdGVtPiB7XG5cdHB1YmxpYyB0ZW1wbGF0ZVJlZiA9IGluamVjdChUZW1wbGF0ZVJlZjxTZWxlY3RJdGVtQ29udGV4dDxJdGVtPj4pO1xuXHRzdGF0aWMgbmdUZW1wbGF0ZUNvbnRleHRHdWFyZDxJdGVtPihfZGlyOiBTZWxlY3RJdGVtTGFiZWxEaXJlY3RpdmU8SXRlbT4sIGNvbnRleHQ6IHVua25vd24pOiBjb250ZXh0IGlzIFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+IHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufVxuXG4vKipcbiAqIEEgY29tcG9uZW50IHRoYXQgcmVwcmVzZW50cyBhIGN1c3RvbWl6YWJsZSBzZWxlY3QgZHJvcGRvd24gd2lkZ2V0LlxuICpcbiAqIEB0ZW1wbGF0ZSBJdGVtIC0gVGhlIHR5cGUgb2YgaXRlbXMgaW4gdGhlIHNlbGVjdCBkcm9wZG93bi5cbiAqL1xuQENvbXBvbmVudCh7XG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGltcG9ydHM6IFtVc2VNdWx0aURpcmVjdGl2ZSwgU2xvdERpcmVjdGl2ZSwgVXNlRGlyZWN0aXZlXSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdHNlbGVjdG9yOiAnW2F1U2VsZWN0XScsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6ICdcImF1LXNlbGVjdCBkcm9wZG93biBib3JkZXIgYm9yZGVyLTEgcC0xIG1iLTMgZC1ibG9ja1wiICsgc3RhdGUuY2xhc3NOYW1lKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2F1VXNlTXVsdGldPVwiW2RpcmVjdGl2ZXMuaGFzRm9jdXNEaXJlY3RpdmUsIGRpcmVjdGl2ZXMuaW5wdXRDb250YWluZXJEaXJlY3RpdmVdXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtd3JhcCBnYXAtMVwiPlxuXHRcdFx0QGlmIChzdGF0ZS5zZWxlY3RlZENvbnRleHRzKCk7IGFzIHNlbGVjdGVkQ29udGV4dHMpIHtcblx0XHRcdFx0QGZvciAoaXRlbUNvbnRleHQgb2Ygc2VsZWN0ZWRDb250ZXh0czsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHQ8ZGl2IFthdVVzZV09XCJbZGlyZWN0aXZlcy5iYWRnZUF0dHJpYnV0ZXNEaXJlY3RpdmUsIGl0ZW1Db250ZXh0XVwiPlxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlIFthdVNsb3RdPVwic3RhdGUuYmFkZ2VMYWJlbCgpXCIgW2F1U2xvdFByb3BzXT1cIntzdGF0ZSwgYXBpLCBkaXJlY3RpdmVzLCBpdGVtQ29udGV4dH1cIiAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ8aW5wdXQgW2F1VXNlXT1cImRpcmVjdGl2ZXMuaW5wdXREaXJlY3RpdmVcIiBbdmFsdWVdPVwic3RhdGUuZmlsdGVyVGV4dCgpXCIgLz5cblx0XHQ8L2Rpdj5cblx0XHRAaWYgKHN0YXRlLm9wZW4oKSAmJiBzdGF0ZS52aXNpYmxlSXRlbXMoKS5sZW5ndGgpIHtcblx0XHRcdDx1bCBbYXVVc2VNdWx0aV09XCJbZGlyZWN0aXZlcy5oYXNGb2N1c0RpcmVjdGl2ZSwgZGlyZWN0aXZlcy5mbG9hdGluZ0RpcmVjdGl2ZSwgZGlyZWN0aXZlcy5tZW51QXR0cmlidXRlc0RpcmVjdGl2ZV1cIiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc2hvd1wiPlxuXHRcdFx0XHRAZm9yIChpdGVtQ29udGV4dCBvZiBzdGF0ZS52aXNpYmxlSXRlbXMoKTsgdHJhY2sgaXRlbUN0eFRyYWNrQnkoJGluZGV4LCBpdGVtQ29udGV4dCkpIHtcblx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdGNsYXNzPVwiZHJvcGRvd24taXRlbSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRcdFx0XHRbYXVVc2VdPVwiW2RpcmVjdGl2ZXMuaXRlbUF0dHJpYnV0ZXNEaXJlY3RpdmUsIGl0ZW1Db250ZXh0XVwiXG5cdFx0XHRcdFx0XHRbY2xhc3MudGV4dC1iZy1wcmltYXJ5XT1cIml0ZW1Db250ZXh0ID09PSBzdGF0ZS5oaWdobGlnaHRlZCgpXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgW2F1U2xvdF09XCJzdGF0ZS5pdGVtTGFiZWwoKVwiIFthdVNsb3RQcm9wc109XCJ7c3RhdGUsIGFwaSwgZGlyZWN0aXZlcywgaXRlbUNvbnRleHR9XCIgLz5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L3VsPlxuXHRcdH1cblx0YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50PEl0ZW0+IGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxTZWxlY3RXaWRnZXQ8SXRlbT4+IHtcblx0LyoqXG5cdCAqIGFyaWEtbGFiZWwgdXNlZCBmb3IgdGhlIGlucHV0IGluc2lkZSB0aGUgc2VsZWN0XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCdTZWxlY3QnYFxuXHQgKi9cblx0QElucHV0KCdhdUFyaWFMYWJlbCcpIGFyaWFMYWJlbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCB1c2VkIGZvciB0aGUgaW5wdXQgaW5zaWRlIHRoZSBzZWxlY3Rcblx0ICovXG5cdEBJbnB1dCgnYXVJZCcpIGlkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIExpc3Qgb2YgYXZhaWxhYmxlIGl0ZW1zIGZvciB0aGUgZHJvcGRvd25cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgW11gXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbXMnKSBpdGVtczogSXRlbVtdIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBMaXN0IG9mIGFsbG93ZWQgcGxhY2VtZW50cyBmb3IgdGhlIGRyb3Bkb3duLlxuXHQgKiBUaGlzIHJlZmVycyB0byB0aGUgW2FsbG93ZWRQbGFjZW1lbnRzIGZyb20gZmxvYXRpbmcgVUldKGh0dHBzOi8vZmxvYXRpbmctdWkuY29tL2RvY3MvYXV0b1BsYWNlbWVudCNhbGxvd2VkcGxhY2VtZW50cyksIGdpdmVuIHRoZSBkaWZmZXJlbnQgW1BsYWNlbWVudCBwb3NzaWJpbGl0aWVzXShodHRwczovL2Zsb2F0aW5nLXVpLmNvbS9kb2NzL2NvbXB1dGVQb3NpdGlvbiNwbGFjZW1lbnQpLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqIFsnYm90dG9tLXN0YXJ0JywgJ3RvcC1zdGFydCcsICdib3R0b20tZW5kJywgJ3RvcC1lbmQnXVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVBbGxvd2VkUGxhY2VtZW50cycpIGFsbG93ZWRQbGFjZW1lbnRzOiBQbGFjZW1lbnRbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogdHJ1ZSBpZiB0aGUgc2VsZWN0IGlzIG9wZW5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgZmFsc2VgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVPcGVuJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBvcGVuOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBGaWx0ZXJlZCB0ZXh0IHRvIGJlIGRpc3BsYXkgaW4gdGhlIGZpbHRlciBpbnB1dFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVGaWx0ZXJUZXh0JykgZmlsdGVyVGV4dDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDU1MgY2xhc3NlcyB0byBiZSBhcHBsaWVkIG9uIHRoZSB3aWRnZXQgbWFpbiBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgdGhlIHNlbGVjdCBpcyBkaXNhYmxlZFxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTGlzdCBvZiBzZWxlY3RlZCBpdGVtIGlkc1xuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBbXWBcblx0ICovXG5cdEBJbnB1dCgnYXVTZWxlY3RlZCcpIHNlbGVjdGVkOiBJdGVtW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIHRydWUgaWYgYSBsb2FkaW5nIHByb2Nlc3MgaXMgYmVpbmcgZG9uZVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUxvYWRpbmcnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGxvYWRpbmc6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1c3RvbSBmdW5jdGlvbiB0byBnZXQgdGhlIGlkIG9mIGFuIGl0ZW1cblx0ICogQnkgZGVmYXVsdCwgdGhlIGl0ZW0gaXMgcmV0dXJuZWRcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoaXRlbTogYW55KSA9PiAnJyArIGl0ZW1cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SXRlbUlkRm4nKSBpdGVtSWRGbjogKChpdGVtOiBJdGVtKSA9PiBzdHJpbmcpIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiB0aGUgZHJvcGRvd24gbWVudSBjb250YWluZXJcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUNsYXNzTmFtZScpIG1lbnVDbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIHRlbXBsYXRlIHRvIG92ZXJyaWRlIHRoZSB3YXkgZWFjaCBiYWRnZSBvbiB0aGUgbGVmdCBvZiB0aGUgaW5wdXQgaXMgZGlzcGxheWVkLlxuXHQgKiBUaGlzIGRlZmluZSB0aGUgY29udGVudCBvZiB0aGUgYmFkZ2UgaW5zaWRlIHRoZSBiYWRnZSBjb250YWluZXIuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKHtpdGVtQ29udGV4dH06IFNlbGVjdEl0ZW1Db250ZXh0PGFueT4pID0+IGl0ZW1Db250ZXh0Lml0ZW1cblx0ICogYGBgXG5cdCAqL1xuXHRASW5wdXQoJ2F1QmFkZ2VMYWJlbCcpIGJhZGdlTGFiZWw6IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RCYWRnZUxhYmVsRGlyZWN0aXZlLCB7c3RhdGljOiBmYWxzZX0pIHNsb3RTZWxlY3RCYWRnZUxhYmVsRnJvbUNvbnRlbnQ6IFNlbGVjdEJhZGdlTGFiZWxEaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFRoZSB0ZW1wbGF0ZSB0byBvdmVycmlkZSB0aGUgd2F5IGVhY2ggaXRlbSBpcyBkaXNwbGF5ZWQgaW4gdGhlIGxpc3QuXG5cdCAqIFRoaXMgZGVmaW5lIHRoZSBjb250ZW50IG9mIHRoZSBiYWRnZSBpbnNpZGUgdGhlIGJhZGdlIGNvbnRhaW5lci5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoe2l0ZW1Db250ZXh0fTogU2VsZWN0SXRlbUNvbnRleHQ8YW55PikgPT4gaXRlbUNvbnRleHQuaXRlbVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVJdGVtTGFiZWwnKSBpdGVtTGFiZWw6IFNsb3RDb250ZW50PFNlbGVjdEl0ZW1Db250ZXh0PEl0ZW0+Pjtcblx0QENvbnRlbnRDaGlsZChTZWxlY3RJdGVtTGFiZWxEaXJlY3RpdmUsIHtzdGF0aWM6IGZhbHNlfSkgc2xvdFNlbGVjdEl0ZW1MYWJlbEZyb21Db250ZW50OiBTZWxlY3RJdGVtTGFiZWxEaXJlY3RpdmU8SXRlbT4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSB0ZXh0IGZpbHRlciBjaGFuZ2Vcblx0ICogQHBhcmFtIHRleHQgLSBGaWx0ZXJlZCB0ZXh0XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUZpbHRlclRleHRDaGFuZ2UnKSBmaWx0ZXJUZXh0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBzZWxlY3Rpb24gY2hhbmdlXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNlbGVjdGVkQ2hhbmdlJykgc2VsZWN0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPEl0ZW1bXT4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIGRyb3Bkb3duIG9wZW4gc3RhdGUgY2hhbmdlXG5cdCAqIEBwYXJhbSBpc09wZW4gLSB1cGRhdGVkIG9wZW4gc3RhdGVcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1T3BlbkNoYW5nZScpIG9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIENsYXNzIHRvIGJlIGFkZGVkIG9uIG1lbnUgaXRlbXNcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1TWVudUl0ZW1DbGFzc05hbWUnKSBtZW51SXRlbUNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDbGFzcyB0byBiZSBhZGRlZCBvbiBzZWxlY3RlZCBpdGVtcyAoZGlzcGxheWVkIGluIHRoZSBpbnB1dCB6b25lKVxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVCYWRnZUNsYXNzTmFtZScpIGJhZGdlQ2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyBuYXZpZ2FibGUgZWxlbWVudHMgd2l0aGluIGFuIEhUTUwgZWxlbWVudCBjb250YWluaW5nIGJhZGdlcyBhbmQgdGhlIGlucHV0LlxuXHQgKlxuXHQgKiBAcGFyYW0gbm9kZSAtIEhUTUxFbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGJhZGdlcyBhbmQgdGhlIGlucHV0XG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5hdS1zZWxlY3QtYmFkZ2UsaW5wdXQnKVxuXHQgKiBgYGBcblx0ICovXG5cdEBJbnB1dCgnYXVOYXZTZWxlY3RvcicpIG5hdlNlbGVjdG9yOiAoKG5vZGU6IEhUTUxFbGVtZW50KSA9PiBOb2RlTGlzdE9mPEhUTUxTcGFuRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+KSB8IHVuZGVmaW5lZDtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdGNhbGxXaWRnZXRGYWN0b3J5PFNlbGVjdFdpZGdldDxJdGVtPj4oe1xuXHRcdFx0XHRmYWN0b3J5OiBjcmVhdGVTZWxlY3QsXG5cdFx0XHRcdHdpZGdldE5hbWU6ICdzZWxlY3QnLFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRvbk9wZW5DaGFuZ2U6IChldmVudCkgPT4gdGhpcy5vcGVuQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0XHRcdG9uU2VsZWN0ZWRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdFx0XHRvbkZpbHRlclRleHRDaGFuZ2U6IChldmVudCkgPT4gdGhpcy5maWx0ZXJUZXh0Q2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhZnRlckluaXQ6ICh3aWRnZXQpID0+IHtcblx0XHRcdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHdpZGdldC5kaXJlY3RpdmVzLnJlZmVyZW5jZURpcmVjdGl2ZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNsb3RUZW1wbGF0ZXM6ICgpID0+ICh7XG5cdFx0XHRcdFx0YmFkZ2VMYWJlbDogdGhpcy5zbG90U2VsZWN0QmFkZ2VMYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0XHRpdGVtTGFiZWw6IHRoaXMuc2xvdFNlbGVjdEl0ZW1MYWJlbEZyb21Db250ZW50Py50ZW1wbGF0ZVJlZixcblx0XHRcdFx0fSksXG5cdFx0XHR9KSxcblx0XHQpO1xuXHR9XG5cblx0aXRlbUN0eFRyYWNrQnkoXzogbnVtYmVyLCBpdGVtQ29udGV4dDogSXRlbUNvbnRleHQ8SXRlbT4pIHtcblx0XHRyZXR1cm4gaXRlbUNvbnRleHQuaWQ7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
