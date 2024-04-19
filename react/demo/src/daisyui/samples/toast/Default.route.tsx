import {useState} from 'react';
import {Toast} from './Toast';

const DaisyUIDemo = () => {
	const [visible, setVisible] = useState(true);

	return (
		<div className="h-[215px]">
			<button className="btn btn-primary" onClick={() => setVisible(true)}>
				Reset Toast
			</button>
			<div className="toast">
				<Toast className="alert-success" visible={visible} onVisibleChange={setVisible}>
					This is a success toast
				</Toast>
				<Toast className="alert-error" dismissible={false}>
					This is an error toast
				</Toast>
			</div>
		</div>
	);
};

export default DaisyUIDemo;
