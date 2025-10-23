const n=`import { createTransition } from "./services/transitions/baseTransitions.js";
import { writablesForProps, idWithDefault, stateStores } from "./utils/stores.js";
import { p as createAttributesDirective, n as mergeDirectives } from "./dom-Bcg9ORcA.js";
import { g as typeFunction, e as typeString, c as typeBoolean } from "./writables-e0tyaQpe.js";
import { computed } from "@amadeus-it-group/tansu";
import { noop } from "./utils/func.js";
import { createWidgetFactory } from "./utils/widget.js";
const defaultCollapseConfig = {
  visible: false,
  onVisibleChange: noop,
  onShown: noop,
  onHidden: noop,
  animated: true,
  animatedOnInit: false,
  id: "",
  transition: noop
};
function getCollapseDefaultConfig() {
  return { ...defaultCollapseConfig };
}
const commonCollapseConfigValidator = {
  onVisibleChange: typeFunction,
  onHidden: typeFunction,
  onShown: typeFunction,
  animatedOnInit: typeBoolean,
  animated: typeBoolean,
  visible: typeBoolean,
  id: typeString,
  transition: typeFunction
};
const createCollapse = createWidgetFactory("collapse", (config) => {
  const [
    { transition$, animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, id$: _dirtyId$, ...stateProps },
    patch
  ] = writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);
  const id$ = idWithDefault(_dirtyId$);
  const transition = createTransition({
    props: {
      transition: transition$,
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
    ...stateStores({ ...stateProps, visible$, hidden$ }),
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
