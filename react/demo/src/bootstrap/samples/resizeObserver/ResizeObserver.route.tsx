import '@agnos-ui/common/samples/resizeobserver/resizeobserver.scss';
import {useObservable} from '@agnos-ui/react-bootstrap/utils';
import {createResizeObserver} from '@agnos-ui/react-bootstrap/services';
import {useMemo, useState} from 'react';
import {useDirective} from '@agnos-ui/react-bootstrap/utils';

const ResizeObserver = () => {
	const resizeObserver = useMemo(createResizeObserver, []);
	const [heightValue, setHeightValue] = useState(180);
	const dimensions = useObservable(resizeObserver.dimensions$);

	const observedHeight = dimensions?.contentRect?.height;

	const increaseHeight = () => {
		setHeightValue((observedHeight || 0) + 50);
	};

	const decreaseHeight = () => {
		setHeightValue(observedHeight ? observedHeight - 50 : 0);
	};

	return (
		<div className="demo-resize-observer">
			<label htmlFor="resizable">Resizable textarea:</label>
			<textarea
				name="resizable"
				id="resizable"
				rows={6}
				cols={50}
				style={{height: heightValue}}
				className={`form-control ${observedHeight && observedHeight > 200 ? 'fontsize' : ''}`}
				defaultValue="This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing."
				{...useDirective(resizeObserver.directive)}
			></textarea>
			<div>
				Textarea content height: <span id="dynamic-height">{observedHeight}</span>px
			</div>
			<button type="button" className="btn btn-primary m-2" id="decreaseHeight" onClick={decreaseHeight}>
				Height --
			</button>
			<button type="button" className="btn btn-primary m-2" id="increaseHeight" onClick={increaseHeight}>
				Height ++
			</button>
		</div>
	);
};
export default ResizeObserver;
