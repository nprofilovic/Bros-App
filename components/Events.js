import React from 'react';
import { View, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator, StatusBar } from 'react-native';
import { Icon,  Avatar  } from 'react-native-elements';
import HTML from 'react-native-render-html';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
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
      page: 1,
      refreshing: false,
      siteTitle: ''
    };
  }


  fetchData = () => {

    const { page } = this.state;
    const url = `http://www.bros-jeans.com/wp-json/wp/v2/posts?page=${page}&results=20`;
 
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
  componentDidMount(){
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

  onOpenEvent = () => {
    console.log('====================================');
    console.log('Event Press');
    console.log('====================================');
    this.props.navigation.navigate('EventItem');
  } 
  render(){
   console.log('====================================');
   console.log(this.state.data);
   console.log('====================================');
    return(
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }} >
        <FlatList
          
          data={this.state.data}
          keyExtractor={item => item.id}
          
          ListFooterComponent={this.renderFooter}
          renderItem={({ item }) =>  
          
              <View>
                <ListItem>
                  <Thumbnail square size={80} source={{ uri: item.better_featured_image.source_url }} />
                  <Body>
                    <Text>{item.title.rendered}</Text>
                    <Text note>Its time to build a difference . .</Text>
                  </Body>
                </ListItem>
             
            </View>
            
          }
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