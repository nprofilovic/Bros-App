import React from 'react';
import { View, 
         Text, 
         StyleSheet, 
         ScrollView, 
         Image, 
         Dimensions, 
         Platform,
         TouchableWithoutFeedback,
         Modal,
         StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageElement from './ImageElement';
import Lightbox from 'react-native-lightbox';



const apiUrl = 'http://www.bros-jeans.com/wp-json/wp/v2/posts?per_page=10';
const WINDOW_WIDTH = Dimensions.get('window').width;
const BASE_PADDING = 10;

class Photos extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Photos',
      drawerIcon: ({tintColor}) => (
        <Icon type="material-community" name="calendar" size={24} color={tintColor} />
      )
    }
    constructor(){
      super();

      this.state = {
        modalVisible: false,
        modalImage: require('../img/bros-banner.jpg'),
        images: []
      }
    }
    static navigationOptions = {
      tabBarIcon: () => {
        return <Icon type="font-awesome" name="photo" size={24} />
      }
    }

    

    getImage(){
      return this.state.modalImage;
    }
    
    fatchData = async() => {
      const res = await
      fetch(apiUrl);

      const posts = await res.json();
      
      
      this.setState({images: posts});
     
    
    }
    componentDidMount(){
          this.fatchData();
         
          
      }
    setModalVisible(visible, imageKey){
      
      this.setState({modalImage: this.state.images[imageKey]});
        this.setState({modalVisible: visible});
        
      }
    render(){
     
      let images = this.state.images.map((val, key) => {
        return <Lightbox key={key}  >
                <View style={styles.imagewrap}>
                  <ImageElement imgsource={{uri: val.better_featured_image.source_url}} style={styles.modal} title={val.title.rendered}></ImageElement>
                </View>
               </Lightbox>
      })
      
      
      return(
       <ScrollView> 
        <View style={styles.container}>
            
            {images}
        </View>
        </ScrollView>
      );
    }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#eee',
    paddingTop: 30,
  },
  imagewrap: {
   
    height: (Dimensions.get('window').height/3) - 12,
    width: (Dimensions.get('window').width/2) - 4,
    backgroundColor: '#fff',
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  text: {
    color: '#fff',

  }
})
export default Photos;
