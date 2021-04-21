import React from 'react';
import { useHistory } from 'react-router';
import { HouseList } from '@/presentation/pages';
import { makeRemoteHousesList } from '../usecases';

export const makeHouseList: React.FC = () => {
	const history = useHistory()
	return (
		<HouseList 
			loadHousesList={makeRemoteHousesList(history.location.state['type'])}
		/>
	);
};
