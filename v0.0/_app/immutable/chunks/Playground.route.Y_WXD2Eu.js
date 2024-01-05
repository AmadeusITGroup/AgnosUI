const n=`import {Rating} from '@agnos-ui/react/components/rating';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useHashChange} from '../../utils';

const RatingDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig rating={config}>
			<Rating {...props} />
		</WidgetsDefaultConfig>
	);
};
export default RatingDemo;
`;export{n as default};
