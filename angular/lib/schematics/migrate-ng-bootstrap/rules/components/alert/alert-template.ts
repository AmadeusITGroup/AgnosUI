import type {ParsedTemplate, TmplAstElement} from '@angular/compiler';
import type {Update} from '../../../../utilities/migration';
import {getBindingUpdates, replaceEndTag, replaceStartTag, TemplateMigrator, visitElements} from '../../../../utilities/migration';

const BindingRenameMap: Record<string, string> = {
	type: 'auType',
	dismissible: 'auDismissible',
	animation: 'auAnimation',
	closed: 'auHidden',
};

export class AlertTemplateMigrator extends TemplateMigrator {
	getUpdates(ast: ParsedTemplate): Update[] {
		const updates: Update[] = [];

		visitElements(
			ast.nodes,
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-alert') {
					return;
				}
				updates.push(...getBindingUpdates(node, BindingRenameMap));
				replaceEndTag(updates, node, 'span');
			},
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-alert') {
					return;
				}
				replaceStartTag(updates, node, 'span auAlert');
			},
		);
		return updates;
	}
}
