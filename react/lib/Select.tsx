import type {ItemCtx, WidgetProps} from '@agnos-ui/core';
import {createSelect} from '@agnos-ui/core';
import type {SyntheticEvent} from 'react';
import type {AdaptWidgetSlots} from './Slot';
import {useDirective, useWidgetWithConfig} from './utils';

export type SelectWidget<Item> = AdaptWidgetSlots<ReturnType<typeof createSelect<Item>>>;
export type SelectProps<Item> = WidgetProps<SelectWidget<Item>>;

const inputGroupText = {
	backgroundColor: 'transparent',
};

function preventDefault(e: SyntheticEvent) {
	e.preventDefault();
}

function Badges<Item>({api, selected}: {api: SelectWidget<Item>; selected: Item[]}) {
	const badges = [];
	for (const item of selected) {
		badges.push(
			<div className="badge rounded-pill text-bg-primary d-inline-flex align-items-center m-1" onMouseDown={preventDefault}>
				<div className="me-1">{'' + item}</div>
				<span role="button" tabIndex={-1} aria-label="Close" onClick={() => api.api.unselect(item)}>
					x
				</span>
			</div>
		);
	}

	return badges.length ? (
		<div className="input-group-text" style={inputGroupText}>
			{badges}
		</div>
	) : null;
}

function Rows<Item>({visible, highlighted}: {visible: ItemCtx<Item>[]; highlighted: ItemCtx<Item> | undefined}) {
	return (
		<>
			{visible.map((itemCtx) => {
				const id = `au-select-checkbox-${itemCtx.id}`;
				const classname = ['dropdown-item position-relative'];
				if (itemCtx === highlighted) {
					classname.push('bg-light');
				}
				return (
					<li key={itemCtx.id} className={classname.join(' ')}>
						<div className="form-check">
							<input id={id} tabIndex={-1} type="checkbox" className="form-check-input" checked={itemCtx.selected} onChange={itemCtx.toggle} />
							<label
								htmlFor={id}
								className="form-check-label stretched-link"
								onClick={(e) => {
									itemCtx.toggle();
									e.preventDefault();
								}}
							>
								{'' + itemCtx.item}
							</label>
						</div>
					</li>
				);
			})}
		</>
	);
}

export function Select<Item>(props: Partial<SelectProps<Item>>) {
	const [state, widget] = useWidgetWithConfig<SelectWidget<Item>>(createSelect, props, 'select');
	const {visible, selected, highlighted, filterText, opened, className} = state;

	const {
		directives: {hasFocusDirective},
	} = widget;
	const refSetInput = useDirective(hasFocusDirective);
	const refSetMenu = useDirective(hasFocusDirective);

	return (
		<div className={`au-select dropdown input-group input-group-sm mb-3 ${className}`}>
			<div ref={refSetInput} role="combobox" className="input-group" aria-haspopup="listbox" aria-expanded="true">
				<Badges api={widget} selected={selected}></Badges>
				<input
					className="form-control"
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
			{opened && visible.length > 0 && (
				<ul
					ref={refSetMenu}
					className="dropdown-menu show w-100"
					style={{
						position: 'absolute',
						inset: '0px auto auto 0px',
						margin: '0px',
						transform: 'translate3d(0px, 45px, 0px)',
					}}
					data-popper-placement="bottom-start"
					onMouseDown={preventDefault}
				>
					<Rows visible={visible} highlighted={highlighted}></Rows>
				</ul>
			)}
		</div>
	);
}
