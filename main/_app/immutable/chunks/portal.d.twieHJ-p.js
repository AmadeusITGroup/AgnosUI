const e=`import type { Directive } from '../types';
export type PortalDirectiveArg = {
    container?: HTMLElement | null | undefined;
    insertBefore?: HTMLElement | null | undefined;
} | null | undefined;
/**
 * Creates a portal directive, allowing to attach content to any element.
 *
 * @param content - the content of the portal
 * @param newArg - {@link PortalDirectiveArg} args
 * @returns the portal directive
 */
export declare const portal: Directive<PortalDirectiveArg>;
`;export{e as default};
