import {Collapse} from './Collapse';

const DefaultCollapseDemoDaisyUI = () => {
	return (
		<>
			<Collapse onHidden={() => console.log('Hidden')}>
				<p>tabindex=0 necessary is already put</p>
			</Collapse>
		</>
	);
};

export default DefaultCollapseDemoDaisyUI;
