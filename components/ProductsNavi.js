import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation'
import ProductsMan from './ProductsMan';
import ProductsWoman from './ProductsWoman';


const ProductsNavi = TabNavigator ({
    Man: { screen: ProductsMan },
    Woman: { screen: ProductsWoman },
    
  },{
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: '#ac1d21'
    },
    contentOptions: {
        activeTintColor: '#ac1d21',
      },
  })


  export default ProductsNavi;