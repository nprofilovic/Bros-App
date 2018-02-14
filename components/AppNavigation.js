
import React from 'react'
import { Text, StyleSheet, Image } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import Home from './Home';
import Events from './Events';
import Photos from './Photos';
import Contact from './Contact';
import AllProducts from './AllProducts';
import About from './About';
import Stores from './Stores';
import EventItem from './EventItem';
import { Icon } from 'react-native-elements';


// drawer stack
const DrawerStack = DrawerNavigator({
  Naslovna: { screen: Home },
  Vesti: { screen: Events },
  Photos: { screen: Photos },
  Prodizvodi: { screen: AllProducts },
  Prodavnice: { screen: Stores },
  Onama: { screen: About },
  Kontakt: { screen: Contact },
  EventItem: {screen: EventItem,
    navigationOptions: {
      drawerLabel: () => null // to hide this header
    },
  }
  
 
},
{
  contentOptions: {
    activeTintColor: '#ac1d21',
  },
  
}
)

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
        type="material-community" 
        name="menu" 
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