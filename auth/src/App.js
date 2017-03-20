import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
	state = {loggedIn: null}

	componentWillMount() {
		firebase.initializeApp({
	    apiKey: 'AIzaSyDN9W__EHBhSiL4aVdcopKjtynxmf0Of3U',
	    authDomain: 'auth-31161.firebaseapp.com',
	    databaseURL: 'https://auth-31161.firebaseio.com',
	    storageBucket: 'auth-31161.appspot.com',
	    messagingSenderId: '213197525420'
	  });

	  firebase.auth().onAuthStateChanged((user) => {
	  	if (user) {
	  		this.setState({ loggedIn: true});
	  	} else {
	  		this.setState({ loggedIn: false});
	  	}
	  });
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
	        <View style={{flexDirection: 'row'}}>
	          <Button onPress={() => firebase.auth().signOut()}>
	            Log Out
	          </Button>
	        </View>
				)
			case false:
				return <LoginForm />
			default:
				return (
					<View style={{paddingTop: 50}}>
						<Spinner size="large" />
					</View>
				)
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;