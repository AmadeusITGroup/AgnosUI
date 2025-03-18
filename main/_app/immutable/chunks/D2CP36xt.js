const n=`"use strict";
const baseTransitions = require("@agnos-ui/core/services/transitions/baseTransitions");
const stores = require("@agnos-ui/core/utils/stores");
const directive = require("@agnos-ui/core/utils/directive");
const writables = require("@agnos-ui/core/utils/writables");
const collapse = require("./collapse-sUYbZqEx.cjs");
const index = require("./index-J1BeNka9.cjs");
const func = require("@agnos-ui/core/utils/func");
const defaultCollapseConfig = {
  visible: true,
  horizontal: false,
  onVisibleChange: func.noop,
  onShown: func.noop,
  onHidden: func.noop,
  animated: true,
  animatedOnInit: false,
  className: "",
  id: ""
};
function getCollapseDefaultConfig() {
  return { ...defaultCollapseConfig };
}
const commonCollapseConfigValidator = {
  horizontal: writables.typeBoolean,
  onVisibleChange: writables.typeFunction,
  onHidden: writables.typeFunction,
  onShown: writables.typeFunction,
  animatedOnInit: writables.typeBoolean,
  animated: writables.typeBoolean,
  className: writables.typeString,
  visible: writables.typeBoolean,
  id: writables.typeString
};
function createCollapse(config) {
  const [
    { animatedOnInit$, animated$, visible$: requestedVisible$, onVisibleChange$, onHidden$, onShown$, horizontal$, id$: _dirtyId$, ...stateProps },
    patch
  ] = stores.writablesForProps(defaultCollapseConfig, config, commonCollapseConfigValidator);
  const id$ = stores.idWithDefault(_dirtyId$);
  const currentTransitionFn$ = index.asWritable(index.computed(() => horizontal$() ? collapse.collapseHorizontalTransition : collapse.collapseVerticalTransition));
  const transition = baseTransitions.createTransition({
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
    ...stores.stateStores({ ...stateProps, visible$, hidden$, horizontal$ }),
    patch,
    api: {
      open: transition.api.show,
      close: transition.api.hide,
      toggle: transition.api.toggle
    },
    directives: {
      collapseDirective: directive.mergeDirectives(
        transition.directives.directive,
        directive.createAttributesDirective(() => ({
          attributes: {
            id: id$
          },
          classNames: {
            "au-collapse": stores.true$
          }
        }))
      ),
      triggerDirective: directive.createAttributesDirective(() => ({
        attributes: {
          "aria-expanded": index.computed(() => \`\${visible$()}\`),
          "aria-controls": id$
        },
        events: {
          click: () => transition.api.toggle()
        }
      }))
    }
  };
}
exports.createCollapse = createCollapse;
exports.getCollapseDefaultConfig = getCollapseDefaultConfig;
`;export{n as default};
