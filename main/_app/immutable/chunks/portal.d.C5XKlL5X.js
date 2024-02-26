const t=`import type { PropsWithChildren } from 'react';
/**
 * A Portal component, allowing to attach content to an external container.
 *
 * @param param - the react component inputs
 * @param param.children - the react component children
 * @param param.container - the container to attach the portal to
 * @returns the portal component
 */
export declare const Portal: ({ children, container }: PropsWithChildren<{
    container: Element | DocumentFragment | null | undefined;
}>) => import("react/jsx-runtime").JSX.Element;
`;export{t as default};
