const e=`import * as React from 'react';
import { type Directive } from '@agnos-ui/react-headless/types';
export interface PageItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    active?: boolean;
    activeLabel?: string;
    directive: Directive<{
        page: number;
    }>;
    page: number;
}
export interface NavItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
    disabled?: boolean;
    active?: boolean;
    activeLabel?: string;
    directive: Directive;
}
export declare const PageItem: React.ForwardRefExoticComponent<PageItemProps & React.RefAttributes<HTMLLIElement>>;
export default PageItem;
export declare const NavButton: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLLIElement>>;
`;export{e as default};
