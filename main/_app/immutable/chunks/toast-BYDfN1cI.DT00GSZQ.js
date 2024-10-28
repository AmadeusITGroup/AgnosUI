const e=`"use strict";
const toast = require("@agnos-ui/core/components/toast");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const fade = require("./fade-CJ0jXGio.cjs");
const defaultConfigExtraProps = {
  structure: void 0,
  children: void 0,
  header: void 0
};
const coreOverride = {
  transition: fade.fadeTransition
};
function getToastDefaultConfig() {
  return { ...toast.getToastDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride };
}
const createToast = extendWidget.extendWidgetProps(
  toast.createToast,
  defaultConfigExtraProps,
  {
    structure: void 0,
    children: void 0,
    header: void 0
  },
  coreOverride
);
exports.createToast = createToast;
exports.getToastDefaultConfig = getToastDefaultConfig;
`;export{e as default};
