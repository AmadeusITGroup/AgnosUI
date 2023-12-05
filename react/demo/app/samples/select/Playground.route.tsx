import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useHashChange} from '../../utils';
import {Select} from '@agnos-ui/react/Select';

const SelectDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig select={config}>
			<Select {...props} />
		</WidgetsDefaultConfig>
	);
};
export default SelectDemo;
