import type {ParsedTemplate, TmplAstElement} from '@angular/compiler';
import {TmplAstTemplate} from '@angular/compiler';
import type {Update} from '../../../../utilities/migration';
import {
	getBindingUpdates,
	getBindings,
	leaveTODOComment,
	replace,
	replaceEndTag,
	replaceStartTag,
	TemplateMigrator,
	visitElements,
} from '../../../../utilities/migration';

const BindingRenameMap: Record<string, string> = {
	max: 'auMaxRating',
	readonly: 'auReadonly',
	disabled: 'auDisabled',
	resettable: 'auResettable',
	tabindex: 'auTabIndex',
	rateChange: 'auRatingChange',
	hover: 'auHover',
	leave: 'auLeave',
	starTemplate: 'auSlotStar',
	ariaValueText: 'auAriaValueTextFn',
};

export class RatingTemplateMigrator extends TemplateMigrator {
	getUpdates(ast: ParsedTemplate): Update[] {
		const updates: Update[] = [];

		visitElements(
			ast.nodes,
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-rating') {
					return;
				}
				updates.push(...getBindingUpdates(node, BindingRenameMap));
				const selfClosing = node.startSourceSpan.start.offset === node.endSourceSpan!.start.offset;
				if (selfClosing) {
					replace(updates, node.startSourceSpan.end.offset - 2, '/>'.length, '></div>');
				} else {
					replaceEndTag(updates, node, 'div');
				}
				if (getBindings(node).some((binding) => binding.name === 'rate')) {
					updates.push(...getBindingUpdates(node, {rate: 'auRating'}));
				} else {
					replace(updates, node.startSourceSpan.start.offset + 11, 0, ' [auRating]');
				}
				if (node.children?.length) {
					const templateChild = node.children.find((child) => child instanceof TmplAstTemplate && child.tagName === 'ng-template') as TmplAstTemplate;
					if (templateChild) {
						leaveTODOComment(
							updates,
							templateChild.startSourceSpan.start.offset,
							'customizing the rating star requires the import of RatingStarDirective, please check your component / module',
						);
						replace(updates, templateChild.startSourceSpan.start.offset + 12, 0, ' auRatingStar');
					}
				}
			},
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-rating') {
					return;
				}
				replaceStartTag(updates, node, 'div');
			},
		);
		return updates;
	}
}
