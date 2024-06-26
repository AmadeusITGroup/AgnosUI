const o=`import {Progressbar} from '@agnos-ui/react-bootstrap/components/progressbar';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useHashChange} from '../../../common/utils';

const ProgressbarPlayground = () => {
	const {config, props} = useHashChange();
	return (
		<WidgetsDefaultConfig progressbar={config}>
			<Progressbar {...props} />
		</WidgetsDefaultConfig>
	);
};
export default ProgressbarPlayground;
`;export{o as default};
