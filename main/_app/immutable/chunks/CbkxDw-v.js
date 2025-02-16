const e=`"use strict";
const alert = require("@agnos-ui/core/components/alert");
const writables = require("@agnos-ui/core/utils/writables");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const fade = require("./fade-CJ0jXGio.cjs");
const types = require("./types.cjs");
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  type: "primary"
};
const coreOverride = {
  transition: fade.fadeTransition
};
const configValidator = {
  type: writables.createTypeEnum(types.BS_CONTEXTUAL_CLASSES),
  structure: void 0,
  children: void 0
};
function getAlertDefaultConfig() {
  return { ...alert.getAlertDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride };
}
const createAlert = extendWidget.extendWidgetProps(alert.createAlert, defaultConfigExtraProps, configValidator, coreOverride);
exports.createAlert = createAlert;
exports.getAlertDefaultConfig = getAlertDefaultConfig;
`;export{e as default};
