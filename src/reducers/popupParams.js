import { 
	SHOW_POPUP,
	SHOW_ANIMATION,
	HIDE_POPUP,
	HIDE_ANIMATION
} from './../actions';

const initialState = {
	isPopupMounted: false
}

const popupParams = (state = initialState, action) => {
	switch(action.type) {
		case SHOW_POPUP:
			return {
				...state,
				isPopupMounted: true,
				currentPair: action.currentPair
			}
		case SHOW_ANIMATION:
			return {
				...state,
				isInAnimation: true
			}
		case HIDE_POPUP:
			return {
				...state,
				isPopupMounted: false,
				currentPair: {}
			}
		case HIDE_ANIMATION:
			return {
				...state,
				isInAnimation: false
			}
		default:
			return state
	}
}

export default popupParams