import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator} from 'react-navigation';
import AppNavigation from './components/AppNavigation';
import MainService from './services/MainService';


export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super();
    MainService.load(v => this.setState({loaded: true}));
  }

  render() {
    return (
      <View style={styles.container}>
       
       {this.state.loaded ? <AppNavigation /> : 
       <Image source={require('./img/bglogo.jpg')} style={{height: '100%', width: '100%'}}/>}
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
