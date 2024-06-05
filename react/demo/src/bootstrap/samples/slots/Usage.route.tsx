import {Alert} from '@agnos-ui/react-bootstrap/components/alert';

export default () => (
	<>
		<Alert type="primary" dismissible={false}>
			Label provided by slot
		</Alert>
		{/* eslint-disable-next-line react/no-children-prop */}
		<Alert type="secondary" dismissible={false} children="Label provided by property" />
		Typescript prevents tsx to set the content by property and slot.
	</>
);
