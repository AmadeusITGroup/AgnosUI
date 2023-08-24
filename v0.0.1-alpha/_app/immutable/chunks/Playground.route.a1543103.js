const n=`import {Modal, WidgetsDefaultConfig} from '@agnos-ui/react';
import {useHashChange} from '../../utils';

const ModalDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig modal={config}>
			<Modal {...props} />
		</WidgetsDefaultConfig>
	);
};
export default ModalDemo;
`;export{n as default};
