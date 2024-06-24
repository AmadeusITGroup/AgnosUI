const e=`import { getAlertDefaultConfig as getAlertDefaultConfig$1, createAlert as createAlert$1 } from "@agnos-ui/core/components/alert";
import { typeString } from "@agnos-ui/core/utils/writables";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  type: "primary"
};
const coreOverride = {
  transition: fadeTransition
};
const configValidator = {
  type: typeString
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
