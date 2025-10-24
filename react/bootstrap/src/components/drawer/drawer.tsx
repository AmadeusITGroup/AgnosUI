import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {Portal} from '@agnos-ui/react-headless/utils/portal';
import type {Ref} from 'react';
import {useImperativeHandle} from 'react';
import {useWidget} from '../../config';
import type {DrawerApi, DrawerContext, DrawerProps} from './drawer.gen';
import {createDrawer} from './drawer.gen';

const BackdropElement = ({directives}: DrawerContext) => <div {...useDirective(directives.backdropDirective)} />;

const DrawerElement = (slotContext: DrawerContext) => (
	<div {...useDirective(slotContext.directives.drawerDirective)}>
		<div {...useDirective(slotContext.directives.containerDirective)}>
			<Slot slotContent={slotContext.state.structure} props={slotContext} />
		</div>
	</div>
);

/**
 * Renders the default slot structure for a Drawer component.
 *
 * @param slotContext - The context containing the state and properties for the Drawer component.
 * @returns The JSX element representing the default slot structure of the Drawer.
 */
export const DefaultDrawerSlotStructure = (slotContext: DrawerContext) => (
	<>
		<div className="au-drawer-header">
			<Slot slotContent={slotContext.state.header} props={slotContext} />
		</div>
		<div className="au-drawer-body">
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
		{slotContext.state.resizable && <Splitter {...slotContext} />}
	</>
);

const Splitter = (slotContext: DrawerContext) => <div {...useDirective(slotContext.directives.splitterDirective)} />;

const defaultConfig: Partial<DrawerProps> = {
	structure: DefaultDrawerSlotStructure,
};

/**
 * Drawer component that integrates with a widget context and renders a slot structure.
 *
 * @param props - The properties for the Drawer component.
 * @param props.ref - Ref to expose the Drawer API.
 * @returns The rendered Drawer component.
 *
 * The Drawer component uses the {@link useWidget} hook to create a widget context with the provided
 * configuration. It renders the slot content using the `Slot` component.
 */
export function Drawer(props: Partial<DrawerProps> & {ref?: Ref<DrawerApi>}) {
	const widgetContext = useWidget(createDrawer, props, {...defaultConfig});
	useImperativeHandle(props.ref, () => widgetContext.api, [widgetContext.api]);
	return (
		<Portal container={widgetContext.state.container}>
			{!widgetContext.state.backdropHidden && <BackdropElement {...widgetContext} />}
			{!widgetContext.state.hidden && <DrawerElement {...widgetContext} />}
		</Portal>
	);
}
