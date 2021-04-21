import React, { FormEvent, useState, useEffect } from 'react';
import { Input } from '@/presentation/components';
import { useHistory } from 'react-router';
import { LoadHouseParams } from '@/data/protocols';
import * as Styles from './house-search-styles.scss';

export const HouseSearch: React.FC = () => {
	const [state, setState] = useState<{ search: string }>();
	const [selectedRadio, setSelectedRadio] = useState('zipcode');
	const history = useHistory();

	const handleSearchSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const type = selectedRadio;
		const params: LoadHouseParams = {
			type,
			value: state && type ? state.search : null,
		};

		return history.push({ pathname: '/list', state: params });
		
	};

	const handleRadioChange = (radioId: string): void => {
		setSelectedRadio(radioId);
	};
	
	return (
		<section className={Styles.wrapper}>
			<h2>The best place to search for your next dream home</h2>
			<form
				name='search'
				className={Styles.inputContainer}
				onSubmit={handleSearchSubmit}
			>
				<Input
					state={state}
					setState={setState}
					placeholder='Search with zip code, city or neighborhood'
					name='search'
					clickType='submit'
				/>
				<fieldset>
					<div>
						<input
							onChange={() => handleRadioChange('zipcode')}
							type='radio'
							id='zipcode'
							name='option'
							value='zipcode'
							checked={selectedRadio === 'zipcode'}
						/>
						<label htmlFor='zipcode'>zipcode</label>
					</div>
					<div>
						<input
							onChange={() => handleRadioChange('city')}
							type='radio'
							id='city'
							name='option'
							value='city'
							checked={selectedRadio === 'city'}
						/>
						<label htmlFor="city">city</label>
					</div>
					<div>
						<input
							onChange={() => handleRadioChange('neighborhood')}
							type='radio'
							id='neighborhood'
							name='option'
							value='neighborhood'
							checked={selectedRadio === 'neighborhood'}
						/>
						<label htmlFor="neighborhood">neighborhood</label>
					</div>
				</fieldset>
			</form>
		</section>
	);
};
