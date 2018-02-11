import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Icon  } from 'react-native-elements';


export default class Events extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Events',
    drawerIcon: () => (
      <Icon type="material-community" name="calendar" size={24} />
    )
  }
    render(){
      
        return(
          <View style={styles.container}>
            <Text>This is Events Page</Text>
          </View>
        );
    }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});