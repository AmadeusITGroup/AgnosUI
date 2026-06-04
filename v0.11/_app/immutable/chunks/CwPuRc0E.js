const e=`import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';

const Secondary = () => <Alert>Alert not dismissible and of type secondary, respecting the parent config</Alert>;

const Success = () => (
	<WidgetsDefaultConfig alert={{type: 'success'}}>
		<Alert>Alert not dismissible and of type success, type overriden by child config</Alert>
	</WidgetsDefaultConfig>
);

const DownDemo = () => (
	<WidgetsDefaultConfig alert={{dismissible: false, type: 'secondary'}}>
		<Alert>Alert not dismissible and of type secondary</Alert>
		<Secondary />
		<Success />
	</WidgetsDefaultConfig>
);
export default DownDemo;
`;export{e as default};
