const r=`import {Progressbar} from '@agnos-ui/react/components/progressbar';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
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
`;export{r as default};
