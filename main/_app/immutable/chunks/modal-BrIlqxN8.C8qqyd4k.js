const e=`"use strict";
const modal = require("@agnos-ui/core/components/modal");
const fade = require("./fade-CJ0jXGio.cjs");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const coreOverride = {
  backdropTransition: fade.fadeTransition,
  modalTransition: fade.fadeTransition
};
function getModalDefaultConfig() {
  return { ...modal.getModalDefaultConfig(), ...coreOverride };
}
const createModal = extendWidget.extendWidgetProps(
  modal.createModal,
  {},
  {},
  coreOverride
);
exports.createModal = createModal;
exports.getModalDefaultConfig = getModalDefaultConfig;
`;export{e as default};
