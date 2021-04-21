import React from 'react';
import { useParams } from 'react-router';
import { Details } from '@/presentation/pages';
import { 
	makeRemoteLoadHouseDetails,
	makeRemoteSaveLastVisitedHouses,
	makeRemoteLoadFavoriteHouses
} from '@/main/factories/usecases';
import { makeRemoteSaveFavoritedHouse } from '../usecases/remote-save-favorite-house';

type Param = {
	id: string;
};

export const makeDetails: React.FC = () => {
	const { id } = useParams<Param>();
	return (
		<Details
			loadHouseDetails={makeRemoteLoadHouseDetails(parseInt(id, 10))}
			saveLastVisitedHouses={makeRemoteSaveLastVisitedHouses()}
			saveFavoriteHouse={makeRemoteSaveFavoritedHouse()}
			loadFavoriteHouse={makeRemoteLoadFavoriteHouses()}
		/>
	);
};
