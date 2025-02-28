const e=`import { getProgressbarDefaultConfig as getProgressbarDefaultConfig$1, createProgressbar as createProgressbar$1 } from "@agnos-ui/core/components/progressbar";
import { createTypeEnum, typeBoolean, typeString } from "@agnos-ui/core/utils/writables";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { BS_CONTEXTUAL_CLASSES } from "./types.js";
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  height: "",
  striped: false,
  animated: false,
  type: void 0
};
const configValidator = {
  height: typeString,
  striped: typeBoolean,
  animated: typeBoolean,
  type: createTypeEnum([void 0, ...BS_CONTEXTUAL_CLASSES]),
  structure: void 0,
  children: void 0
};
function getProgressbarDefaultConfig() {
  return { ...getProgressbarDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createProgressbar = extendWidgetProps(createProgressbar$1, defaultConfigExtraProps, configValidator);
export {
  createProgressbar as c,
  getProgressbarDefaultConfig as g
};
`;export{e as default};
