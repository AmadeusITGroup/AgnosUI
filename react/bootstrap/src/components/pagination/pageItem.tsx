import clsx from 'clsx';
import * as React from 'react';
import {type Directive} from '@agnos-ui/react-headless/types';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';

interface PageItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	active?: boolean;
	activeLabel?: string;
	directive: Directive<{page: number}>;
	page: number;
}

interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	active?: boolean;
	activeLabel?: string;
	directive: Directive;
}

/**
 * `PageItem` is a React component that renders a list item (`<li>`) element
 * with the appropriate classes for pagination. It uses `React.forwardRef` to
 * forward the ref to the `<li>` element.
 *
 * @param props - The properties passed to the component.
 * @param props.disabled - If true, the page item will be disabled.
 * @param props.active - If true, the page item will be marked as active.
 * @param props.activeLabel - An optional label for the active page item, which will be visually hidden but accessible to screen readers.
 * @param props.className - Additional class names to apply to the page link.
 * @param props.children - The content to be displayed inside the page link.
 * @param props.directive - A directive to be used with the `useDirectives` hook.
 * @param props.page - The page number or identifier.
 * @param ref - The ref to be forwarded to the `<li>` element.
 *
 * @returns The rendered page item component.
 */
export const PageItem = React.forwardRef<HTMLLIElement, PageItemProps>(
	({disabled, active, activeLabel, className, children, directive, page}: PageItemProps, ref) => {
		return (
			<li ref={ref} className={clsx('page-item', {active, disabled})}>
				<a {...useDirectives([directive, {page}], [classDirective, ['page-link', className]])}>
					{children}
					{active && activeLabel && <span className="visually-hidden">{activeLabel}</span>}
				</a>
			</li>
		);
	},
);

PageItem.displayName = 'PageItem';

/**
 * `NavButton` is a React functional component that renders a navigation button
 * within a list item (`<li>`) element. It uses `React.forwardRef` to forward the ref
 * to the `<li>` element.
 *
 * @param props - The properties passed to the component.
 * @param props.disabled - Determines if the navigation button is disabled.
 * @param props.className - Additional class names to apply to the button.
 * @param props.children - The content to be displayed inside the button.
 * @param props.directive - Directives to be applied to the anchor (`<a>`) element.
 * @param ref - The ref to be forwarded to the `<li>` element.
 *
 * @returns A list item containing a navigation button.
 */
export const NavButton = React.forwardRef<HTMLLIElement, NavItemProps>(({disabled, className, children, directive}: NavItemProps, ref) => {
	return (
		<li ref={ref} className={clsx('page-item', {disabled})}>
			<a {...useDirectives(directive, [classDirective, ['page-link', className]])}>
				<span aria-hidden="true">{children}</span>
			</a>
		</li>
	);
});

NavButton.displayName = 'NavButton';
