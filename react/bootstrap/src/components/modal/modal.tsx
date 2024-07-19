import {Slot} from '@agnos-ui/react-headless/slot';
import type {Directive} from '@agnos-ui/react-headless/types';
import {toSlotContextWidget} from '@agnos-ui/react-headless/types';
import {classDirective, useDirective, useDirectives} from '@agnos-ui/react-headless/utils/directive';
import {Portal} from '@agnos-ui/react-headless/utils/portal';
import classNames from 'classnames';
import type {Ref, RefAttributes} from 'react';
import {forwardRef, useImperativeHandle} from 'react';
import ReactDOM from 'react-dom/client';
import {useWidgetWithConfig} from '../../config';
import type {ModalApi, ModalContext, ModalProps} from './modal.gen';
import {createModal} from './modal.gen';

const CloseButton = ({directive}: {directive: Directive}) => <button className="btn-close" {...useDirective(directive)} />;

const DefaultSlotHeader = <Data,>(slotContext: ModalContext<Data>) => {
	return (
		<>
			<h5 className="modal-title">
				<Slot slotContent={slotContext.state.title} props={slotContext} />
			</h5>
			{slotContext.state.closeButton && <CloseButton directive={slotContext.widget.directives.closeButtonDirective} />}
		</>
	);
};

const DefaultSlotStructure = <Data,>(slotContext: ModalContext<Data>) => (
	<>
		{slotContext.state.title && (
			<div className="modal-header">
				<Slot slotContent={slotContext.state.header} props={slotContext} />
			</div>
		)}
		<div className="modal-body">
			<Slot slotContent={slotContext.state.children} props={slotContext} />
		</div>
		{slotContext.state.footer && (
			<div className="modal-footer">
				<Slot slotContent={slotContext.state.footer} props={slotContext} />
			</div>
		)}
	</>
);

const defaultConfig: Partial<ModalProps<any>> = {
	header: DefaultSlotHeader,
	structure: DefaultSlotStructure,
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
					<Slot slotContent={slotContext.state.structure} props={slotContext} />
				</div>
			</div>
		</div>
	);
};

export const Modal = forwardRef(function Modal<Data>(props: Partial<ModalProps<Data>>, ref: Ref<ModalApi<Data>>) {
	const [state, widget] = useWidgetWithConfig(createModal<Data>, props, 'modal', defaultConfig);
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
}) as <Data>(props: Partial<ModalProps<Data>> & RefAttributes<ModalApi<Data>>) => JSX.Element;

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
