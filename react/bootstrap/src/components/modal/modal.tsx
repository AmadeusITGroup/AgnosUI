import {Portal} from '@agnos-ui/react-headless/utils/portal';
import type {Directive, PropsConfig} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {Slot} from '@agnos-ui/react-headless/slot';
import {useWidgetWithConfig} from '../../config';
import {useDirective, classDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import type {PropsWithChildren, Ref, RefAttributes} from 'react';
import ReactDOM from 'react-dom/client';
import {forwardRef, useImperativeHandle} from 'react';
import {createModal as coreCreateModal, getModalDefaultConfig as coreGetModalDefaultConfig} from '@agnos-ui/core-bootstrap/components/modal';
import classNames from 'classnames';
import type {ModalApi, ModalContext, ModalProps, ModalWidget} from './modal.gen';

export type * from './modal.gen';
export const createModal: <Data>(propsConfig?: PropsConfig<ModalProps<Data>>) => ModalWidget<Data> = coreCreateModal as any;
export {modalCloseButtonClick, modalOutsideClick} from '@agnos-ui/react-headless/components/modal';
export const getModalDefaultConfig: () => ModalProps<any> = coreGetModalDefaultConfig as any;

const CloseButton = ({directive}: {directive: Directive}) => <button className="btn-close" {...useDirective(directive)} />;

const DefaultSlotHeader = <Data,>(slotContext: ModalContext<Data>) => {
	return (
		<>
			<h5 className="modal-title">
				<Slot slotContent={slotContext.state.slotTitle} props={slotContext} />
			</h5>
			{slotContext.state.closeButton && <CloseButton directive={slotContext.widget.directives.closeButtonDirective} />}
		</>
	);
};

const DefaultSlotStructure = <Data,>(slotContext: ModalContext<Data>) => (
	<>
		{slotContext.state.slotTitle && (
			<div className="modal-header">
				<Slot slotContent={slotContext.state.slotHeader} props={slotContext} />
			</div>
		)}
		<div className="modal-body">
			<Slot slotContent={slotContext.state.slotDefault} props={slotContext} />
		</div>
		{slotContext.state.slotFooter && (
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

const BackdropElement = <Data,>({widget}: ModalContext<Data>) => (
	<div {...useDirectives([classDirective, 'modal-backdrop'], widget.directives.backdropDirective)} />
);

const ModalElement = <Data,>(slotContext: ModalContext<Data>) => {
	const {fullscreen} = slotContext.state;
	return (
		<div {...useDirectives([classDirective, 'modal d-block'], slotContext.widget.directives.modalDirective)}>
			<div className={classNames('modal-dialog', {'modal-fullscreen': fullscreen})}>
				<div className="modal-content">
					<Slot slotContent={slotContext.state.slotStructure} props={slotContext} />
				</div>
			</div>
		</div>
	);
};

export const Modal = forwardRef(function Modal<Data>(props: PropsWithChildren<Partial<ModalProps<Data>>>, ref: Ref<ModalApi<Data>>) {
	const [state, widget] = useWidgetWithConfig(createModal<Data>, props, 'modal', {...defaultConfig, slotDefault: props.children});
	useImperativeHandle(ref, () => widget.api, []);
	const slotContext: ModalContext<Data> = {
		state,
		widget: toSlotContextWidget(widget),
	};
	return (
		<Portal container={state.container}>
			{!state.backdropHidden && <BackdropElement {...slotContext} />}
			{!state.hidden && <ModalElement {...slotContext} />}
		</Portal>
	);
}) as <Data>(props: PropsWithChildren<Partial<ModalProps<Data>>> & RefAttributes<ModalApi<Data>>) => JSX.Element;

export async function openModal<Data>(options: Partial<ModalProps<Data>>) {
	const root = ReactDOM.createRoot(document.createElement('div'));
	try {
		const api = await new Promise<ModalApi<Data> | null>((resolve) => {
			root.render(<Modal {...options} ref={resolve} />);
		});
		return await api!.open();
	} finally {
		root.unmount();
	}
}
