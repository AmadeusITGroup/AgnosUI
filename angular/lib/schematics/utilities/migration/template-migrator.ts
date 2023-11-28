/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import type {ParsedTemplate} from '@angular/compiler';
import type {Update} from '.';

export abstract class TemplateMigrator {
	/** Returns the data needed to update the given node. */
	abstract getUpdates(ast: ParsedTemplate): Update[];
}
