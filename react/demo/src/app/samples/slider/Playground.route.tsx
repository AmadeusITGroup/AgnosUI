import {Slider} from '@agnos-ui/react/components/slider';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
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
