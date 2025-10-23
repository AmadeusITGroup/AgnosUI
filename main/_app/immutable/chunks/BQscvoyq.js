const e=`import { writablesForProps, true$ } from "@agnos-ui/core/utils/stores";
import { mergeDirectives, createAttributesDirective } from "@agnos-ui/core/utils/directive";
import { typeString, typeBoolean } from "@agnos-ui/core/utils/writables";
import { a as collapseHorizontalTransition, c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
import { asWritable, computed, batch } from "@amadeus-it-group/tansu";
import { createWidgetFactory } from "@agnos-ui/core/utils/widget";
import { getCollapseDefaultConfig as getCollapseDefaultConfig$1, createCollapse as createCollapse$1 } from "@agnos-ui/core/components/collapse";
const defaultConfigExtraProps = {
  className: "",
  horizontal: false
};
const configValidator = {
  horizontal: typeBoolean,
  className: typeString
};
function getCollapseDefaultConfig() {
  return { ...getCollapseDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createCollapse = createWidgetFactory("collapse", (config) => {
  const [{ horizontal$, className$ }, patch] = writablesForProps(defaultConfigExtraProps, config, configValidator);
  const transitionFn$ = asWritable(computed(() => horizontal$() ? collapseHorizontalTransition : collapseVerticalTransition));
  const widget = createCollapse$1({ ...config ?? {}, props: { ...config?.props ?? {}, transition: transitionFn$ } });
  return {
    ...widget,
    patch: (storesValues) => batch(() => {
      widget.patch(storesValues);
      patch(storesValues);
    }),
    directives: {
      ...widget.directives,
      collapseDirective: mergeDirectives(
        widget.directives.collapseDirective,
        createAttributesDirective(() => ({
          attributes: {
            class: className$
          },
          classNames: {
            "au-collapse": true$
          }
        }))
      )
    }
  };
});
export {
  createCollapse as c,
  getCollapseDefaultConfig as g
};
`;export{e as default};
