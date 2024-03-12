const n=`import { createTransition } from "./services/transitions/baseTransitions.js";
import { n as noop } from "./func-DR0n-ShK.js";
import { f as fadeTransition } from "./fade-7-Etejps.js";
import { writablesForProps, stateStores } from "./utils/stores.js";
import { bindDirectiveNoArg } from "./utils/directive.js";
import { c as typeBoolean } from "./writables-DoU_XYTX.js";
const defaultCommonAlertConfig = {
  visible: true,
  dismissible: true,
  ariaCloseButtonLabel: "Close",
  onVisibleChange: noop,
  onShown: noop,
  onHidden: noop,
  slotStructure: void 0,
  slotDefault: void 0,
  animated: true,
  animatedOnInit: false,
  transition: fadeTransition,
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
  const close = () => {
    patch({ visible: false });
  };
  const open = () => {
    patch({ visible: true });
  };
  const visible$ = transition.stores.visible$;
  const hidden$ = transition.stores.hidden$;
  return {
    ...stateStores({ ...stateProps, visible$, hidden$ }),
    patch,
    api: {
      open,
      close
    },
    directives: {
      transitionDirective: bindDirectiveNoArg(transition.directives.directive)
    },
    actions: {}
  };
}
export {
  createCommonAlert as a,
  commonAlertConfigValidator as c,
  defaultCommonAlertConfig as d,
  getCommonAlertDefaultConfig as g
};
`;export{n as default};
