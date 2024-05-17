import {openModal} from './Modal';

const ModalDemo = () => (
	<button
		className="btn"
		aria-haspopup="dialog"
		onClick={() =>
			openModal({
				closeOnOutsideClick: true,
				children: (
					<>
						<h3 className="font-bold text-lg">A simple modal</h3>
						<p className="py-4">Press ESC key, click on ✕ button or click outside the modal to close</p>
					</>
				),
			})
		}
	>
		Open modal
	</button>
);
export default ModalDemo;
