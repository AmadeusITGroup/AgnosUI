import type {DrawerProps as CoreProps, DrawerState as CoreState, DrawerApi, DrawerDirectives} from '@agnos-ui/core/components/drawer';
import {createDrawer as createCoreDrawer, getDrawerDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/drawer';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import {collapseHorizontalTransition, collapseVerticalTransition, fadeTransition} from '../../services/transitions';

export * from '@agnos-ui/core/components/drawer';

/**
 * Represents the context for a Drawer widget.
 * This interface is an alias for `WidgetSlotContext<DrawerWidget>`.
 */
export type DrawerContext = WidgetSlotContext<DrawerWidget>;

/**
 * Represents additional properties for the Drawer widget like slots etc.
 */
interface DrawerExtraProps {
	/**
	 * Global template for the drawer component
	 */
	structure: SlotContent<DrawerContext>;
	/**
	 * Template for the drawer header
	 */
	header: SlotContent<DrawerContext>;
	/**
	 * Template for the drawer body
	 */
	children: SlotContent<DrawerContext>;
}

/**
 * Represents the state of a Drawer component.
 */
export interface DrawerState extends CoreState, DrawerExtraProps {}
/**
 * Represents the properties for the Drawer component.
 */
export interface DrawerProps extends CoreProps, DrawerExtraProps {}
/**
 * Represents a Drawer widget component.
 */
export type DrawerWidget = Widget<DrawerProps, DrawerState, DrawerApi, DrawerDirectives>;

const defaultConfigExtraProps: DrawerExtraProps = {
	structure: undefined,
	header: undefined,
	children: undefined,
};

const configValidator: ConfigValidator<DrawerExtraProps> = {
	structure: undefined,
	header: undefined,
	children: undefined,
};

/**
 * Retrieve a shallow copy of the default Drawer config
 * @returns the default Drawer config
 */
export function getDrawerDefaultConfig(): DrawerProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps, ...coreOverride};
}

const coreOverride: Partial<CoreProps> = {
	backdropTransition: fadeTransition,
	transition: collapseHorizontalTransition,
	verticalTransition: collapseVerticalTransition,
};

/**
 * Create a Drawer with given config props
 * @param config - an optional Drawer config
 * @returns a DrawerWidget
 */
export const createDrawer: WidgetFactory<DrawerWidget> = extendWidgetProps(createCoreDrawer, defaultConfigExtraProps, configValidator, coreOverride);
