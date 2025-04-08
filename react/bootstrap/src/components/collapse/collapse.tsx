import type {PropsWithChildren, Ref} from 'react';
import {useId, useImperativeHandle} from 'react';
import {useWidget} from '../../config';
import type {CollapseApi, CollapseProps} from './collapse.gen';
import {createCollapse} from './collapse.gen';
import {useDirectives} from '@agnos-ui/react-headless/utils/directive';

/**
 * Collapse component that provides a collapsible container.
 *
 * This component uses the {@link useWidget} hook to create a collapse widget
 * and applies transition directives to the container.
 *
 * @param props - The properties for the Collapse component.
 * @param props.children - The child elements to be rendered inside the collapsible container.
 * @param props.ref - A ref object to access the Collapse API.
 *
 * @returns A div element with transition directives applied, containing the child elements.
 */
export function Collapse(props: PropsWithChildren<Partial<CollapseProps>> & {ref?: Ref<CollapseApi>}) {
	const id = useId();
	const {api, directives} = useWidget(createCollapse, props, {id});
	useImperativeHandle(props.ref, () => api, [api]);

	return <div {...useDirectives(directives.collapseDirective)}>{props.children}</div>;
}
