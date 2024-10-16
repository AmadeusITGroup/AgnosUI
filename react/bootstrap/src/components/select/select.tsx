import {Slot} from '@agnos-ui/react-headless/slot';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import classNames from 'classnames';
import {useWidgetWithConfig} from '../../config';
import type {ItemContext, SelectContext, SelectItemContext, SelectProps, SelectWidget} from './select.gen';
import {createSelect} from './select.gen';

function DefaultBadge<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function DefaultItem<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function BadgeContainer<Item>({itemContext, slotContext}: {itemContext: ItemContext<Item>; slotContext: SelectContext<Item>}) {
	return (
		<div {...useDirective(slotContext.widget.directives.badgeAttributesDirective, itemContext)}>
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
		<li className={classname} {...useDirective(slotContext.widget.directives.itemAttributesDirective, itemContext)}>
			<Slot slotContent={slotContext.state.itemLabel} props={{...slotContext, itemContext}} />
		</li>
	);
}

function Rows<Item>({slotContext}: {slotContext: SelectContext<Item>; menuId: string}) {
	const {
		directives: {hasFocusDirective, floatingDirective, menuAttributesDirective},
	} = slotContext.widget;
	return (
		<ul {...useDirectives([classDirective, 'dropdown-menu show'], hasFocusDirective, floatingDirective, menuAttributesDirective)}>
			{slotContext.state.visibleItems.map((itemContext) => {
				return <SelectItem key={itemContext.id} slotContext={slotContext} itemContext={itemContext} />;
			})}
		</ul>
	);
}

const defaultConfig: Partial<SelectProps<any>> = {
	badgeLabel: DefaultBadge,
	itemLabel: DefaultItem,
};

export function Select<Item>(props: Partial<SelectProps<Item>>) {
	const [state, widget] = useWidgetWithConfig<SelectWidget<Item>>(createSelect, props, 'select', defaultConfig);
	const slotContext: SelectContext<Item> = {state, widget: toSlotContextWidget(widget)};
	const {id, visibleItems, filterText, open, className} = state;
	const menuId = `${id}-menu`;

	const {
		directives: {hasFocusDirective, referenceDirective, inputContainerDirective, inputDirective},
	} = widget;
	return (
		<div {...useDirectives([classDirective, `au-select dropdown border border-1 p-1 mb-3 d-block ${className}`], referenceDirective)}>
			<div {...useDirectives([classDirective, 'd-flex align-items-center flex-wrap gap-1'], hasFocusDirective, inputContainerDirective)}>
				<Badges slotContext={slotContext}></Badges>
				<input value={filterText} {...useDirective(inputDirective)} onChange={() => {}} />
			</div>
			{open && visibleItems.length > 0 && <Rows slotContext={slotContext} menuId={menuId} />}
		</div>
	);
}
