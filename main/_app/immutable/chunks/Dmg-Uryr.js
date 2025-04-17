const n=`import { createTransition } from "@agnos-ui/core/services/transitions/baseTransitions";
import { writablesForProps, idWithDefault, stateStores, true$ } from "@agnos-ui/core/utils/stores";
import { createAttributesDirective, mergeDirectives } from "@agnos-ui/core/utils/directive";
import { typeString, typeBoolean, typeFunction } from "@agnos-ui/core/utils/writables";
import { a as collapseHorizontalTransition, c as collapseVerticalTransition } from "./collapse-CVjUhnIz.js";
import { asWritable, computed } from "@amadeus-it-group/tansu";
import { noop } from "@agnos-ui/core/utils/func";
import { createWidgetFactory } from "@agnos-ui/core/utils/widget";
const defaultCollapseConfig = {
  visible: true,
  horizontal: false,
  onVisibleChange: noop,
  onShown: noop,
  onHidden: noop,
  animated: true,
  animatedOnInit: false,
  className: "",
  id: ""
};
function getCollapseDefaultConfig() {
  return { ...defaultCollapseConfig };
}
const commonCollapseConfigValidator = {
  horizontal: typeBoolean,
  onVisibleChange: typeFunction,
  onHidden: typeFunction,
  onShown: typeFunction,
  animatedOnInit: typeBoolean,
  animated: typeBoolean,
  className: typeString,
  visible: typeBoolean,
  id: typeString
};
const createCollapse = createWidgetFactory("collapse", (config) => {
  const [
    { animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, horizontal$, id$: _dirtyId$, ...stateProps },
    patch
  ] = writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);
  const id$ = idWithDefault(_dirtyId$);
  const currentTransitionFn$ = asWritable(computed(() => horizontal$() ? collapseHorizontalTransition : collapseVerticalTransition));
  const transition = createTransition({
    props: {
      transition: currentTransitionFn$,
      visible: requestedVisible$,
      animated: animated$,
      animatedOnInit: animatedOnInit$,
      onVisibleChange: onVisibleChange$,
      onHidden: onHidden$,
      onShown: onShown$
    }
  });
  const visible$ = transition.stores.visible$;
  const hidden$ = transition.stores.hidden$;
  return {
    ...stateStores({ ...stateProps, visible$, hidden$, horizontal$ }),
    patch,
    api: {
      open: transition.api.show,
      close: transition.api.hide,
      toggle: transition.api.toggle
    },
    directives: {
      collapseDirective: mergeDirectives(
        transition.directives.directive,
        createAttributesDirective(() => ({
          attributes: {
            id: id$
          },
          classNames: {
            "au-collapse": true$
          }
        }))
      ),
      triggerDirective: createAttributesDirective(() => ({
        attributes: {
          "aria-expanded": computed(() => \`\${visible$()}\`),
          "aria-controls": id$
        },
        events: {
          click: () => transition.api.toggle()
        }
      }))
    }
  };
});
export {
  createCollapse as c,
  getCollapseDefaultConfig as g
};
`;export{n as default};
