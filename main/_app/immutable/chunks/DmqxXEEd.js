const e=`import type { Ref } from 'react';
import type { DrawerApi, DrawerContext, DrawerProps } from './drawer.gen';
/**
 * Renders the default slot structure for a Drawer component.
 *
 * @param slotContext - The context containing the state and properties for the Drawer component.
 * @returns The JSX element representing the default slot structure of the Drawer.
 */
export declare const DefaultDrawerSlotStructure: (slotContext: DrawerContext) => import("react/jsx-runtime").JSX.Element;
/**
 * Drawer component that integrates with a widget context and renders a slot structure.
 *
 * @param props - The properties for the Drawer component.
 * @param props.ref - Ref to expose the Drawer API.
 * @returns The rendered Drawer component.
 *
 * The Drawer component uses the {@link useWidget} hook to create a widget context with the provided
 * configuration. It renders the slot content using the \`Slot\` component.
 */
export declare function Drawer(props: Partial<DrawerProps> & {
    ref?: Ref<DrawerApi>;
}): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
