const o=`import {Modal} from '@agnos-ui/react/components/modal';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
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
`;export{o as default};
