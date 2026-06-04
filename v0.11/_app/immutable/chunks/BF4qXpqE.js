const e=`import {Collapse} from './Collapse';

const DefaultCollapseDemoDaisyUI = () => {
	return (
		<>
			<Collapse onHidden={() => console.log('Hidden')}>
				<p>tabindex necessary is already put</p>
			</Collapse>
		</>
	);
};

export default DefaultCollapseDemoDaisyUI;
`;export{e as default};
