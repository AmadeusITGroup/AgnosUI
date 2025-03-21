const t=`"use strict";
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
exports.createToast = createToast;
exports.getToastDefaultConfig = getToastDefaultConfig;
exports.toastPositions = toastPositions;
`;export{t as default};
