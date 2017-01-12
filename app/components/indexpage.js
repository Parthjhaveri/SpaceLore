import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ListView, Button, TouchableHighlight, StatusBar, Navigator } from 'react-native';

export default class IndexPage extends Component {

static get defaultProps() {
  return {
    title: 'Index Page',
    backToHome: 'Home'
  };
}

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

  if (route.name === 'MarsPage') {
      return <MarsPage navigator = {navigator} />
  }

}

// constructor(props) {
//   super(props);
//   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
//   this.state = {
//     dataSource: ds.cloneWithRows([
//       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//     ])
//   };
// }

render() {
    return (
      <View>
          
          <View style={{padding: 50, width: 414, height: 736, backgroundColor: '#1a1a1a', marginTop: 20,}}>
            <StatusBar />
            <Text style={style.grey}>Index</Text>
            
            <View style={style.line}></View>
            
            <TouchableHighlight onPress={this.navigate.bind(this, 'MarsPage')}>
              <Text style={style.listItem}>Mars Pics</Text>
            </TouchableHighlight>


            <Text style={style.listItem}>Asteroids</Text>
            <Text style={style.listItem}>APOD</Text>
            <Text style={style.listItem}>Space Station</Text>
            <Text style={style.listItem}>Defense news</Text>

            <View style={style.lineTwo}></View>

            {
              // <TouchableHighlight onPress={this.navigate.bind(this, 'MainPage')}>
              //   <Text style={style.home}>{this.props.backToHome}</Text>
              // </TouchableHighlight>
            }

          </View>
          
      </View>
    )
  }
}

const style = StyleSheet.create({
  
  grey: {
        color: '#55f4ad',
        fontWeight: 'bold',
        fontSize: 50,
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'arial',
        marginBottom: 20,
  },

  home: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 50,
        alignSelf: 'center',
        fontFamily: 'arial',
  },

  listItem: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 20,
        fontFamily: 'arial',
  },

   line: {
      width: 300,
      height: 2,
      backgroundColor: 'white',
      alignSelf: 'center',
      marginBottom: 30,
  },


   lineTwo: {
      width: 300,
      height: 2,
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 50,
  }

});
