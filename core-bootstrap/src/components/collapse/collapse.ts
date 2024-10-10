import type {CommonCollapseApi, CommonCollapseDirectives, CommonCollapseProps, CommonCollapseState} from './common';
import {createCommonCollapse, getCommonCollapseDefaultConfig} from './common';
import type {Widget, WidgetFactory} from '@agnos-ui/core/types';

export interface CollapseState extends CommonCollapseState {}
export interface CollapseProps extends CommonCollapseProps {}
export interface CollapseApi extends CommonCollapseApi {}
export interface CollapseDirectives extends CommonCollapseDirectives {}
export type CollapseWidget = Widget<CollapseProps, CollapseState, CollapseApi, object, CollapseDirectives>;

/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
export function getCollapseDefaultConfig(): CollapseProps {
	return {...getCommonCollapseDefaultConfig()};
}

/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
export const createCollapse: WidgetFactory<CollapseWidget> = createCommonCollapse;
