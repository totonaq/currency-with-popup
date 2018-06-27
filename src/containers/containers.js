import { connect } from 'react-redux';

import Pairs from './../components/Pairs';
import List from './../components/List';
import SinglePair from './../components/SinglePair';
import Popup from './../components/Popup';
import InfoHeader from './../components/InfoHeader';
import PairInfo from './../components/PairInfo';
import Table from './../components/Table';

import {
	fetchData,
	showPopupWithUpdatedData,
	hidePopupWithAnimation
} from './../actions';

import {
	getPriceChange,
	doesLocalStorageExist
} from './../helpers';


export const CurrencyPairs = connect(

	state => ({
		isFetchingTicker: state.fetchData.isFetchingTicker,
		isPopupMounted: state.popupParams.isPopupMounted,
		ticker: state.fetchData.ticker,
		tickerError: state.fetchData.tickerError
	}),

	{ fetchData }
	
)(Pairs)

export const CurrencyList = connect(

	state => {
		let ticker = state.fetchData.ticker || {};
		let localTicker;

		if (!doesLocalStorageExist(localStorage.getItem('ticker'))) {

			localStorage.setItem('ticker', JSON.stringify(ticker));
			localTicker = ticker;

		} else {

			localTicker = JSON.parse(localStorage.getItem('ticker'));
	
		}

		return {
			ticker,
			localTicker
		}
	}

)(List)

export const SingleCurrencyPair = connect(

	null,

	{ showPopupWithUpdatedData }

)(SinglePair)

export const CurrencyPopup = connect(

	state => ({
		isFetchingTicker: state.fetchData.isFetchingTicker,
		isFetchingOrder: state.fetchData.isFetchingOrder,
		orderBookError: state.fetchData.orderBookError,
		currentPair: state.popupParams.currentPair,
		isInAnimation: state.popupParams.isInAnimation
	}),

	{ hidePopupWithAnimation }

)(Popup)

export const CurrencyInfoHeader = connect(

	state => {
		const currentPair = state.popupParams.currentPair;
		const price = state.fetchData.ticker[currentPair].buy_price;
		const priceFromStorage = 
			JSON.parse(localStorage.getItem('ticker'))[currentPair].buy_price;
		const change = getPriceChange(price, priceFromStorage);

		return {
			currentPair,
			price,
			change
		}
	}

)(InfoHeader)

export const CurrencyPairInfo = connect(

	state => {

		const current = state.popupParams.currentPair;

		return {
			tickerInfo: state.fetchData.ticker[current] || {}
		}

	}

)(PairInfo)

export const BuyTable = connect(

	state => ({
		list: state.fetchData.orderBook.ask.slice(0, 50) || []
	})

)(Table)

export const SellTable = connect(

	state => ({
		list: state.fetchData.orderBook.bid.slice(0, 50) || []
	})

)(Table)