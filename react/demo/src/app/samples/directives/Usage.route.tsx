import {useDirective} from '@agnos-ui/react/utils/directive';
import {useState} from 'react';

//Agnostic directive created in the previous section
import {createSampleDirective} from '@agnos-ui/common/samples/directives/sample-directive';

const Usage = () => {
	const [text, setText] = useState('focus element clicked');
	const myDirectiveRef = useDirective(createSampleDirective, text);
	return (
		<>
			<div ref={myDirectiveRef}>
				<button className="btn btn-primary" id="test">
					button 1
				</button>
				<button className="btn btn-primary" id="test2">
					button 2
				</button>
			</div>
			<hr />
			<input
				className="form-control"
				id="clickText"
				type="text"
				defaultValue={text}
				aria-label="text input to configure the directive"
				onChange={(data) => setText(data.target.value)}
			/>
			<hr />
			<span>(Open the console to see the outputs)</span>
		</>
	);
};

export default Usage;
