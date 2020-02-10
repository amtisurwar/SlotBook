import React, { Component } from 'react';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import Login from './Login';
import Home from './Home';

const LoginStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
    })
  },
},
  { headerLayoutPreset: 'center' }
  , {
    initialRouteName: 'Login'
  });


module.exports = LoginStack;