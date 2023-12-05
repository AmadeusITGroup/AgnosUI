import {WidgetsDefaultConfig} from '@agnos-ui/react-headless/config';
import {useHashChange} from '../../utils';
import {Progressbar} from '@agnos-ui/react/Progressbar';

const ProgressbarPlayground = () => {
	const {config, props} = useHashChange();
	return (
		<WidgetsDefaultConfig progressbar={config}>
			<Progressbar {...props} />
		</WidgetsDefaultConfig>
	);
};
export default ProgressbarPlayground;
