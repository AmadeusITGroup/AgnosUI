// Utility functions
function _applyPagination(page: number, maxSize: number): [number, number] {
	const pp = Math.ceil(page / maxSize) - 1;
	const start = pp * maxSize;
	// console.log('start', start, 'pp', pp, 'page', page, 'maxSize', maxSize);
	const end = start + maxSize;

	return [start, end];
}

/**
 * Appends ellipses and first/last page number to the displayed pages
 */
function _applyEllipses(start: number, end: number, ellipses: boolean, pages: number[], pageCount: number) {
	if (ellipses) {
		if (start > 0) {
			// The first page will always be included. If the displayed range
			// starts after the third page, then add ellipsis. But if the range
			// starts on the third page, then add the second page instead of
			// an ellipsis, because the ellipsis would only hide a single page.
			if (start > 2) {
				pages.unshift(-1);
			} else if (start === 2) {
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
			} else if (end === pageCount - 2) {
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
 */
function _applyRotation(page: number, maxSize: number, pageCount: number): [number, number] {
	let start = 0;
	let end = pageCount;
	const leftOffset = Math.floor(maxSize / 2);
	const rightOffset = maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

	if (page <= leftOffset) {
		// very beginning, no rotation -> [0..maxSize]
		end = maxSize;
	} else if (pageCount - page < leftOffset) {
		// very end, no rotation -> [len-maxSize..len]
		start = pageCount - maxSize;
	} else {
		// rotate
		start = page - leftOffset - 1;
		end = page + rightOffset;
	}

	return [start, end];
}

export function ngBootstrapPagination(maxSize: number, rotate: boolean, ellipses: boolean): (page: number, pageCount: number) => number[] {
	return function (page: number, pageCount: number) {
		let pages: number[] = [];
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
			} else {
				[start, end] = _applyPagination(page, maxSize);
			}

			pages = pages.slice(start, end);

			// adding ellipses
			_applyEllipses(start, end, ellipses, pages, pageCount);
		}
		return pages;
	};
}
