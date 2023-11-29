import type {ParsedTemplate, TmplAstBoundAttribute, TmplAstTextAttribute} from '@angular/compiler';
import {TmplAstBoundText, TmplAstElement, TmplAstTemplate, TmplAstText} from '@angular/compiler';
import type {Update} from '../../../../utilities/migration';
import {
	getBindingUpdates,
	getReplace,
	leaveTODOComment,
	replace,
	replaceSpan,
	TemplateMigrator,
	visitElements,
} from '../../../../utilities/migration';

// TODO discuss with the team as ng-bootstrap accordion show and hide outputs do not have matching events in agnosui
const BodyBindingRenameMap: Record<string, string> = {
	closeOthers: 'auCloseOthers',
	destroyOnHide: 'auItemDestroyOnHide',
	animation: 'auItemAnimation',
	shown: 'auShown',
	hidden: 'auHidden',
};

// TODO discuss with the team as ng-bootstrap accordion show and hide outputs do not have match events in agnosui
const ItemBindingRenameMap: Record<string, string> = {
	collapsed: 'auItemVisible',
	destroyOnHide: 'auItemDestroyOnHide',
	disabled: 'auItemDisabled',
	hidden: 'auItemHidden',
	shown: 'auItemShown',
};

const headingSet = new Set<string>(['h1', 'h3', 'h4', 'h5', 'h6']);

export class AccordionTemplateMigrator extends TemplateMigrator {
	// updates an accordion header
	updateHeader(updates: Update[], accordionHeader: TmplAstElement, itemNode: TmplAstElement) {
		const accordionButton = accordionHeader.children.find(
			(child) => child instanceof TmplAstElement && child.attributes.some((attribute) => attribute.name === 'ngbAccordionButton'),
		) as TmplAstElement;
		if (accordionButton) {
			// we only propose a migration of the structure header -> button
			const buttonChild = accordionButton.children[0];
			const value =
				accordionButton.children.length === 1 && buttonChild && (buttonChild instanceof TmplAstText || buttonChild instanceof TmplAstBoundText)
					? buttonChild.sourceSpan.start.file.content.slice(buttonChild.sourceSpan.start.offset, buttonChild.sourceSpan.end.offset)
					: undefined;
			if (value && value.length <= 30) {
				// if the content of the button is small and either pure text or bound text, we propose a cleaner migration by fully deleting the header and using the slot header
				// note that this could lose any classes and styling added to the header element
				replaceSpan(updates, accordionHeader.sourceSpan, '');
				replace(updates, itemNode.startSourceSpan.end.offset - 1, 0, ` auSlotItemHeader="${value}"`);
			} else {
				// otherwise, we keep the button content as it is and migrate around it
				replace(
					updates,
					accordionHeader.startSourceSpan.start.offset,
					accordionButton.startSourceSpan.end.offset - accordionHeader.startSourceSpan.start.offset,
					`<ng-template auAccordionItemHeader>`,
				);
				replace(
					updates,
					accordionButton.endSourceSpan!.start.offset,
					accordionHeader.endSourceSpan!.end.offset - accordionButton.endSourceSpan!.start.offset,
					`</ng-template>`,
				);
			}
			// if the header directive was associated to a heating tag which is not h2, add it as auItemHeadingTag input in the item
			if (headingSet.has(accordionHeader.name)) {
				replace(updates, itemNode.startSourceSpan.end.offset - 1, 0, ` auItemHeadingTag="${accordionHeader.name}"`);
			}
			// if the header had a simple class attribute, add this to the item as auItemHeaderClass input
			const headerClass = accordionHeader.attributes.find((attribute) => attribute.name === 'class')?.value;
			if (headerClass) {
				replace(updates, itemNode.startSourceSpan.end.offset - 1, 0, ` auItemHeaderClass="${headerClass}"`);
			}
		} else {
			leaveTODOComment(updates, accordionHeader.startSourceSpan.start.offset, 'could not migrate accordion header, please handle manually');
		}
	}

	// updates an accordion collapse
	updateBody(updates: Update[], accordionCollapse: TmplAstElement, itemNode: TmplAstElement) {
		const accordionBody = accordionCollapse.children.find(
			(child) => child instanceof TmplAstElement && child.attributes.some((attribute) => attribute.name === 'ngbAccordionBody'),
		) as TmplAstElement;
		if (accordionBody) {
			const accordionTemplate = accordionBody.children.find(
				(child) => child instanceof TmplAstTemplate && child.tagName === 'ng-template',
			) as TmplAstTemplate;
			if (accordionTemplate) {
				// the body was implemented using the recommended structure (collapse -> body -> ng-template)
				const templateOutletInput = accordionTemplate.inputs.find((input) => input.name === 'ngTemplateOutlet');
				if (templateOutletInput && templateOutletInput.valueSpan) {
					// if the ng-template has a ngTemplateOutlet, we propose a cleaner migration by fully deleting the collapse and using the slot body
					// note that this could lose any classes and styling added to the body element
					replaceSpan(updates, accordionCollapse.sourceSpan, '');
					replace(
						updates,
						itemNode.startSourceSpan.end.offset - 1,
						0,
						` [auSlotItemBody]="${accordionTemplate.sourceSpan.start.file.content.slice(
							templateOutletInput.valueSpan.start.offset,
							templateOutletInput.valueSpan.end.offset,
						)}"`,
					);
				} else {
					// no ngTemplateOutlet, we migrate around the ng-template
					const offsetNgTemplateEnd = accordionTemplate.startSourceSpan.start.offset + 12;
					const offsetSourceSpanEnd = accordionTemplate.startSourceSpan.end.offset - 1;
					const templateAttributes =
						offsetNgTemplateEnd < offsetSourceSpanEnd
							? accordionTemplate.sourceSpan.start.file.content.slice(offsetNgTemplateEnd, offsetSourceSpanEnd)
							: '';
					replace(
						updates,
						accordionCollapse.startSourceSpan.start.offset,
						accordionTemplate.startSourceSpan.end.offset - accordionCollapse.startSourceSpan.start.offset,
						`<ng-template${templateAttributes ? ' ' + templateAttributes : ''} auAccordionItemBody>`,
					);
					replace(
						updates,
						accordionTemplate.endSourceSpan!.start.offset,
						accordionCollapse.endSourceSpan!.end.offset - accordionTemplate.endSourceSpan!.start.offset,
						`</ng-template>`,
					);
				}
			} else {
				// ng-bootstrap accordion body still displays if the ng-template is not present (though there is an impact on the destroyOnHide behavior)
				// so we migrate around the content
				replace(
					updates,
					accordionCollapse.startSourceSpan.start.offset,
					accordionBody.startSourceSpan.end.offset - accordionCollapse.startSourceSpan.start.offset,
					`<ng-template auAccordionItemBody>`,
				);
				replace(
					updates,
					accordionBody.endSourceSpan!.start.offset,
					accordionCollapse.endSourceSpan!.end.offset - accordionBody.endSourceSpan!.start.offset,
					`</ng-template>`,
				);
			}
		} else {
			leaveTODOComment(updates, accordionCollapse.startSourceSpan.end.offset, 'could not migrate accordion body, please handle manually');
		}
	}

	getUpdates(ast: ParsedTemplate): Update[] {
		const updates: Update[] = [];

		visitElements(ast.nodes, (node: TmplAstElement) => {
			const accordionAttribute = node.attributes.find((attribute) => attribute.name === 'ngbAccordion');
			if (accordionAttribute) {
				// migrate the main accordion directive by mapping inputs / outputs, references and tag name
				updates.push(
					...getBindingUpdates(node, BodyBindingRenameMap),
					getReplace(accordionAttribute.sourceSpan.start.offset, 'ngbAccordion'.length, 'auAccordion'),
					...node.references
						.filter((ref) => ref.value === 'ngbAccordion')
						.map((ref) => getReplace(ref.valueSpan!.start.offset, 'ngbAccordion'.length, 'auAccordion')),
				);
			}
			// migration of accordion item (the hard part)
			const attributesOrInputs: (TmplAstTextAttribute | TmplAstBoundAttribute)[] = [];
			attributesOrInputs.push(...node.attributes);
			attributesOrInputs.push(...node.inputs);
			const itemAttribute = attributesOrInputs.find((attribute) => attribute.name === 'ngbAccordionItem');
			if (itemAttribute) {
				// if the item was specifying the id, we need to map it as the agnosui item input auItemId
				if (itemAttribute.value) {
					updates.push(...getBindingUpdates(node, {ngbAccordionItem: 'auItemId'}));
				}
				//  we migrate the item by mapping inputs / outputs, references and tag name
				updates.push(
					...getBindingUpdates(node, ItemBindingRenameMap),
					getReplace(
						itemAttribute.sourceSpan.start.offset,
						itemAttribute.value ? 0 : 'ngbAccordionItem'.length,
						'auAccordionItem' + (itemAttribute.value ? ' ' : ''),
					),
					...node.references
						.filter((ref) => ref.value === 'ngbAccordionItem')
						.map((ref) => getReplace(ref.valueSpan!.start.offset, 'ngbAccordionItem'.length, 'auAccordionItem')),
				);
				// we need a specific mapping for the collapsed input, as the value needs to be negated
				const collapseInput = node.inputs.find((input) => input.name === 'collapsed');
				if (collapseInput && collapseInput.valueSpan) {
					const value = collapseInput.sourceSpan.start.file.content.slice(collapseInput.value.sourceSpan.start, collapseInput.value.sourceSpan.end);
					if ('false' === value || 'true' === value) {
						replace(updates, collapseInput.value.sourceSpan.start, value.length, value === 'true' ? 'false' : 'true');
					} else {
						replace(updates, collapseInput.value.sourceSpan.start, value.length, `!(${value})`);
					}
				}
				// handling of the header
				const accordionHeader = node.children.find(
					(child) => child instanceof TmplAstElement && child.attributes.some((attribute) => attribute.name === 'ngbAccordionHeader'),
				) as TmplAstElement;
				if (accordionHeader) {
					this.updateHeader(updates, accordionHeader, node);
				}
				// handling of the body
				const accordionCollapse = node.children.find(
					(child) => child instanceof TmplAstElement && child.attributes.some((attribute) => attribute.name === 'ngbAccordionCollapse'),
				) as TmplAstElement;
				if (accordionCollapse) {
					this.updateBody(updates, accordionCollapse, node);
				}
			}
		});
		return updates;
	}
}
