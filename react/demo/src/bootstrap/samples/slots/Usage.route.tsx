import {Alert} from '@agnos-ui/react-bootstrap/components/alert';

const Usage = () => (
	<>
		<Alert type="primary" dismissible={false}>
			Label provided by slot
		</Alert>
		<p>
			In React, passing the slot by using the attribute <code>children</code> will return an error.
		</p>
	</>
);
export default Usage;
