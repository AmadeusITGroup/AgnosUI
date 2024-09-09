import {WidgetsDefaultConfig} from '@agnos-ui/react-bootstrap/config';
import {useHashChange} from '../../../common/utils';
import {Collapse} from '@agnos-ui/react-bootstrap/components/collapse';

const CollapseDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig collapse={config}>
			<Collapse {...props}>Visible content</Collapse>
		</WidgetsDefaultConfig>
	);
};
export default CollapseDemo;
