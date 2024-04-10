const e=`"use strict";
const progressbar = require("@agnos-ui/core/components/progressbar");
const writables = require("@agnos-ui/core/utils/writables");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfig = {
  slotStructure: void 0,
  slotDefault: void 0,
  height: "",
  striped: false,
  animated: false,
  type: void 0
};
const configValidator = {
  height: writables.typeString,
  striped: writables.typeBoolean,
  animated: writables.typeBoolean,
  type: writables.typeString
};
function getProgressbarDefaultConfig() {
  return { ...progressbar.getProgressbarDefaultConfig(), ...defaultConfig };
}
const createProgressbar = extendWidget.extendWidgetProps(progressbar.createProgressbar, defaultConfig, configValidator);
exports.createProgressbar = createProgressbar;
exports.getProgressbarDefaultConfig = getProgressbarDefaultConfig;
`;export{e as default};
