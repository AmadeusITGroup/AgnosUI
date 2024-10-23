import {Progressbar} from '@agnos-ui/react-bootstrap/components/progressbar';
import {useEffect, useState} from 'react';
import '@agnos-ui/common/samples/progressbar/custom.scss';
import {Coffee} from './Coffee';
import Play from 'bootstrap-icons/icons/play-fill.svg?react';
import Pause from 'bootstrap-icons/icons/pause-fill.svg?react';
import Stop from 'bootstrap-icons/icons/stop-fill.svg?react';

const FullCustomDemo = () => {
	const [value, setValue] = useState(0);
	const [running, setRunning] = useState(false);
	useEffect(() => {
		const interval = setInterval(() => {
			if (running && value < 100) {
				setValue(value + 10);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [running, value]);
	const toggle = () => {
		setRunning(!running);
	};
	const reset = () => {
		setValue(0);
		setRunning(false);
	};

	return (
		<div className="d-flex align-items-center flex-wrap">
			<div style={{width: '350px'}}>
				<Progressbar value={value} structure={Coffee} />
			</div>
			<div className="d-flex flex-column justify-content-evenly h-100 ms-5">
				<div className="d-flex gap-1">
					<button
						className="btn btn-primary d-flex align-items-center"
						disabled={value >= 100}
						onClick={toggle}
						aria-label={running ? 'pause' : 'play'}
					>
						{running ? <Pause /> : <Play />}
					</button>
					<button className="btn btn-primary d-flex align-items-center" disabled={value === 0} onClick={reset} aria-label="stop">
						<Stop />
					</button>
				</div>
				<p className="mt-3">
					<span>{value === 0 && !running ? 'Need to wake up.' : value < 100 ? `Retrieving coffee... ${value}%` : 'Ready to work !'}</span>
				</p>
			</div>
		</div>
	);
};
export default FullCustomDemo;
