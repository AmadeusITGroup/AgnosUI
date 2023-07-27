import {Rating, WidgetsDefaultConfig} from '@agnos-ui/react';
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
