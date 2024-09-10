const n=`"use strict";
const services_transitions_baseTransitions = require("./services/transitions/baseTransitions.cjs");
const func = require("./func-Qd3cD9a3.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_directive = require("./directive-DdlwGFtf.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
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
  dismissible: utils_writables.typeBoolean
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
  const close = () => {
    patch({ visible: false });
  };
  const open = () => {
    patch({ visible: true });
  };
  const visible$ = transition.stores.visible$;
  const hidden$ = transition.stores.hidden$;
  return {
    ...utils_stores.stateStores({ ...stateProps, visible$, hidden$ }),
    patch,
    api: {
      open,
      close
    },
    directives: {
      transitionDirective: utils_directive.bindDirectiveNoArg(transition.directives.directive)
    },
    actions: {}
  };
}
exports.createCommonAlert = createCommonAlert;
exports.getCommonAlertDefaultConfig = getCommonAlertDefaultConfig;
`;export{n as default};
