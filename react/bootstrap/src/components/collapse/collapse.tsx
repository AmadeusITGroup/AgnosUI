import type {ForwardedRef, ForwardRefExoticComponent, PropsWithChildren, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import {useWidgetWithConfig} from '../../config';
import type {CollapseApi, CollapseProps} from './collapse.gen';
import {createCollapse} from './collapse.gen';
import {useDirectives} from '@agnos-ui/react-headless/utils/directive';

export const Collapse: ForwardRefExoticComponent<PropsWithChildren<Partial<CollapseProps>> & RefAttributes<CollapseApi>> = forwardRef(
	function Collapse(props: PropsWithChildren<Partial<CollapseProps>>, ref: ForwardedRef<CollapseApi>) {
		const [_state, widget] = useWidgetWithConfig(createCollapse, props, 'collapse', {});
		useImperativeHandle(ref, () => widget.api, []);

		return <div {...useDirectives(widget.directives.transitionDirective)}>{props.children}</div>;
	},
);
