import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ProductsWoman extends React.Component {
    static navigationOptions = {
        tabBarIcon: () => {
          return <Icon type="foundation" name="torso-female" size={24} />
        }
    }
    render(){
        return(
            <View style={styles.container}>
                 <Text>Products Woman Page</Text>
       
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