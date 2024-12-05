import {Slot} from '@agnos-ui/react-headless/slot';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import {useWidgetWithConfig} from '../../config';
import type {ItemContext, SelectApi, SelectContext, SelectItemContext, SelectProps, SelectWidget} from './select.gen';
import {createSelect} from './select.gen';
import {type Ref, useImperativeHandle} from 'react';

function DefaultBadge<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function DefaultItem<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function BadgeContainer<Item>({itemContext, slotContext}: {itemContext: ItemContext<Item>; slotContext: SelectContext<Item>}) {
	return (
		<div {...useDirective(slotContext.directives.badgeAttributesDirective, itemContext)}>
			<Slot slotContent={slotContext.state.badgeLabel} props={{...slotContext, itemContext}} />
		</div>
	);
}

function Badges<Item>({slotContext}: {slotContext: SelectContext<Item>}) {
	const badges = [];
	for (const itemContext of slotContext.state.selectedContexts) {
		badges.push(<BadgeContainer key={itemContext.id} itemContext={itemContext} slotContext={slotContext} />);
	}

	return badges.length ? <>{badges}</> : null;
}

function SelectItem<Item>({itemContext, slotContext}: {itemContext: ItemContext<Item>; slotContext: SelectContext<Item>}) {
	const classname = classNames('dropdown-item', 'position-relative', {'text-bg-primary': itemContext === slotContext.state.highlighted});
	return (
		<li className={classname} {...useDirective(slotContext.directives.itemAttributesDirective, itemContext)}>
			<Slot slotContent={slotContext.state.itemLabel} props={{...slotContext, itemContext}} />
		</li>
	);
}

function Rows<Item>({slotContext}: {slotContext: SelectContext<Item>; menuId: string}) {
	const {
		directives: {hasFocusDirective, floatingDirective, menuAttributesDirective},
	} = slotContext;
	return (
		<ul {...useDirectives([classDirective, 'dropdown-menu show'], hasFocusDirective, floatingDirective, menuAttributesDirective)}>
			{slotContext.state.visibleItems.map((itemContext) => {
				return <SelectItem key={itemContext.id} slotContext={slotContext} itemContext={itemContext} />;
			})}
		</ul>
	);
}

/**
 * A generic Select component that provides a customizable dropdown selection interface.
 *
 * @template Item - The type of the items in the selection.
 * @param props - The properties for the Select component.
 * @returns The rendered Select component.
 *
 * @remarks
 * This component uses a widget context to manage its state and directives. It supports
 * custom badge labels and item labels through the widget configuration.
 */
export function Select<Item>(props: Partial<SelectProps<Item>> & {ref?: Ref<SelectApi<Item>>}) {
	const widgetContext = useWidgetWithConfig<SelectWidget<Item>>(createSelect, props, 'select', {
		badgeLabel: DefaultBadge,
		itemLabel: DefaultItem,
	});
	useImperativeHandle(props.ref, () => widgetContext.api, [widgetContext.api]);
	const {
		state: {id, visibleItems, filterText, open, className},
		directives: {hasFocusDirective, referenceDirective, inputContainerDirective, inputDirective},
	} = widgetContext;
	const menuId = `${id}-menu`;

	return (
		<div {...useDirectives([classDirective, `au-select dropdown border border-1 p-1 mb-3 d-block ${className}`], referenceDirective)}>
			<div {...useDirectives([classDirective, 'd-flex align-items-center flex-wrap gap-1'], hasFocusDirective, inputContainerDirective)}>
				<Badges slotContext={widgetContext}></Badges>
				<input value={filterText} {...useDirective(inputDirective)} onChange={() => {}} />
			</div>
			{open && visibleItems.length > 0 && <Rows slotContext={widgetContext} menuId={menuId} />}
		</div>
	);
}
