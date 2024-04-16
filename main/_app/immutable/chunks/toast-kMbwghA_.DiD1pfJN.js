const t=`"use strict";
const toast = require("@agnos-ui/core/components/toast");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const fade = require("./fade-CJ0jXGio.cjs");
const defaultConfigExtraProps = {
  slotStructure: void 0,
  slotDefault: void 0,
  slotHeader: void 0
};
const coreOverride = {
  transition: fade.fadeTransition
};
function getToastDefaultConfig() {
  return { ...toast.getToastDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride };
}
const createToast = extendWidget.extendWidgetProps(toast.createToast, defaultConfigExtraProps, {}, coreOverride);
exports.createToast = createToast;
exports.getToastDefaultConfig = getToastDefaultConfig;
`;export{t as default};
