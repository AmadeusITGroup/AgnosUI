/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import type {ParseSourceSpan, TmplAstElement} from '@angular/compiler';
import {replaceAt} from './tree-traversal';

/** Stores the data needed to make a single update to a file. */
export interface Update {
	/** The start index of the location of the update. */
	offset: number;

	/** A function to be used to update the file content. */
	updateFn: (text: string) => string;
}

/** Applies the updates to the given file content in reverse offset order. */
export function writeUpdates(content: string, updates: Update[]): string {
	updates.sort((a, b) => b.offset - a.offset);
	updates.forEach((update) => (content = update.updateFn(content)));
	return content;
}

/**
 * Returns the Update to replace a substring of the template at offset with a new string
 * @param offset
 * @param replacing number of characters to replace
 * @param replacement string used as replacement
 */
export function getReplace(offset: number, replacing: number, replacement: string): Update {
	return {
		offset,
		updateFn: (html) => replaceAt(html, offset, replacing, replacement),
	};
}

/**
 * Replaces a substring of the template at offset with a new string
 * @param updates the updates array to push to
 * @param offset
 * @param replacing number of characters to replace
 * @param replacement string used as replacement
 */
export function replace(updates: Update[], offset: number, replacing: number, replacement: string) {
	updates.push(getReplace(offset, replacing, replacement));
}

/**
 * Replaces a source span with a new string
 * @param updates the updates array to push to
 * @param span the span
 * @param replacement the replacement string
 */
export function replaceSpan(updates: Update[], span: ParseSourceSpan, replacement: string) {
	replace(updates, span.start.offset, span.end.offset - span.start.offset, replacement);
}

/**
 * Leaves a comment at the specified offset
 * @param updates the updates array to push to
 * @param offset the offset
 * @param comment the comment
 */
export function leaveTODOComment(updates: Update[], offset: number, comment: string) {
	replace(updates, offset, 0, `<!-- TODO ${comment} -->`);
}

/**
 * Replaces the start tag of the given Element node inside the html document with a new tag name.
 *
 * @param updates the updates array to push to
 * @param node The Element node to be updated.
 * @param tag A new tag name.
 * @returns an updated html document.
 */
export function replaceStartTag(updates: Update[], node: TmplAstElement, tag: string) {
	replace(updates, node.startSourceSpan.start.offset + 1, node.name.length, tag);
}

/**
 * Replaces the end tag of the given Element node inside the html document with a new tag name.
 *
 * @param updates the updates array to push to
 * @param node The Element node to be updated.
 * @param tag A new tag name.
 * @returns an updated html document.
 */
export function replaceEndTag(updates: Update[], node: TmplAstElement, tag: string) {
	if (node.endSourceSpan) {
		replace(updates, node.endSourceSpan.start.offset + 2, node.name.length, tag);
	}
}
