import React from 'react';
import { View,Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Left, Right, Button, Body, Content,Text, Card, CardItem, Thumbnail } from "native-base";
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
              <Header style={styles.header}>
               
                <Right>
                    <Title style={styles.headerText}>O Nama</Title>
                </Right>
               
                </Header> 
               <Content>
                <Card style={{flex: 0}}>
                    
                    <CardItem>
                    <Body>
                        <Image source={{uri: 'http://www.bros-jeans.com/wp-content/uploads/2018/02/06.jpg'}} style={{height: 200, width: '100%', flex:1 }}/>
                        <Text style={styles.text}>
                        Bros JNS brand je domaća robna marka osnovana  1999. god. u Novom Pazaru koja se bavi izradom ženskih i muških odevnih predmeta od džinsa, kepera, pamuka i drugih materijala.{"\n"}{"\n"}

Brend Bros JNS ove godine obeležava 15 godina postojanja, uspešnog poslovanja i rada na domaćem i inostranom tržištu.{"\n"}{"\n"}

Sa 70% izvoza Bros JNS je dugi niz godina prisutan na tržištu Švedske, Poljske, Rusije, Nemačke, kao i na tržištu bivše republike Jugoslavije.  Poslednjih nekoliko godina beležimo dobre rezultate i na domaćem tržištu. Na teritoriji Srbije imamo svoje maloprodajne objekte koje su autentični i prepoznatljive po svom jedinstvenom enterijeru i izgledu. Unikatne Bros maloprodaje se nalaze u  Beogradu, Valjevu, Kragujevacu, Lazarevcu, Šabacu, Boru, Čačku i Novom Pazaru, dok naš proizvodni asotiman je zastupljen  u još 150 prodajnih objekata širom Srbije.{"\n"}{"\n"}

Sopstveni resursi za izradu gotovih proizvoda od ideje do realizacije. Za izardu novog proizvoda potrebno je nekoliko časova, imamo zaokružen celokupni proces proizvodnje odevnih predmeta u krugu sopstvene fabrike, i iskustvo preko 25 godina poslovanja.{"\n"}{"\n"}

Specifičnost Bros JNS brenda je što ima široku ponudu odevnih predmeta za sve uzraste. Bros JNS brend je tu da omogući našim potrošačima da pronađu svoj lični stil odevanja. Naše ime govori da smo svoji, autentični i originalni.{"\n"}{"\n"}

Ciljevi Bros JNS brend su proširenje asortiman prizvoda, povećanje broja maloprodajnih objekata, usavršavanje postojećih i uvođenje novih standarda u poslovanju i proizvodnji. Planirana saradnja sa afirmisanim dizajnerima, davanja prostora mladim ljudima, kao i društveno odgovaoran pristup!  Bros JNS čine uspešnim i posebnim, stručni tim mladih i uspešnih modelara i dizajnera, tim za nove izazove.{"\n"}{"\n"}

Srdačno, Vaš Bros JNS. 
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
        textAlign: 'justify',
        paddingTop:20,
        paddingBottom: 40,
    },
    headerText: {
     fontStyle: 'italic',
     color: '#ffffff'
     
    },
    header: {
      backgroundColor: '#ac1d21',
    } 
    
  });