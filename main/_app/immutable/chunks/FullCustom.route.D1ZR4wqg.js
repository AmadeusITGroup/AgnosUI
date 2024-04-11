const e=`import {Progressbar} from '@agnos-ui/react-bootstrap/components/progressbar';
import {useEffect, useState} from 'react';
import './custom.scss';
import {Coffee} from './Coffee';

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
	const start = () => {
		setRunning(true);
	};
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
				<Progressbar value={value} slotStructure={Coffee} />
			</div>
			<div className="d-flex flex-column justify-content-evenly h-100 ms-5">
				<div className="btn-group" role="group">
					<button className="btn btn-outline-primary" disabled={value > 0} onClick={start}>
						Start
					</button>
					<button className="btn btn-outline-primary" disabled={value === 0 || value >= 100} onClick={toggle}>
						{running ? 'Pause' : 'Resume'}
					</button>
					<button className="btn btn-outline-primary" disabled={value === 0} onClick={reset}>
						Reset
					</button>
				</div>
				<p className="mt-3">
					<span>{value === 0 ? 'Need to wake up.' : value < 100 ? \`Retrieving coffee... \${value}%\` : 'Ready to work !'}</span>
				</p>
			</div>
		</div>
	);
};
export default FullCustomDemo;
`;export{e as default};
