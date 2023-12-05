import {WidgetsDefaultConfig} from '@agnos-ui/react-headless/config';
import {useHashChange} from '../../utils';
import {Alert} from '@agnos-ui/react/Alert';

const AlertDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig alert={config}>
			<Alert {...props} />
		</WidgetsDefaultConfig>
	);
};
export default AlertDemo;
