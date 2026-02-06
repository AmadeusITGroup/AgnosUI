const e=`import { createSelect as createSelect$1, getSelectDefaultConfig as getSelectDefaultConfig$1 } from "@agnos-ui/core/components/select";
import { extendWidgetProps } from "@agnos-ui/core/services/extendWidget";
const defaultConfigExtraProps = {
  badgeLabel: ({ itemContext }) => itemContext.item,
  itemLabel: ({ itemContext }) => itemContext.item
};
function getSelectDefaultConfig() {
  return { ...getSelectDefaultConfig$1(), ...defaultConfigExtraProps };
}
const createSelect = extendWidgetProps(
  createSelect$1,
  defaultConfigExtraProps
);
export {
  createSelect as c,
  getSelectDefaultConfig as g
};
`;export{e as default};
