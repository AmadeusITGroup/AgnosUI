const e=`"use strict";
const alert = require("@agnos-ui/core/components/alert");
const writables = require("@agnos-ui/core/utils/writables");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const fade = require("./fade-CJ0jXGio.cjs");
const defaultConfigExtraProps = {
  slotStructure: void 0,
  slotDefault: void 0,
  type: "primary"
};
const coreOverride = {
  transition: fade.fadeTransition
};
const configValidator = {
  type: writables.typeString
};
function getAlertDefaultConfig() {
  return { ...alert.getAlertDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride };
}
const createAlert = extendWidget.extendWidgetProps(alert.createAlert, defaultConfigExtraProps, configValidator, coreOverride);
exports.createAlert = createAlert;
exports.getAlertDefaultConfig = getAlertDefaultConfig;
`;export{e as default};
