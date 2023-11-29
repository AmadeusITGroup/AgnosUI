import type {ParsedTemplate, TmplAstElement} from '@angular/compiler';
import type {Update} from '../../../../utilities/migration';
import {
	getBindingUpdates,
	leaveTODOComment,
	replace,
	replaceEndTag,
	replaceSpan,
	replaceStartTag,
	TemplateMigrator,
	visitElements,
} from '../../../../utilities/migration';

const BindingRenameMap: Record<string, string> = {
	animated: 'auAnimated',
	ariaLabel: 'auAriaLabel',
	height: 'auHeight',
	max: 'auMax',
	striped: 'auStriped',
	value: 'auValue',
};

export class ProgressbarTemplateMigrator extends TemplateMigrator {
	getUpdates(ast: ParsedTemplate): Update[] {
		const updates: Update[] = [];

		let refId = 0;

		visitElements(
			ast.nodes,
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-progressbar') {
					return;
				}
				// map the inputs / outputs
				updates.push(...getBindingUpdates(node, BindingRenameMap));
				// the showValue input does not exist in AgnosUI and is migrated as content slot
				const showValue = node.inputs.find((input) => input.name === 'showValue');
				let showValueContent = '';
				if (showValue) {
					replaceSpan(updates, showValue.sourceSpan, '');
					const value = showValue.sourceSpan.start.file.content.slice(showValue.valueSpan!.start.offset, showValue.valueSpan!.end.offset);
					if (value === 'true') {
						let refName = `progressbar${refId || ''}`;
						const ngbProgressbarRef = node.references.find((ref) => !ref.value);
						if (ngbProgressbarRef) {
							refName = ngbProgressbarRef.name;
						} else {
							replace(updates, node.startSourceSpan.start.offset + 16, 0, ` #${refName}`);
							refId++;
						}
						showValueContent = `{{${refName}.state().percentage}}%`;
					}
				}
				// the progressbar can be self-closed, so we properly handle end tag replacement
				const selfClosing = node.startSourceSpan.start.offset === node.endSourceSpan!.start.offset;
				if (selfClosing) {
					replace(updates, node.startSourceSpan.end.offset - 2, '/>'.length, `>${showValueContent}</span>`);
				} else {
					replaceEndTag(updates, node, 'span');
					if (showValueContent) {
						replace(updates, node.startSourceSpan.end.offset, 0, showValueContent);
					}
				}
				// the type and textType inputs do not exist in AgnosUI and are migrate to use auClassName
				const attType = node.attributes.find((att) => att.name === 'type');
				const attTextType = node.attributes.find((att) => att.name === 'textType');
				const hasInput = node.inputs.some((input) => input.name === 'type' || input.name === 'textType');
				if (attType || attTextType || hasInput) {
					let canMigrate = true;
					canMigrate = canMigrate && !hasInput;
					canMigrate = canMigrate && (!!attType || !!attTextType);
					if (canMigrate) {
						let typeVal = '';
						if (attType) {
							replaceSpan(updates, attType.sourceSpan, '');
							if (attType.valueSpan) {
								typeVal = attType.valueSpan.start.file.content.slice(attType.valueSpan.start.offset, attType.valueSpan.end.offset);
							}
						}
						let textTypeVal = '';
						if (attTextType) {
							replaceSpan(updates, attTextType.sourceSpan, '');
							if (attTextType.valueSpan) {
								textTypeVal = attTextType.valueSpan.start.file.content.slice(attTextType.valueSpan.start.offset, attTextType.valueSpan.end.offset);
							}
						}
						const className = (typeVal ? (textTypeVal ? 'bg-' + typeVal : 'text-bg-' + typeVal) : '') + (textTypeVal ? ' text-' + textTypeVal : '');
						replace(updates, node.startSourceSpan.start.offset + 16, 0, ` auClassName="${className}"`);
					} else {
						leaveTODOComment(
							updates,
							node.startSourceSpan.start.offset,
							'could not migrate type/textType input. please migrate manually using auClassName',
						);
					}
				}
			},
			(node: TmplAstElement) => {
				if (node.name !== 'ngb-progressbar') {
					return;
				}
				replaceStartTag(updates, node, 'span auProgressbar');
			},
		);
		return updates;
	}
}
