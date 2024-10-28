import type {ForwardedRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {CollapseApi, CollapseProps} from './collapse.gen';
import {createCollapse} from './collapse.gen';
import {useDirectives} from '@agnos-ui/react-headless/utils/directive';

export const Collapse: ForwardRefExoticComponent<PropsWithChildren<Partial<CollapseProps>> & RefAttributes<CollapseApi>> = forwardRef(
	function Collapse(props: PropsWithChildren<Partial<CollapseProps>>, ref: ForwardedRef<CollapseApi>) {
		const {api, directives} = useWidgetWithConfig(createCollapse, props, 'collapse', {});
		useImperativeHandle<CollapseApi, CollapseApi>(ref, () => api, []);

		return (
			<div {...useDirectives(directives.transitionDirective)} id={props.id}>
				{props.children}
			</div>
		);
	},
);
