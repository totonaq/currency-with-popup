import React from 'react';
import PropTypes from 'prop-types';

const PairInfo = ({ tickerInfo }) => {

	const { vol, vol_curr, avg, high, low } = tickerInfo;
	return(
		<div className="app-content-popup-info-stat">
			<p className="app-content-popup-info-stat__title">Статистика за 24 часа:</p>
			<div className="app-content-popup-info-stat__table-wrap">
				<table className="app-content-popup-info-stat__table">
					<tbody>
						<tr>
							<td>Объем торгов:</td>
							<td>{vol}</td>
						</tr>
						<tr>
							<td>Сумма сделок:</td>
							<td>{vol_curr}</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="app-content-popup-info-stat__table-wrap">
				<table className="app-content-popup-info-stat__table">
					<tbody>
						<tr>
							<td>Средняя цена сделки:</td>
							<td>{avg}</td>
						</tr>
						<tr>
							<td>Максимальная цена сделки:</td>
							<td>{high}</td>
						</tr>
						<tr>
							<td>Минимальная цена сделки:</td>
							<td>{low}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

PairInfo.propTypes = {
	tickerInfo: PropTypes.object.isRequired
}

export default PairInfo