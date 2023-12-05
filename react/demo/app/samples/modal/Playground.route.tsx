import {Modal} from '@agnos-ui/react/modal/Modal';
import {useHashChange} from '../../utils';
import {WidgetsDefaultConfig} from '@agnos-ui/react-headless/config';

const ModalDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig modal={config}>
			<Modal {...props} />
		</WidgetsDefaultConfig>
	);
};
export default ModalDemo;
