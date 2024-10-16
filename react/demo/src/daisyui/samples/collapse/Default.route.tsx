import {Collapse} from './Collapse';

const DefaultCollapseDemoDaisyUI = () => (
	<Collapse onHidden={() => console.log('Hidden')}>
		<p>tabindex necessary is already put</p>
	</Collapse>
);

export default DefaultCollapseDemoDaisyUI;
