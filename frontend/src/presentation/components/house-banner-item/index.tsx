import React from 'react';
import { useHouseBannerContext } from '../houses-banner-container/context';
import * as Styles from './house-banner-item-styles.scss';

type Props = {
    image: any
    children: React.ReactNode
    key: string
	onClick?: any
}

const HouseBannerItem: React.FC<Props> = ({image, children, onClick}: Props) => {
	const backgroundColor = useHouseBannerContext()
	const bgVerifier = backgroundColor === 'blue'

	return (
		<div 
			className={[Styles.anouncementWrapper, bgVerifier ? Styles.shadowGold : Styles.shadowBlue].join(' ')} 
			onClick={onClick}
		>
			<img src={image} />
			<div className={Styles.anouncementInfo}>
				{children}
			</div>
		</div>
	);
};

export default HouseBannerItem
