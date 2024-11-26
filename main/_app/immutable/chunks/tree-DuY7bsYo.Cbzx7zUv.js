const e=`"use strict";
const tree = require("@agnos-ui/core/components/tree");
const extendWidget = require("@agnos-ui/core/services/extendWidget");
const defaultConfigExtraProps = {
  structure: void 0,
  item: void 0,
  itemContent: void 0,
  itemToggle: void 0
};
function getTreeDefaultConfig() {
  return { ...tree.getTreeDefaultConfig(), ...defaultConfigExtraProps };
}
const createTree = extendWidget.extendWidgetProps(tree.createTree, defaultConfigExtraProps, {
  structure: void 0,
  item: void 0,
  itemContent: void 0,
  itemToggle: void 0
});
exports.createTree = createTree;
exports.getTreeDefaultConfig = getTreeDefaultConfig;
`;export{e as default};
