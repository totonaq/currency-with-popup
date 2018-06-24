import React from 'react';
import { getChangeClass, replaceUnderscore } from './../helpers';
import PropTypes from 'prop-types';

const InfoHeader = ({ currentPair, price, change }) => {

	const dir = getChangeClass(change);

	return(
		<div className="app-content-popup-info-header">
			<p className="app-content-popup-info-header__title">{replaceUnderscore(currentPair)}</p>
			<p className={`app-content-popup-info-header__value${dir}`}>{price}</p>
		</div>
	)
}

InfoHeader.propTypes = {
	currentPair: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	change: PropTypes.number.isRequired
}

export default InfoHeader