import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProductsNavi from './ProductsNavi';
import { Icon } from 'react-native-elements';

export default class AllProducts extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Proizvodi',
      drawerIcon: ({tintColor}) => (
        <Icon type="material-community" name="tshirt-crew" size={24} color={tintColor}  />
      )
    }
    render(){
        return(
            <View style={styles.container}>
                 <ProductsNavi />
       
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    
    
  });