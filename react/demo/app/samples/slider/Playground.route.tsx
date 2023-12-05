import {Slider} from '@agnos-ui/react/Slider';
import {useHashChange} from '../../utils';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';

const SliderDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig slider={config}>
			<Slider {...props} />
		</WidgetsDefaultConfig>
	);
};
export default SliderDemo;
