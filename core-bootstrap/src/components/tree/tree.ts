import type {TreeProps as CoreProps, TreeState as CoreState, TreeApi, TreeDirectives, NormalizedTreeItem} from '@agnos-ui/core/components/tree';
import {createTree as createCoreTree, getTreeDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/tree';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';

export * from '@agnos-ui/core/components/tree';

/**
 * Represents the context for a Tree widget.
 * This interface is an alias for `WidgetSlotContext<TreeWidget>`.
 */
export type TreeContext = WidgetSlotContext<TreeWidget>;
/**
 * Represents the context for a tree item, extending the base `TreeContext`
 * with an additional `item` property.
 */
export type TreeSlotItemContext = TreeContext & {item: NormalizedTreeItem};

interface TreeExtraProps {
	/**
	 * Slot to change the default display of the tree
	 */
	structure: SlotContent<TreeContext>;
	/**
	 * Slot to change the default tree item
	 */
	item: SlotContent<TreeSlotItemContext>;
	/**
	 * Slot to change the default tree item content
	 */
	itemContent: SlotContent<TreeSlotItemContext>;
	/**
	 * Slot to change the default tree item toggle
	 */
	itemToggle: SlotContent<TreeSlotItemContext>;
}

/**
 * Represents the state of a Tree component.
 */
export interface TreeState extends CoreState, TreeExtraProps {}
/**
 * Represents the properties for the Tree component.
 */
export interface TreeProps extends CoreProps, TreeExtraProps {}
/**
 * Represents a Tree widget component.
 */
export type TreeWidget = Widget<TreeProps, TreeState, TreeApi, TreeDirectives>;

const defaultConfigExtraProps: TreeExtraProps = {
	structure: undefined,
	item: undefined,
	itemContent: undefined,
	itemToggle: undefined,
};

/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
export function getTreeDefaultConfig(): TreeProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps};
}

/**
 * Create a Tree with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
export const createTree: WidgetFactory<TreeWidget> = extendWidgetProps(createCoreTree, defaultConfigExtraProps, {
	structure: undefined,
	item: undefined,
	itemContent: undefined,
	itemToggle: undefined,
});
