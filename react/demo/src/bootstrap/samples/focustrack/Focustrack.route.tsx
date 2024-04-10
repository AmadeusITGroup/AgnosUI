// import {useState} from "react";
import {activeElement$, createHasFocus} from '@agnos-ui/react-bootstrap/services/focustrack';
import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';
import {useObservable} from '@agnos-ui/react-bootstrap/utils/stores';
import {useState, useEffect} from 'react';

const Focustrack = () => {
	const [hasFocus] = useState(createHasFocus);
	const hasFocusState = useObservable(hasFocus.hasFocus$);

	const activeElement = useObservable(activeElement$);
	const [activeElements, setActiveElements] = useState<any[]>([]);

	useEffect(() => {
		setActiveElements([...activeElements, {tagName: activeElement?.tagName.toLowerCase(), id: activeElement?.id || undefined}]);
	}, [activeElement]);

	return (
		<div className="demo-focustrack">
			<div className="my-2 p-2 border" {...useDirective(hasFocus.directive)}>
				<h5>Container</h5>
				<input className="form-control" type="text" placeholder="Focusable input" id="focusableInput" />
				<br />
				<input className="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput" />
			</div>
			<input className="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled />
			<br />
			<div className="form-check mb-2">
				<input className="form-check-input" type="checkbox" id="containerHasFocus" checked={hasFocusState} disabled />
				<label className="form-check-label" htmlFor="containerHasFocus">
					Focus in container
				</label>
			</div>
			<label htmlFor="activeElementHistory" className="form-label">
				Active element history:
			</label>
			<textarea className="form-control mb-2" id="activeElementHistory" value={JSON.stringify(activeElements)} readOnly />
			<button className="btn btn-primary" onClick={() => setActiveElements([])}>
				Clear
			</button>
		</div>
	);
};
export default Focustrack;
