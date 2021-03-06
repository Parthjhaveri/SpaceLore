// IMPORT EVERYTHING
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableHighlight, StatusBar, Navigator } from 'react-native';
import MainPage from './app/components/main.js';
import IndexPage from './app/components/indexpage.js';
import MarsPage from './app/components/mars.js';

// SET EACH PAGE EQUAL TO A VARIABLE -------------+
var mainPage = './app/components/main.js';
var indexPage = './app/components/indexpage.js';
var marsPage = './app/components/mars.js';
// -----------------------------------------------+

export default class AstroScoop extends Component {

   navigate(routeName) {
      this.props.navigator.push({
         name: routeName
      })
   }

   // -----------------------------------------------

   renderScene(route, navigator){ 
      
      if (route.name === 'MainPage') {
        return <MainPage navigator = {navigator} />
      }

      if (route.name === 'IndexPage') {
        return <IndexPage navigator = {navigator} />
      }

      if (route.name === 'MarsPage') {
        return <MarsPage navigator = {navigator} />
      }

   }

// RENDER
render() {
    return (  
        
            <Navigator
              initialRoute={{name: 'MainPage'}}
              renderScene={this.renderScene.bind(this)}
            />
    );
  }
}


AppRegistry.registerComponent('AstroScoop', () => AstroScoop);
