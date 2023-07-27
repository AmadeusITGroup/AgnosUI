import type {PropsWithChildren} from 'react';
import {createPortal} from 'react-dom';

export const Portal = ({children, container}: PropsWithChildren<{container: Element | DocumentFragment | null | undefined}>) =>
	container ? createPortal(children, container) : <>{children}</>;
