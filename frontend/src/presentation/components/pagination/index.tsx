import { HouseListModel } from '@/domain/models';
import React, { useEffect, useState } from 'react';
import { HomeItem } from './components';
import * as Styles from './pagination-styles.scss';

type Props = {
	houses: HouseListModel[];
	handleItemClick?: any
};

const Pagination: React.FC<Props> = ({ houses = [], handleItemClick }: Props) => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = houses.length > 5 ? 5 : houses.length;
	const totalPages = houses.length / itemsPerPage;
	const disableNextClick = currentPage >= totalPages;
	const disablePreviousClick = currentPage <= 1;
	const limit = itemsPerPage * currentPage;
	let nextBatch = limit - itemsPerPage;

	const displayItems = () => {
		if (houses.length <= 0 || !houses) return;
		let result = [];

		for (nextBatch; nextBatch < limit; nextBatch++) {
			result.push(
				<HomeItem
					key={houses[nextBatch].homeImage}
					home={houses[nextBatch]}
					handleItemClick={handleItemClick}
				/>
			);
		}
		return result;
	};

	useEffect(() => {
		return () => {};
	}, [houses]);

	const handleNextPageClick = () => {
		if (disableNextClick) return;
		setCurrentPage(currentPage + 1);
	};

	const handlePreviousPage = () => {
		if (disablePreviousClick) return;
		setCurrentPage(currentPage - 1);
	};
	return (
		<div className={Styles.wrapper}>
			<section>{displayItems()}</section>
			<footer>
				<span>listing by page: {itemsPerPage}</span>
				<div>
					<button
						onClick={handlePreviousPage}
						disabled={disablePreviousClick}
					>
						{'<-'}
					</button>
					<span>
						Page {currentPage} of {totalPages}
					</span>
					<button
						onClick={handleNextPageClick}
						disabled={disableNextClick}
					>
						{'->'}
					</button>
				</div>
			</footer>
		</div>
	);
};

export default Pagination;
