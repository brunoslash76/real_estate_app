import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { makeHome } from '@/main/factories/pages/home-factory';
import { makeDetails } from '@/main/factories/pages/details-fatory';
import { makeHouseList } from '@/main/factories/pages/house-list-factory';
import { RecoilRoot } from 'recoil';
import { Header, ContentContainer, Footer } from '@/presentation/components';

const Router: React.FC = () => {
	return (
		<RecoilRoot initializeState={() => {}}>
			<BrowserRouter>
				<Header />
				<ContentContainer>
					<Switch>
						<Route path='/' exact component={makeHome} />
						<Route path='/details/:id' exact component={makeDetails} />
						<Route path='/list' exact component={makeHouseList} />
					</Switch>
				</ContentContainer>
				<Footer />
			</BrowserRouter>
		</RecoilRoot>
	);
};

export default Router;
