import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;