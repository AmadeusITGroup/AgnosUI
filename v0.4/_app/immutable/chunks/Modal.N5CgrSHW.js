const o=`import type {ModalProps, ModalWidget} from '@agnos-ui/react-headless/components/modal';
import {createModal} from '@agnos-ui/react-headless/components/modal';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {type PropsWithChildren} from 'react';
import ReactDOM from 'react-dom/client';

const ModalCloseButton = ({widget}: {widget: ModalWidget}) => (
	<form method="dialog">
		<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" {...useDirective(widget.directives.closeButtonDirective)}>
			✕
		</button>
	</form>
);

export function Modal(
	props: PropsWithChildren<Partial<Pick<ModalProps, 'closeOnOutsideClick' | 'ariaCloseButtonLabel' | 'closeButton' | 'visible' | 'onVisibleChange'>>>,
) {
	const [state, widget] = useWidgetWithConfig(createModal, props, 'modal', {closeButton: true});
	return (
		<dialog className="modal modal-bottom sm:modal-middle" onClose={widget.api.close} {...useDirective(widget.directives.dialogDirective)}>
			<div className="modal-box">
				{props.children}
				{state.closeButton && <ModalCloseButton widget={widget} />}
			</div>
			{props.closeOnOutsideClick && (
				<form method="dialog" className="modal-backdrop">
					<button onClick={widget.api.close}>Close</button>
				</form>
			)}
		</dialog>
	);
}

export async function openModal(
	options: PropsWithChildren<Partial<Pick<ModalProps, 'closeOnOutsideClick' | 'ariaCloseButtonLabel' | 'closeButton'>>>,
) {
	const div = document.createElement('div');
	const root = ReactDOM.createRoot(div);
	try {
		document.body.append(div);
		await new Promise<void>((resolve) => {
			root.render(<Modal {...options} visible onVisibleChange={() => resolve()} />);
		});
		div.remove();
	} finally {
		root.unmount();
	}
}
`;export{o as default};
