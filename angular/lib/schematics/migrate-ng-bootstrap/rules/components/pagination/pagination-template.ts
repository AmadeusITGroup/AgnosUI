import type {ParsedTemplate, TmplAstNode} from '@angular/compiler';
import {TmplAstTemplate, TmplAstElement} from '@angular/compiler';
import type {Update} from '../../../../utilities/migration';
import {
	getAttributes,
	getBindingUpdates,
	getInputs,
	leaveTODOComment,
	replace,
	replaceEndTag,
	replaceStartTag,
	TemplateMigrator,
	visitElements,
} from '../../../../utilities/migration';

const BindingRenameMap: Record<string, string> = {
	boundaryLinks: 'auBoundaryLinks',
	collectionSize: 'auCollectionSize',
	directionLinks: 'auDirectionLinks',
	disabled: 'auDisabled',
	page: 'auPage',
	pageChange: 'auPageChange',
	pageSize: 'auPageSize',
	size: 'auSize',
};

const ButtonContextRemap: Record<string, string> = {
	currentPage: 'state.page',
	disabled: 'state.disabled',
};

const ChildTemplateRemap: Record<string, {templateRename: string; refMap: Record<string, string>}> = {
	ngbPaginationEllipsis: {
		templateRename: 'auPaginationEllipsis',
		refMap: ButtonContextRemap,
	},
	ngbPaginationFirst: {
		templateRename: 'auPaginationFirst',
		refMap: ButtonContextRemap,
	},
	ngbPaginationLast: {
		templateRename: 'auPaginationLast',
		refMap: ButtonContextRemap,
	},
	ngbPaginationNext: {
		templateRename: 'auPaginationNext',
		refMap: ButtonContextRemap,
	},
	ngbPaginationNumber: {
		templateRename: 'auPaginationNumber',
		refMap: {
			currentPage: 'state.page',
			disabled: 'state.disabled',
			'': 'displayedPage',
			$implicit: 'displayedPage',
		},
	},
	ngbPaginationPages: {
		templateRename: 'auPaginationPages',
		refMap: {
			pages: 'state.pages',
			disabled: 'state.disabled',
			'': 'state.page',
			$implicit: 'state.page',
		},
	},
	ngbPaginationPrevious: {
		templateRename: 'auPaginationPrevious',
		refMap: ButtonContextRemap,
	},
};

const pageFactoryInputs = new Set<string>(['ellipses', 'rotate', 'maxSize']);

export class PaginationTemplateMigrator extends TemplateMigrator {
	getUpdates(ast: ParsedTemplate): Update[] {
		const updates: Update[] = [];

		// migration of the inner templates, including the inputs / outputs, template selectors and the variables
		const updateChildTemplates = (nodes: TmplAstNode[]) => {
			nodes
				.filter((child) => child instanceof TmplAstTemplate && child.tagName === 'ng-template')
				.forEach((c) => {
					const childTemplate = c as TmplAstTemplate;
					const templateName = getAttributes(childTemplate)
						.concat(getInputs(childTemplate))
						.map((at) => at.name)
						.find((name) => ChildTemplateRemap[name]);
					if (templateName) {
						updates.push(...getBindingUpdates(childTemplate, {[templateName]: ChildTemplateRemap[templateName].templateRename}));
						const refMap = ChildTemplateRemap[templateName].refMap;
						childTemplate.variables.forEach((v) => {
							if (v.valueSpan && refMap[v.value]) {
								replace(updates, v.valueSpan!.start.offset, v.value.length, refMap[v.value]);
							}
							if (v.valueSpan === undefined && refMap['$implicit']) {
								replace(updates, v.keySpan!.end.offset, 0, `="${refMap['$implicit']}"`);
							}
						});
					}
				});
			nodes.forEach((node) => {
				if (node instanceof TmplAstTemplate || node instanceof TmplAstElement) {
					updateChildTemplates(node.children);
				}
			});
		};

		visitElements(
			ast.nodes,
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-pagination') {
					return;
				}
				// Add the input / output replacements
				updates.push(...getBindingUpdates(node, BindingRenameMap));
				// ngb-pagination could be self-closed, so properly handle the end tag replacement
				const selfClosing = node.startSourceSpan.start.offset === node.endSourceSpan?.start?.offset;
				if (selfClosing) {
					replace(updates, node.startSourceSpan.end.offset - 2, '/>'.length, '></nav>');
				} else {
					replaceEndTag(updates, node, 'nav');
				}
				// ellipses, rotate and maxSize do not have a one-to-one mapping in AgnosUI, users will have to migrate manually using the auPagesFactory
				if (node.inputs.some((input) => pageFactoryInputs.has(input.name))) {
					leaveTODOComment(
						updates,
						node.sourceSpan.start.offset,
						'ellipses, rotate and maxSize need to be migrated manually to use auPagesFactory. You may reference the migration guide at https://amadeusitgroup.github.io/AgnosUI/latest/angular/getting-started/migrate-from-ng-bootstrap',
					);
				}
				// migration of the inner templates, including the inputs / outputs, template selectors and the variables
				updateChildTemplates(node.children);
			},
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-pagination') {
					return;
				}
				replaceStartTag(updates, node, 'nav auPagination');
			},
		);
		return updates;
	}
}
