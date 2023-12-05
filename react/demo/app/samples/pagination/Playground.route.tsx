import {Pagination} from '@agnos-ui/react/pagination/Pagination';
import {useHashChange} from '../../utils';
import {WidgetsDefaultConfig} from '@agnos-ui/react-headless/config';

const PaginationDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig pagination={config}>
			<Pagination {...props} />
		</WidgetsDefaultConfig>
	);
};
export default PaginationDemo;
