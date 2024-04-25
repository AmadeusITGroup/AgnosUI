const e=`import {Select} from '@agnos-ui/react-bootstrap/components/select';
import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useHashChange} from '../../../common/utils';

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
