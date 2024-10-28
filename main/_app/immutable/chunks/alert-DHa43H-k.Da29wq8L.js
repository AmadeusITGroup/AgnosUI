const e=`"use strict";
const common = require("./common-DPrnk32x.cjs");
function getAlertDefaultConfig() {
  return { ...common.getCommonAlertDefaultConfig() };
}
const createAlert = common.createCommonAlert;
exports.createAlert = createAlert;
exports.getAlertDefaultConfig = getAlertDefaultConfig;
`;export{e as default};
