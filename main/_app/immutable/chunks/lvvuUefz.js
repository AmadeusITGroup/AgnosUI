const n=`import { createTransition } from "./services/transitions/baseTransitions.js";
import { noop } from "./utils/func.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { e as typeString, c as typeBoolean, h as typeFunction } from "./writables-Is1bF1Vt.js";
const defaultCommonAlertConfig = {
  visible: true,
  dismissible: true,
  ariaCloseButtonLabel: "Close",
  onVisibleChange: noop,
  onShown: noop,
  onHidden: noop,
  animated: true,
  animatedOnInit: false,
  transition: noop,
  className: ""
};
function getCommonAlertDefaultConfig() {
  return { ...defaultCommonAlertConfig };
}
const commonAlertConfigValidator = {
  dismissible: typeBoolean,
  onVisibleChange: typeFunction,
  onHidden: typeFunction,
  onShown: typeFunction,
  transition: typeFunction,
  animatedOnInit: typeBoolean,
  animated: typeBoolean,
  visible: typeBoolean,
  ariaCloseButtonLabel: typeString,
  className: typeString
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
  ] = writablesForProps(defaultCommonAlertConfig, config, commonAlertConfigValidator);
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
      close: transition.api.hide
    },
    directives: {
      transitionDirective: transition.directives.directive
    }
  };
}
export {
  createCommonAlert as c,
  getCommonAlertDefaultConfig as g
};
`;export{n as default};
