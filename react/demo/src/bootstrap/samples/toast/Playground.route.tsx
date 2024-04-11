import {Toast} from '@agnos-ui/react-bootstrap/components/toast';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useHashChange} from '../../../common/utils';

const PlaygroundToastDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig slider={config}>
			<Toast {...props} />
		</WidgetsDefaultConfig>
	);
};
export default PlaygroundToastDemo;
