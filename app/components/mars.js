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
          
          <View style={{padding: 20, width: 414, height: null, backgroundColor: '#1a1a1a', marginTop: 20,}}>
            <StatusBar />
            <Text style={style.marsHeading}>Mars</Text>

            <Text style={style.marsIntro}>
              The Red-Planet has always been known for its dry, dead features
              and goliath landscape features. In recent years, the National 
              Aeronautics and Space Administration (NASA), has sent 3 
              car-sized Rovers to roam about the surface of Mars. Below, are
              rare pictures from all 3 of the Rovers- Curiosity, Spirit and
              Opportunity.
            </Text>

          </View>
          
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  
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
        marginTop: 40,
        lineHeight: 35
  }

});
