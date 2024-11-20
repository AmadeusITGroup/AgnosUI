import type {ForwardedRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {CollapseApi, CollapseProps} from './collapse.gen';
import {createCollapse} from './collapse.gen';
import {useDirectives} from '@agnos-ui/react-headless/utils/directive';

/**
 * Collapse component that provides a collapsible container.
 *
 * This component uses the {@link useWidgetWithConfig} hook to create a collapse widget
 * and applies transition directives to the container.
 *
 * @param props - The properties for the Collapse component.
 * @param props.children - The child elements to be rendered inside the collapsible container.
 * @param ref - A ref object to access the Collapse API.
 *
 * @returns A div element with transition directives applied, containing the child elements.
 */
export const Collapse: ForwardRefExoticComponent<PropsWithChildren<Partial<CollapseProps>> & RefAttributes<CollapseApi>> = forwardRef(
	function Collapse(props: PropsWithChildren<Partial<CollapseProps>>, ref: ForwardedRef<CollapseApi>) {
		const {api, directives} = useWidgetWithConfig(createCollapse, props, 'collapse');
		useImperativeHandle(ref, () => api, [api]);

		return <div {...useDirectives(directives.collapseDirective)}>{props.children}</div>;
	},
);
