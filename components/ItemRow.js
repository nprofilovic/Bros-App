import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { Container,Icon, Header, Content, List, ListItem,  Thumbnail, Text, Body, Right } from 'native-base';
import EventItem from './EventItem';

export default class ItemRow extends Component {
    

    render() {
        let event = this.props.event;
        
        return (
            <View>
            <ListItem onPress={this.props.onOpenEvent}>
                  <Thumbnail  size={80} source={{ uri: event.featured_image_src }} />
                  <Body>
                    <Text>{`${event.title.rendered.toUpperCase()}`}</Text>
                    
                  </Body>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
            </ListItem>
            
            </View>
        )
        
    }

    
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5, 
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },
    
});