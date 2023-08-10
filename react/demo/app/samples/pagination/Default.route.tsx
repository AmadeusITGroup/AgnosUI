import {Pagination} from '@agnos-ui/react';
import {useState} from 'react';

const PaginationDemo = () => {
	const [page, setPage] = useState(4);
	const [pageAlone, setPageAlone] = useState(1);

	return (
		<>
			<h5>Default pagination:</h5>
			<Pagination page={page} collectionSize={60} onPageChange={(page) => setTimeout(() => setPage(page), 0)} />

			<h5>No direction links:</h5>
			<Pagination page={page} collectionSize={60} directionLinks={false} onPageChange={(page) => setTimeout(() => setPage(page), 0)} />

			<h5>With boundary links:</h5>
			<Pagination page={page} collectionSize={60} boundaryLinks={true} onPageChange={(page) => setTimeout(() => setPage(page), 0)} />

			<div className="mb-3">
				Current page: <span id="defaultPage">{page}</span>
			</div>
			<h5>Disabled pagination:</h5>
			<Pagination
				page={pageAlone}
				collectionSize={60}
				ariaLabel="Disabled pagination"
				disabled={true}
				onPageChange={(page) => setTimeout(() => setPageAlone(page), 0)}
			/>
		</>
	);
};
export default PaginationDemo;
