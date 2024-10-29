const Q=`import { auBooleanAttribute, BaseWidgetDirective, useDirectiveForHost } from '@agnos-ui/angular-headless';
import { createCollapse } from '@agnos-ui/core-bootstrap/components/collapse';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
/**
 * Directive to control the collapse behavior of an element.
 */
export class CollapseDirective extends BaseWidgetDirective {
    constructor() {
        super(callWidgetFactory({
            factory: createCollapse,
            widgetName: 'collapse',
            events: {
                onVisibleChange: (event) => this.visibleChange.emit(event),
                onShown: () => this.shown.emit(),
                onHidden: () => this.hidden.emit(),
            },
            afterInit: (widget) => {
                useDirectiveForHost(widget.directives.collapseDirective);
            },
        }));
        /**
         * Callback called when the collapse visibility changed.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.visibleChange = new EventEmitter();
        /**
         * Callback called when the collapse is hidden.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.hidden = new EventEmitter();
        /**
         * Callback called when the collapse is shown.
         *
         * @defaultValue
         * \`\`\`ts
         * () => {}
         * \`\`\`
         */
        this.shown = new EventEmitter();
    }
    static { this.ɵfac = function CollapseDirective_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CollapseDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "auCollapse", ""]], inputs: { animatedOnInit: [2, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], className: [0, "auClassName", "className"], horizontal: [2, "auHorizontal", "horizontal", auBooleanAttribute], visible: [2, "auVisible", "visible", auBooleanAttribute], id: [0, "auId", "id"] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, exportAs: ["auCollapse"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[auCollapse]',
                standalone: true,
                exportAs: 'auCollapse',
            }]
    }], () => [], { animatedOnInit: [{
            type: Input,
            args: [{ alias: 'auAnimatedOnInit', transform: auBooleanAttribute }]
        }], animated: [{
            type: Input,
            args: [{ alias: 'auAnimated', transform: auBooleanAttribute }]
        }], className: [{
            type: Input,
            args: ['auClassName']
        }], horizontal: [{
            type: Input,
            args: [{ alias: 'auHorizontal', transform: auBooleanAttribute }]
        }], visible: [{
            type: Input,
            args: [{ alias: 'auVisible', transform: auBooleanAttribute }]
        }], id: [{
            type: Input,
            args: ['auId']
        }], visibleChange: [{
            type: Output,
            args: ['auVisibleChange']
        }], hidden: [{
            type: Output,
            args: ['auHidden']
        }], shown: [{
            type: Output,
            args: ['auShown']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXhHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7QUFFL0M7O0dBRUc7QUFNSCxNQUFNLE9BQU8saUJBQWtCLFNBQVEsbUJBQW1DO0lBeUV6RTtRQUNDLEtBQUssQ0FDSixpQkFBaUIsQ0FBQztZQUNqQixPQUFPLEVBQUUsY0FBYztZQUN2QixVQUFVLEVBQUUsVUFBVTtZQUN0QixNQUFNLEVBQUU7Z0JBQ1AsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzFELE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtnQkFDaEMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2FBQ2xDO1lBQ0QsU0FBUyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ3JCLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMxRCxDQUFDO1NBQ0QsQ0FBQyxDQUNGLENBQUM7UUE1Q0g7Ozs7Ozs7V0FPRztRQUN3QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFdkU7Ozs7Ozs7V0FPRztRQUNpQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUV0RDs7Ozs7OztXQU9HO1FBQ2dCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBaUJwRCxDQUFDO2tIQXhGVyxpQkFBaUI7b0VBQWpCLGlCQUFpQiwyR0FNaUIsa0JBQWtCLDJDQU94QixrQkFBa0IsNkZBY2hCLGtCQUFrQix3Q0FPckIsa0JBQWtCOztpRkFsQzdDLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFVBQVUsRUFBRSxJQUFJO2dCQUNoQixRQUFRLEVBQUUsWUFBWTthQUN0QjtvQkFPbUUsY0FBYztrQkFBaEYsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPSixRQUFRO2tCQUFwRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPckMsU0FBUztrQkFBOUIsS0FBSzttQkFBQyxhQUFhO1lBTzJDLFVBQVU7a0JBQXhFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU9ELE9BQU87a0JBQWxFLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBQztZQU8zQyxFQUFFO2tCQUFoQixLQUFLO21CQUFDLE1BQU07WUFVYyxhQUFhO2tCQUF2QyxNQUFNO21CQUFDLGlCQUFpQjtZQVVMLE1BQU07a0JBQXpCLE1BQU07bUJBQUMsVUFBVTtZQVVDLEtBQUs7a0JBQXZCLE1BQU07bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXVCb29sZWFuQXR0cmlidXRlLCBCYXNlV2lkZ2V0RGlyZWN0aXZlLCB1c2VEaXJlY3RpdmVGb3JIb3N0fSBmcm9tICdAYWdub3MtdWkvYW5ndWxhci1oZWFkbGVzcyc7XG5pbXBvcnQgdHlwZSB7Q29sbGFwc2VXaWRnZXR9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb21wb25lbnRzL2NvbGxhcHNlJztcbmltcG9ydCB7Y3JlYXRlQ29sbGFwc2V9IGZyb20gJ0BhZ25vcy11aS9jb3JlLWJvb3RzdHJhcC9jb21wb25lbnRzL2NvbGxhcHNlJztcbmltcG9ydCB7RGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtjYWxsV2lkZ2V0RmFjdG9yeX0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuLyoqXG4gKiBEaXJlY3RpdmUgdG8gY29udHJvbCB0aGUgY29sbGFwc2UgYmVoYXZpb3Igb2YgYW4gZWxlbWVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2F1Q29sbGFwc2VdJyxcblx0c3RhbmRhbG9uZTogdHJ1ZSxcblx0ZXhwb3J0QXM6ICdhdUNvbGxhcHNlJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VEaXJlY3RpdmUgZXh0ZW5kcyBCYXNlV2lkZ2V0RGlyZWN0aXZlPENvbGxhcHNlV2lkZ2V0PiB7XG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGNvbGxhcHNlIG9wZW5pbmcgd2lsbCBiZSBhbmltYXRlZCBhdCBpbml0IHRpbWUuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1QW5pbWF0ZWRPbkluaXQnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGFuaW1hdGVkT25Jbml0OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGNvbGxhcHNlIGNsb3NpbmcgYW5kIG9wZW5pbmcgd2lsbCBiZSBhbmltYXRlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgdHJ1ZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBhbmltYXRlZDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ1NTIGNsYXNzZXMgdG8gYmUgYXBwbGllZCBvbiB0aGUgd2lkZ2V0IG1haW4gY29udGFpbmVyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYCcnYFxuXHQgKi9cblx0QElucHV0KCdhdUNsYXNzTmFtZScpIGNsYXNzTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJZiBgdHJ1ZWAsIGNvbGxhcHNlIHdpbGwgYmUgZG9uZSBob3Jpem9udGFsbHkuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYGZhbHNlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1SG9yaXpvbnRhbCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgaG9yaXpvbnRhbDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgIHRoZSBjb2xsYXBzZSBpcyB2aXNpYmxlIHRvIHRoZSB1c2VyXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVWaXNpYmxlJywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSB2aXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBpZCBvZiB0aGUgY29sbGFwc2Vcblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZSBgJydgXG5cdCAqL1xuXHRASW5wdXQoJ2F1SWQnKSBpZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgY29sbGFwc2UgdmlzaWJpbGl0eSBjaGFuZ2VkLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVWaXNpYmxlQ2hhbmdlJykgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGNvbGxhcHNlIGlzIGhpZGRlbi5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1SGlkZGVuJykgaGlkZGVuID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdC8qKlxuXHQgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgY29sbGFwc2UgaXMgc2hvd24uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdVNob3duJykgc2hvd24gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRjYWxsV2lkZ2V0RmFjdG9yeSh7XG5cdFx0XHRcdGZhY3Rvcnk6IGNyZWF0ZUNvbGxhcHNlLFxuXHRcdFx0XHR3aWRnZXROYW1lOiAnY29sbGFwc2UnLFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHRvblZpc2libGVDaGFuZ2U6IChldmVudCkgPT4gdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZXZlbnQpLFxuXHRcdFx0XHRcdG9uU2hvd246ICgpID0+IHRoaXMuc2hvd24uZW1pdCgpLFxuXHRcdFx0XHRcdG9uSGlkZGVuOiAoKSA9PiB0aGlzLmhpZGRlbi5lbWl0KCksXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFmdGVySW5pdDogKHdpZGdldCkgPT4ge1xuXHRcdFx0XHRcdHVzZURpcmVjdGl2ZUZvckhvc3Qod2lkZ2V0LmRpcmVjdGl2ZXMuY29sbGFwc2VEaXJlY3RpdmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxufVxuIl19`;export{Q as default};
