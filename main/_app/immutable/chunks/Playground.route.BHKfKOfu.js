const o=`import {Toast} from '@agnos-ui/react/components/toast';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
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
`;export{o as default};
