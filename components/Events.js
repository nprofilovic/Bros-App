import React from 'react';
import { View, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator, StatusBar } from 'react-native';
import { Icon,  Avatar  } from 'react-native-elements';
import HTML from 'react-native-render-html';
import { Container, Header, Content, List, ListItem,  Thumbnail, Text, Body, Right } from 'native-base';
import ItemRow from './ItemRow';



export default class Events extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Vesti',
    drawerIcon: ({tintColor}) => (
      <Icon type="material-community" name="calendar" size={24} color={tintColor} />
    )
  }
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 0,
      refreshing: false,
      siteTitle: ''
    };
  }


  fetchData = () => {

    const { page } = this.state;
    const url = `http://www.bros-jeans.com/wp-json/wp/v2/posts?page=${page}&results=20&categories=101`;
 
    this.setState({ loading: true });
    fetch(url)
      .then(res => { 
        return res.json()
      })
      .then(res => {
        const arrayData = [...this.state.data, ...res]
        this.setState({
          data: page === 1 ? res : arrayData,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({ loading: false });
      });
  };
  componentWillMount(){
    const urlSiteDetail = "http://www.bros-jeans.com/wp-json"
    fetch(urlSiteDetail)
    .then(res => {

      return res.json()
    })
    .then(res => {
      this.setState({
       siteTitle: res.name
      });
    })
    .catch(error => {

    });

    this.fetchData();
    
  }
  
 
  renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.fetchData();
      }
    );
  };

  onOpenEvent = (item) => {
    this.props.navigation.navigate('EventItem', {
      image: item.featured_image_src,
      title: item.title.rendered,
      content: item.content.rendered,
      date: item.date
    });
  } 
  render(){
  
    return(
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
        <FlatList
          
          data={this.state.data}
          keyExtractor={item => item.id}
          
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) =>{
             
              return (
               <View> 
                <ItemRow event={item} onOpenEvent={() => this.onOpenEvent(item)}/>
                
              </View>
              )
            }}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
          
        />
    </List>

    );
  }

}
const styles = StyleSheet.create({
    header: {
        height: 60,
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#ccc'
    },
    
})