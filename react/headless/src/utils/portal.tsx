import type {PropsWithChildren} from 'react';
import {createPortal} from 'react-dom';

/**
 * A Portal component, allowing to attach content to an external container.
 *
 * @param param - the react component inputs
 * @param param.children - the react component children
 * @param param.container - the container to attach the portal to
 * @returns the portal component
 */
export const Portal = ({children, container}: PropsWithChildren<{container: Element | DocumentFragment | null | undefined}>) =>
	container ? createPortal(children, container) : <>{children}</>;
