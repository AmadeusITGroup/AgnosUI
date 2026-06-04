const t=`"use strict";
const rating = require("@agnos-ui/core/components/rating");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  star: ({ fill }) => String.fromCharCode(fill === 100 ? 9733 : 9734)
};
function getRatingDefaultConfig() {
  return { ...rating.getRatingDefaultConfig(), ...defaultConfigExtraProps };
}
const createRating = extendWidget.extendWidgetProps(rating.createRating, defaultConfigExtraProps);
exports.createRating = createRating;
exports.getRatingDefaultConfig = getRatingDefaultConfig;
`;export{t as default};
