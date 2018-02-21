'use strict';

import React, {Component} from "react";
import { View, TouchableOpacity, Image, Modal, StyleSheet,Button} from "react-native";
import css from "../styles/product";
import style from "../styles/style";
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right,  } from 'native-base';


export default class ProductItem extends Component {
  constructor(){
    super();
    this.state= {
      modalVisible: false,
     
    }
  }
  
  
  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal(){
    this.setState({ modalVisible: false });
  }
	render() {
    const cards = [
      {
        text: 'Card One',
        name: 'One',
        image: require('../img/get-1.jpg'),
      },
      {
        text: 'Card two',
        name: 'One',
        image: require('../img/get-1.jpg'),
      },
      {
        text: 'Card tree',
        name: 'One',
        image: require('../img/get-1.jpg'),
      },
    ]  
		return (
            <View style={styles.container}>
              
              <Modal
                  visible={this.state.modalVisible}
                  animationType={'slide'}
                  onRequestClose={() => this.closeModal()}
              >
                <View style={styles.modalContainer}>
                  
                <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                      <Card style={{ elevation: 3 }}>
                        <CardItem>
                          <Left>
                            <Thumbnail source={item.image} />
                            <Body>
                              <Text>{item.text}</Text>
                              <Text note>NativeBase</Text>
                            </Body>
                          </Left>
                        </CardItem>
                        <CardItem cardBody>
                          <Image style={{ height: 300, flex: 1 }} source={item.image} />
                        </CardItem>
                        <CardItem>
                          <Icon name="heart" style={{ color: '#ED4A6A' }} />
                          <Text>{item.name}</Text>
                        </CardItem>
                      </Card>
                    }
                  />


                  
                    <Button
                        onPress={() => this.closeModal()}
                        title="Close modal"
                    >
                    </Button>
                  </View>
                
              </Modal>
              
              <TouchableOpacity onPress={() => this.openModal()}>             
              <Card style={{ elevation: 3 }}>
                  <CardItem>
                      <Left>
                          <Thumbnail source={{uri: "http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg"}}  />
                              <Body >
                                <Text>{this.props.product.name} </Text>
                                <Text note>{this.props.product.categories[0].name}</Text>
                              </Body>
                      </Left>
                  </CardItem>
                  <CardItem cardBody>
                      <Image style={{ height: 550, flex: 1 }} source={{uri: this.props.product.images[0].src}} onPress={() => this.openModal()} />
                  </CardItem>
                  <CardItem style={{height: 80}}>
                    <Left>
                      <Text>{this.props.product.name}</Text>
                    </Left>
                    <Body>
                    <Button
                        onPress={() => this.openModal()}
                        title="Open modal"
                    >
                      <Text>Otvori</Text>
                    </Button>
                    </Body>  
                    <Right>
                      <Text style={ { marginLeft: 50}}>{this.props.product.price }din.</Text>
                    </Right>
                  </CardItem>
              </Card>
              </TouchableOpacity>
            </View>
		);
	}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    
    backgroundColor: 'white',
  },
  innerContainer: {
    alignItems: 'center',
  },
});