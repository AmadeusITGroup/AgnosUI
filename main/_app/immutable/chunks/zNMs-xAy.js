const e=`import { getDrawerDefaultConfig as getDrawerDefaultConfig$1, createDrawer as createDrawer$1 } from "@agnos-ui/core/components/drawer";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { c as collapseVerticalTransition, a as collapseHorizontalTransition } from "./collapse-CVjUhnIz.js";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
import { createWidgetFactory } from "@agnos-ui/core/utils/widget";
import { mergeDirectives, createAttributesDirective } from "@agnos-ui/core/utils/directive";
import { true$ } from "@agnos-ui/core/utils/stores";
const defaultConfigExtraProps = {
  structure: void 0,
  header: void 0,
  children: void 0
};
const configValidator = {
  structure: void 0,
  header: void 0,
  children: void 0
};
function getDrawerDefaultConfig() {
  return { ...getDrawerDefaultConfig$1(), ...defaultConfigExtraProps, ...coreOverride };
}
const coreOverride = {
  backdropTransition: fadeTransition,
  transition: collapseHorizontalTransition,
  verticalTransition: collapseVerticalTransition
};
const createDrawer = createWidgetFactory("drawer", (config) => {
  const widget = extendWidgetProps(createDrawer$1, defaultConfigExtraProps, configValidator, coreOverride)(config);
  return {
    ...widget,
    directives: {
      ...widget.directives,
      drawerDirective: mergeDirectives(
        widget.directives.drawerDirective,
        createAttributesDirective(() => ({
          classNames: {
            "au-drawer": true$,
            show: widget.stores.visible$
          }
        }))
      ),
      backdropDirective: mergeDirectives(
        widget.directives.backdropDirective,
        createAttributesDirective(() => ({
          classNames: {
            "au-drawer-backdrop": true$,
            show: widget.stores.visible$
          }
        }))
      ),
      splitterDirective: mergeDirectives(
        widget.directives.splitterDirective,
        createAttributesDirective(() => ({
          classNames: {
            "au-splitter": true$
          }
        }))
      ),
      containerDirective: mergeDirectives(
        widget.directives.containerDirective,
        createAttributesDirective(() => ({
          classNames: {
            "au-drawer-container": true$
          }
        }))
      )
    }
  };
});
export {
  createDrawer as c,
  getDrawerDefaultConfig as g
};
`;export{e as default};
