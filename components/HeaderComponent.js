import React from 'react';
import { View, Text, Image, Button, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon  } from 'react-native-elements';

export default class HeaderComoponent extends React.Component {
    render(){
        return(
          <View style={styles.container} onPress={() => {this.props.navigation.navigate('DrawerOpen'); }} >
            <TouchableHighlight style={styles.touchBtn} >
               <Icon type="font-awesome" name="bars" size={24} />
            </TouchableHighlight>
            <Image style={styles.logo}
                source={require('../img/logobros.png')}
                 resizeMode="contain"
             />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  touchBtn: {
    marginLeft: 10,
    marginTop: 20
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