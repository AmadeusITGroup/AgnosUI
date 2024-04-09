import type {ItemContext, SelectContext, SelectItemContext, SelectProps, SelectWidget} from '@agnos-ui/react-headless/components/select';
import {createSelect} from '@agnos-ui/react-headless/components/select';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {Slot} from '@agnos-ui/react-headless/slot';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {SyntheticEvent} from 'react';

export * from '@agnos-ui/react-headless/components/select';

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

function Rows<Item>({slotContext}: {slotContext: SelectContext<Item>}) {
	const {widget, state} = slotContext;
	const highlighted = state.highlighted;
	return (
		<>
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
		</>
	);
}

const defaultConfig: Partial<SelectProps<any>> = {
	slotBadgeLabel: DefaultBadge,
	slotItem: DefaultItem,
};

export function Select<Item>(props: Partial<SelectProps<Item>>) {
	const [state, widget] = useWidgetWithConfig<SelectWidget<Item>>(createSelect, props, 'select', defaultConfig);
	const slotContext: SelectContext<Item> = {state, widget: toSlotContextWidget(widget)};
	const {id, ariaLabel, visibleItems, filterText, open, className, menuClassName, placement} = state;
	const menuId = `${id}-menu`;

	const {
		directives: {floatingDirective, hasFocusDirective, referenceDirective, inputContainerDirective},
	} = widget;
	const refSetMenu = useDirectives([hasFocusDirective, floatingDirective]);
	return (
		<div className={`au-select dropdown border border-1 p-1 mb-3 d-block ${className}`} {...useDirective(referenceDirective)}>
			<div
				{...useDirectives([hasFocusDirective, inputContainerDirective])}
				role="combobox"
				className="d-flex align-items-center flex-wrap"
				aria-controls={menuId}
				aria-haspopup="listbox"
				aria-expanded={open}
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
			{open && visibleItems.length > 0 && (
				<ul
					{...refSetMenu}
					role="listbox"
					id={menuId}
					className={`dropdown-menu show ${menuClassName}`}
					data-popper-placement={placement}
					onMouseDown={preventDefault}
				>
					<Rows slotContext={slotContext}></Rows>
				</ul>
			)}
		</div>
	);
}
