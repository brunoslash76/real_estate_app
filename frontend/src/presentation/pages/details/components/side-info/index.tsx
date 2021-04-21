import React, { useEffect, useState } from 'react';
import { HouseDetailsModel } from '@/domain/models';
import { AvailableDisplayer } from '@/presentation/components';
import heartIcon from '../imgs/heart.png';
import heartFullIcon from '../imgs/heart-full.png';
import * as Styles from './side-info-styles.scss';

type Props = {
	house: HouseDetailsModel;
	liked: boolean;
	setLiked: any;
};

const SideInfo: React.FC<Props> = ({ house, liked, setLiked }: Props) => {
	return (
		<section className={Styles.wrapper}>
			<section className={Styles.callToAction}>
				<h2>Property Information</h2>
				<button type='button' onClick={setLiked}>
					<img src={liked ? heartFullIcon : heartIcon} />
				</button>
			</section>
			<section>
				<h3>Overview</h3>
				<div className={Styles.infoSection}>
					<p>
						Price: <span>${house.price}</span>
					</p>
					<p>
						Neighborhood: <span>{house.neighborhood}</span>
					</p>
					<div className={Styles.bedsAndBaths}>
						<p>
							Beds: <span>{house.beds}</span>
						</p>
						<p>
							Baths: <span>{house.baths}</span>
						</p>
					</div>
					<p>
						Address: <span>{house.address}</span>
					</p>
					<p>
						City: <span>{house.city}</span>
					</p>
					<p>
						ZIP code: <span>{house.zipcode}</span>
					</p>
					<div className={Styles.availabilityContainer}>
						Available:{' '}
						<AvailableDisplayer isAvailable={house.available} />
					</div>
				</div>
			</section>
			<section>
				<h3>Facts and Features</h3>
				<div className={Styles.infoSection}>
					<p>
						Type: <span>{house.type}</span>
					</p>
					<p>
						Year Built: <span>{house.yearBuilt}</span>
					</p>
					<p>
						Heating: <span>{house.heating}</span>
					</p>
					<p>
						Parking: <span>{house.parking}</span>
					</p>
					<p>
						Lot: <span>{house.lot}</span>
					</p>
					<p>
						Stories: <span>{house.stories}</span>
					</p>
				</div>
				<button>click more</button>
			</section>
		</section>
	);
};

export default SideInfo;
