import React from 'react'

const Loading = () => {
	return(
		<div className="loading">
			<div className="lds-css ng-scope">
				<div className="lds-facebook">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<p className="loading__label">Загрузка...</p>
		</div>
	)
}

export default Loading