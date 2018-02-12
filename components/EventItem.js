import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

export default class EventItem extends React.Component {
    
    render(){
        return(
            <View style={styles.container}>
                 <Text>Event Item Page</Text>
       
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