import {useWidgetWithConfig} from '../../config';
import {Slot} from '@agnos-ui/react-headless/slot';
import type {AdaptSlotContentProps, AdaptWidgetSlots, PropsConfig, WidgetProps, WidgetState} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {SyntheticEvent} from 'react';
import type {ItemContext} from '@agnos-ui/core-bootstrap/components/select';
import {createSelect as coreCreateSelect} from '@agnos-ui/core-bootstrap/components/select';

export * from '@agnos-ui/core-bootstrap/components/select';

export type SelectWidget<Item> = AdaptWidgetSlots<import('@agnos-ui/core-bootstrap/components/select').SelectWidget<Item>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;
export type SelectState<Item> = WidgetState<SelectWidget<Item>>;
export type SelectContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/select').SelectContext<Item>>;
export type SelectItemContext<Item> = AdaptSlotContentProps<import('@agnos-ui/core-bootstrap/components/select').SelectItemContext<Item>>;
export const createSelect: <Item>(propsConfig?: PropsConfig<SelectProps<Item>>) => SelectWidget<Item> = coreCreateSelect as any;

function preventDefault(e: SyntheticEvent) {
	e.preventDefault();
}

function DefaultBadge<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function DefaultItem<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function BadgeContainer<Item>({itemContext, slotContext}: {itemContext: ItemContext<Item>; slotContext: SelectContext<Item>}) {
	const state = slotContext.state;
	return (
		<div
			key={itemContext.id}
			tabIndex={-1}
			className={`au-select-badge me-1 ${state.badgeClassName}`}
			onKeyDown={(e) => slotContext.widget.actions.onBadgeKeydown(e.nativeEvent, itemContext.item)}
		>
			<Slot slotContent={state.slotBadgeLabel} props={{...slotContext, itemContext}}></Slot>
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

function Rows<Item>({slotContext, menuId}: {slotContext: SelectContext<Item>; menuId: string}) {
	const {widget, state} = slotContext;
	const {placement, menuClassName, highlighted} = state;
	const {hasFocusDirective, floatingDirective} = widget.directives;
	return (
		<ul
			role="listbox"
			id={menuId}
			data-popper-placement={placement}
			onMouseDown={preventDefault}
			{...useDirectives([classDirective, `dropdown-menu show ${menuClassName}`], hasFocusDirective, floatingDirective)}
		>
			{state.visibleItems.map((itemContext) => {
				const {id} = itemContext;
				const classname = ['au-select-item dropdown-item position-relative'];
				if (itemContext === highlighted) {
					classname.push('text-bg-primary');
				}
				if (itemContext.selected) {
					classname.push('selected');
				}
				return (
					<li
						key={id}
						role="option"
						aria-selected={itemContext.selected}
						className={classname.join(' ')}
						onClick={() => widget.api.toggleItem(itemContext.item)}
						style={{cursor: 'pointer'}}
					>
						<Slot slotContent={state.slotItem} props={{...slotContext, itemContext}}></Slot>
					</li>
				);
			})}
		</ul>
	);
}

const defaultConfig: Partial<SelectProps<any>> = {
	slotBadgeLabel: DefaultBadge,
	slotItem: DefaultItem,
};

export function Select<Item>(props: Partial<SelectProps<Item>>) {
	const [state, widget] = useWidgetWithConfig<SelectWidget<Item>>(createSelect, props, 'select', defaultConfig);
	const slotContext: SelectContext<Item> = {state, widget: toSlotContextWidget(widget)};
	const {id, ariaLabel, visibleItems, filterText, open, className} = state;
	const menuId = `${id}-menu`;

	const {
		directives: {hasFocusDirective, referenceDirective, inputContainerDirective},
	} = widget;
	return (
		<div {...useDirectives([classDirective, `au-select dropdown border border-1 p-1 mb-3 d-block ${className}`], referenceDirective)}>
			<div
				role="combobox"
				aria-controls={menuId}
				aria-haspopup="listbox"
				aria-expanded={open}
				{...useDirectives([classDirective, 'd-flex align-items-center flex-wrap'], hasFocusDirective, inputContainerDirective)}
			>
				<Badges slotContext={slotContext}></Badges>
				<input
					id={id}
					aria-label={ariaLabel}
					className="au-select-input flex-grow-1 border-0"
					type="text"
					value={filterText}
					aria-autocomplete="list"
					autoCorrect="off"
					autoCapitalize="none"
					autoComplete="off"
					onInput={widget.actions.onInput}
					onKeyDown={(e) => widget.actions.onInputKeydown(e.nativeEvent)}
				/>
			</div>
			{open && visibleItems.length > 0 && <Rows slotContext={slotContext} menuId={menuId} />}
		</div>
	);
}
