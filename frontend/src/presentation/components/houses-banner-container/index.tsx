import React from 'react';
import { HouseBannerContainerContext, useHouseBannerContext } from './context';
import * as Styles from './house-banner-container-styles.scss';

type Props = {
	title: string;
	children: React.ReactNode;
	backgroundColor: 'blue' | 'gold';
};

const HouseBannerContainer: React.FC<Props> = ({
	title,
	children,
	backgroundColor,
}: Props) => {
	
	const bgVerifier = backgroundColor === 'blue';
	const bgColor = bgVerifier
		? {
				backgroundColor: '#0c2d48',
				boxShadow: '0px 1px 3px 2px #071825',
		  }
		: {
				backgroundColor: '#b68d40',
				boxShadow: '0px 1px 3px 2px #74541a',
		  };

	return (
		<HouseBannerContainerContext.Provider value={backgroundColor}>
			<section
				className={Styles.wrapper}
				style={{ ...bgColor }}
			>
				<h2 className={bgVerifier ? Styles.headerGold : Styles.headerBlue}>
					{title}
				</h2>
				<section className={Styles.annoucementContainer}>
					{children}
				</section>
			</section>
		</HouseBannerContainerContext.Provider>
	);
};

export default HouseBannerContainer;
