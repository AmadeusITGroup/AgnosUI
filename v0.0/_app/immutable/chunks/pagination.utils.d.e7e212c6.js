const e=`/**
 * This is the pagination algorithm used by ng-bootstrap. While this is not the default implementation of our widget, we export it to ease the migration from ng-bootstrap pagination.
 * @param maxSize - the max size
 * @param rotate - rotate the pages
 * @param ellipses - enable ellipses
 * @returns the pages
 */
export declare function ngBootstrapPagination(maxSize: number, rotate: boolean, ellipses: boolean): (page: number, pageCount: number) => number[];
`;export{e as default};
