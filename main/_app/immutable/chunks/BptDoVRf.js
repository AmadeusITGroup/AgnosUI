const e=`import { getAlertDefaultConfig as getAlertDefaultConfig$1, createAlert as createAlert$1 } from "@agnos-ui/core/components/alert";
import { createTypeEnum } from "@agnos-ui/core/utils/writables";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
import { BS_CONTEXTUAL_CLASSES } from "./types.js";
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  type: "primary"
};
const coreOverride = {
  transition: fadeTransition
};
const configValidator = {
  type: createTypeEnum(BS_CONTEXTUAL_CLASSES),
  structure: void 0,
  children: void 0
};
function getAlertDefaultConfig() {
  return { ...getAlertDefaultConfig$1(), ...defaultConfigExtraProps, ...coreOverride };
}
const createAlert = extendWidgetProps(createAlert$1, defaultConfigExtraProps, configValidator, coreOverride);
export {
  createAlert as c,
  getAlertDefaultConfig as g
};
`;export{e as default};
