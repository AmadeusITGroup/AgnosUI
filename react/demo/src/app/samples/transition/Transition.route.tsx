import {useState} from 'react';
import InnerComponent from './InnerComponent';

const Transition = () => {
	const [showComponent, setShowComponent] = useState(true);
	return (
		<div className="demo-transition mb-3">
			<button id="toggle-component" className="btn btn-outline-secondary" onClick={() => setShowComponent(!showComponent)}>
				Toggle component
			</button>
			{showComponent && <InnerComponent />}
		</div>
	);
};
export default Transition;
