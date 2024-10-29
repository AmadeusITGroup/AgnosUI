const e=`import { BaseWidgetDirective } from '@agnos-ui/angular-headless';
import type { CollapseWidget } from '@agnos-ui/core-bootstrap/components/collapse';
import { EventEmitter } from '@angular/core';
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
    animatedOnInit: boolean | undefined;
    /**
     * If \`true\`, collapse closing and opening will be animated.
     *
     * @defaultValue \`true\`
     */
    animated: boolean | undefined;
    /**
     * CSS classes to be applied on the widget main container
     *
     * @defaultValue \`''\`
     */
    className: string | undefined;
    /**
     * If \`true\`, collapse will be done horizontally.
     *
     * @defaultValue \`false\`
     */
    horizontal: boolean | undefined;
    /**
     * If \`true\` the collapse is visible to the user
     *
     * @defaultValue \`true\`
     */
    visible: boolean | undefined;
    /**
     * id of the collapse
     *
     * @defaultValue \`''\`
     */
    id: string | undefined;
    /**
     * Callback called when the collapse visibility changed.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    visibleChange: EventEmitter<boolean>;
    /**
     * Callback called when the collapse is hidden.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    hidden: EventEmitter<void>;
    /**
     * Callback called when the collapse is shown.
     *
     * @defaultValue
     * \`\`\`ts
     * () => {}
     * \`\`\`
     */
    shown: EventEmitter<void>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<CollapseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<CollapseDirective, "[auCollapse]", ["auCollapse"], { "animatedOnInit": { "alias": "auAnimatedOnInit"; "required": false; }; "animated": { "alias": "auAnimated"; "required": false; }; "className": { "alias": "auClassName"; "required": false; }; "horizontal": { "alias": "auHorizontal"; "required": false; }; "visible": { "alias": "auVisible"; "required": false; }; "id": { "alias": "auId"; "required": false; }; }, { "visibleChange": "auVisibleChange"; "hidden": "auHidden"; "shown": "auShown"; }, never, never, true, never>;
    static ngAcceptInputType_animatedOnInit: unknown;
    static ngAcceptInputType_animated: unknown;
    static ngAcceptInputType_horizontal: unknown;
    static ngAcceptInputType_visible: unknown;
}
`;export{e as default};
