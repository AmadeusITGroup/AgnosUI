import {Slider, WidgetsDefaultConfig} from '@agnos-ui/react';
import {useHashChange} from '../../utils';

const SliderDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig slider={config}>
			<Slider {...props} />
		</WidgetsDefaultConfig>
	);
};
export default SliderDemo;
