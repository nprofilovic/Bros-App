import React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { Icon } from 'react-native-elements';

export default class Contact extends React.Component {
    static navigationOptions = {
        drawerLabel: 'O Nama',
        drawerIcon: ({tintColor}) => (
          <Icon type="material-community" name="comment-account" size={24} color={tintColor} />
        )
      }
    render(){
        return(
            <Container>
               
                <Content padder>
                <Card>
                    <CardItem>
                    <Body>
                        <Text>Chat App to talk some awesome people!</Text>
                    </Body>
                    </CardItem>
                </Card>
                <Button full rounded dark
                    style={{ marginTop: 10 }}
                    onPress={() => this.props.navigation.navigate("Chat")}>
                    <Text>Chat With People</Text>
                </Button>
                <Button full rounded primary
                    style={{ marginTop: 10 }}
                    onPress={() => this.props.navigation.navigate("Profile")}>
                    <Text>Goto Profiles</Text>
                </Button>
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
    
  });