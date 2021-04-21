import React from 'react';
import { useHistory } from 'react-router-dom';
import Views from '@/presentation/components/icons/view.png';
import mockImage from './images/property-1.jpg';
import * as Styles from './most-visited-styles.scss';
import {
	HouseBannerItem,
	HouseBannerContainer,
} from '@/presentation/components';
import { MostVisitedHousesModel } from '@/domain/models';
import EmptyHouseList from '@/presentation/components/empty-house-list';
import { UpdateMostVisitedHouses } from '@/domain/usecases';

type Props = {
	houses: MostVisitedHousesModel[];
	updateMostVisitedHouses: UpdateMostVisitedHouses
};

export const MostVisited: React.FC<Props> = ({ houses, updateMostVisitedHouses }: Props) => {
	const history = useHistory();

	const handleHouseDetailClick = (id: number) => {
		updateMostVisitedHouses.updateMostVisited(id)
		return history.push({ 
			pathname: `/details/${id}`, 
			state: { houseId: id } 
		});
	};

	const mapMostVisited = () => {
		if (!houses || houses.length <= 0) return <EmptyHouseList />;
		return houses.map((house: MostVisitedHousesModel) => (
			<HouseBannerItem
				key={house.homeImage}
				image={mockImage}
				onClick={() => handleHouseDetailClick(house.id)}
			>
				<p className={Styles.price}> ${house.price}</p>
				<p className={Styles.views}>
					<img src={Views} />
					{house.total_visits}
				</p>
			</HouseBannerItem>
		));
	};

	return (
		<HouseBannerContainer
			title='Most visited houses'
			backgroundColor={'blue'}
		>
			{mapMostVisited()}
		</HouseBannerContainer>
	);
};
