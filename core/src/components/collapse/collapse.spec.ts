import {beforeEach, describe, expect, test} from 'vitest';
import {createCollapse, getCollapseDefaultConfig} from './collapse';
import type {CollapseWidget} from './collapse';
import type {WidgetState} from '../../types';
import {getAttributes} from '../components.spec-utils';
import {createSimpleClassTransition} from '../../services/transitions/simpleClassTransition';

describe(`Collapse`, () => {
	let collapse: CollapseWidget;
	let state: WidgetState<CollapseWidget>;

	beforeEach(() => {
		collapse = createCollapse();
		collapse.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create collapse with a default state`, () => {
		expect(state).toEqual({
			hidden: true,
			visible: false,
		});
	});

	test(`default config visible should be false`, () => {
		const defaultConfig = getCollapseDefaultConfig();
		expect(defaultConfig.visible).toBe(false);
	});

	test(`collapseDirective + triggerDirective`, () => {
		collapse.patch({
			transition: createSimpleClassTransition({showClasses: ['open'], hideClasses: ['closed']}),
			id: 'collapseId',
			animated: false,
		});
		const node = document.createElement('div');
		const directiveInstance = collapse.directives.collapseDirective(node);
		const button = document.createElement('button');
		const triggerDirectiveInstance = collapse.directives.triggerDirective(button);

		expect(getAttributes(node)).toStrictEqual({
			class: 'closed',
			id: 'collapseId',
		});
		expect(getAttributes(button)).toStrictEqual({
			'aria-controls': 'collapseId',
			'aria-expanded': 'false',
		});
		button.click();
		expect(getAttributes(node)).toStrictEqual({
			class: 'open',
			id: 'collapseId',
		});
		expect(getAttributes(button)).toStrictEqual({
			'aria-controls': 'collapseId',
			'aria-expanded': 'true',
		});

		directiveInstance?.destroy?.();
		triggerDirectiveInstance?.destroy?.();
	});
});
