const e=`import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { CollapseWidget } from '@agnos-ui/core-bootstrap/components/collapse';
import * as i0 from "@angular/core";
/**
 * Directive to control the collapse behavior of an element.
 */
export declare class CollapseDirective extends BaseWidgetDirective<CollapseWidget> {
    /**
     * If \`true\`, collapse opening will be animated at init time.
     *
     * @defaultValue \`false\`
     */
    readonly animatedOnInit: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\`, collapse closing and opening will be animated.
     *
     * @defaultValue \`true\`
     */
    readonly animated: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    readonly className: import("@angular/core").InputSignal<string | undefined>;
    /**
     * If \`true\`, collapse will be done horizontally.
     *
     * @defaultValue \`false\`
     */
    readonly horizontal: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`true\`
     */
    readonly visible: import("@angular/core").InputSignalWithTransform<boolean | undefined, unknown>;
    /**
     * id of the collapse
     *
     * @defaultValue \`''\`
     */
    readonly id: import("@angular/core").InputSignal<string | undefined>;
    /**
     * Callback called when the collapse visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     * @param visible - The new visibility state of the collapse.
     */
    readonly visibleChange: import("@angular/core").OutputEmitterRef<boolean>;
    /**
     * Callback called when the collapse is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly hidden: import("@angular/core").OutputEmitterRef<void>;
    /**
     * Callback called when the collapse is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    readonly shown: import("@angular/core").OutputEmitterRef<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CollapseDirective, "[auCollapse]", ["auCollapse"], { "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; "isSignal": true; }; "animated": { "alias": "auAnimated"; "required": false; "isSignal": true; }; "className": { "alias": "auClassName"; "required": false; "isSignal": true; }; "horizontal": { "alias": "auHorizontal"; "required": false; "isSignal": true; }; "visible": { "alias": "auVisible"; "required": false; "isSignal": true; }; "id": { "alias": "auId"; "required": false; "isSignal": true; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, never, never, true, never>;
}
`;export{e as default};
