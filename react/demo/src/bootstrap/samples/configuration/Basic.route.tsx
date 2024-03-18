import {Alert} from '@agnos-ui/react/components/alert';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';

const BasicDemo = () => (
	<WidgetsDefaultConfig alert={{dismissible: false}}>
		<Alert type="primary">Simple primary alert</Alert>
		<Alert type="secondary">Simple secondary alert</Alert>
	</WidgetsDefaultConfig>
);
export default BasicDemo;
