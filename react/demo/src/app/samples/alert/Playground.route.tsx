import {Alert, WidgetsDefaultConfig} from '@agnos-ui/react';
import {useHashChange} from '../../utils';

const AlertDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig alert={config}>
			<Alert {...props} />
		</WidgetsDefaultConfig>
	);
};
export default AlertDemo;
