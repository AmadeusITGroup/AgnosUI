import {Pagination as PaginationAgnosUI} from '@agnos-ui/react';
import {useState} from 'react';

const PaginationDemo = () => {
	const [page, setPage] = useState(4);

	return (
		<>
			<PaginationAgnosUI page={page} onPageChange={(page) => setTimeout(() => setPage(page), 0)} />
			<div>
				Current page: <span id="defaultPage">{page}</span>
			</div>
		</>
	);
};
export default PaginationDemo;
