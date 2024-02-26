const n=`import type {PaginationNumberContext} from '@agnos-ui/react/components/pagination';
import {Pagination} from '@agnos-ui/react/components/pagination';
import type {AdaptSlotContentProps} from '@agnos-ui/react/types';

const Usage = () => {
	const numberLabel = ({displayedPage}: AdaptSlotContentProps<PaginationNumberContext>) => ['A', 'B', 'C', 'D', 'E', 'F'][displayedPage - 1];
	return (
		<>
			<p>The default look of the pagination:</p>
			<Pagination collectionSize={60} />

			<p>Changing the slot displaying the page number to use letters instead:</p>
			<Pagination collectionSize={60} slotNumberLabel={numberLabel} />
		</>
	);
};
export default Usage;
`;export{n as default};
