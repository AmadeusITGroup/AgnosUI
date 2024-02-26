const e=`import * as React from 'react';
export interface PageItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    active?: boolean;
    ariaLabel?: string;
    activeLabel?: string;
    href?: string;
}
export declare const PageItem: React.ForwardRefExoticComponent<PageItemProps & React.RefAttributes<HTMLLIElement>>;
export default PageItem;
export declare const NavButton: React.ForwardRefExoticComponent<PageItemProps & React.RefAttributes<HTMLLIElement>>;
`;export{e as default};
