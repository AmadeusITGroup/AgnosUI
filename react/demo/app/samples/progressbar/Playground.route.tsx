import {Progressbar, WidgetsDefaultConfig} from '@agnos-ui/react';
import {useHashChange} from '../../utils';

const ProgressbarPlayground = () => {
	const {config, props} = useHashChange();
	return (
		<WidgetsDefaultConfig progressbar={config}>
			<Progressbar {...props} />
		</WidgetsDefaultConfig>
	);
};
export default ProgressbarPlayground;
