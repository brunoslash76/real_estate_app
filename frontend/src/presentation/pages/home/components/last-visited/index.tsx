import React, { useEffect } from 'react';
import mockImage from '@/presentation/pages/home/components/most-visited/images/property-1.jpg';
import {
	HouseBannerContainer,
	HouseBannerItem,
} from '@/presentation/components';
import { LastVisitedHouseModel } from '@/domain/models';
import EmptyHouseList from '@/presentation/components/empty-house-list';
import { UpdateMostVisitedHouses } from '@/domain/usecases';
import { useHistory } from 'react-router';

type Props = {
	houses: LastVisitedHouseModel[];
	updateMostVisitedHouses: UpdateMostVisitedHouses
};

export const LastVisited: React.FC<Props> = ({ houses, updateMostVisitedHouses }: Props) => {

	const history = useHistory()
	useEffect(() => window.scrollTo(0, 0), [])

	const handleHouseDetailClick = (id: number) => {
		updateMostVisitedHouses.updateMostVisited(id)
		return history.push({ 
			pathname: `/details/${id}`, 
			state: { houseId: id } 
		});
	};

	const mapMostVisited = () => {
		if (!houses) return null;
		return houses.map(house => (
			<HouseBannerItem onClick={() => handleHouseDetailClick(house.id)} key={house.image} image={mockImage}>
				<p>${house.price}</p>
			</HouseBannerItem>
		))
	};

	return (
		<HouseBannerContainer title='Last visited' backgroundColor={'gold'}>
			{
				houses
				? mapMostVisited()
				: <EmptyHouseList title="You didn't visited any property" />
			}
		</HouseBannerContainer>
	);
};
