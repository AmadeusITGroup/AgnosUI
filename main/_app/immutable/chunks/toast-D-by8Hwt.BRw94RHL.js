const t=`import { getToastDefaultConfig as getToastDefaultConfig$1, createToast as createToast$1 } from "@agnos-ui/core/components/toast";
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
export {
  createToast as c,
  getToastDefaultConfig as g
};
`;export{t as default};
