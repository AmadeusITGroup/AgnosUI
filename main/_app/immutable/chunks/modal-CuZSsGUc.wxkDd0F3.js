const e=`import { getModalDefaultConfig as getModalDefaultConfig$1, createModal as createModal$1 } from "@agnos-ui/core/components/modal";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const coreOverride = {
  backdropTransition: fadeTransition,
  modalTransition: fadeTransition
};
function getModalDefaultConfig() {
  return { ...getModalDefaultConfig$1(), ...coreOverride };
}
const createModal = extendWidgetProps(
  createModal$1,
  {},
  {},
  coreOverride
);
export {
  createModal as c,
  getModalDefaultConfig as g
};
`;export{e as default};
