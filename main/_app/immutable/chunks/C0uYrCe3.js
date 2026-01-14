const e=`"use strict";
const drawer = require("@agnos-ui/core/components/drawer");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const directive = require("@agnos-ui/core/utils/directive");
const stores = require("@agnos-ui/core/utils/stores");
const widget = require("@agnos-ui/core/utils/widget");
const collapse = require("./collapse-sUYbZqEx.cjs");
const fade = require("./fade-CJ0jXGio.cjs");
const tansu = require("@amadeus-it-group/tansu");
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
const coreOverride = {
  backdropTransition: fade.fadeTransition,
  transition: collapse.collapseHorizontalTransition,
  verticalTransition: collapse.collapseVerticalTransition
};
function getDrawerDefaultConfig() {
  return { ...drawer.getDrawerDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride };
}
const createDrawer = widget.createWidgetFactory("drawer", (config) => {
  const widget2 = extendWidget.extendWidgetProps(drawer.createDrawer, defaultConfigExtraProps, configValidator, coreOverride)(config);
  return {
    ...widget2,
    directives: {
      ...widget2.directives,
      drawerDirective: directive.mergeDirectives(
        directive.createAttributesDirective(() => ({
          classNames: {
            "au-drawer": stores.true$,
            show: widget2.stores.visible$
          },
          styles: {
            "--bs-drawer-size": tansu.computed(() => {
              const size = widget2.stores.size$();
              return size == null ? void 0 : size + "px";
            })
          }
        })),
        widget2.directives.drawerDirective
        // need to be last, to ensure that all the classes and attributes are applied for the transition
      ),
      backdropDirective: directive.mergeDirectives(
        widget2.directives.backdropDirective,
        directive.createAttributesDirective(() => ({
          classNames: {
            "au-drawer-backdrop": stores.true$,
            show: widget2.stores.visible$
          }
        }))
      ),
      splitterDirective: directive.mergeDirectives(
        widget2.directives.splitterDirective,
        directive.createAttributesDirective(() => ({
          classNames: {
            "au-splitter": stores.true$
          }
        }))
      ),
      containerDirective: directive.createAttributesDirective(() => ({
        classNames: {
          "au-drawer-container": stores.true$
        }
      }))
    }
  };
});
exports.createDrawer = createDrawer;
exports.getDrawerDefaultConfig = getDrawerDefaultConfig;
`;export{e as default};
