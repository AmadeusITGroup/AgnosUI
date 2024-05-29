const o=`import { getModalDefaultConfig as getModalDefaultConfig$1, createModal as createModal$1 } from "@agnos-ui/core/components/modal";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { typeBoolean } from "@agnos-ui/core/utils/writables";
const defaultConfigExtraProps = {
  contentData: void 0,
  slotDefault: void 0,
  slotFooter: void 0,
  slotHeader: void 0,
  slotStructure: void 0,
  slotTitle: void 0,
  fullscreen: false
};
const coreOverride = {
  backdropTransition: fadeTransition,
  modalTransition: fadeTransition
};
const configValidator = {
  fullscreen: typeBoolean
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
