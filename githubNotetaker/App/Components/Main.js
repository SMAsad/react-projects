// var React = require('react-native');

// import React, { Component } from 'react';
// var {
// 	View,
// 	Text,
// 	StyleSheet
// } = React;


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 30,
		marginTop: 65,
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: '#48BBEC'
	}
})

// class Main extends React.Component {
export default class Main extends Component {
	render(){
		return (
			<View style={styles.mainContainer}>
				<Text> Testing the Router </Text>
			</View>
		)
	}
}