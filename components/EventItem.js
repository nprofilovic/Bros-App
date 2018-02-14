import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,  Left, Body } from 'native-base';


export default class EventItem extends React.Component {
    backButton = () => {
      this.props.navigation.navigate('Vesti');
    }
    render(){
        return(
            <Container>
                <Header style={styles.headerBackground}>
                  <Left>
                    <Text style={styles.textButton} onPress={this.backButton}>Nazad</Text>
                  </Left>
                </Header>
                <Content>
                <Card style={{flex: 0}}>
                    <CardItem>
                    <Left>
                        <Thumbnail source={{uri: 'Image URL'}} />
                        <Body>
                        <Text>NativeBase</Text>
                        <Text note>April 15, 2016</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                        <Text>
                        //Your text here
                        </Text>
                    </Body>
                    </CardItem>
                    
                </Card>
                </Content>
            </Container>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%'
    },
    headerBackground: {
      backgroundColor: '#ac1d21',
    },
    textButton: {
      color: 'white'
    }
    
  });