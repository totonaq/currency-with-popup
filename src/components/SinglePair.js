import React from 'react';
import { getChangeClass, replaceUnderscore } from './../helpers';
import PropTypes from 'prop-types';

const SinglePair = ({ pair, price, change, showPopupWithUpdatedData }) => {

	const dir = getChangeClass(change);

	return(
		<li
			className="app-content-currency-list-item"
			onClick={() => showPopupWithUpdatedData(pair)} >
			<p className={`app-content-currency-list-item__title${dir}`}>{replaceUnderscore(pair)}</p>
			<p className={`app-content-currency-list-item__value${dir}`}>
				<span>{price}</span>
			</p>
		</li>
	)
}

SinglePair.propTypes = {
	pair: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	change: PropTypes.number.isRequired,
	showPopupWithUpdatedData: PropTypes.func.isRequired
}

export default SinglePair