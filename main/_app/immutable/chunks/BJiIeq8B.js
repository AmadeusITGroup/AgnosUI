const e=`import { computed, readable } from "@amadeus-it-group/tansu";
import { extendWidgetProps } from "./services/extendWidget.js";
import { n as createAttributesDirective, d as directiveSubscribe } from "./dom-gfxqXJpK.js";
import { true$ } from "./utils/stores.js";
import { b as typeNumberInRangeFactory, c as typeBoolean } from "./writables-DCiBdIBK.js";
import { g as getCommonAlertDefaultConfig, c as createCommonAlert } from "./common-Bffx1jJO.js";
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
      role: readable("alert"),
      "aria-atomic": readable("true"),
      class: computed(() => extendedAlert.stores.className$())
    },
    classNames: {
      "au-toast": true$,
      toast: true$
    }
  }));
  const closeButtonDirective = createAttributesDirective(() => ({
    attributes: {
      type: readable("button"),
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
