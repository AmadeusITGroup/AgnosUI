const a=`import type { PaginationApi, PaginationProps } from './pagination.gen';
declare const Pagination: import("svelte").Component<Partial<PaginationProps>, {
    api: PaginationApi;
}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
`;export{a as default};
