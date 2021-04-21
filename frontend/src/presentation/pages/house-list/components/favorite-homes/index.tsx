import React from 'react'
import { HouseBannerContainer, HouseBannerItem } from '@/presentation/components'
import { mockHousesArray } from '@/presentation/pages/home/components/most-visited/mock-house-array'
import mockImage from '@/presentation/pages/home/components/most-visited/images/property-1.jpg'

const maxDisplayNumber = 5

const FavoriteHomes: React.FC = () => {
    const mapMostVisited = () => {
		const sortedArray = mockHousesArray.sort((houseA, houseB) => {
			const a = new Date(houseA.visits.lastVisited).getTime();
			const b = new Date(houseB.visits.lastVisited).getTime();
			return b - a;
		});
		let result = [];
		for (let i = 0; i < maxDisplayNumber; i++) {
			const { overview, homeImage } = sortedArray[i];
			result.push(
				<HouseBannerItem 
					key={homeImage}
					image={mockImage}
				>
					<p>${overview.price}</p>
				</HouseBannerItem>
				
			);
		}
		return result;
	};
    return (
        <HouseBannerContainer title="Favorite homes" backgroundColor={'gold'} >
            {mapMostVisited()}
        </HouseBannerContainer>
    )
}

export default FavoriteHomes
