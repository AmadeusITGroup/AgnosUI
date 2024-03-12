const t=`import { g as getCommonAlertDefaultConfig, a as createCommonAlert } from "./common-DiT2qefC.js";
import { extendWidgetProps } from "./services/extendWidget.js";
import { e as typeString } from "./writables-DoU_XYTX.js";
const alertDefaultConfig = {
  type: "primary"
};
const alertConfigValidator = {
  type: typeString
};
function getAlertDefaultConfig() {
  return { ...getCommonAlertDefaultConfig(), ...alertDefaultConfig };
}
const createAlert = extendWidgetProps(createCommonAlert, alertDefaultConfig, alertConfigValidator);
export {
  createAlert as c,
  getAlertDefaultConfig as g
};
`;export{t as default};
