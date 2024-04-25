const e=`import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';

const BasicDemo = () => (
	<WidgetsDefaultConfig alert={{dismissible: false}}>
		<Alert type="primary">Simple primary alert</Alert>
		<Alert type="secondary">Simple secondary alert</Alert>
	</WidgetsDefaultConfig>
);
export default BasicDemo;
`;export{e as default};
