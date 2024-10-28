const e=`"use strict";
const progressbar = require("@agnos-ui/core/components/progressbar");
const writables = require("@agnos-ui/core/utils/writables");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const types = require("./types.cjs");
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  height: "",
  striped: false,
  animated: false,
  type: void 0
};
const configValidator = {
  height: writables.typeString,
  striped: writables.typeBoolean,
  animated: writables.typeBoolean,
  type: writables.createTypeEnum([void 0, ...types.BS_CONTEXTUAL_CLASSES]),
  structure: void 0,
  children: void 0
};
function getProgressbarDefaultConfig() {
  return { ...progressbar.getProgressbarDefaultConfig(), ...defaultConfigExtraProps };
}
const createProgressbar = extendWidget.extendWidgetProps(progressbar.createProgressbar, defaultConfigExtraProps, configValidator);
exports.createProgressbar = createProgressbar;
exports.getProgressbarDefaultConfig = getProgressbarDefaultConfig;
`;export{e as default};
