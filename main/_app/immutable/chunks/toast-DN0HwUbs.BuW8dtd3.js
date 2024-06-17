const e=`import { computed } from "@amadeus-it-group/tansu";
import { extendWidgetProps } from "./services/extendWidget.js";
import { d as directiveSubscribe, n as createAttributesDirective } from "./directive-3-8yr-ZK.js";
import { c as typeBoolean, b as typeNumberInRangeFactory } from "./writables-DoU_XYTX.js";
import { g as getCommonAlertDefaultConfig, a as createCommonAlert } from "./common-BCEqowKw.js";
const toastDefaultConfig = {
  autoHide: true,
  delay: 5e3
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
  const bodyDirective = createAttributesDirective(() => ({
    attributes: {
      role: "alert",
      "aria-atomic": "true",
      class: computed(() => extendedAlert.stores.className$())
    },
    classNames: {
      "au-toast": true,
      toast: true
    }
  }));
  const closeButtonDirective = createAttributesDirective(() => ({
    attributes: {
      type: "button",
      "aria-label": computed(() => extendedAlert.stores.ariaCloseButtonLabel$())
    },
    events: {
      click: extendedAlert.api.close
    }
  }));
  return {
    ...extendedAlert,
    directives: {
      ...extendedAlert.directives,
      autoHideDirective: directiveSubscribe(time$),
      bodyDirective,
      closeButtonDirective
    }
  };
}
export {
  createToast as c,
  getToastDefaultConfig as g
};
`;export{e as default};
