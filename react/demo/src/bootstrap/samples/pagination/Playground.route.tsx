import {Pagination} from '@agnos-ui/react/components/pagination';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';
import {useHashChange} from '../../../common/utils';

const PaginationDemo = () => {
	const {config, props} = useHashChange();

	return (
		<WidgetsDefaultConfig pagination={config}>
			<Pagination {...props} />
		</WidgetsDefaultConfig>
	);
};
export default PaginationDemo;
