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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.3", type: SliderComponent, isStandalone: true, selector: "[auSlider]", inputs: { className: ["auClassName", "className"], min: ["auMin", "min", auNumberAttribute], max: ["auMax", "max", auNumberAttribute], stepSize: ["auStepSize", "stepSize", auNumberAttribute], values: ["auValues", "values"], ariaLabelHandle: ["auAriaLabelHandle", "ariaLabelHandle"], readonly: ["auReadonly", "readonly", auBooleanAttribute], disabled: ["auDisabled", "disabled", auBooleanAttribute], vertical: ["auVertical", "vertical", auBooleanAttribute] }, outputs: { valuesChange: "auValuesChange" }, host: { listeners: { "blur": "handleBlur()" }, properties: { "class": "(state().vertical ? \\"au-slider-vertical\\" : \\"au-slider-horizontal\\") + \\" \\" + state().className", "class.disabled": "state().disabled" }, classAttribute: "au-slider" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], usesOnChanges: true, ngImport: i0, template: \`
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		@for (option of state().progressDisplayOptions; track option) {
			<div
				class="au-slider-progress"
				[style.left.%]="option.left"
				[style.bottom.%]="option.bottom"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
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
				[style.left.%]="state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().handleDisplayOptions[item.id].top"
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.3", ngImport: i0, type: SliderComponent, decorators: [{
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
		<div [class]="state().vertical ? 'au-slider-clickable-area-vertical' : 'au-slider-clickable-area'" (click)="sliderClick($event)"></div>
		@for (option of state().progressDisplayOptions; track option) {
			<div
				class="au-slider-progress"
				[style.left.%]="option.left"
				[style.bottom.%]="option.bottom"
				[style.width.%]="option.width"
				[style.height.%]="option.height"
			></div>
		}
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
				[style.left.%]="state().handleDisplayOptions[item.id].left"
				[style.top.%]="state().handleDisplayOptions[item.id].top"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixlQUFlLEVBQ2YsbUJBQW1CLEVBQ25CLG1CQUFtQixHQUNuQixNQUFNLDRCQUE0QixDQUFDO0FBRXBDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFnRjFCLE1BQU0sT0FBTyxlQUFlO0lBaUYzQjtRQWhGUSxVQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztZQUNwQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7YUFDRDtTQUNELENBQUMsQ0FBQztRQUNIOztXQUVHO1FBQ00sV0FBTSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQyxP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QUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztnQkFTM0QsWUFBWTtzQkFEWCxNQUFNO3VCQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHtTbGlkZXJTdGF0ZX0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHtcblx0VXNlRGlyZWN0aXZlLFxuXHRhdUJvb2xlYW5BdHRyaWJ1dGUsXG5cdGF1TnVtYmVyQXR0cmlidXRlLFxuXHRjYWxsV2lkZ2V0RmFjdG9yeSxcblx0Y3JlYXRlU2xpZGVyLFxuXHRwYXRjaFNpbXBsZUNoYW5nZXMsXG5cdHRvQW5ndWxhclNpZ25hbCxcblx0dG9TbG90Q29udGV4dFdpZGdldCxcblx0dXNlRGlyZWN0aXZlRm9ySG9zdCxcbn0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge09uQ2hhbmdlcywgU2lnbmFsLCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBmb3J3YXJkUmVmLCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOR19WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnW2F1U2xpZGVyXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRwcm92aWRlcnM6IFt7cHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksIG11bHRpOiB0cnVlfV0sXG5cdGltcG9ydHM6IFtVc2VEaXJlY3RpdmVdLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6IGBhdS1zbGlkZXJgLFxuXHRcdCdbY2xhc3NdJzogJyhzdGF0ZSgpLnZlcnRpY2FsID8gXCJhdS1zbGlkZXItdmVydGljYWxcIiA6IFwiYXUtc2xpZGVyLWhvcml6b250YWxcIikgKyBcIiBcIiArIHN0YXRlKCkuY2xhc3NOYW1lJyxcblx0XHQnW2NsYXNzLmRpc2FibGVkXSc6ICdzdGF0ZSgpLmRpc2FibGVkJyxcblx0XHQnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItY2xpY2thYmxlLWFyZWEtdmVydGljYWwnIDogJ2F1LXNsaWRlci1jbGlja2FibGUtYXJlYSdcIiAoY2xpY2spPVwic2xpZGVyQ2xpY2soJGV2ZW50KVwiPjwvZGl2PlxuXHRcdEBmb3IgKG9wdGlvbiBvZiBzdGF0ZSgpLnByb2dyZXNzRGlzcGxheU9wdGlvbnM7IHRyYWNrIG9wdGlvbikge1xuXHRcdFx0PGRpdlxuXHRcdFx0XHRjbGFzcz1cImF1LXNsaWRlci1wcm9ncmVzc1wiXG5cdFx0XHRcdFtzdHlsZS5sZWZ0LiVdPVwib3B0aW9uLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUuYm90dG9tLiVdPVwib3B0aW9uLmJvdHRvbVwiXG5cdFx0XHRcdFtzdHlsZS53aWR0aC4lXT1cIm9wdGlvbi53aWR0aFwiXG5cdFx0XHRcdFtzdHlsZS5oZWlnaHQuJV09XCJvcHRpb24uaGVpZ2h0XCJcblx0XHRcdD48L2Rpdj5cblx0XHR9XG5cdFx0PGRpdlxuXHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1taW4nIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbWluJ1wiXG5cdFx0XHRbc3R5bGUudmlzaWJpbGl0eV09XCJzdGF0ZSgpLm1pblZhbHVlTGFiZWxEaXNwbGF5ID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuXHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1pbkxhYmVsRGlyZWN0aXZlXCJcblx0XHQ+XG5cdFx0XHR7eyBzdGF0ZSgpLm1pbiB9fVxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWF4JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1heCdcIlxuXHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5tYXhWYWx1ZUxhYmVsRGlzcGxheSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5tYXhMYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5tYXggfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG5cdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uTGVmdFwiXG5cdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5jb21iaW5lZExhYmVsUG9zaXRpb25Ub3BcIlxuXHRcdD5cblx0XHRcdHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzBdIH19IC0ge3sgc3RhdGUoKS5zb3J0ZWRWYWx1ZXNbMV0gfX1cblx0XHQ8L2Rpdj5cblx0XHRAZm9yIChpdGVtIG9mIHN0YXRlKCkuc29ydGVkSGFuZGxlczsgdHJhY2sgaXRlbS5pZDsgbGV0IGkgPSAkaW5kZXgpIHtcblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItaGFuZGxlXCJcblx0XHRcdFx0cm9sZT1cInNsaWRlclwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtaW5dPVwic3RhdGUoKS5taW5cIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWF4XT1cInN0YXRlKCkubWF4XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1yZWFkb25seV09XCJzdGF0ZSgpLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVub3ddPVwiaXRlbS52YWx1ZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIml0ZW0uYXJpYUxhYmVsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1vcmllbnRhdGlvbl09XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6IG51bGxcIlxuXHRcdFx0XHRbZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZFwiXG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1oYW5kbGUtdmVydGljYWwnIDogJ2F1LXNsaWRlci1oYW5kbGUtaG9yaXpvbnRhbCdcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLnRvcFwiXG5cdFx0XHRcdChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdFx0KG1vdXNlZG93bik9XCJ3aWRnZXQuYWN0aW9ucy5tb3VzZURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHQ+XG5cdFx0XHRcdCZuYnNwO1xuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2ldLnRvcFwiXG5cdFx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IHN0YXRlKCkudmFsdWVzW2ldIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdHByaXZhdGUgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0LyoqXG5cdCAqIFNsaWRlcldpZGdldCBob2xkIHRoZSBzdGF0ZSBhbmQgYWN0aW9ucyBhcHBsaWNhYmxlIHRvIHRoZSBhdVNsaWRlckNvbXBvbmVudFxuXHQgKi9cblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBzdGF0ZTogU2lnbmFsPFNsaWRlclN0YXRlPiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1TWluJywgdHJhbnNmb3JtOiBhdU51bWJlckF0dHJpYnV0ZX0pXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdU1heCcsIHRyYW5zZm9ybTogYXVOdW1iZXJBdHRyaWJ1dGV9KVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1U3RlcFNpemUnLCB0cmFuc2Zvcm06IGF1TnVtYmVyQXR0cmlidXRlfSlcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB2YWx1ZSBmb3IgdGhlICdhcmlhLWxhYmVsJyBhdHRyaWJ1dGUgZm9yIHRoZSBoYW5kbGVcblx0ICovXG5cdEBJbnB1dCgnYXVBcmlhTGFiZWxIYW5kbGUnKSBhcmlhTGFiZWxIYW5kbGU6ICgodmFsdWU6IG51bWJlciwgc29ydGVkSW5kZXg6IG51bWJlciwgaW5kZXg6IG51bWJlcikgPT4gc3RyaW5nKSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdVJlYWRvbmx5JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KVxuXHRyZWFkb25seTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBhbmQgdGhlIHNsaWRlciBjYW5ub3QgYmUgZm9jdXNlZFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1RGlzYWJsZWQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pXG5cdGRpc2FibGVkOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgaXMgdmVydGljYWxseSBwb3NpdGlvbmVkIG90aGVyd2lzZSBpdCBpcyBob3Jpem9udGFsXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWZXJ0aWNhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSlcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnNsaWRlckRpcmVjdGl2ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXG5cdCAqL1xuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IFt2YWx1ZV0sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0ZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRoYW5kbGVCbHVyKCkge1xuXHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdH1cblxuXHRzbGlkZXJDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmNsaWNrKCRldmVudCk7XG5cdH1cblxuXHRvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGhhbmRsZUlkOiBudW1iZXIpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmtleWRvd24oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
