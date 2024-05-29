const e=`"use strict";
const modal = require("@agnos-ui/core/components/modal");
const fade = require("./fade-CJ0jXGio.cjs");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const writables = require("@agnos-ui/core/utils/writables");
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
  backdropTransition: fade.fadeTransition,
  modalTransition: fade.fadeTransition
};
const configValidator = {
  fullscreen: writables.typeBoolean
};
function getModalDefaultConfig() {
  return { ...modal.getModalDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride };
}
const createModal = extendWidget.extendWidgetProps(
  modal.createModal,
  defaultConfigExtraProps,
  configValidator,
  coreOverride
);
exports.createModal = createModal;
exports.getModalDefaultConfig = getModalDefaultConfig;
`;export{e as default};
