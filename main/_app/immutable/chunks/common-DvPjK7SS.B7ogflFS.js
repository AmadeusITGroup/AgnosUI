const n=`"use strict";
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const func = require("./func-Qd3cD9a3.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-BPAJvaL_.cjs");
const defaultCommonAlertConfig = {
  visible: true,
  dismissible: true,
  ariaCloseButtonLabel: "Close",
  onVisibleChange: func.noop,
  onShown: func.noop,
  onHidden: func.noop,
  animated: true,
  animatedOnInit: false,
  transition: async () => {
  },
  className: ""
};
function getCommonAlertDefaultConfig() {
  return { ...defaultCommonAlertConfig };
}
const commonAlertConfigValidator = {
  dismissible: utils_writables.typeBoolean,
  onVisibleChange: utils_writables.typeFunction,
  onHidden: utils_writables.typeFunction,
  onShown: utils_writables.typeFunction,
  transition: utils_writables.typeFunction,
  animatedOnInit: utils_writables.typeBoolean,
  animated: utils_writables.typeBoolean,
  visible: utils_writables.typeBoolean,
  ariaCloseButtonLabel: utils_writables.typeString,
  className: utils_writables.typeString
};
function createCommonAlert(config) {
  const [
    {
      transition$,
      animatedOnInit$,
      animated$,
      visible$: requestedVisible$,
      onVisibleChange$,
      onHidden$,
      onShown$,
      ...stateProps
    },
    patch
  ] = utils_stores.writablesForProps(defaultCommonAlertConfig, config, commonAlertConfigValidator);
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
      close: transition.api.hide
    },
    directives: {
      transitionDirective: transition.directives.directive
    }
  };
}
exports.createCommonAlert = createCommonAlert;
exports.getCommonAlertDefaultConfig = getCommonAlertDefaultConfig;
`;export{n as default};
