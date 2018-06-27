import { 
	SHOW_POPUP,
	SHOWING_ANIMATION,
	HIDE_POPUP,
	HIDING_ANIMATION
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
		case SHOWING_ANIMATION:
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
		case HIDING_ANIMATION:
			return {
				...state,
				isInAnimation: false
			}
		default:
			return state
	}
}

export default popupParams