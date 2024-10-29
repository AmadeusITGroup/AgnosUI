const e=`import * as React from 'react';
import { type Directive } from '@agnos-ui/react-headless/types';
interface PageItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    active?: boolean;
    activeLabel?: string;
    directive: Directive<{
        page: number;
    }>;
    page: number;
}
interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    active?: boolean;
    activeLabel?: string;
    directive: Directive;
}
/**
 * \`PageItem\` is a React component that renders a list item (\`<li>\`) element
 * with the appropriate classes for pagination. It uses \`React.forwardRef\` to
 * forward the ref to the \`<li>\` element.
 *
 * @param {PageItemProps} props - The properties passed to the component.
 * @param {boolean} props.disabled - If true, the page item will be disabled.
 * @param {boolean} props.active - If true, the page item will be marked as active.
 * @param {string} [props.activeLabel] - An optional label for the active page item,
 * which will be visually hidden but accessible to screen readers.
 * @param {string} [props.className] - Additional class names to apply to the page link.
 * @param {React.ReactNode} props.children - The content to be displayed inside the page link.
 * @param {any} props.directive - A directive to be used with the \`useDirectives\` hook.
 * @param {any} props.page - The page number or identifier.
 * @param {React.Ref<HTMLLIElement>} ref - The ref to be forwarded to the \`<li>\` element.
 *
 * @returns {JSX.Element} The rendered page item component.
 */
export declare const PageItem: React.ForwardRefExoticComponent<PageItemProps & React.RefAttributes<HTMLLIElement>>;
/**
 * \`NavButton\` is a React functional component that renders a navigation button
 * within a list item (\`<li>\`) element. It uses \`React.forwardRef\` to forward the ref
 * to the \`<li>\` element.
 *
 * @param {NavItemProps} props - The properties passed to the component.
 * @param {boolean} props.disabled - Determines if the navigation button is disabled.
 * @param {string} props.className - Additional class names to apply to the button.
 * @param {React.ReactNode} props.children - The content to be displayed inside the button.
 * @param {any} props.directive - Directives to be applied to the anchor (\`<a>\`) element.
 * @param {React.Ref<HTMLLIElement>} ref - The ref to be forwarded to the \`<li>\` element.
 *
 * @returns {JSX.Element} A list item containing a navigation button.
 */
export declare const NavButton: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLLIElement>>;
export {};
`;export{e as default};
