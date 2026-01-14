const t=`"use strict";
const common = require("./common-B5jS-Ih_.cjs");
const utils_widget = require("./utils/widget.cjs");
function getAlertDefaultConfig() {
  return { ...common.getCommonAlertDefaultConfig() };
}
const createAlert = utils_widget.createWidgetFactory("alert", common.createCommonAlert);
exports.createAlert = createAlert;
exports.getAlertDefaultConfig = getAlertDefaultConfig;
`;export{t as default};
