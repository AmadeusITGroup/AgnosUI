import classNames from 'classnames';
import * as React from 'react';
import {type Directive} from '@agnos-ui/react-headless/types';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils';

export interface PageItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	active?: boolean;
	activeLabel?: string;
	directive: Directive<{page: number}>;
	page: number;
}

export interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	active?: boolean;
	activeLabel?: string;
	directive: Directive;
}

// className and children are issue of React.HTMLAttributes
export const PageItem = React.forwardRef<HTMLLIElement, PageItemProps>(
	({disabled, active, activeLabel, className, children, directive, page}: PageItemProps, ref) => {
		return (
			<li ref={ref} className={classNames('page-item', {active, disabled})}>
				<a {...useDirectives([directive, {page}], [classDirective, classNames('page-link', className)])}>
					{children}
					{active && activeLabel && <span className="visually-hidden">{activeLabel}</span>}
				</a>
			</li>
		);
	},
);

PageItem.displayName = 'PageItem';

export default PageItem;

export const NavButton = React.forwardRef<HTMLLIElement, NavItemProps>(({disabled, className, children, directive}: NavItemProps, ref) => {
	return (
		<li ref={ref} className={classNames('page-item', {disabled})}>
			<a {...useDirectives(directive, [classDirective, classNames('page-link', className)])}>
				<span aria-hidden="true">{children}</span>
			</a>
		</li>
	);
});

NavButton.displayName = 'NavButton';
