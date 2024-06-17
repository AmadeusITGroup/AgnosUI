const t=`import type { WidgetPropsSlots, WidgetFactory } from '@agnos-ui/svelte-headless/types';
import type { PaginationProps, PaginationWidget } from './pagination.gen';
export type * from './pagination.gen';
export declare const createPagination: WidgetFactory<PaginationWidget>;
export declare const getPaginationDefaultConfig: () => PaginationProps;
export interface PaginationSlots extends WidgetPropsSlots<PaginationProps> {
}
`;export{t as default};
