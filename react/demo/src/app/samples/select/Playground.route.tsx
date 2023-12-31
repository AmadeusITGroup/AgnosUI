import {Select} from '@agnos-ui/react/components/select';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useHashChange} from '../../utils';

const SelectDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig select={config}>
			<Select {...props} />
		</WidgetsDefaultConfig>
	);
};
export default SelectDemo;
