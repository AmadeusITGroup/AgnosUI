const a=`import {Pagination} from '@agnos-ui/react-bootstrap/components/pagination';
import {useState} from 'react';

const PaginationDemo = () => {
	const [page, setPage] = useState(4);
	const [pageAlone, setPageAlone] = useState(1);

	return (
		<>
			<h5>Basic pagination:</h5>
			<Pagination page={page} collectionSize={60} onPageChange={setPage} />

			<h5>No direction links:</h5>
			<Pagination page={page} collectionSize={60} directionLinks={false} onPageChange={setPage} />

			<h5>With boundary links:</h5>
			<Pagination page={page} collectionSize={60} boundaryLinks onPageChange={setPage} />

			<div className="mb-3">
				Current page: <span id="defaultPage">{page}</span>
			</div>
			<h5>Disabled pagination:</h5>
			<Pagination page={pageAlone} collectionSize={60} ariaLabel="Disabled pagination" disabled onPageChange={setPageAlone} />
		</>
	);
};
export default PaginationDemo;
`;export{a as default};
