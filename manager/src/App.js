import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: "AIzaSyBnOTFbHX1w5PwBSN3TUsaPHPb00rvKSio",
	    authDomain: "manager-d72bb.firebaseapp.com",
	    databaseURL: "https://manager-d72bb.firebaseio.com",
	    storageBucket: "manager-d72bb.appspot.com",
	    messagingSenderId: "444524995608"
	  };

	  firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
				<Router />
			</Provider>
		);
	}
}

export default App;