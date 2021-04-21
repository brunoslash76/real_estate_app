import React from 'react';
import { Home } from '@/presentation/pages/home';
import { 
	makeRemoteLoadMostVisitedHouses,
	makeRemoteUpdateMostVisitedHouses,
	makeRemoteLoadLastVisitedHouses
} from '@/main/factories/usecases';


export const makeHome: React.FC = () => {
	return (
		<Home 
			loadMostVisited={makeRemoteLoadMostVisitedHouses()}
			updateMostVisited={makeRemoteUpdateMostVisitedHouses()}
			loadLastVisited={makeRemoteLoadLastVisitedHouses()}
		/>
	)
};
