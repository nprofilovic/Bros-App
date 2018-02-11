
import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from './Home';
import Events from './Events';
import { Icon } from 'react-native-elements';


// drawer stack
const DrawerStack = DrawerNavigator({
  Home: { screen: Home },
  Events: { screen: Events },
 
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: 'white'},
    headerTitle: () => <Image style={{width: 90, height: 39}}
        source={require('../img/logobros.png')}
        resizeMode="contain"
      />,
    headerLeft: <Icon 
        iconStyle={styles.touchBtn} 
        color='#ac1d21' 
        onPress={() => {
            if (navigation.state.index === 0) {
              navigation.navigate('DrawerOpen')
            } else {
            navigation.navigate('DrawerClose')
          }
    }} 
        type="font-awesome" 
        name="bars" 
        size={24} 
        />
  })
})

const styles = StyleSheet.create({
    
    touchBtn: {
      marginLeft: 20,
      
    },
    logo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 120,
      marginTop: 20,
      width:110,
      height: 50,
    }
  });
export default DrawerNavigation;