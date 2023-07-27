import classNames from 'classnames';
import * as React from 'react';

export interface PageItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
	disabled?: boolean;
	active?: boolean;
	ariaLabel?: string;
	activeLabel?: string;
}

// className and children are issue of React.HTMLAttributes
export const PageItem = React.forwardRef<HTMLLIElement, PageItemProps>(
	({disabled, active, ariaLabel, activeLabel, className, children, ...props}: PageItemProps, ref) => {
		return (
			<li ref={ref} aria-current={active ? 'page' : undefined} className={classNames('page-item', {active, disabled})}>
				<a
					className={classNames('page-link', className)}
					aria-label={ariaLabel || undefined}
					{...props}
					href={'#'}
					tabIndex={disabled ? -1 : undefined}
					aria-disabled={disabled || undefined}
				>
					{children}
					{active && activeLabel && <span className="visually-hidden">{activeLabel}</span>}
				</a>
			</li>
		);
	}
);

PageItem.displayName = 'PageItem';

export default PageItem;

export const NavButton = React.forwardRef<HTMLLIElement, PageItemProps>(({children, ...props}: PageItemProps, ref) => (
	<PageItem {...props} ref={ref}>
		<span aria-hidden="true">{children}</span>
	</PageItem>
));

NavButton.displayName = 'NavButton';
