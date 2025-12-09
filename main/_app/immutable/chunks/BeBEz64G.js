const n=`"use strict";
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_directive = require("./dom-CFojlmcS.cjs");
const utils_writables = require("./writables-DcGT98a7.cjs");
const tansu = require("@amadeus-it-group/tansu");
const utils_func = require("./utils/func.cjs");
const utils_widget = require("./utils/widget.cjs");
const defaultCollapseConfig = {
  visible: false,
  onVisibleChange: utils_func.noop,
  onShown: utils_func.noop,
  onHidden: utils_func.noop,
  animated: true,
  animatedOnInit: false,
  id: "",
  transition: utils_func.noop
};
function getCollapseDefaultConfig() {
  return { ...defaultCollapseConfig };
}
const commonCollapseConfigValidator = {
  onVisibleChange: utils_writables.typeFunction,
  onHidden: utils_writables.typeFunction,
  onShown: utils_writables.typeFunction,
  animatedOnInit: utils_writables.typeBoolean,
  animated: utils_writables.typeBoolean,
  visible: utils_writables.typeBoolean,
  id: utils_writables.typeString,
  transition: utils_writables.typeFunction
};
const createCollapse = utils_widget.createWidgetFactory("collapse", (config) => {
  const [
    { transition$, animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, id$: _dirtyId$, ...stateProps },
    patch
  ] = utils_stores.writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);
  const id$ = utils_stores.idWithDefault(_dirtyId$);
  const transition = services_transitions_baseTransitions.createTransition({
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
    ...utils_stores.stateStores({ ...stateProps, visible$, hidden$ }),
    patch,
    api: {
      open: transition.api.show,
      close: transition.api.hide,
      toggle: transition.api.toggle
    },
    directives: {
      collapseDirective: utils_directive.mergeDirectives(
        transition.directives.directive,
        utils_directive.createAttributesDirective(() => ({
          attributes: {
            id: id$
          }
        }))
      ),
      triggerDirective: utils_directive.createAttributesDirective(() => ({
        attributes: {
          "aria-expanded": tansu.computed(() => \`\${visible$()}\`),
          "aria-controls": id$
        },
        events: {
          click: () => transition.api.toggle()
        }
      }))
    }
  };
});
exports.createCollapse = createCollapse;
exports.getCollapseDefaultConfig = getCollapseDefaultConfig;
`;export{n as default};
