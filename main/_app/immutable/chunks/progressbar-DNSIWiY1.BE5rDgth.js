const e=`import { createProgressbar as createProgressbar$1, getProgressbarDefaultConfig as getProgressbarDefaultConfig$1 } from "@agnos-ui/core/components/progressbar";
import { typeString, typeBoolean } from "@agnos-ui/core/utils/writables";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfig = {
  slotStructure: void 0,
  slotDefault: void 0,
  height: "",
  striped: false,
  animated: false,
  type: void 0
};
const configValidator = {
  height: typeString,
  striped: typeBoolean,
  animated: typeBoolean,
  type: typeString
};
function getProgressbarDefaultConfig() {
  return { ...getProgressbarDefaultConfig$1(), ...defaultConfig };
}
const createProgressbar = extendWidgetProps(createProgressbar$1, defaultConfig, configValidator);
export {
  createProgressbar as c,
  getProgressbarDefaultConfig as g
};
`;export{e as default};
