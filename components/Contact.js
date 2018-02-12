import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
export default class Contact extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Kontakt',
        drawerIcon: ({tintColor}) => (
          <Icon type="material-community" name="contact-mail" size={24} color={tintColor} />
        )
      }
    render(){
        return(
            <View style={styles.container}>
                 <Text>Contact Page</Text>
                 <Button onPress={() => this.props.navigation.navigate('Woman')} title="Events Item" />
       
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