import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, TouchableHighlight, StatusBar, Navigator } from 'react-native';
// import IndexPage from './app/components/indexpage.js';

export default class MainPage extends Component {

navigate(routeName) {
  this.props.navigator.push({
     name: routeName
  })
}

 renderScene(route, navigator){ 
    
    if (route.name === 'MainPage') {
      return <MainPage navigator = {navigator} />
    }

    if (route.name === 'IndexPage') {
        return <IndexPage navigator = {navigator} />
    }

 }

render() {
    return (
      <View>
          
          <View style={{width: 414, height: 736, backgroundColor: '#1a1a1a', marginTop: 20,}}>
            <StatusBar />
            <Text style={style.red}>SpaceLore</Text>
            <Text style={style.heading}>Everything Space & Defense</Text>

            <View style={style.line}></View>

            <TouchableHighlight onPress={this.navigate.bind(this, 'IndexPage')}>
              <Text style={style.getStarted}>Get Started</Text>
            </TouchableHighlight>


          </View>
          
      </View>
    )
  }
}

const style = StyleSheet.create({
  
  red: {color: '#55f4ad',
        fontWeight: 'bold',
        fontSize: 50,
        alignSelf: 'center',
        marginTop: 200,
        fontFamily: 'arial'
  },

  heading: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center'
  },

  getStarted: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderColor: '#55f4ad',
        borderRadius: 5,
        padding: 10
  }, 

  button: {
      width: 100,
      height: 35,
      color: 'white'
  },

  line: {
      width: 300,
      height: 1,
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 30,
  }

});
