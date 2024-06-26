const e=`"use strict";
const select = require("@agnos-ui/core/components/select");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  badgeLabel: ({ itemContext }) => itemContext.item,
  itemLabel: ({ itemContext }) => itemContext.item
};
function getSelectDefaultConfig() {
  return { ...select.getSelectDefaultConfig(), ...defaultConfigExtraProps };
}
const createSelect = extendWidget.extendWidgetProps(
  select.createSelect,
  defaultConfigExtraProps,
  {}
);
exports.createSelect = createSelect;
exports.getSelectDefaultConfig = getSelectDefaultConfig;
`;export{e as default};
