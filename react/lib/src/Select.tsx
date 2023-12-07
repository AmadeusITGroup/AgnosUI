import type {SelectContext, SelectItemContext, SelectProps, SelectWidget} from '@agnos-ui/react-headless';
import {Slot, createSelect, toSlotContextWidget, useDirective, useDirectives, useWidgetWithConfig} from '@agnos-ui/react-headless';
import type {SyntheticEvent} from 'react';

function preventDefault(e: SyntheticEvent) {
	e.preventDefault();
}

function DefaultBadge<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function DefaultItem<Item>(slotContext: SelectItemContext<Item>) {
	return <>{'' + slotContext.itemContext.item}</>;
}

function Badges<Item>({slotContext}: {slotContext: SelectContext<Item>}) {
	const badges = [];
	const state = slotContext.state;
	for (const itemContext of slotContext.state.selectedContexts) {
		badges.push(
			<div key={itemContext.id} className={`au-select-badge me-1 ${state.badgeClassName}`}>
				<Slot slotContent={state.slotBadgeLabel} props={{...slotContext, itemContext}}></Slot>
			</div>,
		);
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
					classname.push('bg-light');
				}
				if (itemContext.selected) {
					classname.push('selected');
				}
				return (
					<li key={id} className={classname.join(' ')} onClick={() => widget.api.toggleItem(itemContext.item)}>
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

	const {
		directives: {floatingDirective, hasFocusDirective, referenceDirective},
	} = widget;
	const refSetContainer = useDirective(referenceDirective);
	const refSetInput = useDirective(hasFocusDirective);
	const refSetMenu = useDirectives([hasFocusDirective, floatingDirective]);
	return (
		<div ref={refSetContainer} className={`au-select dropdown border border-1 p-1 mb-3 d-block ${className}`}>
			<div ref={refSetInput} role="combobox" className="d-flex align-items-center flex-wrap" aria-haspopup="listbox" aria-expanded={open}>
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
					onKeyDown={widget.actions.onInputKeydown}
					onInput={widget.actions.onInput}
				/>
			</div>
			{open && visibleItems.length > 0 && (
				<ul ref={refSetMenu} className={`dropdown-menu show ${menuClassName}`} data-popper-placement={placement} onMouseDown={preventDefault}>
					<Rows slotContext={slotContext}></Rows>
				</ul>
			)}
		</div>
	);
}
