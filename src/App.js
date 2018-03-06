import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import logo from './logo.svg';
import store from './container/index';
import Calculator from './views/Calculator';
import style from './App.css';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
			  <div className="App">
				<Calculator/>
			  </div>
			</Provider>
		);
	}
}

export default App;
