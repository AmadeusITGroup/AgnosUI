const e=`import { computed } from "@amadeus-it-group/tansu";
import { extendWidgetProps } from "./services/extendWidget.js";
import { directiveSubscribe } from "./utils/directive.js";
import { c as typeBoolean, b as typeNumberInRangeFactory } from "./writables-DoU_XYTX.js";
import { g as getCommonAlertDefaultConfig, a as createCommonAlert } from "./common-DiT2qefC.js";
const toastDefaultConfig = {
  autoHide: true,
  delay: 5e3,
  slotHeader: void 0
};
const toastConfigValidator = {
  autoHide: typeBoolean,
  delay: typeNumberInRangeFactory(0, Infinity, { strict: true })
};
function getToastDefaultConfig() {
  return { ...getCommonAlertDefaultConfig(), ...toastDefaultConfig };
}
function createToast(config) {
  let _timeout;
  const extendedAlert = extendWidgetProps(
    createCommonAlert,
    toastDefaultConfig,
    toastConfigValidator
  )(config);
  const time$ = computed(() => {
    clearTimeout(_timeout);
    if (extendedAlert.stores.autoHide$()) {
      _timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
    }
  });
  return {
    ...extendedAlert,
    directives: {
      ...extendedAlert.directives,
      autoHideDirective: directiveSubscribe(time$)
    }
  };
}
export {
  createToast as c,
  getToastDefaultConfig as g
};
`;export{e as default};
