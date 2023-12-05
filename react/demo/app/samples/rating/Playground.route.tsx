import {Rating} from '@agnos-ui/react/Rating';
import {useHashChange} from '../../utils';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';

const RatingDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig rating={config}>
			<Rating {...props} />
		</WidgetsDefaultConfig>
	);
};
export default RatingDemo;
