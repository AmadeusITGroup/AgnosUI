const n=`import { createTransition } from "./services/transitions/baseTransitions.js";
import { n as noop } from "./func-DR0n-ShK.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { c as bindDirectiveNoArg } from "./directive-CKEccryv.js";
import { c as typeBoolean } from "./writables-DoU_XYTX.js";
const defaultCommonAlertConfig = {
  visible: true,
  dismissible: true,
  ariaCloseButtonLabel: "Close",
  onVisibleChange: noop,
  onShown: noop,
  onHidden: noop,
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
  dismissible: typeBoolean
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
      transitionDirective: bindDirectiveNoArg(transition.directives.directive)
    },
    actions: {}
  };
}
export {
  createCommonAlert as c,
  getCommonAlertDefaultConfig as g
};
`;export{n as default};
