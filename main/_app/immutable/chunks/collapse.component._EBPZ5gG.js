const F=`import { auBooleanAttribute, BaseWidgetDirective, useDirectiveForHost } from '@agnos-ui/angular-headless';
import { createCollapse } from '@agnos-ui/core-bootstrap/components/collapse';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { callWidgetFactory } from '../../config';
import * as i0 from "@angular/core";
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
                useDirectiveForHost(widget.directives.transitionDirective);
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
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "auCollapse", ""]], inputs: { animatedOnInit: [2, "auAnimatedOnInit", "animatedOnInit", auBooleanAttribute], animated: [2, "auAnimated", "animated", auBooleanAttribute], className: [0, "auClassName", "className"], horizontal: [2, "auHorizontal", "horizontal", auBooleanAttribute], visible: [2, "auVisible", "visible", auBooleanAttribute] }, outputs: { visibleChange: "auVisibleChange", hidden: "auHidden", shown: "auShown" }, exportAs: ["auCollapse"], standalone: true, features: [i0.ɵɵInputTransformsFeature, i0.ɵɵInheritDefinitionFeature] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXhHLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGNBQWMsQ0FBQzs7QUFPL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLG1CQUFtQztJQWtFekU7UUFDQyxLQUFLLENBQ0osaUJBQWlCLENBQUM7WUFDakIsT0FBTyxFQUFFLGNBQWM7WUFDdkIsVUFBVSxFQUFFLFVBQVU7WUFDdEIsTUFBTSxFQUFFO2dCQUNQLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMxRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQ2hDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTthQUNsQztZQUNELFNBQVMsRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNyQixtQkFBbUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNELENBQUMsQ0FDRixDQUFDO1FBNUNIOzs7Ozs7O1dBT0c7UUFDd0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBRXZFOzs7Ozs7O1dBT0c7UUFDaUIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFdEQ7Ozs7Ozs7V0FPRztRQUNnQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQWlCcEQsQ0FBQztrSEFqRlcsaUJBQWlCO29FQUFqQixpQkFBaUIsMkdBTWlCLGtCQUFrQiwyQ0FPeEIsa0JBQWtCLDZGQWNoQixrQkFBa0Isd0NBT3JCLGtCQUFrQjs7aUZBbEM3QyxpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsUUFBUSxFQUFFLFlBQVk7YUFDdEI7b0JBT21FLGNBQWM7a0JBQWhGLEtBQUs7bUJBQUMsRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT0osUUFBUTtrQkFBcEUsS0FBSzttQkFBQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGtCQUFrQixFQUFDO1lBT3JDLFNBQVM7a0JBQTlCLEtBQUs7bUJBQUMsYUFBYTtZQU8yQyxVQUFVO2tCQUF4RSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFPRCxPQUFPO2tCQUFsRSxLQUFLO21CQUFDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLEVBQUM7WUFVL0IsYUFBYTtrQkFBdkMsTUFBTTttQkFBQyxpQkFBaUI7WUFVTCxNQUFNO2tCQUF6QixNQUFNO21CQUFDLFVBQVU7WUFVQyxLQUFLO2tCQUF2QixNQUFNO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1Qm9vbGVhbkF0dHJpYnV0ZSwgQmFzZVdpZGdldERpcmVjdGl2ZSwgdXNlRGlyZWN0aXZlRm9ySG9zdH0gZnJvbSAnQGFnbm9zLXVpL2FuZ3VsYXItaGVhZGxlc3MnO1xuaW1wb3J0IHR5cGUge0NvbGxhcHNlV2lkZ2V0fSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvY29tcG9uZW50cy9jb2xsYXBzZSc7XG5pbXBvcnQge2NyZWF0ZUNvbGxhcHNlfSBmcm9tICdAYWdub3MtdWkvY29yZS1ib290c3RyYXAvY29tcG9uZW50cy9jb2xsYXBzZSc7XG5pbXBvcnQge0RpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y2FsbFdpZGdldEZhY3Rvcnl9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1thdUNvbGxhcHNlXScsXG5cdHN0YW5kYWxvbmU6IHRydWUsXG5cdGV4cG9ydEFzOiAnYXVDb2xsYXBzZScsXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIGV4dGVuZHMgQmFzZVdpZGdldERpcmVjdGl2ZTxDb2xsYXBzZVdpZGdldD4ge1xuXHQvKipcblx0ICogSWYgYHRydWVgLCBjb2xsYXBzZSBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQgYXQgaW5pdCB0aW1lLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUFuaW1hdGVkT25Jbml0JywgdHJhbnNmb3JtOiBhdUJvb2xlYW5BdHRyaWJ1dGV9KSBhbmltYXRlZE9uSW5pdDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBjb2xsYXBzZSBjbG9zaW5nIGFuZCBvcGVuaW5nIHdpbGwgYmUgYW5pbWF0ZWQuXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWUgYHRydWVgXG5cdCAqL1xuXHRASW5wdXQoe2FsaWFzOiAnYXVBbmltYXRlZCcsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgYW5pbWF0ZWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIENTUyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgb24gdGhlIHdpZGdldCBtYWluIGNvbnRhaW5lclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGAnJ2Bcblx0ICovXG5cdEBJbnB1dCgnYXVDbGFzc05hbWUnKSBjbGFzc05hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogSWYgYHRydWVgLCBjb2xsYXBzZSB3aWxsIGJlIGRvbmUgaG9yaXpvbnRhbGx5LlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGBmYWxzZWBcblx0ICovXG5cdEBJbnB1dCh7YWxpYXM6ICdhdUhvcml6b250YWwnLCB0cmFuc2Zvcm06IGF1Qm9vbGVhbkF0dHJpYnV0ZX0pIGhvcml6b250YWw6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG5cblx0LyoqXG5cdCAqIElmIGB0cnVlYCB0aGUgY29sbGFwc2UgaXMgdmlzaWJsZSB0byB0aGUgdXNlclxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlIGB0cnVlYFxuXHQgKi9cblx0QElucHV0KHthbGlhczogJ2F1VmlzaWJsZScsIHRyYW5zZm9ybTogYXVCb29sZWFuQXR0cmlidXRlfSkgdmlzaWJsZTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGNvbGxhcHNlIHZpc2liaWxpdHkgY2hhbmdlZC5cblx0ICpcblx0ICogQGRlZmF1bHRWYWx1ZVxuXHQgKiBgYGB0c1xuXHQgKiAoKSA9PiB7fVxuXHQgKiBgYGBcblx0ICovXG5cdEBPdXRwdXQoJ2F1VmlzaWJsZUNoYW5nZScpIHZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cblx0LyoqXG5cdCAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBjb2xsYXBzZSBpcyBoaWRkZW4uXG5cdCAqXG5cdCAqIEBkZWZhdWx0VmFsdWVcblx0ICogYGBgdHNcblx0ICogKCkgPT4ge31cblx0ICogYGBgXG5cdCAqL1xuXHRAT3V0cHV0KCdhdUhpZGRlbicpIGhpZGRlbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuXHQvKipcblx0ICogQ2FsbGJhY2sgY2FsbGVkIHdoZW4gdGhlIGNvbGxhcHNlIGlzIHNob3duLlxuXHQgKlxuXHQgKiBAZGVmYXVsdFZhbHVlXG5cdCAqIGBgYHRzXG5cdCAqICgpID0+IHt9XG5cdCAqIGBgYFxuXHQgKi9cblx0QE91dHB1dCgnYXVTaG93bicpIHNob3duID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFxuXHRcdFx0Y2FsbFdpZGdldEZhY3Rvcnkoe1xuXHRcdFx0XHRmYWN0b3J5OiBjcmVhdGVDb2xsYXBzZSxcblx0XHRcdFx0d2lkZ2V0TmFtZTogJ2NvbGxhcHNlJyxcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0b25WaXNpYmxlQ2hhbmdlOiAoZXZlbnQpID0+IHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGV2ZW50KSxcblx0XHRcdFx0XHRvblNob3duOiAoKSA9PiB0aGlzLnNob3duLmVtaXQoKSxcblx0XHRcdFx0XHRvbkhpZGRlbjogKCkgPT4gdGhpcy5oaWRkZW4uZW1pdCgpLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRhZnRlckluaXQ6ICh3aWRnZXQpID0+IHtcblx0XHRcdFx0XHR1c2VEaXJlY3RpdmVGb3JIb3N0KHdpZGdldC5kaXJlY3RpdmVzLnRyYW5zaXRpb25EaXJlY3RpdmUpO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSksXG5cdFx0KTtcblx0fVxufVxuIl19`;export{F as default};
