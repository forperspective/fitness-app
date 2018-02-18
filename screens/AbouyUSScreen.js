import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,Dimensions,Platform,Spacer
} from 'react-native';


import {
  Card,
  Icon,
} from 'react-native-material-design';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme,
} from 'react-native-material-kit';
const theme = getTheme();
import CardMedia from 'react-native-card-media';

const path = '';
const files1 = [
  `${path}kids_play_640.jpeg`,
];

const { height, width } = Dimensions.get('window');

export default class AbouyUSScreen extends React.Component {

  static navigationOptions={
       title: '<Text> 1من نحن</Text>',
         //drawerLabel:'<Text> 2من نحن </Text>',
         drawerLabel: ()=>{
           return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text>
              من نحن
              </Text>
            </View>

            );
         }
               
         
  }
  constructor(props) {
     super(props)
     this.state = { 
        age: 18,
        size: { width, height },
        gists : []
      }
  } 
  onPress() {
    console.log('on Press');
  }

  renderImageIconView() {
    return (
      <Icon
        name="image"
        color="#fafafa"
        size={24}
        style={{ top: 6 }}
      />
    );
  }
  componentDidMount() {
        this.fetchMoviesData();
  }
  getVal(val){
      console.warn(val);
  }   
  fetchMoviesData() {
      var url = 'http://bodytec-iraq.com/api/get-sliders';
      fetch(url)
        .then( response => response.json() )
        .then( jsonData => {
          this.setState({
            //moviesData: jsonData.galleries,
            gists:jsonData.sliders,
            isLoading:true
          });
        })
      .catch( error => console.log('Error fetching: ' + error) );
  }
  WholeNews() {
      //alert(width); 360
      var action = (<Text> My action</Text>);
      var menu = (
         <MKIconToggle
          checked={true}
          
          >
          <Text pointerEvents="none"
                style={styles.toggleTextOff}>Off</Text>
          <Text state_checked={true}
                pointerEvents="none"
                style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
        </MKIconToggle>
      );
      return this.state.gists.map(function(news, i){

        if(news.sl_img){
            /*return(
            <Card key={i} style={styles.cardStyle}>

              <Card.Media
                        image={<Image source={{uri:'http://bodytec-iraq.com/app/Modules/Pages/public/assets/images/sliders/'+news.sl_img }}></Image>}
                        overlay
                    />

              <Card.Body>
                <Text>
                  {news.sl_title}
                </Text>
              </Card.Body>
            </Card>
            
          );*/
          if(width<320){
            var newwidth=width-60;
          }else{

            var newwidth=width-30;
          }    
          return(

          <View key={i} style={[theme.cardStyle,{marginBottom:10,width:newwidth}]}>
            <Image source={{uri : 'http://bodytec-iraq.com/app/Modules/Pages/public/assets/images/sliders/'+news.sl_img}} style={[theme.cardImageStyle,{height:400,width:width,justifyContent:'center',alignItems:'center',}]}/>
            <Text style={theme.cardTitleStyle}></Text>
            <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
              style={{
                padding : 15,
              }}
              >
              <Text style={[theme.cardContentStyle, {padding:0}]}>
                ............................................
              </Text>
            </View>
            <View style={theme.cardActionStyle}>
              <Text>{news.sl_title}</Text>
            </View>
          </View>


          );
        }
      });


  }
  render() {
    
    
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
             {this.WholeNews()}
        </View>
      </ScrollView>
    )
    
  }
}

const styles = StyleSheet.create({
  scene: {
    marginTop: 10,
    backgroundColor:'#212222'
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212222',
  },
  cardStyle: {
    width: width-30,
    
  },
  gridItemImage: {
      width: width,
      height: 145,
      justifyContent:'center',
      alignItems:'center',
  },
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    /*backgroundColor: '#F5FCFF',*/
    backgroundColor: '#212222',
    padding: 10,
    marginTop: Platform.OS === 'android' ? 0 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7, marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10, marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 10, marginBottom: 20,
    fontSize: 12,
    fontWeight: '300',
},
});
