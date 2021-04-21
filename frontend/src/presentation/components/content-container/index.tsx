import React from 'react';
import * as Styles from './styles.scss';

const ContentContainer: React.FC = ({ children }) => {
	return <div className={Styles.wrapper}>{children}</div>;
};

export default ContentContainer
