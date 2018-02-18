'use strict';

import React, {Component} from "react";
import { View, TouchableOpacity, Image} from "react-native";
import css from "../styles/product";
import style from "../styles/style";
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';


export default class ProductItem extends Component {
    
	render() {
       
		return (
            <Card style={{ elevation: 3 }}>
                <CardItem onPress = {this.productCard}>
                    <Left>
                        <Thumbnail source={{uri: "http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg"}} />
                            <Body>
                              <Text>{this.props.product.name}</Text>
                              <Text note>{this.props.product.categories[0].name}</Text>
                            </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image style={{ height: 550, flex: 1 }} source={{uri: this.props.product.images[0].src}} />
                </CardItem>
                <CardItem style={{height: 80}}>
                    <Text>{this.props.product.name}</Text>
                    
                    <Right>
                    <Text style={ { marginLeft: 50}}>{this.props.product.price }din.</Text>
                    </Right>
                </CardItem>
            </Card>
            
		);
	}

}