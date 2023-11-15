const t=`import { UseDirective, callWidgetFactory, createSlider, patchSimpleChanges, toAngularSignal, toSlotContextWidget, useDirectiveForHost, } from '@agnos-ui/angular-headless';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.2", type: SliderComponent, isStandalone: true, selector: "[auSlider]", inputs: { className: ["auClassName", "className"], min: ["auMin", "min"], max: ["auMax", "max"], stepSize: ["auStepSize", "stepSize"], values: ["auValues", "values"], readonly: ["auReadonly", "readonly"], disabled: ["auDisabled", "disabled"], vertical: ["auVertical", "vertical"] }, outputs: { valuesChange: "auValuesChange" }, host: { listeners: { "blur": "handleBlur()" }, properties: { "class": "(state().vertical ? \\"au-slider-vertical\\" : \\"au-slider-horizontal\\") + \\" \\" + state().className", "class.disabled": "state().disabled" }, classAttribute: "au-slider" }, providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true }], usesOnChanges: true, ngImport: i0, template: \`
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: SliderComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYi9zcmMvbGliL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDbkIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzdJLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxNQUFNLENBQUM7O0FBK0UxQixNQUFNLE9BQU8sZUFBZTtJQTRFM0I7UUEzRVEsVUFBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0QixZQUFPLEdBQUcsaUJBQWlCLENBQUM7WUFDcEMsT0FBTyxFQUFFLFlBQVk7WUFDckIsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFO2dCQUNQLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2FBQ0Q7U0FDRCxDQUFDLENBQUM7UUFDSDs7V0FFRztRQUNNLFdBQU0sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0MsVUFBSyxH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SUFBSSxFQUFDLENBQUM7b0JBQ3RHLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsSUFBSSxFQUFFO3dCQUNMLEtBQUssRUFBRSxXQUFXO3dCQUNsQixTQUFTLEVBQUUsOEZBQThGO3dCQUN6RyxrQkFBa0IsRUFBRSxrQkFBa0I7d0JBQ3RDLFFBQVEsRUFBRSxjQUFjO3FCQUN4QjtvQkFDRCxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOERUO2lCQUNEO3dEQXlCc0IsU0FBUztzQkFBOUIsS0FBSzt1QkFBQyxhQUFhO2dCQU1wQixHQUFHO3NCQURGLEtBQUs7dUJBQUMsT0FBTztnQkFPZCxHQUFHO3NCQURGLEtBQUs7dUJBQUMsT0FBTztnQkFPZCxRQUFRO3NCQURQLEtBQUs7dUJBQUMsWUFBWTtnQkFPbkIsTUFBTTtzQkFETCxLQUFLO3VCQUFDLFVBQVU7Z0JBT2pCLFFBQVE7c0JBRFAsS0FBSzt1QkFBQyxZQUFZO2dCQU9uQixRQUFRO3NCQURQLEtBQUs7dUJBQUMsWUFBWTtnQkFPbkIsUUFBUTtzQkFEUCxLQUFLO3VCQUFDLFlBQVk7Z0JBU25CLFlBQVk7c0JBRFgsTUFBTTt1QkFBQyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7U2xpZGVyU3RhdGV9IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB7XG5cdFVzZURpcmVjdGl2ZSxcblx0Y2FsbFdpZGdldEZhY3RvcnksXG5cdGNyZWF0ZVNsaWRlcixcblx0cGF0Y2hTaW1wbGVDaGFuZ2VzLFxuXHR0b0FuZ3VsYXJTaWduYWwsXG5cdHRvU2xvdENvbnRleHRXaWRnZXQsXG5cdHVzZURpcmVjdGl2ZUZvckhvc3QsXG59IGZyb20gJ0BhZ25vcy11aS9hbmd1bGFyLWhlYWRsZXNzJztcbmltcG9ydCB0eXBlIHtPbkNoYW5nZXMsIFNpZ25hbCwgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE5nWm9uZSwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7dGFrZX0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ1thdVNsaWRlcl0nLFxuXHRzdGFuZGFsb25lOiB0cnVlLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLCBtdWx0aTogdHJ1ZX1dLFxuXHRpbXBvcnRzOiBbVXNlRGlyZWN0aXZlXSxcblx0aG9zdDoge1xuXHRcdGNsYXNzOiBgYXUtc2xpZGVyYCxcblx0XHQnW2NsYXNzXSc6ICcoc3RhdGUoKS52ZXJ0aWNhbCA/IFwiYXUtc2xpZGVyLXZlcnRpY2FsXCIgOiBcImF1LXNsaWRlci1ob3Jpem9udGFsXCIpICsgXCIgXCIgKyBzdGF0ZSgpLmNsYXNzTmFtZScsXG5cdFx0J1tjbGFzcy5kaXNhYmxlZF0nOiAnc3RhdGUoKS5kaXNhYmxlZCcsXG5cdFx0JyhibHVyKSc6ICdoYW5kbGVCbHVyKCknLFxuXHR9LFxuXHR0ZW1wbGF0ZTogYFxuXHRcdDxkaXYgW2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWNsaWNrYWJsZS1hcmVhLXZlcnRpY2FsJyA6ICdhdS1zbGlkZXItY2xpY2thYmxlLWFyZWEnXCIgKGNsaWNrKT1cInNsaWRlckNsaWNrKCRldmVudClcIj48L2Rpdj5cblx0XHRAZm9yIChvcHRpb24gb2Ygc3RhdGUoKS5wcm9ncmVzc0Rpc3BsYXlPcHRpb25zOyB0cmFjayBvcHRpb24pIHtcblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3M9XCJhdS1zbGlkZXItcHJvZ3Jlc3NcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cIm9wdGlvbi5sZWZ0XCJcblx0XHRcdFx0W3N0eWxlLmJvdHRvbS4lXT1cIm9wdGlvbi5ib3R0b21cIlxuXHRcdFx0XHRbc3R5bGUud2lkdGguJV09XCJvcHRpb24ud2lkdGhcIlxuXHRcdFx0XHRbc3R5bGUuaGVpZ2h0LiVdPVwib3B0aW9uLmhlaWdodFwiXG5cdFx0XHQ+PC9kaXY+XG5cdFx0fVxuXHRcdDxkaXZcblx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbWluJyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW1pbidcIlxuXHRcdFx0W3N0eWxlLnZpc2liaWxpdHldPVwic3RhdGUoKS5taW5WYWx1ZUxhYmVsRGlzcGxheSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nXCJcblx0XHRcdFthdVVzZV09XCJ3aWRnZXQuZGlyZWN0aXZlcy5taW5MYWJlbERpcmVjdGl2ZVwiXG5cdFx0PlxuXHRcdFx0e3sgc3RhdGUoKS5taW4gfX1cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRbY2xhc3NdPVwic3RhdGUoKS52ZXJ0aWNhbCA/ICdhdS1zbGlkZXItbGFiZWwtdmVydGljYWwgYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsLW1heCcgOiAnYXUtc2xpZGVyLWxhYmVsIGF1LXNsaWRlci1sYWJlbC1tYXgnXCJcblx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkubWF4VmFsdWVMYWJlbERpc3BsYXkgPyAndmlzaWJsZScgOiAnaGlkZGVuJ1wiXG5cdFx0XHRbYXVVc2VdPVwid2lkZ2V0LmRpcmVjdGl2ZXMubWF4TGFiZWxEaXJlY3RpdmVcIlxuXHRcdD5cblx0XHRcdHt7IHN0YXRlKCkubWF4IH19XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0W2NsYXNzXT1cInN0YXRlKCkudmVydGljYWwgPyAnYXUtc2xpZGVyLWxhYmVsLXZlcnRpY2FsIGF1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbC1ub3cnIDogJ2F1LXNsaWRlci1sYWJlbCBhdS1zbGlkZXItbGFiZWwtbm93J1wiXG5cdFx0XHRbc3R5bGUudmlzaWJpbGl0eV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxEaXNwbGF5ID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIlxuXHRcdFx0W3N0eWxlLmxlZnQuJV09XCJzdGF0ZSgpLmNvbWJpbmVkTGFiZWxQb3NpdGlvbkxlZnRcIlxuXHRcdFx0W3N0eWxlLnRvcC4lXT1cInN0YXRlKCkuY29tYmluZWRMYWJlbFBvc2l0aW9uVG9wXCJcblx0XHQ+XG5cdFx0XHR7eyBzdGF0ZSgpLnNvcnRlZFZhbHVlc1swXSB9fSAtIHt7IHN0YXRlKCkuc29ydGVkVmFsdWVzWzFdIH19XG5cdFx0PC9kaXY+XG5cdFx0QGZvciAoaXRlbSBvZiBzdGF0ZSgpLnNvcnRlZEhhbmRsZXM7IHRyYWNrIGl0ZW0uaWQ7IGxldCBpID0gJGluZGV4KSB7XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwiYXUtc2xpZGVyLWhhbmRsZVwiXG5cdFx0XHRcdHJvbGU9XCJzbGlkZXJcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbWluXT1cInN0YXRlKCkubWluXCJcblx0XHRcdFx0W2F0dHIuYXJpYS12YWx1ZW1heF09XCJzdGF0ZSgpLm1heFwiXG5cdFx0XHRcdFthdHRyLmFyaWEtcmVhZG9ubHldPVwic3RhdGUoKS5yZWFkb25seSA/IHRydWUgOiBudWxsXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1kaXNhYmxlZF09XCJzdGF0ZSgpLmRpc2FibGVkID8gdHJ1ZSA6IG51bGxcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVlbm93XT1cIml0ZW0udmFsdWVcIlxuXHRcdFx0XHRbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJpdGVtLnZhbHVlXCJcblx0XHRcdFx0W2F0dHIuYXJpYS1vcmllbnRhdGlvbl09XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6IG51bGxcIlxuXHRcdFx0XHRbZGlzYWJsZWRdPVwic3RhdGUoKS5kaXNhYmxlZFwiXG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1oYW5kbGUtdmVydGljYWwnIDogJ2F1LXNsaWRlci1oYW5kbGUtaG9yaXpvbnRhbCdcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaXRlbS5pZF0ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2l0ZW0uaWRdLnRvcFwiXG5cdFx0XHRcdChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIGl0ZW0uaWQpXCJcblx0XHRcdFx0KG1vdXNlZG93bik9XCJ3aWRnZXQuYWN0aW9ucy5tb3VzZURvd24oJGV2ZW50LCBpdGVtLmlkKVwiXG5cdFx0XHQ+XG5cdFx0XHRcdCZuYnNwO1xuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdFtjbGFzc109XCJzdGF0ZSgpLnZlcnRpY2FsID8gJ2F1LXNsaWRlci1sYWJlbC12ZXJ0aWNhbCBhdS1zbGlkZXItbGFiZWwtdmVydGljYWwtbm93JyA6ICdhdS1zbGlkZXItbGFiZWwgYXUtc2xpZGVyLWxhYmVsLW5vdydcIlxuXHRcdFx0XHRbc3R5bGUubGVmdC4lXT1cInN0YXRlKCkuaGFuZGxlRGlzcGxheU9wdGlvbnNbaV0ubGVmdFwiXG5cdFx0XHRcdFtzdHlsZS50b3AuJV09XCJzdGF0ZSgpLmhhbmRsZURpc3BsYXlPcHRpb25zW2ldLnRvcFwiXG5cdFx0XHRcdFtzdHlsZS52aXNpYmlsaXR5XT1cInN0YXRlKCkuY29tYmluZWRMYWJlbERpc3BsYXkgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXG5cdFx0XHQ+XG5cdFx0XHRcdHt7IHN0YXRlKCkudmFsdWVzW2ldIH19XG5cdFx0XHQ8L2Rpdj5cblx0XHR9XG5cdGAsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cdHByaXZhdGUgX3pvbmUgPSBpbmplY3QoTmdab25lKTtcblxuXHRyZWFkb25seSBfd2lkZ2V0ID0gY2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdGZhY3Rvcnk6IGNyZWF0ZVNsaWRlcixcblx0XHR3aWRnZXROYW1lOiAnc2xpZGVyJyxcblx0XHRldmVudHM6IHtcblx0XHRcdG9uVmFsdWVzQ2hhbmdlOiAoZXZlbnQpID0+IHtcblx0XHRcdFx0dGhpcy5vbkNoYW5nZShldmVudCk7XG5cdFx0XHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdFx0XHRcdHRoaXMudmFsdWVzQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0LyoqXG5cdCAqIFNsaWRlcldpZGdldCBob2xkIHRoZSBzdGF0ZSBhbmQgYWN0aW9ucyBhcHBsaWNhYmxlIHRvIHRoZSBhdVNsaWRlckNvbXBvbmVudFxuXHQgKi9cblx0cmVhZG9ubHkgd2lkZ2V0ID0gdG9TbG90Q29udGV4dFdpZGdldCh0aGlzLl93aWRnZXQpO1xuXHRyZWFkb25seSBzdGF0ZTogU2lnbmFsPFNsaWRlclN0YXRlPiA9IHRvQW5ndWxhclNpZ25hbCh0aGlzLl93aWRnZXQuc3RhdGUkKTtcblx0cmVhZG9ubHkgYXBpID0gdGhpcy5fd2lkZ2V0LmFwaTtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqL1xuXHRASW5wdXQoJ2F1Q2xhc3NOYW1lJykgY2xhc3NOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIE1pbmltdW0gdmFsdWUgdGhhdCBjYW4gYmUgYXNzaWduZWQgdG8gdGhlIHNsaWRlclxuXHQgKi9cblx0QElucHV0KCdhdU1pbicpXG5cdG1pbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBNYXhpbXVtIHZhbHVlIHRoYXQgY2FuIGJlIGFzc2lnbmVkIHRvIHRoZSBzbGlkZXJcblx0ICovXG5cdEBJbnB1dCgnYXVNYXgnKVxuXHRtYXg6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVW5pdCB2YWx1ZSBiZXR3ZWVuIHNsaWRlciBzdGVwc1xuXHQgKi9cblx0QElucHV0KCdhdVN0ZXBTaXplJylcblx0c3RlcFNpemU6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ3VycmVudCBzbGlkZXIgdmFsdWVzXG5cdCAqL1xuXHRASW5wdXQoJ2F1VmFsdWVzJylcblx0dmFsdWVzOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHNsaWRlciB2YWx1ZSBjYW5ub3QgYmUgY2hhbmdlZCBidXQgdGhlIHNsaWRlciBpcyBzdGlsbCBmb2N1c2FibGVcblx0ICovXG5cdEBJbnB1dCgnYXVSZWFkb25seScpXG5cdHJlYWRvbmx5OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAgc2xpZGVyIHZhbHVlIGNhbm5vdCBiZSBjaGFuZ2VkIGFuZCB0aGUgc2xpZGVyIGNhbm5vdCBiZSBmb2N1c2VkXG5cdCAqL1xuXHRASW5wdXQoJ2F1RGlzYWJsZWQnKVxuXHRkaXNhYmxlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIGlzIHZlcnRpY2FsbHkgcG9zaXRpb25lZCBvdGhlcndpc2UgaXQgaXMgaG9yaXpvbnRhbFxuXHQgKi9cblx0QElucHV0KCdhdVZlcnRpY2FsJylcblx0dmVydGljYWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIEFuIGV2ZW50IGVtaXR0ZWQgd2hlbiBzbGlkZXIgdmFsdWVzIGFyZSBjaGFuZ2VkXG5cdCAqXG5cdCAqIEV2ZW50IHBheWxvYWQgZXF1YWxzIHRvIHRoZSB1cGRhdGVkIHNsaWRlciB2YWx1ZXNcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmFsdWVzQ2hhbmdlJylcblx0dmFsdWVzQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXJbXT4oKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHRoaXMuX3dpZGdldC5kaXJlY3RpdmVzLnNsaWRlckRpcmVjdGl2ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXG5cdCAqL1xuXHRvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG5cdG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG5cdHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiBhbnkpOiB2b2lkIHtcblx0XHR0aGlzLm9uQ2hhbmdlID0gZm47XG5cdH1cblxuXHRyZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gYW55KTogdm9pZCB7XG5cdFx0dGhpcy5vblRvdWNoZWQgPSBmbjtcblx0fVxuXG5cdHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdFx0dGhpcy5fd2lkZ2V0LnBhdGNoKHtcblx0XHRcdFx0dmFsdWVzOiB2YWx1ZSxcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0XHR2YWx1ZXM6IFt2YWx1ZV0sXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHR0aGlzLl93aWRnZXQucGF0Y2goe1xuXHRcdFx0ZGlzYWJsZWQ6IGlzRGlzYWJsZWQsXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0cGF0Y2hTaW1wbGVDaGFuZ2VzKHRoaXMuX3dpZGdldC5wYXRjaCwgY2hhbmdlcyk7XG5cdH1cblxuXHRoYW5kbGVCbHVyKCkge1xuXHRcdHRoaXMub25Ub3VjaGVkKCk7XG5cdH1cblxuXHRzbGlkZXJDbGljaygkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmNsaWNrKCRldmVudCk7XG5cdH1cblxuXHRvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQsIGhhbmRsZUlkOiBudW1iZXIpIHtcblx0XHR0aGlzLndpZGdldC5hY3Rpb25zLmtleWRvd24oZXZlbnQsIGhhbmRsZUlkKTtcblx0XHR0aGlzLl96b25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==`;export{t as default};
