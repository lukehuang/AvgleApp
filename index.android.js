/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon} from 'native-base';
import Video from 'react-native-video';
import {
    StackNavigator,
} from 'react-navigation';
//screens
import DetailScreen from './app/DetailScreen.js';
import MainScreen from './app/MainScreen.js';

const AvgleApp = StackNavigator({
  MainScreen: {screen: MainScreen},
  DetailScreen: {screen: DetailScreen}
});


AppRegistry.registerComponent('AvgleApp', () => AvgleApp);