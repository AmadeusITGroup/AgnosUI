import {Alert} from '@agnos-ui/react/components/alert';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useHashChange} from '../../../common/utils';

const AlertDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig alert={config}>
			<Alert {...props} />
		</WidgetsDefaultConfig>
	);
};
export default AlertDemo;
