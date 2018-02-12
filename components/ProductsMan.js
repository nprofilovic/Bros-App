import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class ProductsMan extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
          return <Icon type="foundation" name="torso" size={24} color={tintColor} />
        }
    }
    render(){
        return(
            <View style={styles.container}>
                 <Text>Products Man Page</Text>
       
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