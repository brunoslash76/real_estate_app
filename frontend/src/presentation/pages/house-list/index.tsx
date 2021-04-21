import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { LoadHouseParams, LoadHousesEndPointParams } from '@/data/protocols';
import { mockHousesArray } from '@/presentation/pages/home/components/most-visited/mock-house-array';
import Pagination from '@/presentation/components/pagination';
import { FavoriteHomes } from './components';
import { LoadAllHouses } from '@/domain/usecases';
import { Loading } from '@/presentation/components';
import { HouseListModel } from '@/domain/models';

type Props = {
	loadHousesList: LoadAllHouses;
};

type HistoryParam = {
	type: string
	value: string
}

export const HouseList: React.FC<Props> = ({ loadHousesList }: Props) => {
	const [houses, setHouses] = useState<HouseListModel[]>();
	const history = useHistory();
	const { location } = history
	const { state } = location

	useEffect(() => {
		async function callLoadAllHouses() {
			const { value } = state as HistoryParam
			const result = await loadHousesList.loadByParam(value);
			setHouses(result);
		}
		callLoadAllHouses();
	}, []);

	const handleItemClick = (id: number) => {
		return history.push({
			pathname: `/details/${id}`,
			state: { houseId: id },
		});
	};

	return (
		<div>
			{true ? (
				<>
					<FavoriteHomes />
					<Pagination
						houses={houses}
						handleItemClick={handleItemClick}
					/>
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};
