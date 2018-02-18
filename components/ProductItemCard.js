import React from 'react';

import { View, Text, Image } from 'react-native';

export default class ProductItemCard extends React.Component {
    backButton = () => {
        this.props.navigation.navigate('Proizvodi');
      }

      

    render(){
        
        return(
            <Text>Proba</Text>
        );
    }
}