'use strict';

import React, {Component} from "react";
import {
	TextInput,

	View,
	Image,
	StatusBarIOS,
	ListView,
	Animated,
	TouchableOpacity,
	ScrollView,
	Platform,
	Dimensions,
	NetInfo,
	DeviceEventEmitter
} from "react-native";
import { Icon } from 'react-native-elements';
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
import ProductItem from "./ProductItem";
import Api from "../WooCommerce/Api";
import css from "../styles/style";
import product from "../styles/product";
var offset = 0;
var offsetHeader = 100;
var beta = 50;

export default class Product extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => {
          return <Icon type="foundation" name="torso-female" size={24} color={tintColor} />
        }
    }

	constructor(props) {
		super(props);
		this.data = [];
		this.state = {
		    page: 1,
			limit: 30,
			status: "publish",
		    categories: 21,
			isOnline: true,
			isLoading: false,
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
			categories: this.state.categories
		})
			.then(function (data) {
				console.log(data);

				self.data = self.data.concat(data);
				self.setState({
                    page: self.state.page + 1,
                    categories: self.state.categories,
					finish: data.length < self.state.limit,
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
    
    
	render() {
       
		return (
			<View >
				
				<ScrollView
					style={{paddingTop: 20}}
					onScroll={this.onScroll.bind(this)} scrollEventThrottle={30}
				>
					<ListView
						onEndReached={this.onEndReached.bind(this)}
						dataSource={this.state.dataSource}
						renderRow={this.renderRow}>
					</ListView>
				</ScrollView>
			</View>
		);
	}
}
