import React, { Component, PropTypes } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, Image, ListView, Button, TouchableHighlight, StatusBar, Navigator } from 'react-native';

export default class MarsPage extends Component {

static get defaultProps() {
  return {
    title: 'Mars Page',
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
      <ScrollView>
          
          <TouchableHighlight onPress={this.navigate.bind(this, 'IndexPage')}>
            <Text style={style.nav}>Back to Index</Text>
          </TouchableHighlight>
          <StatusBar hidden/>
          <View style={{padding: 20, width: 414, height: null, backgroundColor: '#1a1a1a',}}>
            <Text style={style.marsHeading}>Mars</Text>
            <View style={style.line}></View>
            <Text style={style.marsIntro}>
              The Red-Planet has always been known for its dry, dead features
              and goliath landscape features. In recent years, the National 
              Aeronautics and Space Administration (NASA), has sent 3 
              car-sized Rovers to roam about the surface of Mars. Below, are
              rare pictures from all 3 of the Rovers- Curiosity, Spirit and
              Opportunity.
            </Text>
            
            <Text style={style.curiosityHeading}>Curiosity</Text>
            <View style={style.curiosityPics}>

            </View>

            <Text style={style.spiritHeading}>Spirit</Text>
            <View style={style.spiritPics}>

            </View>

            <Text style={style.oppHeading}>Opportunity</Text>
            <View style={style.oppPics}>

            </View>

          </View>
          
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({

  nav: {
        width: 414,
        height: null,
        backgroundColor: 'white',
        padding: 10,
        fontFamily: 'arial',
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
  },
  
  marsHeading: {
        color: '#e2ad68',
        fontWeight: 'bold',
        fontSize: 50,
        alignSelf: 'center',
        fontFamily: 'arial',
        marginTop: 30
  },

  marsIntro: {
        color: 'white',
        fontFamily: 'arial',
        fontSize: 20,
        marginTop: 30,
        lineHeight: 35
  },

  curiosityHeading: {
        color: '#e2ad68',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'arial',
        marginTop: 30
  },

  curiosityPics: {
        alignSelf: 'center',
        width: 370,
        height: 300,
        marginTop: 40,
        borderWidth: 2,
        borderColor: 'white'
  },

  spiritHeading: {
        color: '#e2ad68',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'arial',
        marginTop: 30
  },

  spiritPics: {
        alignSelf: 'center',
        width: 370,
        height: 300,
        marginTop: 40,
        borderWidth: 2,
        borderColor: 'white'
  },

  oppHeading: {
        color: '#e2ad68',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        fontFamily: 'arial',
        marginTop: 30
  },

  oppPics: {
        alignSelf: 'center',
        width: 370,
        height: 300,
        marginTop: 40,
        borderWidth: 2,
        borderColor: 'white'
  },

   line: {
      width: 370,
      height: 2,
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 20,
  },

});
