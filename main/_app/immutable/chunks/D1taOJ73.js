const t=`import { g as getCommonAlertDefaultConfig, c as createCommonAlert } from "./common-DK0ADNTX.js";
import { createWidgetFactory } from "./utils/widget.js";
function getAlertDefaultConfig() {
  return { ...getCommonAlertDefaultConfig() };
}
const createAlert = createWidgetFactory("alert", createCommonAlert);
export {
  createAlert as c,
  getAlertDefaultConfig as g
};
`;export{t as default};
