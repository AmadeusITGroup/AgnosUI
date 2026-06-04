const o=`import { createModal as createModal$1, getModalDefaultConfig as getModalDefaultConfig$1 } from "@agnos-ui/core/components/modal";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { typeBoolean } from "@agnos-ui/core/utils/writables";
const defaultConfigExtraProps = {
  contentData: void 0,
  children: void 0,
  footer: void 0,
  header: void 0,
  structure: void 0,
  title: void 0,
  fullscreen: false
};
const coreOverride = {
  backdropTransition: fadeTransition,
  modalTransition: fadeTransition
};
const configValidator = {
  fullscreen: typeBoolean,
  contentData: void 0,
  children: void 0,
  footer: void 0,
  header: void 0,
  structure: void 0,
  title: void 0
};
function getModalDefaultConfig() {
  return { ...getModalDefaultConfig$1(), ...defaultConfigExtraProps, ...coreOverride };
}
const createModal = extendWidgetProps(
  createModal$1,
  defaultConfigExtraProps,
  configValidator,
  coreOverride
);
export {
  createModal as c,
  getModalDefaultConfig as g
};
`;export{o as default};
