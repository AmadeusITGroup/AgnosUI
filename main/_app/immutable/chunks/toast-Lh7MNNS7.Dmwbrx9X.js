const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_extendWidget = require("./services/extendWidget.cjs");
const utils_directive = require("./directive-_naLmJ9_.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
const common = require("./common-DqZsxPsV.cjs");
const toastDefaultConfig = {
  autoHide: true,
  delay: 5e3
};
const toastConfigValidator = {
  autoHide: utils_writables.typeBoolean,
  delay: utils_writables.typeNumberInRangeFactory(0, Infinity, { strict: true })
};
function getToastDefaultConfig() {
  return { ...common.getCommonAlertDefaultConfig(), ...toastDefaultConfig };
}
function createToast(config) {
  let _timeout;
  const extendedAlert = services_extendWidget.extendWidgetProps(
    common.createCommonAlert,
    toastDefaultConfig,
    toastConfigValidator
  )(config);
  const time$ = tansu.computed(() => {
    clearTimeout(_timeout);
    if (extendedAlert.stores.autoHide$()) {
      _timeout = setTimeout(() => extendedAlert.api.close(), extendedAlert.stores.delay$());
    }
  });
  const bodyDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      role: "alert",
      "aria-atomic": "true",
      class: tansu.computed(() => extendedAlert.stores.className$())
    },
    classNames: {
      "au-toast": true,
      toast: true
    }
  }));
  const closeButtonDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      type: "button",
      "aria-label": tansu.computed(() => extendedAlert.stores.ariaCloseButtonLabel$())
    },
    events: {
      click: extendedAlert.api.close
    }
  }));
  return {
    ...extendedAlert,
    directives: {
      ...extendedAlert.directives,
      autoHideDirective: utils_directive.directiveSubscribe(time$),
      bodyDirective,
      closeButtonDirective
    }
  };
}
exports.createToast = createToast;
exports.getToastDefaultConfig = getToastDefaultConfig;
`;export{e as default};
