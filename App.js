import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { StackNavigator, DrawerNavigator} from 'react-navigation';
import Home from './components/Home';
import Events from './components/Events';
import ContentContainer from './components/ContentContainer';
import AppNavigation from './components/AppNavigation';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <AppNavigation />
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    justifyContent: 'center',
  },
});
