import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button,  Left, Body } from 'native-base';
import HTML from 'react-native-render-html';

export default class EventItem extends React.Component {
    backButton = () => {
      this.props.navigation.navigate('Vesti');
    }
    render(){
      const { ...params } = this.props.navigation.state;
    
      const featured_image = this.props.navigation.state.params.image
      const title = this.props.navigation.state.params.title
      const content = this.props.navigation.state.params.content
      const date = this.props.navigation.state.params.date
      var dateFormat = require('dateformat');
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
                        
                        <Left>
                        <HTML html={`${title.toUpperCase()}`} />
                        <Text note>{dateFormat(date, "ddd, mmmm dS, yyyy")}</Text>
                        </Left>
                    </Left>
                    </CardItem>
                    <CardItem>
                    <Body>
                        <Image source={{uri: featured_image }} style={{height: 200, width: "100%", flex: 1}}/>
                        
                        <HTML html={`${content}`} />
                        
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
    },
    contentText: {
      paddingTop: 20,

    },
    titleText:{
      fontSize:20,
      fontWeight: 'bold'
    },
    
    
  });