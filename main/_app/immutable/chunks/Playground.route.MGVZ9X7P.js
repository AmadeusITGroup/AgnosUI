const o=`import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
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
`;export{o as default};
