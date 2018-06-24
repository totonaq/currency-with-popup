import React from 'react';
import { SingleCurrencyPair } from './../containers/containers';

import { toFiveDecimals } from './../helpers';

import { getPriceChange } from './../helpers';

const List = ({ ticker, localTicker }) => {

	const pairs = Object.keys(ticker);

	const list = pairs.map((pair, idx) => {

		const a = ticker[pair].buy_price;
		const b = localTicker[pair].buy_price;

		const change = getPriceChange(a, b) || 0;

		const price = toFiveDecimals(ticker[pair].buy_price) || 0

		return(
			<SingleCurrencyPair
				pair={pair}
				price={price}
				change={change}
				key={idx}
			/>
		)
	})

	return(
		<div className="app-content-currency">
			<ul className="app-content-currency-list">
				{
					list
				}
			</ul>
		</div>
	)
}

export default List