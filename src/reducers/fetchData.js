import { 
	REQUEST_TICKER,
	RECEIVE_TICKER,
	REQUEST_TICKER_FAILURE,
	REQUEST_ORDER_BOOK,
	RECEIVE_ORDER_BOOK,
	REQUEST_ORDER_BOOK_FAILURE
} from './../actions';

const initialState = {
	isFetchingTicker: false,
	tickerError: false,
	isFetchingOrder: false,
	orderBookError: false,
	ticker: {}
}

const fetchData = (state = initialState, action) => {
	switch(action.type) {
		case REQUEST_TICKER:
			return {
				...state,
				isFetchingTicker: true
			}
		case RECEIVE_TICKER:
			return {
				...state,
				isFetchingTicker: false,
				tickerError: false,
				ticker: action.ticker
			}
		case REQUEST_TICKER_FAILURE:
			return {
				...state,
				tickerError: true,
				isFetchingTicker: false
			}
		case REQUEST_ORDER_BOOK:
			return {
				...state,
				isFetchingOrder: true
			}
		case RECEIVE_ORDER_BOOK:
			return {
				...state,
				isFetchingOrder: false,
				orderBookError: false,
				orderBook: action.orderBook
			}
		case REQUEST_ORDER_BOOK_FAILURE:
			return {
				...state,
				orderBookError: true,
				isFetchingOrder: false,
				orderBook: {}
			}
		default:
			return state
	}
}

export default fetchData