import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, readable, writable} from '@amadeus-it-group/tansu';
import type {DragAndDropConfig} from '../../services/dragAndDrop';
import {createDragAndDropManager} from '../../services/dragAndDrop';
import {createNavManager, type NavManagerItemConfig} from '../../services/navManager';
import type {Directive, WidgetFactory, SSRHTMLElement} from '../../types';
import {type ConfigValidator, type PropsConfig, type Widget} from '../../types';
import {bindDirective, browserDirective, createAttributesDirective, mapDirectiveArg, mergeDirectives} from '../../utils/directive';
import {noop} from '../../utils/func';
import {stateStores, true$, writablesForProps} from '../../utils/stores';
import {typeArray, typeFunction, typeString} from '../../utils/writables';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {createWidgetFactory} from '../../utils/widget';

/**
 * Represents a tree item component.
 */
export interface TreeItem {
	/**
	 * Optional accessibility label for the node
	 */
	ariaLabel?: string;
	/**
	 * Optional array of children nodes
	 */
	children?: TreeItem[];
	/**
	 * If `true` the node is expanded
	 */
	isExpanded?: boolean;
	/**
	 * String title of the node
	 */
	label: string;
}

/**
 * Normalized TreeItem object
 */
export interface NormalizedTreeItem extends TreeItem {
	/**
	 * Accessibility label for the node
	 */
	ariaLabel: string;

	/**
	 * Level in the hierarchy, starts with 0 for a root node
	 */
	level: number;

	/**
	 * An array of children nodes
	 */
	children: NormalizedTreeItem[];
}

/**
 * Represents an internal tree item object necessary for the proper displayand behavior
 */
interface TreeItemInfo {
	parent: NormalizedTreeItem | undefined;
	htmlElement?: HTMLElement;
}

interface TreeCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * Optional accessibility label for the tree if there is no explicit label
	 *
	 * @defaultValue `''`
	 */
	ariaLabel?: string;
}
/**
 * Interface representing the properties for the Tree component.
 */
export interface TreeProps extends TreeCommonPropsAndState {
	/**
	 * Array of the tree nodes to display
	 *
	 * @defaultValue `[]`
	 */
	nodes: TreeItem[];
	/**
	 * An event emitted when the user toggles the expand of the TreeItem.
	 *
	 * Event payload is equal to the TreeItem clicked.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onExpandToggle: (node: NormalizedTreeItem) => void;
	/**
	 * Retrieves expand items of the TreeItem
	 *
	 * @param node - HTML element that is representing the expand item
	 *
	 * @defaultValue
	 * ```ts
	 * (node: HTMLElement) => node.querySelectorAll('button')
	 * ```
	 */
	navSelector(node: HTMLElement): NodeListOf<HTMLElement>;
	/**
	 * Return the value for the 'aria-label' attribute of the toggle
	 * @param label - tree item label
	 *
	 * @defaultValue
	 * ```ts
	 * (label: string) => `Toggle ${label}`
	 * ```
	 */
	ariaLabelToggleFn: (label: string) => string;
}
/**
 * Represents the state of a Tree component.
 */
export interface TreeState extends TreeCommonPropsAndState {
	/**
	 * Array of normalized tree nodes
	 */
	normalizedNodes: NormalizedTreeItem[];
	/**
	 * Getter of expanded state for each tree node
	 */
	expandedMap: {get(item: NormalizedTreeItem): boolean | undefined};
}

/**
 * Interface representing the API for a Tree component.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface TreeApi {}

/**
 * Interface representing various directives used in the Tree component.
 */
export interface TreeDirectives {
	/**
	 * Directive to attach navManager for the tree
	 */
	navigationDirective: Directive;
	/**
	 * Directive to handle toggle for the tree item
	 */
	itemToggleDirective: Directive<{item: NormalizedTreeItem}>;
	/**
	 * Directive to handle attributes for the tree item
	 */
	itemAttributesDirective: Directive<{item: NormalizedTreeItem}>;
	/**
	 * Directive to handle draggable items
	 */
	draggableDirective: Directive<{item: NormalizedTreeItem; filler?: boolean}>;
}
/**
 * Represents a Tree widget component.
 */
export type TreeWidget = Widget<TreeProps, TreeState, TreeApi, TreeDirectives>;

/**
 * Retrieve a shallow copy of the default Tree config
 * @returns the default Tree config
 */
export function getTreeDefaultConfig(): TreeProps {
	return {
		...defaultTreeConfig,
	};
}

const defaultTreeConfig: TreeProps = {
	className: '',
	nodes: [],
	onExpandToggle: noop,
	navSelector: (node: HTMLElement) => node.querySelectorAll('button'),
	ariaLabelToggleFn: (label: string) => `Toggle ${label}`,
};

const configValidator: ConfigValidator<TreeProps> = {
	className: typeString,
	nodes: typeArray,
	onExpandToggle: typeFunction,
	navSelector: typeFunction,
	ariaLabelToggleFn: typeFunction,
};

/**
 * Create a tree widget with given config props
 * @param config - an optional tree config
 * @returns a TreeWidget
 */
export const createTree: WidgetFactory<TreeWidget> = createWidgetFactory('tree', (config?: PropsConfig<TreeProps>) => {
	const [{nodes$, onExpandToggle$, navSelector$, ariaLabelToggleFn$, ...stateProps}, patch] = writablesForProps(
		defaultTreeConfig,
		config,
		configValidator,
	);
	const treeMap = new Map<TreeItem, TreeItemInfo>();
	const _expandedMap = {
		get(item: NormalizedTreeItem): boolean | undefined {
			return item.isExpanded;
		},
	};

	const _toggleChange$ = writable({});

	const expandedMap$ = computed(() => {
		normalizedNodes$();
		_toggleChange$();
		return _expandedMap;
	});

	const {
		elementsInDomOrder$,
		directive: navDirective,
		refreshElements,
		focusIndex,
		focusPrevious,
		focusNext,
		focusFirst,
		focusLast,
	} = createNavManager();
	const navManagerConfig$ = computed<NavManagerItemConfig>(() => ({
		keys: {
			ArrowUp: focusPrevious,
			ArrowDown: focusNext,
			Home: focusFirst,
			End: focusLast,
		},
		selector: navSelector$(),
	}));

	interface DragContext {
		sourceItem: NormalizedTreeItem | undefined;
		targetItem: NormalizedTreeItem | undefined;
	}

	const {draggableDirective, dragContext} = createDragAndDropManager<DragContext>();

	const dragAndDropConfig: (item: NormalizedTreeItem, filler?: boolean) => DragAndDropConfig = (item: NormalizedTreeItem, filler?: boolean) => ({
		dragStartHandler: (event: DragEvent) => {
			(event.target as HTMLElement).style.opacity = '0.5';
			dragContext.set({
				sourceItem: item,
				targetItem: undefined,
			});
		},
		dragEnterHandler: (event: DragEvent) => {
			(event.target as HTMLElement).style.border = '3px dotted #666';
		},
		dragEndHandler: (event: DragEvent) => {
			(event.target as HTMLElement).style.opacity = '1';
		},
		dragLeaveHandler: (event: DragEvent) => {
			(event.target as HTMLElement).style.border = '';
		},
		dragOverHandler: (event: DragEvent) => {
			event.preventDefault();
		},
		dropHandler: (event: DragEvent) => {
			(event.target as HTMLElement).style.border = '';
			if (dragContext) {
				dragContext.update((value) => {
					if (value) {
						value.targetItem = item;
					}
					return value;
				});
			}
			const dragContextValue = dragContext.get()!;
			const dragSource = dragContextValue.sourceItem!;
			const dragTarget = dragContextValue.targetItem!;
			if (isAnscensor(dragSource, dragTarget)) {
				return;
			}
			if (filler) {
				const parent = treeMap.get(dragSource)?.parent;
				if (parent) {
					parent.children = parent?.children.filter((child) => child !== dragSource);
				}
				const targetParent = treeMap.get(dragTarget)?.parent;
				if (targetParent) {
					const targetIndex = targetParent.children.indexOf(dragTarget);
					targetParent.children.splice(targetIndex, 0, dragSource);
					treeMap.set(dragSource, {parent: targetParent});
				}
			} else {
				const parent = treeMap.get(dragSource)?.parent;
				if (parent) {
					parent.children = parent?.children.filter((child) => child !== dragSource);
					treeMap.set(dragSource, {parent: dragTarget});
				}
				dragTarget.children.push(dragContextValue.sourceItem!);
				dragTarget.isExpanded = true;
			}
			const newSourceParent = treeMap.get(dragSource)?.parent;
			updateSourceLevels(dragSource, newSourceParent!.level + 1);
			_toggleChange$.set({});
		},
	});

	const updateSourceLevels = (source: NormalizedTreeItem, level: number) => {
		source.level = level;
		if (source.children) {
			source.children.forEach((child) => updateSourceLevels(child, level + 1));
		}
	};

	/**
	 * Utility to check source is an ancestor of target
	 * @param source node to check if is an ancestor of target
	 * @param target node to check if is a descendant of source
	 * @returns `true` if source is an ancestor of target, `false` otherwise
	 */
	const isAnscensor = (source: NormalizedTreeItem, target: NormalizedTreeItem) => {
		if (target === source) {
			return true;
		}
		const parent = treeMap.get(target)?.parent;
		if (parent) {
			return isAnscensor(source, parent);
		}
		return false;
	};

	const traverseTree = (node: TreeItem, level: number, parent: NormalizedTreeItem | undefined) => {
		const copyNode: NormalizedTreeItem = {
			...node,
			ariaLabel: node.ariaLabel ?? node.label,
			level,
			children: [],
			isExpanded: node.children?.length ? (node.isExpanded ?? false) : undefined,
		};
		treeMap.set(copyNode, {
			parent,
		});

		if (node.children) {
			copyNode.children = node.children.map((child) => traverseTree(child, level + 1, copyNode));
		}
		return copyNode;
	};

	// normalize the tree nodes
	const normalizedNodes$ = computed(() => {
		treeMap.clear();
		return nodes$().map((node) => traverseTree(node, 0, undefined));
	});
	const _lastFocusedTreeItem$ = writable<TreeItem | undefined>(normalizedNodes$().find((node) => node.isExpanded !== undefined));

	const getTreeItemInfo = (item: NormalizedTreeItem) => {
		const treeItem = treeMap.get(item);
		if (!treeItem) {
			console.error(`Node ${item.label} doesn't exist in the map`);
		}
		return treeItem;
	};

	// custom directive to retrieve the HTMLElement of each tree toggle
	const treeItemElementDirective: Directive<{item: NormalizedTreeItem}> = browserDirective(
		(toggleItem: HTMLElement, args: {item: NormalizedTreeItem}) => {
			let treeItemInfo: TreeItemInfo | undefined;

			const destroy = () => {
				if (treeItemInfo && treeItemInfo.htmlElement === toggleItem) {
					treeItemInfo.htmlElement = undefined;
				}
				treeItemInfo = undefined;
			};

			const update = (args: {item: NormalizedTreeItem}) => {
				destroy();
				treeItemInfo = getTreeItemInfo(args.item);
				if (treeItemInfo) {
					if (treeItemInfo.htmlElement) {
						console.warn(`The tree item directive should be used once per element`);
					}
					treeItemInfo.htmlElement = toggleItem;
				}
			};

			update(args);

			return {
				update,
				destroy,
			};
		},
	);

	const focusElementIfExists = (itemToFocus: NormalizedTreeItem | undefined) => {
		if (itemToFocus) {
			const mapItemHtml = getTreeItemInfo(itemToFocus)?.htmlElement;
			if (mapItemHtml) {
				const index = elementsInDomOrder$().indexOf(mapItemHtml);
				focusIndex(index, 0);
			}
		}
	};

	const itemToggleAttributesDirective = createAttributesDirective((treeItemContext$: ReadableSignal<{item: NormalizedTreeItem}>) => ({
		events: {
			focus: () => {
				const {item} = treeItemContext$();
				_lastFocusedTreeItem$.set(item);
			},
			click: () => {
				const {item} = treeItemContext$();
				toggleExpanded(item);
			},
			keydown: (event: KeyboardEvent) => {
				const {key} = event;
				const {item} = treeItemContext$();
				const isExpanded = item.isExpanded;
				refreshElements(); // collapsed items were added to the dom
				switch (key) {
					case 'Enter':
					case ' ':
						toggleExpanded(item);
						break;
					case 'ArrowLeft':
						if (isExpanded) {
							toggleExpanded(item);
						} else {
							focusElementIfExists(getTreeItemInfo(item)?.parent);
						}
						break;
					case 'ArrowRight':
						if (!isExpanded) {
							toggleExpanded(item);
						} else {
							focusElementIfExists(item.children?.[0]);
						}
						break;
					default:
						return;
				}
				event.preventDefault();
				event.stopPropagation();
			},
		},
		attributes: {
			'aria-label': computed(() => {
				const {item} = treeItemContext$();
				return ariaLabelToggleFn$()(item.ariaLabel);
			}),
			tabindex: computed(() => {
				const {item} = treeItemContext$();
				return item === _lastFocusedTreeItem$() ? '0' : '-1';
			}),
			type: readable('button'),
		},
		classNames: {
			'au-tree-expand-icon': true$,
			'au-tree-expand-icon-expanded': computed(() => {
				_toggleChange$();
				const {item} = treeItemContext$();
				return item.isExpanded ?? false;
			}),
		},
	}));

	/**
	 * toggle the expanded state of a node
	 * @param node - TreeItem to be toggled
	 */
	const toggleExpanded = (node: NormalizedTreeItem) => {
		const treeItemInfo = getTreeItemInfo(node);
		if (treeItemInfo === undefined || node.isExpanded === undefined) {
			return;
		}
		node.isExpanded = !node.isExpanded;
		_toggleChange$.set({});
		onExpandToggle$()(node);
	};

	const widget: TreeWidget = {
		...stateStores({normalizedNodes$, expandedMap$, ...stateProps}),
		patch,
		api: {},
		directives: {
			navigationDirective: bindDirective(navDirective, navManagerConfig$),
			itemToggleDirective: mergeDirectives(treeItemElementDirective, itemToggleAttributesDirective),
			itemAttributesDirective: createAttributesDirective((treeItemContext$: ReadableSignal<{item: NormalizedTreeItem}>) => ({
				attributes: {
					role: readable('treeitem'),
					'aria-selected': readable('false'), // TODO: adapt aria-selected to the actual selected state
					'aria-expanded': computed(() => {
						const {item} = treeItemContext$();
						_toggleChange$();
						return item.isExpanded?.toString();
					}),
				},
			})),
			draggableDirective: mapDirectiveArg<{item: NormalizedTreeItem; filler?: boolean}, DragAndDropConfig, SSRHTMLElement>(
				draggableDirective,
				(arg: {item: NormalizedTreeItem; filler?: boolean}) => dragAndDropConfig(arg.item, arg.filler),
			),
		},
	};
	return widget;
});
