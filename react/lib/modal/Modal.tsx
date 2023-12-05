import {Portal} from '@agnos-ui/react-headless/Portal';
import {Slot} from '@agnos-ui/react-headless/Slot';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {createModal, type ModalApi, type ModalContext, type ModalProps} from '@agnos-ui/react-headless/modal';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {useDirective} from '@agnos-ui/react-headless/utils';
import type {PropsWithChildren, Ref, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';

export * from '@agnos-ui/react-headless/modal';

const DefaultSlotHeader = <Data,>(slotContext: ModalContext<Data>) => (
	<>
		<h5 className="modal-title">
			<Slot slotContent={slotContext.state.slotTitle} props={slotContext} />
		</h5>
		{!slotContext.state.closeButton ? null : (
			<button
				type="button"
				className="btn-close"
				aria-label={slotContext.state.ariaCloseButtonLabel}
				onClick={slotContext.widget.actions.closeButtonClick}
			/>
		)}
	</>
);

const DefaultSlotStructure = <Data,>(slotContext: ModalContext<Data>) => (
	<>
		{!slotContext.state.slotTitle ? null : (
			<div className="modal-header">
				<Slot slotContent={slotContext.state.slotHeader} props={slotContext}></Slot>
			</div>
		)}
		<div className="modal-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
		</div>
		{!slotContext.state.slotFooter ? null : (
			<div className="modal-footer">
				<Slot slotContent={slotContext.state.slotFooter} props={slotContext} />
			</div>
		)}
	</>
);

const defaultConfig: Partial<ModalProps<any>> = {
	slotHeader: DefaultSlotHeader,
	slotStructure: DefaultSlotStructure,
};

export const Modal = forwardRef(function Modal<Data>(props: PropsWithChildren<Partial<ModalProps<Data>>>, ref: Ref<ModalApi<Data>>) {
	const [state, widget] = useWidgetWithConfig(createModal<Data>, props, 'modal', {...defaultConfig, slotDefault: props.children});
	useImperativeHandle(ref, () => widget.api, []);
	const refSetBackdrop = useDirective(widget.directives.backdropDirective);
	const refSetModal = useDirective(widget.directives.modalDirective);
	const slotContext: ModalContext<Data> = {
		state,
		widget: toSlotContextWidget(widget),
	};
	return (
		<Portal container={state.container}>
			{state.backdropHidden ? null : <div className={`modal-backdrop ${state.backdropClass}`} ref={refSetBackdrop} />}
			{state.hidden ? null : (
				<div className={`modal d-block ${state.className}`} ref={refSetModal} onClick={widget.actions.modalClick}>
					<div className="modal-dialog">
						<div className="modal-content">
							<Slot slotContent={state.slotStructure} props={slotContext} />
						</div>
					</div>
				</div>
			)}
		</Portal>
	);
}) as <Data>(props: PropsWithChildren<Partial<ModalProps<Data>>> & RefAttributes<ModalApi<Data>>) => JSX.Element;
