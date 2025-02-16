const e=`import {Alert} from '@agnos-ui/react-bootstrap/components/alert';

const Usage = () => (
	<>
		<Alert type="primary" dismissible={false}>
			Label provided by slot
		</Alert>
		{/* eslint-disable-next-line react/no-children-prop */}
		<Alert type="secondary" dismissible={false} children="Label provided by property" />
		Typescript prevents tsx to set the content by property and slot.
	</>
);
export default Usage;
`;export{e as default};
