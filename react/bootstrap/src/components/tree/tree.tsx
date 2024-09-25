import {Slot} from '@agnos-ui/react-headless/slot';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {useWidgetWithConfig} from '../../config';
import type {TreeContext, TreeDirectives, NormalizedTreeItem, TreeProps, TreeSlotItemContext} from './tree.gen';
import {createTree} from './tree.gen';
import classNames from 'classnames';

const ToggleButtonDisplay = ({directive, item}: {directive: TreeDirectives['itemToggleDirective']; item: NormalizedTreeItem}) => {
	return <button {...useDirective(directive, {item})}></button>;
};

/**
 * A functional component that renders a toggle element with a directive applied to it.
 * The directive is provided through the `slotContext` parameter.
 *
 * @param slotContext - The context object containing the directives and item the toggle.
 * @returns A toggle element with the applied directive.
 */
export const DefaultTreeSlotItemToggle = (slotContext: TreeSlotItemContext) => {
	const {directives, item} = slotContext;
	return item.children.length > 0 ? (
		<ToggleButtonDisplay directive={directives.itemToggleDirective} item={item} />
	) : (
		<span className="au-tree-expand-icon-placeholder"></span>
	);
};

/**
 * A functional component that renders a tree item content element.
 *
 * @param slotContext - The context object containing the item content for display.
 * @returns A tree item element.
 */
export const DefaultTreeSlotItemContent = (slotContext: TreeSlotItemContext) => {
	const {state, item} = slotContext;
	return (
		<span className="au-tree-item">
			<Slot slotContent={state.itemToggle} props={{...slotContext}} />
			{item.label}
		</span>
	);
};

/**
 * A functional component that renders a tree item element with a directive applied to it.
 * The directive is provided through the `slotContext` parameter.
 *
 * @param slotContext - The context object containing the directives and item for the tree item element.
 * @returns A tree root element with the applied directive.
 */
export const DefaultTreeSlotItem = (slotContext: TreeSlotItemContext) => {
	const {state, directives, item} = slotContext;
	return (
		<li {...useDirective(directives.itemAttributesDirective, {item})}>
			<Slot slotContent={state.itemContent} props={{...slotContext, item}} />
			{state.expandedMap.get(item) && (
				<ul role="group">
					{item.children.map((child, index) => (
						<Slot slotContent={state.item} props={{...slotContext, item: child}} key={child.label + child.level + index} />
					))}
				</ul>
			)}
		</li>
	);
};
/**
 * A functional component that renders a tree structure with a directive applied to it.
 * The directive is provided through the `slotContext` parameter.
 *
 * @param slotContext - The context object containing the directives and items for the tree display.
 * @returns A tree structure with the applied directive.
 */
export const DefaultTreeSlotStructure = (slotContext: TreeContext) => {
	const {state} = slotContext;
	return (
		<ul role="tree" className={classNames('au-tree', state.className)} {...useDirective(slotContext.directives.navigationDirective)}>
			{state.normalizedNodes.map((node, index) => (
				<Slot key={node.label + node.level + index} slotContent={state.item} props={{item: node, ...slotContext}} />
			))}
		</ul>
	);
};

const defaultConfig: Partial<TreeProps> = {
	structure: DefaultTreeSlotStructure,
	item: DefaultTreeSlotItem,
	itemContent: DefaultTreeSlotItemContent,
	itemToggle: DefaultTreeSlotItemToggle,
};

/**
 * Tree component that integrates with a widget context and renders a slot structure.
 *
 * @param props - The properties for the Tree component.
 * @returns The rendered Tree component.
 *
 * The Tree component uses the {@link useWidgetWithConfig} hook to create a widget context with the provided
 * configuration. It renders the slot content using the `Slot` component.
 */
export function Tree(props: Partial<TreeProps>) {
	const widgetContext = useWidgetWithConfig(createTree, props, 'tree', {...defaultConfig});
	return <Slot slotContent={widgetContext.state.structure} props={widgetContext} />;
}
