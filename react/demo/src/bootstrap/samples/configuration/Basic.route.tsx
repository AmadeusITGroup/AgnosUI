import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useState} from 'react';

const BasicDemo = () => {
	const [dismissible, setDismissible] = useState(false);
	return (
		<>
			<button className="btn btn-primary" onClick={() => setDismissible((a) => !a)}>
				Toggle config dismissible
			</button>
			<div className="my-2">Config dissmissible is {dismissible ? 'true' : 'false'}</div>
			<WidgetsDefaultConfig alert={{dismissible}}>
				<Alert type="primary">Simple primary alert</Alert>
				<Alert type="secondary">Simple secondary alert</Alert>
			</WidgetsDefaultConfig>
		</>
	);
};
export default BasicDemo;
