import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ list, title }) => {

	return(
		<div className="app-content-popup-info-trade-table">
			<h3 className="app-content-popup-info-trade-table__header">{title}</h3>
			<div data-simplebar className="app-content-popup-info-trade-table-wrap">
				<table className="app-content-popup-info-trade-table-body">
					<thead>
						<tr>
							<th className="app-content-popup-info-trade-table-body__row_head">Цена</th>
							<th className="app-content-popup-info-trade-table-body__row_head">Количество</th>
							<th className="app-content-popup-info-trade-table-body__row_head">Сумма</th>
						</tr>

						{
							list.reduce((result, current, i) => {
								
								let tr = 
									<tr key={i}>
										{
											current.map((item, j) => {
												return (
													<td
														className="app-content-popup-info-trade-table-body__row"
														key={`${i}.${j}`}>{item}
													</td>
												)
											})
										}
									</tr>
								
								result.push(tr)
									
								return result
							}, [])
						}
						
					</thead>
				</table>
			</div>
		</div>
	)
}

Table.propTypes = {
	list: PropTypes.array.isRequired
}

export default Table