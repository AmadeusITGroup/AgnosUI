const t=`import { getRatingDefaultConfig as getRatingDefaultConfig$1, createRating as createRating$1 } from "@agnos-ui/core/components/rating";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfigExtraProps = {
  slotStar: ({ fill }) => String.fromCharCode(fill === 100 ? 9733 : 9734)
};
function getRatingDefaultConfig() {
  return { ...getRatingDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createRating = extendWidgetProps(createRating$1, defaultConfigExtraProps, {});
export {
  createRating as c,
  getRatingDefaultConfig as g
};
`;export{t as default};
