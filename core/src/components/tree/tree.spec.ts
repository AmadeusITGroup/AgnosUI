import type {UnsubscribeFunction, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import {afterEach, beforeEach, describe, expect, test} from 'vitest';
import {assign} from '../../../../common/utils';
import {attachDirectiveAndSendEvent} from '../components.spec-utils';
import {createTree, type NormalizedTreeItem, type TreeItem, type TreeProps, type TreeState, type TreeWidget} from './tree';

type TestingTreeState = Omit<TreeState, 'expandedMap'>;

const defaultState: () => TestingTreeState = () => ({
	className: '',
	normalizedNodes: [],
	isEditable: false,
});

describe(`Tree`, () => {
	let tree: TreeWidget;
	let defaultConfig: WritableSignal<Partial<TreeProps>>;
	let state: TestingTreeState;
	let unsubscribe: UnsubscribeFunction;

	const itemExpands: TreeItem[] = [];

	const toggleNode = (node: NormalizedTreeItem) => {
		attachDirectiveAndSendEvent(tree.directives.itemToggleDirective, {item: node}, (node) => node.dispatchEvent(new MouseEvent('click')));
	};

	const callbacks = {
		onExpandToggle: (node: TreeItem) => {
			itemExpands.push(node);
		},
	};

	beforeEach(() => {
		defaultConfig = writable({});
		tree = createTree({config: computed(() => ({...callbacks, ...defaultConfig()}))});

		unsubscribe = tree.state$.subscribe((newState) => {
			const {expandedMap, ...updatedState} = newState;
			state = updatedState;
		});
	});

	afterEach(() => {
		unsubscribe();
	});

	test(`should create the default configuration for the model`, () => {
		expect(state).toStrictEqual(defaultState());
	});

	test(`should update state according to the input`, () => {
		expect(state).toStrictEqual(defaultState());
		tree.patch({nodes: [{label: 'root', ariaLabel: 'root', children: [{label: 'child', ariaLabel: 'child'}]}]});

		const expectedState = defaultState();

		expect(state).toStrictEqual(
			assign(expectedState, {
				normalizedNodes: [
					{
						label: 'root',
						ariaLabel: 'root',
						level: 0,
						isExpanded: false,
						isEdited: false,
						children: [
							{
								label: 'child',
								ariaLabel: 'child',
								level: 1,
								isExpanded: undefined,
								children: [],
								isEdited: false,
							},
						],
					},
				],
			}),
		);
	});

	test(`should register the callback for the onExpandToggle event and update the normalizedNodes`, () => {
		tree.patch({nodes: [{label: 'root', ariaLabel: 'root', children: [{label: 'child', ariaLabel: 'child', children: []}]}]});
		expect(state.normalizedNodes[0].isExpanded).toBe(false);
		expect(itemExpands.length).toEqual(0);

		toggleNode(state.normalizedNodes[0]);

		expect(state.normalizedNodes[0].isExpanded).toBe(true);
		expect(itemExpands.length).toEqual(1);
	});

	test(`should return the TreeItem based on the NormalizedTreeItem`, () => {
		const newNodes = [{label: 'root', ariaLabel: 'root', children: [{label: 'child', ariaLabel: 'child'}]}];
		tree.patch({nodes: newNodes});
		expect(tree.api.getOriginalNode(state.normalizedNodes[0])).toEqual(newNodes[0]);
	});
});
