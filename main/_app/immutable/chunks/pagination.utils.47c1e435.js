const e=`// Utility functions
function _applyPagination(page, maxSize) {
    const pp = Math.ceil(page / maxSize) - 1;
    const start = pp * maxSize;
    // console.log('start', start, 'pp', pp, 'page', page, 'maxSize', maxSize);
    const end = start + maxSize;
    return [start, end];
}
/**
 * Appends ellipses and first/last page number to the displayed pages
 * @param start - the first page number
 * @param end - the last page number
 * @param ellipses - apply ellipses
 * @param pages - the pages to apply the function to
 * @param pageCount - the total number of pages
 */
function _applyEllipses(start, end, ellipses, pages, pageCount) {
    if (ellipses) {
        if (start > 0) {
            // The first page will always be included. If the displayed range
            // starts after the third page, then add ellipsis. But if the range
            // starts on the third page, then add the second page instead of
            // an ellipsis, because the ellipsis would only hide a single page.
            if (start > 2) {
                pages.unshift(-1);
            }
            else if (start === 2) {
                pages.unshift(2);
            }
            pages.unshift(1);
        }
        if (end < pageCount) {
            // The last page will always be included. If the displayed range
            // ends before the third-last page, then add ellipsis. But if the range
            // ends on third-last page, then add the second-last page instead of
            // an ellipsis, because the ellipsis would only hide a single page.
            if (end < pageCount - 2) {
                pages.push(-1);
            }
            else if (end === pageCount - 2) {
                pages.push(pageCount - 1);
            }
            pages.push(pageCount);
        }
    }
}
/**
 * Rotates page numbers based on maxSize items visible.
 * Currently selected page stays in the middle:
 *
 * Ex. for selected page = 6:
 * [5,*6*,7] for maxSize = 3
 * [4,5,*6*,7] for maxSize = 4
 *
 * @param page - the page number
 * @param maxSize - the max size
 * @param pageCount - the page count
 * @returns the rotated page numbers
 */
function _applyRotation(page, maxSize, pageCount) {
    let start = 0;
    let end = pageCount;
    const leftOffset = Math.floor(maxSize / 2);
    const rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
    if (page <= leftOffset) {
        // very beginning, no rotation -> [0..maxSize]
        end = maxSize;
    }
    else if (pageCount - page < leftOffset) {
        // very end, no rotation -> [len-maxSize..len]
        start = pageCount - maxSize;
    }
    else {
        // rotate
        start = page - leftOffset - 1;
        end = page + rightOffset;
    }
    return [start, end];
}
/**
 * This is the pagination algorithm used by ng-bootstrap. While this is not the default implementation of our widget, we export it to ease the migration from ng-bootstrap pagination.
 * @param maxSize - the max size
 * @param rotate - rotate the pages
 * @param ellipses - enable ellipses
 * @returns the pages
 */
export function ngBootstrapPagination(maxSize, rotate, ellipses) {
    return function (page, pageCount) {
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        // apply maxSize if necessary
        if (maxSize > 0 && pageCount > maxSize) {
            let start = 0;
            let end = pageCount;
            // either paginating or rotating page numbers
            if (rotate) {
                [start, end] = _applyRotation(page, maxSize, pageCount);
            }
            else {
                [start, end] = _applyPagination(page, maxSize);
            }
            pages = pages.slice(start, end);
            // adding ellipses
            _applyEllipses(start, end, ellipses, pages, pageCount);
        }
        return pages;
    };
}
`;export{e as default};
