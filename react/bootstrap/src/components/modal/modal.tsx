import {Slot} from '@agnos-ui/react-headless/slot';
import type {Directive} from '@agnos-ui/react-headless/types';
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

/**
 * A default header component for the modal that displays a title and an optional close button.
 *
 * @template Data - The type of data used in the modal context.
 * @param slotContext - The context object containing the state and directives for the modal.
 * @returns The JSX element representing the modal header.
 */
export const ModalDefaultSlotHeader = <Data,>(slotContext: ModalContext<Data>) => (
	<>
		<h5 className="modal-title">
			<Slot slotContent={slotContext.state.title} props={slotContext} />
		</h5>
		{slotContext.state.closeButton && <CloseButton directive={slotContext.directives.closeButtonDirective} />}
	</>
);

/**
 * Renders the default slot structure for a modal component.
 *
 * @template Data - The type of the data used in the modal context.
 * @param slotContext - The context containing the state and props for the modal slots.
 * @returns The JSX structure for the modal's default slots.
 */
export const ModalDefaultSlotStructure = <Data,>(slotContext: ModalContext<Data>) => (
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

const BackdropElement = <Data,>({directives}: ModalContext<Data>) => (
	<div {...useDirectives([classDirective, 'modal-backdrop'], directives.backdropDirective)} />
);

const ModalElement = <Data,>(slotContext: ModalContext<Data>) => {
	const {fullscreen} = slotContext.state;
	return (
		<div {...useDirectives([classDirective, 'modal d-block'], slotContext.directives.modalDirective)}>
			<div className={classNames('modal-dialog', {'modal-fullscreen': fullscreen})}>
				<div className="modal-content">
					<Slot slotContent={slotContext.state.structure} props={slotContext} />
				</div>
			</div>
		</div>
	);
};

/**
 * A Modal component that uses a forwardRef to expose its API.
 *
 * @template Data - The type of data that the modal will handle.
 *
 * @param props - The properties for the Modal component.
 * @param ref - A ref to access the Modal API.
 *
 * @returns The rendered Modal component.
 */
export const Modal = forwardRef(function Modal<Data>(props: Partial<ModalProps<Data>>, ref: Ref<ModalApi<Data>>) {
	const widgetContext = useWidgetWithConfig(createModal<Data>, props, 'modal', {
		header: ModalDefaultSlotHeader,
		structure: ModalDefaultSlotStructure,
	});
	useImperativeHandle(ref, () => widgetContext.api, [widgetContext.api]);
	return (
		<Portal container={widgetContext.state.container}>
			{!widgetContext.state.backdropHidden && <BackdropElement {...widgetContext} />}
			{!widgetContext.state.hidden && <ModalElement {...widgetContext} />}
		</Portal>
	);
}) as <Data>(props: Partial<ModalProps<Data>> & RefAttributes<ModalApi<Data>>) => JSX.Element;

/**
 * Opens a modal dialog with the specified options.
 *
 * @template Data - The type of data that the modal will handle.
 * @param options - The options to configure the modal.
 * @returns A promise that resolves when the modal is closed.
 */
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
