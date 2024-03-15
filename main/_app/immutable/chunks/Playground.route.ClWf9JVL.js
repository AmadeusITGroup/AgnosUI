const n=`import {Slider} from '@agnos-ui/react/components/slider';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useHashChange} from '../../../common/utils';

const SliderDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig slider={config}>
			<Slider {...props} />
		</WidgetsDefaultConfig>
	);
};
export default SliderDemo;
`;export{n as default};
