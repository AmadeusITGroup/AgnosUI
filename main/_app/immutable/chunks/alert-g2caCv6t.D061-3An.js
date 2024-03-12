const e=`"use strict";
const common = require("./common-CZb4iSH3.cjs");
const services_extendWidget = require("./services/extendWidget.cjs");
const utils_writables = require("./writables-D46sFgGK.cjs");
const alertDefaultConfig = {
  type: "primary"
};
const alertConfigValidator = {
  type: utils_writables.typeString
};
function getAlertDefaultConfig() {
  return { ...common.getCommonAlertDefaultConfig(), ...alertDefaultConfig };
}
const createAlert = services_extendWidget.extendWidgetProps(common.createCommonAlert, alertDefaultConfig, alertConfigValidator);
exports.createAlert = createAlert;
exports.getAlertDefaultConfig = getAlertDefaultConfig;
`;export{e as default};
