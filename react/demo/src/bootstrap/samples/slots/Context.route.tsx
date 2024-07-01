import type {PaginationNumberContext} from '@agnos-ui/react-bootstrap/components/pagination';
import {Pagination} from '@agnos-ui/react-bootstrap/components/pagination';

const Usage = () => {
	const numberLabel = ({displayedPage}: PaginationNumberContext) => ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];
	return (
		<>
			<p>The default look of the pagination:</p>
			<Pagination collectionSize={60} />

			<p>Changing the slot displaying the page number to use letters instead:</p>
			<Pagination collectionSize={60} numberLabel={numberLabel} />
		</>
	);
};
export default Usage;
