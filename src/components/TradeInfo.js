import React from 'react';
import { BuyTable, SellTable } from './../containers/containers';

const TradeInfo = () => {
	return(
		<div className="app-content-popup-info-trade">
			<BuyTable title='Покупка' />
			<SellTable title='Продажа' />
		</div>
	)
}

export default TradeInfo