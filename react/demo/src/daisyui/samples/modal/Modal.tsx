import type {ModalDirectives, ModalProps} from '@agnos-ui/react-headless/components/modal';
import {createModal} from '@agnos-ui/react-headless/components/modal';
import {useWidget} from '@agnos-ui/react-headless/config';
import {useDirective} from '@agnos-ui/react-headless/utils/directive';
import {type PropsWithChildren} from 'react';
import ReactDOM from 'react-dom/client';

const ModalCloseButton = ({directives}: {directives: ModalDirectives}) => (
	<form method="dialog">
		<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" {...useDirective(directives.closeButtonDirective)}>
			✕
		</button>
	</form>
);

export function Modal(
	props: PropsWithChildren<Partial<Pick<ModalProps, 'closeOnOutsideClick' | 'ariaCloseButtonLabel' | 'closeButton' | 'visible' | 'onVisibleChange'>>>,
) {
	const {state, api, directives} = useWidget(createModal, props, {closeButton: true});
	return (
		<dialog className="modal modal-bottom sm:modal-middle" onClose={api.close} {...useDirective(directives.dialogDirective)}>
			<div className="modal-box">
				{props.children}
				{state.closeButton && <ModalCloseButton directives={directives} />}
			</div>
			{props.closeOnOutsideClick && (
				<form method="dialog" className="modal-backdrop">
					<button onClick={api.close}>Close</button>
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
