const t=`import type { PaginationProps } from './pagination.gen';
declare const Pagination: import("svelte").Component<Partial<PaginationProps>, {}, "page">;
type Pagination = ReturnType<typeof Pagination>;
export default Pagination;
`;export{t as default};
