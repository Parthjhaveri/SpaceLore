import React, { Component, PropTypes } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ListView, Button, TouchableHighlight, StatusBar, Navigator } from 'react-native';

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
      <View>
          
          <View style={{padding: 50, width: 414, height: 736, backgroundColor: '#1a1a1a', marginTop: 20,}}>
            <StatusBar />
            <Text style={style.marsHeading}>Mars</Text>

          </View>
          
      </View>
    )
  }
}

const style = StyleSheet.create({
  
  marsHeading: {
        color: '#e2ad68',
        fontWeight: 'bold',
        fontSize: 50,
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'arial',
        marginBottom: 20,
        padding: 40
  }

});
