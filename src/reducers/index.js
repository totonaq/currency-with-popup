import { combineReducers } from 'redux';
import fetchData from './fetchData';
import popupParams from './popupParams';

const CurrencyApp = combineReducers({
	fetchData,
	popupParams
})

export default CurrencyApp