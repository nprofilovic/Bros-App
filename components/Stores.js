import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem, Thumbnail } from "native-base";
import { Icon } from 'react-native-elements';
import Lightbox from 'react-native-lightbox';

export default class Stores extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Prodavnice',
        drawerIcon: ({tintColor}) => (
          <Icon type="material-community" name="map-marker" size={24} color={tintColor} />
        )
      }
    render(){
        return(
            <Container>
              <Header style={styles.header}>
                <Right>
                  <Title style={styles.headerText}>Prodavnice</Title>
                </Right>
              </Header>

              <Content>
                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Beograd</Text>
                        <Text note>Maloprodaja i Veleprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2014/09/Bros-Beograd-Bulevar-Kralja-Aleksandra.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      
                      <Text style={styles.text}>
                          Veleprodaja:{"\n"}
                          Bros BELMAX centar, Autoput br.20, Zemun{"\n"}
                          tel: 064/85 75 884 - Veleprodaja{"\n"}{"\n"}
                          Maloprodaja:{"\n"}
                          ul.Bulevar Kralja Aleksandra br.212 {"\n"}
                          tel: 064/8575863
                      </Text>
                    </Body>
                  </CardItem>
                  
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Novi Pazar</Text>
                        <Text note>Veleprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/01.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>
                                     
                      Outlet Bros Store{"\n"}
                      ul. Trnava bb, tel: 020/389 – 051, 064/85 – 75 – 871{"\n"}
                      fax: 020/389 – 050{"\n"}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Jagodina</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/bros-jagodina.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                                               
                          ul. Stevana Ivanovica bb u tržnom centru Biser{"\n"}
                          tel: 064/85 75 889{"\n"}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Valjevo</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2014/09/bros-valjevo.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          
                          ul.Karadjordjeva 127{"\n"}
                          tel: 064/85-75-860{"\n"}
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Lazarevac</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2014/09/Bros-Lazarevac-e1430730722876.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          
                      ul.Dula Karaklajica 1/A,{"\n"}
                      tel: 011/812-43-67, {"\n"}
                      064/ 85-75-878
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Čačak</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/bros-cacak.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          ul. Gradsko setaliste bb{"\n"}
                          tel:032/344 - 184,{"\n"}
                          064/85 - 75 - 881
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Šabac</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2014/09/Bros-Jeans-sabac-e1430730167702.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          Karadjordjeva 43{"\n"}
                          tel: 015/347 - 225, {"\n"}
                          064/85 - 75 - 882
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Bor</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/Bros-bor.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          ul.Zeleni bulevar {"\n"}
                          tel:064/352 - 5000
                      </Text>
                    </Body>
                  </CardItem>
                </Card>


                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Kragujevac</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2014/09/Bros-Kragujevac-e1430731735930.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          ul.Lole Ribara 24{"\n"}
                          tel:063/601 - 973
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Leskovac</Text>
                        <Text note>Maloprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2015/05/bros-leskovac-e1430734796905.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          ul. Juznomoravskih brigada br.9{"\n"}
                          tel:016/212-888 ,{"\n"} 
                          064/85-75-888
                      </Text>
                    </Body>
                  </CardItem>
                </Card>

                <Card style={{flex: 0}}>
                  <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/logobros-kocka.jpg'}} />
                      <Body>
                        <Text>Bros Brčko BiH</Text>
                        <Text note>Maloprodaja i Veleprodaja</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/05.jpg'}} style={{height: 200, width: "100%", flex: 1}}/>
                      <Text style={styles.text}>       
                          Trznica Arizona{"\n"}
                          Brčko Bosna i Hercegovina{"\n"}
                          tel:+387 65 680 462
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
  text: {
      
      paddingTop:20,
      paddingBottom: 10,
  },
  headerText: {
   fontStyle: 'italic',
   color: '#ffffff'
   
  },
  header: {
    backgroundColor: '#ac1d21',
  } 
    
  });