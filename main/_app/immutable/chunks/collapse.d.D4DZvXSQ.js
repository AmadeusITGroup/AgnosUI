const e=`import type { PropsWithChildren, Ref } from 'react';
import type { CollapseApi, CollapseProps } from './collapse.gen';
/**
 * Collapse component that provides a collapsible container.
 *
 * This component uses the {@link useWidgetWithConfig} hook to create a collapse widget
 * and applies transition directives to the container.
 *
 * @param props - The properties for the Collapse component.
 * @param props.children - The child elements to be rendered inside the collapsible container.
 * @param props.ref - A ref object to access the Collapse API.
 *
 * @returns A div element with transition directives applied, containing the child elements.
 */
export declare function Collapse(props: PropsWithChildren<Partial<CollapseProps>> & {
    ref?: Ref<CollapseApi>;
}): import("react/jsx-runtime").JSX.Element;
`;export{e as default};
