/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// var React = require('react-native');
// var Main = require('./App/Components/Main');

import Main from './App/Components/Main';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
// var {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   NavigatorIOS,
//   View  
// } = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
});

// class githubNotetaker extends React.Component {
export default class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Githhub Notetaker',
          component: Main
        }}
      />
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
