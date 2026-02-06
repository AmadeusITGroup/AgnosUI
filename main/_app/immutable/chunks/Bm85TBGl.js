const t=`import { createToast as createToast$1, getToastDefaultConfig as getToastDefaultConfig$1 } from "@agnos-ui/core/components/toast";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
import { f as fadeTransition } from "./fade-uOobJKgw.js";
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  header: void 0
};
const coreOverride = {
  transition: fadeTransition
};
function getToastDefaultConfig() {
  return { ...getToastDefaultConfig$1(), ...defaultConfigExtraProps, ...coreOverride };
}
const createToast = extendWidgetProps(
  createToast$1,
  defaultConfigExtraProps,
  {
    structure: void 0,
    children: void 0,
    header: void 0
  },
  coreOverride
);
const toastPositions = {
  topLeft: "top-0 start-0",
  topCenter: "top-0 start-50 translate-middle-x",
  topRight: "top-0 end-0",
  middleLeft: "top-50 start-0 translate-middle-y",
  middleCenter: "top-50 start-50 translate-middle",
  middleRight: "top-50 end-0 translate-middle-y",
  bottomLeft: "bottom-0 start-0",
  bottomCenter: "bottom-0 start-50 translate-middle-x",
  bottomRight: "bottom-0 end-0"
};
export {
  createToast as c,
  getToastDefaultConfig as g,
  toastPositions as t
};
`;export{t as default};
