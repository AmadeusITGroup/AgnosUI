import type {ToastApi} from '@agnos-ui/react-headless/components/toast';
import {useRef} from 'react';
import {Toast} from './Toast';

const TailwindDemo = () => {
	const refToast = useRef<ToastApi>(null);
	function reset() {
		refToast.current!.open();
	}
	return (
		<div className="h-[215px]">
			<button className="btn btn-primary" onClick={reset}>
				Reset Toast
			</button>
			<div className="toast">
				<Toast className={'alert-success'} ref={refToast}>
					This is a success toast
				</Toast>
				<Toast className={'alert-error'} dismissible={false}>
					This is an error toast
				</Toast>
			</div>
		</div>
	);
};

export default TailwindDemo;
