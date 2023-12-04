const e=`import {Select, WidgetsDefaultConfig} from '@agnos-ui/react';
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
`;export{e as default};
