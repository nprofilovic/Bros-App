import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { StackNavigator, DrawerNavigator} from 'react-navigation';
import Home from './components/Home';
import Events from './components/Events';
import ContentContainer from './components/ContentContainer';
import AppNavigation from './components/AppNavigation';

const DrawerNavigation = StackNavigator({
  Home: { screen: Home }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
    headerLeft: <Text onPress={() => 
      navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})
const DrawerStack = DrawerNavigator({
  Home: { screen: Home },
  Events: { screen: Events },
  
})
const Navigator = DrawerNavigator ({
  Home: { 
    screen: Home,
    navigationOptions: {
      headerTitle: () => <Image style={{width: 90, height: 39}}
        source={require('./img/logobros.png')}
        resizeMode="contain"
      />,
    }, 
  },
  Events: {
    screen: Events,
    navigationOptions: {
      title: 'Events',
    },
  },
  ContentContainer: {
    screen: ContentContainer,
    navigationOptions:{
      title: 'Content'
    }
  }
})



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
