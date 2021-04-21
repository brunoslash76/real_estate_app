import React from 'react';
import { HouseDetailsModel } from '@/domain/models';
import mockImage from '@/presentation/pages/home/components/most-visited/images/property-1.jpg';
import * as Styles from './photo-section.scss';

type Props = {
	house: HouseDetailsModel;
};

const PhotoSection: React.FC<Props> = ({ house }: Props) => {
	return (
		<section className={Styles.mainPhotos}>
			<div className={Styles.coverPhoto}>
				<img src={mockImage} alt='' />
			</div>
			<div className={Styles.albumSection}>
				<div className={Styles.morePhotos}>
					<img src={mockImage} alt='' />
				</div>
				<div className={Styles.morePhotos}>
					<img src={mockImage} alt='' />
				</div>
				<div className={Styles.morePhotos}>
					<img src={mockImage} alt='' />
				</div>
				<div className={Styles.morePhotos}>
					<img src={mockImage} alt='' />
				</div>
				<div className={Styles.morePhotos}>
					<img src={mockImage} alt='' />
				</div>
				<div className={Styles.morePhotos}>
					<img src={mockImage} alt='' />
				</div>
			</div>
		</section>
	);
};

export default PhotoSection;
