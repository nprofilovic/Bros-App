import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image } from 'react-native';
import { Icon  } from 'react-native-elements';

import Banner from './Banner';
import ContentContainer from './ContentContainer';
import Slide from './Slider';


export default class Home extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Home',
      drawerIcon: () => (
        <Icon type="material-community" name="home-circle" size={24} />
      )
    }

    render(){
     
        return(
        
          <ScrollView  style={styles.container}>
            
            <Slide />
            <ContentContainer />
            <Button onPress={() => this.props.navigation.navigate('Events')} title="Events Page" />
          </ScrollView>
        );
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  logo: {
    
    height: '40%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
  }
});
