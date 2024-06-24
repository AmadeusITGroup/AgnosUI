const e=`import { getSliderDefaultConfig as getSliderDefaultConfig$1, createSlider as createSlider$1 } from "@agnos-ui/core/components/slider";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfigExtraProps = {
  structure: void 0,
  label: ({ value }) => "" + value,
  handle: void 0
};
function getSliderDefaultConfig() {
  return { ...getSliderDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createSlider = extendWidgetProps(createSlider$1, defaultConfigExtraProps, {});
export {
  createSlider as c,
  getSliderDefaultConfig as g
};
`;export{e as default};
