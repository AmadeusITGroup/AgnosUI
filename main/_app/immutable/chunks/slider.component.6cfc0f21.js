const t=`import { UseDirective, callWidgetFactory, createSlider, patchSimpleChanges, toAngularSignal, toSlotContextWidget, useDirectiveForHost, } from '@agnos-ui/angular-headless';
import { NgFor, NgIf } from '@angular/common';
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
    trackHandle(index, handle) {
        return handle.id;
    }
    onKeyDown(event, handleId) {
        this.widget.actions.keydown(event, handleId);
        this._zone.onStable.pipe(take(1)).subscribe(() => {
            event.target.focus();
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: SliderComponent, isStandalone: true, selector: "[auSlider]", inputs: { className: ["auClassName", "className"], min: ["auMin", "min"], max: ["auMax", "max"], stepSize: ["auStepSize", "stepSize"], values: ["auValues", "values"], readonly: ["auReadonly", "readonly"], disabled: ["auDisabled", "disabled"], vertical: ["auVertical", "vertical"] }, outputs: { valuesChange: "auValuesChange" }, host: { listeners: { "blur": "handleBlur()" }, properties: { "class": "state().vertical ? \\"au-slider-vertical\\" : \\"au-slider-horizontal\\"" }, classAttribute: "au-slider" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], usesOnChanges: true, ngImport: i0, template: \`
		<div [class]="state().vertical ? 'au-clickable-slider-area-vertical' : 'au-clickable-slider-area'" (click)="sliderClick($event)"></div>
		<div
			*ngFor="let option of state().progressDisplayOptions"
			class="au-slider-progress"
			[attr.disabled]="state().disabled ? true : null"
			[style.left.%]="option.left"
			[style.bottom.%]="option.bottom"
			[style.width.%]="option.width"
			[style.height.%]="option.height"
		></div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
			[style.visibility]="state().minValueLabelDisplay"
			[attr.disabled]="state().disabled ? true : null"
			[auUse]="widget.directives.minLabelDirective"
		>
			{{ state().min }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
			[style.visibility]="state().maxValueLabelDisplay"
			[attr.disabled]="state().disabled ? true : null"
			[auUse]="widget.directives.maxLabelDirective"
		>
			{{ state().max }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
			[style.visibility]="state().combinedLabelDisplay"
			[style.left.%]="state().combinedLabelPositionLeft"
			[style.top.%]="state().combinedLabelPositionTop"
			[attr.disabled]="state().disabled ? true : null"
		>
			{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
		</div>
		<ng-template ngFor let-item [ngForOf]="state().sortedHandles" let-i="index" ; [ngForTrackBy]="trackHandle">
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.disabled]="state().disabled ? true : null"
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
				[style.visibility]="state().combinedLabelDisplay === 'visible' ? 'hidden' : 'visible'"
				[attr.disabled]="state().disabled ? true : null"
			>
				{{ state().values[i] }}
			</div>
		</ng-template>
	\`, isInline: true, styles: ["@import\\"@agnos-ui/common/lib/slider.scss\\";\\n"], dependencies: [{ kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: UseDirective, selector: "[auUse]", inputs: ["auUse", "auUseParams"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{ selector: '[auSlider]', standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], imports: [NgIf, NgFor, UseDirective], host: {
                        class: 'au-slider',
                        '[class]': 'state().vertical ? "au-slider-vertical" : "au-slider-horizontal"',
                        '(blur)': 'handleBlur()',
                    }, template: \`
		<div [class]="state().vertical ? 'au-clickable-slider-area-vertical' : 'au-clickable-slider-area'" (click)="sliderClick($event)"></div>
		<div
			*ngFor="let option of state().progressDisplayOptions"
			class="au-slider-progress"
			[attr.disabled]="state().disabled ? true : null"
			[style.left.%]="option.left"
			[style.bottom.%]="option.bottom"
			[style.width.%]="option.width"
			[style.height.%]="option.height"
		></div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-min' : 'au-slider-label au-slider-label-min'"
			[style.visibility]="state().minValueLabelDisplay"
			[attr.disabled]="state().disabled ? true : null"
			[auUse]="widget.directives.minLabelDirective"
		>
			{{ state().min }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-max' : 'au-slider-label au-slider-label-max'"
			[style.visibility]="state().maxValueLabelDisplay"
			[attr.disabled]="state().disabled ? true : null"
			[auUse]="widget.directives.maxLabelDirective"
		>
			{{ state().max }}
		</div>
		<div
			[class]="state().vertical ? 'au-slider-label-vertical au-slider-label-vertical-now' : 'au-slider-label au-slider-label-now'"
			[style.visibility]="state().combinedLabelDisplay"
			[style.left.%]="state().combinedLabelPositionLeft"
			[style.top.%]="state().combinedLabelPositionTop"
			[attr.disabled]="state().disabled ? true : null"
		>
			{{ state().sortedValues[0] }} - {{ state().sortedValues[1] }}
		</div>
		<ng-template ngFor let-item [ngForOf]="state().sortedHandles" let-i="index" ; [ngForTrackBy]="trackHandle">
			<button
				class="au-slider-handle"
				role="slider"
				[attr.aria-valuemin]="state().min"
				[attr.aria-valuemax]="state().max"
				[attr.aria-readonly]="state().readonly ? true : null"
				[attr.aria-disabled]="state().disabled ? true : null"
				[attr.aria-valuenow]="item.value"
				[attr.aria-valuetext]="item.value"
				[attr.disabled]="state().disabled ? true : null"
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
				[style.visibility]="state().combinedLabelDisplay === 'visible' ? 'hidden' : 'visible'"
				[attr.disabled]="state().disabled ? true : null"
			>
				{{ state().values[i] }}
			</div>
		</ng-template>
	\`, styles: ["@import\\"@agnos-ui/common/lib/slider.scss\\";\\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { className: [{
                type: Input,
                args: ['auClassName']
            }], min: [{
                type: Input,
                args: ['auMin']
            }], max: [{
                type: Input,
                args: ['auMax']
            }], stepSize: [{
                type: Input,
                args: ['auStepSize']
            }], values: [{
                type: Input,
                args: ['auValues']
            }], readonly: [{
                type: Input,
                args: ['auReadonly']
            }], disabled: [{
                type: Input,
                args: ['auDisabled']
            }], vertical: [{
                type: Input,
                args: ['auVertical']
            }], valuesChange: [{
                type: Output,
                args: ['auValuesChange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUNwQyxPQUFPLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDN0ksT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7QUFrRjFCLE1BQU0sT0FBTyxlQUFlO0lBNEUzQjtRQTNFUSxVQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRCLFlBQU8sR0FBRyxpQkFBaUIsQ0FBQztZQUNwQyxPQUFPLEVBQUUsWUFBWTtZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixNQUFNLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7YUFDRDtTQUNELENBQUMsQ0FBQztRQUNIOztXQUVHO1FBQ00sV0FBTSxH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QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsV0FDN0YsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxRQUM5Qjt3QkFDTCxLQUFLLEVBQUUsV0FBVzt3QkFDbEIsU0FBUyxFQUFFLGtFQUFrRTt3QkFDN0UsUUFBUSxFQUFFLGNBQWM7cUJBQ3hCLFlBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUVUOzBFQTJCcUIsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQU1wQixHQUFHO3NCQURGLEtBQUs7dUJBQUMsT0FBTztnQkFPZCxHQUFHO3NCQURGLEtBQUs7dUJBQUMsT0FBTztnQkFPZCxRQUFRO3NCQURQLEtBQUs7dUJBQUMsWUFBWTtnQkFPbkIsTUFBTTtzQkFETCxLQUFLO3VCQUFDLFVBQVU7Z0JBT2pCLFFBQVE7c0JBRFAsS0FBSzt1QkFBQyxZQUFZO2dCQU9uQixRQUFRO3NCQURQLEtBQUs7dUJBQUMsWUFBWTtnQkFPbkIsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLFlBQVk7Z0JBU25CLFlBQVk7c0JBRFgsTUFBTTt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xpZGVyU3RhdGV9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVNsaWRlcixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7TmdGb3IsIE5nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7T25DaGFuZ2VzLCBTaWduYWwsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBOZ1pvbmUsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIGZvcndhcmRSZWYsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge3Rha2V9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdbYXVTbGlkZXJdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW3twcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU2xpZGVyQ29tcG9uZW50KSwgbXVsdGk6IHRydWV9XSxcblx0aW1wb3J0czogW05nSWYsIE5nRm9yLCBVc2VEaXJlY3RpdmVdLFxuXHRob3N0OiB7XG5cdFx0Y2xhc3M6ICdhdS1zbGlkZXInLFxuXHRcdCdbY2xhc3NdJzogJ3N0YXRlKCkudmVydGljYWwgPyBcImF1LXNsaWRlci12ZXJ0aWNhbFwiIDogXCJhdS1zbGlkZXItaG9yaXpvbnRhbFwiJyxcblx0XHQnKGJsdXIpJzogJ2hhbmRsZUJsdXIoKScsXG5cdH0sXG5cdHRlbXBsYXRlOiBgXG5cdFx0PGRpdiBbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1jbGlja2FibGUtc2xpZGVyLWFyZWEtdmVydGljYWwnIDogJ2F1LWNsaWNrYWJsZS1zbGlkZXItYXJlYSdcIiAoY2xpY2spPVwic2xpZGVyQ2xpY2soJGV2ZW50KVwiPjwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdCpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygc3RhdGUoKS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zXCJcblx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLXByb2dyZXNzXCJcblx0XHRcdFthdHRyLmRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRbc3R5bGUubGVmdC4lXT1cIm9wdGlvbi5sZWZ0XCJcblx0XHRcdFtzdHlsZS5ib3R0b20uJV09XCJvcHRpb24uYm90dG9tXCJcblx0XHRcdFtzdHlsZS53aWR0aC4lXT1cIm9wdGlvbi53aWR0aFwiXG5cdFx0XHRbc3R5bGUuaGVpZ2h0LiVdPVwib3B0aW9uLmhlaWdodFwiXG5cdFx0PjwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWluJyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1pbidcIlxuXHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5taW5WYWx1ZUxhYmVsRGlzcGxheVwiXG5cdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1pbkxhYmVsRGlyZWN0aXZlXCJcblx0XHQ+XG5cdFx0XHR7eyBzdGF0ZSgpLm1pbiB9fVxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWF4JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1heCdcIlxuXHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5tYXhWYWx1ZUxhYmVsRGlzcGxheVwiXG5cdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0W2F1VXNlXT1cIndpZGdldC5kaXJlY3RpdmVzLm1heExhYmVsRGlyZWN0aXZlXCJcblx0XHQ+XG5cdFx0XHR7eyBzdGF0ZSgpLm1heCB9fVxuXHRcdDwvZGl2PlxuXHRcdDxkaXZcblx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5jb21iaW5lZExhYmVsRGlzcGxheVwiXG5cdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uTGVmdFwiXG5cdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5jb21iaW5lZExhYmVsUG9zaXRpb25Ub3BcIlxuXHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZCA/IHRydWUgOiBudWxsXCJcblx0XHQ+XG5cdFx0XHR7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1swXSB9fSAtIHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzFdIH19XG5cdFx0PC9kaXY+XG5cdFx0PG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIFtuZ0Zvck9mXT1cInN0YXRlKCkuc29ydGVkSGFuZGxlc1wiIGxldC1pPVwiaW5kZXhcIiA7IFtuZ0ZvclRyYWNrQnldPVwidHJhY2tIYW5kbGVcIj5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItaGFuZGxlXCJcblx0XHRcdFx0cm9sZT1cInNsaWRlclwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVtaW5dPVwic3RhdGUoKS5taW5cIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWF4XT1cInN0YXRlKCkubWF4XCJcblx0XHRcdFx0W2F0dHIuYXJpYS1yZWFkb25seV09XCJzdGF0ZSgpLnJlYWRvbmx5ID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLWRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWVub3ddPVwiaXRlbS52YWx1ZVwiXG5cdFx0XHRcdFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItaGFuZGxlLXZlcnRpY2FsJyA6ICdhdS1zbGlkZXItaGFuZGxlLWhvcml6b250YWwnXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpdGVtLmlkXS50b3BcIlxuXHRcdFx0XHQoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHRcdChtb3VzZWRvd24pPVwid2lkZ2V0LmFjdGlvbnMubW91c2VEb3duKCRldmVudCwgaXRlbS5pZClcIlxuXHRcdFx0PlxuXHRcdFx0XHQmbmJzcDtcblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW5vdycgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1ub3cnXCJcblx0XHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2ldLmxlZnRcIlxuXHRcdFx0XHRbc3R5bGUudG9wLiVdPVwic3RhdGUoKS5oYW5kbGVEaXNwbGF5T3B0aW9uc1tpXS50b3BcIlxuXHRcdFx0XHRbc3R5bGUudmlzaWJpbGl0eV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxEaXNwbGF5ID09PSAndmlzaWJsZScgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG5cdFx0XHRcdFthdHRyLmRpc2FibGVkXT1cInN0YXRlKCkuZGlzYWJsZWQgPyB0cnVlIDogbnVsbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IHN0YXRlKCkudmFsdWVzW2ldIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25nLXRlbXBsYXRlPlxuXHRgLFxuXHRzdHlsZXM6IFtcIkBpbXBvcnQgJ0BhZ25vcy11aS9jb21tb24vbGliL3NsaWRlci5zY3NzJztcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdHByaXZhdGUgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0LyoqXG5cdCAqIFNsaWRlcldpZGdldCBob2xkIHRoZSBzdGF0ZSBhbmQgYWN0aW9ucyBhcHBsaWNhYmxlIHRvIHRoZSBhdVNsaWRlckNvbXBvbmVudFxuXHQgKi9cblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBzdGF0ZTogU2lnbmFsPFNsaWRlclN0YXRlPiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KCdhdU1pbicpXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNYXgnKVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KCdhdVN0ZXBTaXplJylcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCgnYXVSZWFkb25seScpXG5cdHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGFuZCB0aGUgc2xpZGVyIGNhbm5vdCBiZSBmb2N1c2VkXG5cdCAqL1xuXHRASW5wdXQoJ2F1RGlzYWJsZWQnKVxuXHRkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKi9cblx0QElucHV0KCdhdVZlcnRpY2FsJylcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnNsaWRlckRpcmVjdGl2ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXG5cdCAqL1xuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IFt2YWx1ZV0sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0ZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRoYW5kbGVCbHVyKCkge1xuXHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdH1cblxuXHRzbGlkZXJDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmNsaWNrKCRldmVudCk7XG5cdH1cblxuXHR0cmFja0hhbmRsZShpbmRleDogbnVtYmVyLCBoYW5kbGU6IHtpZDogbnVtYmVyOyB2YWx1ZTogbnVtYmVyfSkge1xuXHRcdHJldHVybiBoYW5kbGUuaWQ7XG5cdH1cblxuXHRvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGhhbmRsZUlkOiBudW1iZXIpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmtleWRvd24oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
