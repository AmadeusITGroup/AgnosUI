const t=`import type { WidgetFactory } from '@agnos-ui/react-headless/types';
import type { PaginationContext, PaginationProps, PaginationWidget } from './pagination.gen';
export type * from './pagination.gen';
export declare const createPagination: WidgetFactory<PaginationWidget>;
export * from './pageItem';
export declare function DefaultPages(slotContext: PaginationContext): import("react/jsx-runtime").JSX.Element | null;
export declare function DefaultStructure(slotContext: PaginationContext): import("react/jsx-runtime").JSX.Element;
export declare function Pagination(props: Partial<PaginationProps>): import("react/jsx-runtime").JSX.Element;
`;export{t as default};
