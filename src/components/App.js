import React from 'react';
import './App.css';
import './../styles/App-media.css';
import './../styles/LoadAnimation.css';
import { CurrencyPairs } from './../containers/containers'

const App = () => {
	return (
		<section className='app'>
			<div className='app-header'>
				<h1 className='app-header__text'>Сам себе трейдер</h1>
			</div>
			<CurrencyPairs />
		</section>
	)
}

export default App