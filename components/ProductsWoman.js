'use strict';

import React, {Component} from "react";
import {
	TextInput,
	Text,
	View,
	Image,
	StatusBarIOS,
	ListView,
  Animated,
  ActivityIndicator,
	TouchableOpacity,
	ScrollView,
	Platform,
	Dimensions,
	NetInfo,
	DeviceEventEmitter
} from "react-native";
import { Icon, SearchBar } from 'react-native-elements';
import ProductItem from "./ProductItem";
import Api from "../WooCommerce/Api";
import css from "../styles/style";
import product from "../styles/product";
var offset = 0;
var offsetHeader = 100;
var beta = 50;

export default class ProductsWoman extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
          return <Icon type="foundation" name="torso" size={24} color={tintColor} />
        }
    }


	constructor(props) {
		super(props);
		this.data = [];
		this.state = {
			page: 1,
			limit: 5,
			status: "publish",
			categories:[
				{
					id: 547
				},
				{
					id: 21
				}
      ],
      data:[],
      text: '',
			isOnline: true,
      isLoading: false,
      refreshing: false,
			finish: false,
			_animatedMenu: new Animated.Value(0),
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => true
			})
		}
	}

	hideMenu() {
		Animated.spring(this.state._animatedMenu, {
			toValue: -120
		}).start();
	}

	showMenu() {
		Animated.spring(this.state._animatedMenu, {
			toValue: 0
		}).start();
	}

	onScroll(event) {
		var currentOffset = event.nativeEvent.contentOffset.y;

		if (currentOffset < offsetHeader) {
			return;
		}

		if (Math.abs(offset - currentOffset) <= beta)
			return;


		if (currentOffset > offset) {
			this.hideMenu();
		} else if (currentOffset < offset) {
			this.showMenu()
		}
		offset = currentOffset;
	}

	componentWillMount() {
		this.fetchData();
	}

	fetchData() {
		var self = this;
		if (this.state.finish || !this.state.isOnline) {
			return;
		}
		self.setState({isLoading: true});

		Api.get('products', {
			per_page: this.state.limit,
			page: this.state.page,
			status: this.state.status,
			categories:this.state.categories[0].id
		})
			.then(function (data) {
				console.log(data);

				self.data = self.data.concat(data);
				self.setState({
					page: self.state.page + 1,
					finish: data.length < self.state.limit,
					categories: self.state.categories,
					isLoading: false,
					dataSource: self.getDataSource(self.data)
				});
			});
	}


	getDataSource(products) {
		return this.state.dataSource.cloneWithRows(products);
	}

	onEndReached() {
		this.fetchData();
	}

	renderRow(product) {
		return (
			<ProductItem product={product}></ProductItem>
		);
	}
  filterSearch(text) {
    const data = this.fetchData();
    const newData = data.filter((item) => {
        const itemData = item.name.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    });

    this.setState({
        text: text,
        dataSource: this.state.dataSource.cloneWithRows(newData)
    });
  }

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

	render() {
    
    
		if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
		
		return (
			<View style={product.color}>
        

				<ScrollView
					style={{paddingTop: 20}}
					onScroll={this.onScroll.bind(this)} scrollEventThrottle={30}
				>
					
					<ListView
						onEndReached={this.onEndReached.bind(this)}
						dataSource={this.state.dataSource}
            onRefresh={this.handleRefresh}
            ListFooterComponent={this.renderFooter}
            onEndReached={this.handleLoadMore}
						renderRow={this.renderRow}>
            
					</ListView>
				</ScrollView>
			</View>
		);
	}
}
