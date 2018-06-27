import React, { Component } from 'react';
import { CurrencyPairInfo, CurrencyInfoHeader } from './../containers/containers';
import TradeInfo from './../components/TradeInfo';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { bookOrderErrorMsg } from './../helpers';
import PropTypes from 'prop-types';

import 'simplebar';
import 'simplebar/dist/simplebar.css';

class Popup extends Component {

	componentDidMount() {
		document.body.classList.add('no-scroll')
	}

	componentWillUnmount() {
		document.body.classList.remove('no-scroll')
	}
	
	render () {

		const {
			isFetchingTicker,
			isFetchingOrder,
			isInAnimation,
			orderBookError,
			hidePopupWithAnimation
		} = this.props;


		// right after it's mounting the component receives in-animation class ('popup-open')
		// right before unmounting it receives out-animation class ('popup-closed')
		const animationClass = isInAnimation ? ' popup-open' : ' popup-closed';


		// before changing the value of this const
		// be sure it is not less than
		// animation duration parameter of
		// .popup-closed class 
		// (see App.css)
		const animationDuration = 600;

		return(
			<section className={`app-content-popup-wrap${animationClass}`}>
				<div className="app-content-popup">
					<CurrencyInfoHeader />
					<button
						className="app-content-popup-close"
						onClick={() => hidePopupWithAnimation(animationDuration)}>
					</button>

						{
							(isFetchingTicker || isFetchingOrder) ?

								<Loading /> :

								orderBookError ?

								<ErrorMessage msg={bookOrderErrorMsg} /> :

								<div className="app-content-popup-info">
									<CurrencyPairInfo />
									<TradeInfo />
								</div>

						}
					
				</div>
			</section>
		)
	}
}

Popup.propTypes = {
	isFetchingTicker: PropTypes.bool.isRequired,
	isFetchingOrder: PropTypes.bool.isRequired,
	orderBookError: PropTypes.bool.isRequired,
	isInAnimation: PropTypes.bool.isRequired,
	currentPair: PropTypes.string.isRequired,
	hidePopupWithAnimation: PropTypes.func.isRequired
}

export default Popup