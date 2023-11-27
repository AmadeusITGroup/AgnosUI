const t=`import { UseDirective, auBooleanAttribute, auNumberAttribute, callWidgetFactory, createSlider, patchSimpleChanges, toAngularSignal, toSlotContextWidget, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, ViewEncapsulation, forwardRef, inject } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { take } from 'rxjs';
import * as i0 from "@angular/core";
export class SliderComponent {
    constructor() {
        this._zone = inject(NgZone);
        this._widget = callWidgetFactory({
            factory: createSlider,
            widgetName: 'slider',
            events: {
                onValuesChange: (event) => {
                    this.onChange(event);
                    this.onTouched();
                    this.valuesChange.emit(event);
                },
            },
        });
        /**
         * SliderWidget hold the state and actions applicable to the auSliderComponent
         */
        this.widget = toSlotContextWidget(this._widget);
        this.state = toAngularSignal(this._widget.state$);
        this.api = this._widget.api;
        /**
         * An event emitted when slider values are changed
         *
         * Event payload equals to the updated slider values
         */
        this.valuesChange = new EventEmitter();
        /**
         * Control value accessor methods
         */
        this.onChange = (_) => { };
        this.onTouched = () => { };
        useDirectiveForHost(this._widget.directives.sliderDirective);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (Array.isArray(value)) {
            this._widget.patch({
                values: value,
            });
        }
        else {
            this._widget.patch({
                values: [value],
            });
        }
    }
    setDisabledState(isDisabled) {
        this._widget.patch({
            disabled: isDisabled,
        });
    }
    ngOnChanges(changes) {
        patchSimpleChanges(this._widget.patch, changes);
    }
    handleBlur() {
        this.onTouched();
    }
    sliderClick($event) {
        this.widget.actions.click($event);
    }
    onKeyDown(event, handleId) {
        this.widget.actions.keydown(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SliderComponent, isStandalone: true, selector: "[auSlider]", inputs: { className: ["auClassName", "className"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], stepSize: ["auStepSize", "stepSize", auNumberAttribute], values: ["auValues", "values"], ariaLabelHandle: ["auAriaLabelHandle", "ariaLabelHandle"], readonly: ["auReadonly", "readonly", auBooleanAttribute], disabled: ["auDisabled", "disabled", auBooleanAttribute], vertical: ["auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, host: { listeners: { "blur": "handleBlur()" }, properties: { "class": "(state().vertical ? \\"au-slider-vertical\\" : \\"au-slider-horizontal\\") + \\" \\" + state().className", "class.disabled": "state().disabled" }, classAttribute: "au-slider" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], usesOnChanges: true, ngImport: i0, template: \`
		@for (option of state().progressDisplayOptions; track option) {
			<div
				class="au-slider-progress"
				[style.left.%]="option.left"
				[style.bottom.%]="option.bottom"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
			[style.visibility]="state().minValueLabelDisplay ? 'visible' : 'hidden'"
			[auUse]="widget.directives.minLabelDirective"
		>
			{{ state().min }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
			[style.visibility]="state().maxValueLabelDisplay ? 'visible' : 'hidden'"
			[auUse]="widget.directives.maxLabelDirective"
		>
			{{ state().max }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
			[style.visibility]="state().combinedLabelDisplay ? 'visible' : 'hidden'"
			[style.left.%]="state().combinedLabelPositionLeft"
			[style.top.%]="state().combinedLabelPositionTop"
		>
			{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
		</div>
		@for (item of state().sortedHandles; track item.id; let i = $index) {
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state().vertical ? 'vertical' : null"
				[disabled]="state().disabled"
				[class]="state().vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state().vertical ? null : state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().vertical ? state().handleDisplayOptions[item.id].top : null"
				(keydown)="onKeyDown($event, item.id)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
			>
				&nbsp;
			</button>
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
				[style.left.%]="state().handleDisplayOptions[i].left"
				[style.top.%]="state().handleDisplayOptions[i].top"
				[style.visibility]="state().combinedLabelDisplay ? 'hidden' : 'visible'"
			>
				{{ state().values[i] }}
			</div>
		}
	\`, isInline: true, dependencies: [{ kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[auSlider]',
                    standalone: true,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }],
                    imports: [UseDirective],
                    host: {
                        class: \`au-slider\`,
                        '[class]': '(state().vertical ? "au-slider-vertical" : "au-slider-horizontal") + " " + state().className',
                        '[class.disabled]': 'state().disabled',
                        '(blur)': 'handleBlur()',
                    },
                    template: \`
		@for (option of state().progressDisplayOptions; track option) {
			<div
				class="au-slider-progress"
				[style.left.%]="option.left"
				[style.bottom.%]="option.bottom"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
			[style.visibility]="state().minValueLabelDisplay ? 'visible' : 'hidden'"
			[auUse]="widget.directives.minLabelDirective"
		>
			{{ state().min }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
			[style.visibility]="state().maxValueLabelDisplay ? 'visible' : 'hidden'"
			[auUse]="widget.directives.maxLabelDirective"
		>
			{{ state().max }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
			[style.visibility]="state().combinedLabelDisplay ? 'visible' : 'hidden'"
			[style.left.%]="state().combinedLabelPositionLeft"
			[style.top.%]="state().combinedLabelPositionTop"
		>
			{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
		</div>
		@for (item of state().sortedHandles; track item.id; let i = $index) {
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.aria-label]="item.ariaLabel"
				[attr.aria-orientation]="state().vertical ? 'vertical' : null"
				[disabled]="state().disabled"
				[class]="state().vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
				[style.left.%]="state().vertical ? null : state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().vertical ? state().handleDisplayOptions[item.id].top : null"
				(keydown)="onKeyDown($event, item.id)"
				(mousedown)="widget.actions.mouseDown($event, item.id)"
			>
				&nbsp;
			</button>
			<div
				[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
				[style.left.%]="state().handleDisplayOptions[i].left"
				[style.top.%]="state().handleDisplayOptions[i].top"
				[style.visibility]="state().combinedLabelDisplay ? 'hidden' : 'visible'"
			>
				{{ state().values[i] }}
			</div>
		}
	\`,
                }]
        }], ctorParameters: () => [], propDecorators: { className: [{
                type: Input,
                args: ['auClassName']
            }], min: [{
                type: Input,
                args: [{ alias: 'auMin', transform: auNumberAttribute }]
            }], max: [{
                type: Input,
                args: [{ alias: 'auMax', transform: auNumberAttribute }]
            }], stepSize: [{
                type: Input,
                args: [{ alias: 'auStepSize', transform: auNumberAttribute }]
            }], values: [{
                type: Input,
                args: ['auValues']
            }], ariaLabelHandle: [{
                type: Input,
                args: ['auAriaLabelHandle']
            }], readonly: [{
                type: Input,
                args: [{ alias: 'auReadonly', transform: auBooleanAttribute }]
            }], disabled: [{
                type: Input,
                args: [{ alias: 'auDisabled', transform: auBooleanAttribute }]
            }], vertical: [{
                type: Input,
                args: [{ alias: 'auVertical', transform: auBooleanAttribute }]
            }], valuesChange: [{
                type: Output,
                args: ['auValuesChange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFnRjFCLE1BQU0sT0FBTyxlQUFlO0lBaUYzQjtRQWhGUSxVQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztZQUNwQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7YUFDRDtTQUNELENBQUMsQ0FBQztRQUNIOztXQUVHO1FBQ00sV0FBTSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxP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QUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztnQkFTM0QsWUFBWTtzQkFEWCxNQUFNO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbGlkZXJTdGF0ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlU2xpZGVyLFxuXHRwYXRjaFNpbXBsZUNoYW5nZXMsXG5cdHRvQW5ndWxhclNpZ25hbCxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBmb3J3YXJkUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmVdLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6IGBhdS1zbGlkZXJgLFxuXHRcdCdbY2xhc3NdJzogJyhzdGF0ZSgpLnZlcnRpY2FsID8gXCJhdS1zbGlkZXItdmVydGljYWxcIiA6IFwiYXUtc2xpZGVyLWhvcml6b250YWxcIikgKyBcIiBcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0XHQnW2NsYXNzLmRpc2FibGVkXSc6ICdzdGF0ZSgpLmRpc2FibGVkJyxcblx0XHQnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0QGZvciAob3B0aW9uIG9mIHN0YXRlKCkucHJvZ3Jlc3NEaXNwbGF5T3B0aW9uczsgdHJhY2sgb3B0aW9uKSB7XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLXByb2dyZXNzXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJvcHRpb24ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS5ib3R0b20uJV09XCJvcHRpb24uYm90dG9tXCJcblx0XHRcdFx0W3N0eWxlLndpZHRoLiVdPVwib3B0aW9uLndpZHRoXCJcblx0XHRcdFx0W3N0eWxlLmhlaWdodC4lXT1cIm9wdGlvbi5oZWlnaHRcIlxuXHRcdFx0PjwvZGl2PlxuXHRcdH1cblx0XHQ8ZGl2IFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYS12ZXJ0aWNhbCcgOiAnYXUtc2xpZGVyLWNsaWNrYWJsZS1hcmVhJ1wiIChjbGljayk9XCJzbGlkZXJDbGljaygkZXZlbnQpXCI+PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1taW4nIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbWluJ1wiXG5cdFx0XHRbc3R5bGUudmlzaWJpbGl0eV09XCJzdGF0ZSgpLm1pblZhbHVlTGFiZWxEaXNwbGF5ID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuXHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1pbkxhYmVsRGlyZWN0aXZlXCJcblx0XHQ+XG5cdFx0XHR7eyBzdGF0ZSgpLm1pbiB9fVxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWF4JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1heCdcIlxuXHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5tYXhWYWx1ZUxhYmVsRGlzcGxheSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5tYXggfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG5cdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uTGVmdFwiXG5cdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5jb21iaW5lZExhYmVsUG9zaXRpb25Ub3BcIlxuXHRcdD5cblx0XHRcdHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzBdIH19IC0ge3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMV0gfX1cblx0XHQ8L2Rpdj5cblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc29ydGVkSGFuZGxlczsgdHJhY2sgaXRlbS5pZDsgbGV0IGkgPSAkaW5kZXgpIHtcblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItaGFuZGxlXCJcblx0XHRcdFx0cm9sZT1cInNsaWRlclwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtaW5dPVwic3RhdGUoKS5taW5cIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWF4XT1cInN0YXRlKCkubWF4XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1yZWFkb25seV09XCJzdGF0ZSgpLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVub3ddPVwiaXRlbS52YWx1ZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uYXJpYUxhYmVsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1vcmllbnRhdGlvbl09XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6IG51bGxcIlxuXHRcdFx0XHRbZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZFwiXG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1oYW5kbGUtdmVydGljYWwnIDogJ2F1LXNsaWRlci1oYW5kbGUtaG9yaXpvbnRhbCdcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkudmVydGljYWwgPyBudWxsIDogc3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkudmVydGljYWwgPyBzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLnRvcCA6IG51bGxcIlxuXHRcdFx0XHQoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHRcdChtb3VzZWRvd24pPVwid2lkZ2V0LmFjdGlvbnMubW91c2VEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0PlxuXHRcdFx0XHQmbmJzcDtcblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2ldLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS50b3BcIlxuXHRcdFx0XHRbc3R5bGUudmlzaWJpbGl0eV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxEaXNwbGF5ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxuXHRcdFx0PlxuXHRcdFx0XHR7eyBzdGF0ZSgpLnZhbHVlc1tpXSB9fVxuXHRcdFx0PC9kaXY+XG5cdFx0fVxuXHRgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXHRwcml2YXRlIF96b25lID0gaW5qZWN0KE5nWm9uZSk7XG5cblx0cmVhZG9ubHkgX3dpZGdldCA9IGNhbGxXaWRnZXRGYWN0b3J5KHtcblx0XHRmYWN0b3J5OiBjcmVhdGVTbGlkZXIsXG5cdFx0d2lkZ2V0TmFtZTogJ3NsaWRlcicsXG5cdFx0ZXZlbnRzOiB7XG5cdFx0XHRvblZhbHVlc0NoYW5nZTogKGV2ZW50KSA9PiB7XG5cdFx0XHRcdHRoaXMub25DaGFuZ2UoZXZlbnQpO1xuXHRcdFx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHRcdFx0XHR0aGlzLnZhbHVlc0NoYW5nZS5lbWl0KGV2ZW50KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdC8qKlxuXHQgKiBTbGlkZXJXaWRnZXQgaG9sZCB0aGUgc3RhdGUgYW5kIGFjdGlvbnMgYXBwbGljYWJsZSB0byB0aGUgYXVTbGlkZXJDb21wb25lbnRcblx0ICovXG5cdHJlYWRvbmx5IHdpZGdldCA9IHRvU2xvdENvbnRleHRXaWRnZXQodGhpcy5fd2lkZ2V0KTtcblx0cmVhZG9ubHkgc3RhdGU6IFNpZ25hbDxTbGlkZXJTdGF0ZT4gPSB0b0FuZ3VsYXJTaWduYWwodGhpcy5fd2lkZ2V0LnN0YXRlJCk7XG5cdHJlYWRvbmx5IGFwaSA9IHRoaXMuX3dpZGdldC5hcGk7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNaW5pbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1pbicsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRtaW46IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogTWF4aW11bSB2YWx1ZSB0aGF0IGNhbiBiZSBhc3NpZ25lZCB0byB0aGUgc2xpZGVyXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVNYXgnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0bWF4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFVuaXQgdmFsdWUgYmV0d2VlbiBzbGlkZXIgc3RlcHNcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVN0ZXBTaXplJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdHN0ZXBTaXplOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEN1cnJlbnQgc2xpZGVyIHZhbHVlc1xuXHQgKi9cblx0QElucHV0KCdhdVZhbHVlcycpXG5cdHZhbHVlczogbnVtYmVyW10gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgdmFsdWUgZm9yIHRoZSAnYXJpYS1sYWJlbCcgYXR0cmlidXRlIGZvciB0aGUgaGFuZGxlXG5cdCAqL1xuXHRASW5wdXQoJ2F1QXJpYUxhYmVsSGFuZGxlJykgYXJpYUxhYmVsSGFuZGxlOiAoKHZhbHVlOiBudW1iZXIsIHNvcnRlZEluZGV4OiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHN0cmluZykgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYnV0IHRoZSBzbGlkZXIgaXMgc3RpbGwgZm9jdXNhYmxlXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVSZWFkb25seScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0cmVhZG9ubHk6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCBzbGlkZXIgdmFsdWUgY2Fubm90IGJlIGNoYW5nZWQgYW5kIHRoZSBzbGlkZXIgY2Fubm90IGJlIGZvY3VzZWRcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdURpc2FibGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmVydGljYWwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdHZlcnRpY2FsOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBldmVudCBlbWl0dGVkIHdoZW4gc2xpZGVyIHZhbHVlcyBhcmUgY2hhbmdlZFxuXHQgKlxuXHQgKiBFdmVudCBwYXlsb2FkIGVxdWFscyB0byB0aGUgdXBkYXRlZCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVZhbHVlc0NoYW5nZScpXG5cdHZhbHVlc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyW10+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dXNlRGlyZWN0aXZlRm9ySG9zdCh0aGlzLl93aWRnZXQuZGlyZWN0aXZlcy5zbGlkZXJEaXJlY3RpdmUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xuXHQgKi9cblx0b25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcblxuXHRvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuXHRyZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vbkNoYW5nZSA9IGZuO1xuXHR9XG5cblx0cmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IGFueSk6IHZvaWQge1xuXHRcdHRoaXMub25Ub3VjaGVkID0gZm47XG5cdH1cblxuXHR3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHRoaXMuX3dpZGdldC5wYXRjaCh7XG5cdFx0XHRcdHZhbHVlczogdmFsdWUsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiBbdmFsdWVdLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG5cdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdHBhdGNoU2ltcGxlQ2hhbmdlcyh0aGlzLl93aWRnZXQucGF0Y2gsIGNoYW5nZXMpO1xuXHR9XG5cblx0aGFuZGxlQmx1cigpIHtcblx0XHR0aGlzLm9uVG91Y2hlZCgpO1xuXHR9XG5cblx0c2xpZGVyQ2xpY2soJGV2ZW50OiBNb3VzZUV2ZW50KSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5jbGljaygkZXZlbnQpO1xuXHR9XG5cblx0b25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBoYW5kbGVJZDogbnVtYmVyKSB7XG5cdFx0dGhpcy53aWRnZXQuYWN0aW9ucy5rZXlkb3duKGV2ZW50LCBoYW5kbGVJZCk7XG5cdFx0dGhpcy5fem9uZS5vblN0YWJsZS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XG5cdFx0XHQoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=`;export{t as default};
