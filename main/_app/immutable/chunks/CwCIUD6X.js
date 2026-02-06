const e=`import { createTree as createTree$1, getTreeDefaultConfig as getTreeDefaultConfig$1 } from "@agnos-ui/core/components/tree";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfigExtraProps = {
  structure: void 0,
  item: void 0,
  itemContent: void 0,
  itemToggle: void 0
};
function getTreeDefaultConfig() {
  return { ...getTreeDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createTree = extendWidgetProps(createTree$1, defaultConfigExtraProps, {
  structure: void 0,
  item: void 0,
  itemContent: void 0,
  itemToggle: void 0
});
export {
  createTree as c,
  getTreeDefaultConfig as g
};
`;export{e as default};
