const o=`import {Modal} from '@agnos-ui/react-bootstrap/components/modal';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useHashChange} from '../../../common/utils';

const ModalDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig modal={config}>
			<div>
				<Modal {...props} />
			</div>
		</WidgetsDefaultConfig>
	);
};
export default ModalDemo;
`;export{o as default};
