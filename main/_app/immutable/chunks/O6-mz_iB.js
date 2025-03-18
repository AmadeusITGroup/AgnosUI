const e=`"use strict";
const tansu = require("@amadeus-it-group/tansu");
const services_extendWidget = require("./services/extendWidget.cjs");
const utils_directive = require("./dom-CuBx1JPZ.cjs");
const utils_stores = require("./utils/stores.cjs");
const utils_writables = require("./writables-Bn3uhKEG.cjs");
const common = require("./common-BToNPUDq.cjs");
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
      role: tansu.readable("alert"),
      "aria-atomic": tansu.readable("true"),
      class: tansu.computed(() => extendedAlert.stores.className$())
    },
    classNames: {
      "au-toast": utils_stores.true$,
      toast: utils_stores.true$
    }
  }));
  const closeButtonDirective = utils_directive.createAttributesDirective(() => ({
    attributes: {
      type: tansu.readable("button"),
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
