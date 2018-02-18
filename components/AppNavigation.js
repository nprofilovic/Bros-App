
import React from 'react'
import { Text, StyleSheet, Image, View, Container, Header, Body, Content } from 'react-native'
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation'
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

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header>
      <Body>
        <Image style={styles.headerLogo} source={{uri: "http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg"}}/>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
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
    },
    headerLogo: {
      height: 150,
      width: 150
    }
  });
export default DrawerNavigation;