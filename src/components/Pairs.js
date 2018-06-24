import React, { Component } from 'react';
import { CurrencyList, CurrencyPopup } from './../containers/containers';
import { tickerErrorMsg } from './../helpers';
import ErrorMessage from './ErrorMessage';
import Loading from './Loading';
import PropTypes from 'prop-types';

class Pairs extends Component {

	componentDidMount() {
		this.props.fetchData();
		window.addEventListener('beforeunload', this.saveStateToLocalStorage.bind(this))
	}

	componentWillUnmount() {
		window.removeEventListener('beforeunload', this.saveStateToLocalStorage.bind(this))
	}

	saveStateToLocalStorage() {
		localStorage.setItem('ticker', JSON.stringify(this.props.ticker))
	}

	render() {
		//console.log(this.props.ticker)
		const { isFetchingTicker, isPopupMounted, tickerError } = this.props

		return(
			<div className='app-content'>
				<h2 className='app-content-header'>Валютные пары</h2>
				{
					// not to show Loading component both
					// here and by mounting CurrencyPopup
					(isFetchingTicker && !isPopupMounted) ? 

					<Loading /> :

						tickerError ?
						
							<ErrorMessage msg={tickerErrorMsg} /> :

							<CurrencyList />
				}

				{
					// don't wait until CurrencyList has loaded 
					(isPopupMounted && !tickerError) && <CurrencyPopup />
				}
			</div>
		)
	}
}

Pairs.propTypes = {
	isFetchingTicker: PropTypes.bool.isRequired,
	isPopupMounted: PropTypes.bool.isRequired,
	ticker: PropTypes.object.isRequired,
	tickerError: PropTypes.bool.isRequired,
	fetchData: PropTypes.func.isRequired
}

export default Pairs