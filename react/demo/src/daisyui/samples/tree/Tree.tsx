import type {NormalizedTreeItem, TreeDirectives, TreeProps, TreeState} from '@agnos-ui/react-headless/components/tree';
import {createTree} from '@agnos-ui/react-headless/components/tree';
import {useWidget} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import clsx from 'clsx';

export function Tree(props: Partial<Pick<TreeProps, 'className' | 'nodes' | 'navSelector'>>) {
	const {
		state,
		directives: {navigationDirective, itemToggleDirective},
	} = useWidget(createTree, props);
	return (
		<ul role="tree" className={clsx('bg-base-200', 'rounded-lg', 'menu', 'w-[300px]', state.className)} {...useDirective(navigationDirective)}>
			{state.normalizedNodes.map((node, index) => (
				<TreeItem state={state} item={node} itemToggleDirective={itemToggleDirective} key={node.label + node.level + index} />
			))}
		</ul>
	);
}

const ToggleButtonDisplay = () => (
	<span className="ms-auto">
		<svg
			className="stroke-base-content transition transform delay-0 duration-300 [.au-tree-expand-icon.au-tree-expand-icon-expanded>span>&]:rotate-180"
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 10 10"
		>
			<path d="M1 2 L5 7 L9 2" strokeWidth="2" fill="none" />
		</svg>
	</span>
);

const TreeItem = ({
	state,
	item,
	itemToggleDirective,
}: {
	state: TreeState;
	item: NormalizedTreeItem;
	itemToggleDirective: TreeDirectives['itemToggleDirective'];
}) => (
	<li role="treeitem">
		<span className="flex flex-wrap items-center" {...useDirective(itemToggleDirective, {item})}>
			<span className="me-1">
				<ItemIcon item={item} />
			</span>
			<span> {item.label}</span>
			{item.children.length > 0 && <ToggleButtonDisplay />}
		</span>

		{state.expandedMap.get(item) && (
			<ul role="group">
				{item.children.map((child, index) => (
					<TreeItem state={state} item={child} itemToggleDirective={itemToggleDirective} key={child.label + child.level + index} />
				))}
			</ul>
		)}
	</li>
);

const ItemIcon = ({item}: {item: NormalizedTreeItem}) => {
	let itemIcon;
	if (item.children.length > 0) {
		itemIcon = (
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
				/>
			</svg>
		);
	} else {
		if (item.label.includes('.pdf')) {
			itemIcon = (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
					/>
				</svg>
			);
		} else if (item.label.includes('.png')) {
			itemIcon = (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
					/>
				</svg>
			);
		} else {
			itemIcon = (
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
					/>
				</svg>
			);
		}
	}
	return <>{itemIcon}</>;
};
