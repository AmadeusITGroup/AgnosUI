const e=`"use strict";
const stores = require("@agnos-ui/core/utils/stores");
const directive = require("@agnos-ui/core/utils/directive");
const writables = require("@agnos-ui/core/utils/writables");
const collapse$1 = require("./collapse-sUYbZqEx.cjs");
const tansu = require("@amadeus-it-group/tansu");
const widget = require("@agnos-ui/core/utils/widget");
const collapse = require("@agnos-ui/core/components/collapse");
const defaultConfigExtraProps = {
  className: "",
  horizontal: false
};
const configValidator = {
  horizontal: writables.typeBoolean,
  className: writables.typeString
};
function getCollapseDefaultConfig() {
  return { ...collapse.getCollapseDefaultConfig(), ...defaultConfigExtraProps };
}
const createCollapse = widget.createWidgetFactory("collapse", (config) => {
  const [{ horizontal$, className$ }, patch] = stores.writablesForProps(defaultConfigExtraProps, config, configValidator);
  const transitionFn$ = tansu.asWritable(tansu.computed(() => horizontal$() ? collapse$1.collapseHorizontalTransition : collapse$1.collapseVerticalTransition));
  const widget2 = collapse.createCollapse({ ...config ?? {}, props: { ...config?.props ?? {}, transition: transitionFn$ } });
  return {
    ...widget2,
    patch: (storesValues) => tansu.batch(() => {
      widget2.patch(storesValues);
      patch(storesValues);
    }),
    directives: {
      ...widget2.directives,
      collapseDirective: directive.mergeDirectives(
        widget2.directives.collapseDirective,
        directive.createAttributesDirective(() => ({
          attributes: {
            class: className$
          },
          classNames: {
            "au-collapse": stores.true$
          }
        }))
      )
    }
  };
});
exports.createCollapse = createCollapse;
exports.getCollapseDefaultConfig = getCollapseDefaultConfig;
`;export{e as default};
