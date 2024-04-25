const e=`"use strict";
const slider = require("@agnos-ui/core/components/slider");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  slotStructure: void 0,
  slotLabel: ({ value }) => "" + value,
  slotHandle: void 0
};
function getSliderDefaultConfig() {
  return { ...slider.getSliderDefaultConfig(), ...defaultConfigExtraProps };
}
const createSlider = extendWidget.extendWidgetProps(slider.createSlider, defaultConfigExtraProps, {});
exports.createSlider = createSlider;
exports.getSliderDefaultConfig = getSliderDefaultConfig;
`;export{e as default};
