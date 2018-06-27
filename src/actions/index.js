import { API_URL } from './../config';
import { handleResponse } from './../helpers';

export const REQUEST_TICKER = 'REQUEST_TICKER';
export const RECEIVE_TICKER = 'RECEIVE_TICKER';
export const REQUEST_ORDER_BOOK = 'REQUEST_ORDER_BOOK';
export const RECEIVE_ORDER_BOOK = 'RECEIVE_ORDER_BOOK';
export const REQUEST_TICKER_FAILURE = 'REQUEST_TICKER_FAILURE';
export const REQUEST_ORDER_BOOK_FAILURE = 'REQUEST_ORDER_BOOK_FAILURE';

export const SHOW_POPUP = 'SHOW_POPUP';
export const SHOWING_ANIMATION = 'SHOWING_ANIMATION';
export const HIDE_POPUP = 'HIDE_POPUP';
export const HIDING_ANIMATION = 'HIDING_ANIMATION';

const requestTicker = () => ({
	type: REQUEST_TICKER
});

const receiveTicker = ticker => ({
	type: RECEIVE_TICKER,
	ticker
});

const requestTickerFailure = () => ({
	type: REQUEST_TICKER_FAILURE
});

export const fetchData = pair => dispatch => {

	dispatch(requestTicker())
	
	fetch(`${API_URL}/ticker/`)
	.then(handleResponse)
	
	.then(json => {
		
		if (pair) {
			dispatch(fetchOrderBook(pair))
		}

		dispatch(receiveTicker(json))
	},
		error => {
			dispatch(requestTickerFailure())
			console.log('request failed', error)
		}
	)
	
}

const requestOrderBook = () => ({
	type: REQUEST_ORDER_BOOK
});

const receiveOrderBook = orderBook => ({
	type: RECEIVE_ORDER_BOOK,
	orderBook
});

const requestOrderBookFailure = () => ({
	type: REQUEST_ORDER_BOOK_FAILURE
});

const fetchOrderBook = pair => dispatch => {
	dispatch(requestOrderBook())

	fetch(`${API_URL}/order_book/?pair=${pair}`)
	.then(handleResponse)
	.then(json => {
		dispatch(receiveOrderBook(json[pair]))
	},
		error => {
			dispatch(requestOrderBookFailure());
			console.log('request failed', error);
		}
	)
}

const showPopup = currentPair => ({
	type: SHOW_POPUP,
	currentPair
});

const showingAnimation = () => ({
	type: SHOWING_ANIMATION
});

export const showPopupWithUpdatedData = currentPair => dispatch => {
	dispatch(showPopup(currentPair));
	dispatch(showingAnimation());
	dispatch(fetchData(currentPair));
}

const hidePopup = () => ({
	type: HIDE_POPUP
});

const hidingAnimation = () => ({
	type: HIDING_ANIMATION
});

export const hidePopupWithAnimation = delay => dispatch => {
	dispatch(hidingAnimation())
	setTimeout(() => dispatch(hidePopup()), delay)
};