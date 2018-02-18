
import React from 'react';
import{
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  Dimensions	
} from 'react-native';

import { Col, Row, Grid } from "react-native-easy-grid";
//import { withNavigation } from 'react-navigation';

//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var width = Dimensions.get('window').width; 
var height = Dimensions.get('window').height; 
export default class FirstScreen extends React.Component{
	static navigationOptions={
	 	 title: 'الرئيسية',
	   //drawerLabel:'الرئيسية',
     drawerLabel: ()=>{
           return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text>
                الرئيسية   
              </Text>
            </View>

            );
      }     
	        	 
       
  }
	render(){
    const { navigate } = this.props.navigation;
		return(

			

	    <Image
			    source={require('../assets/drawable/home.png')}
			    style={styles.mainContainer}>  
	        <Grid>
	 
	          
	            <Col size={45}>
	                <Row size={50} ></Row>
	                <Row size={50} ></Row>
	            </Col>
	            <Col size={55}>
	                <Row size={45} ></Row>
	                <Row size={10} >
							<TouchableOpacity onPress={() => navigate('Joinus', { user: 'Lucy' })} >
					              <Image
					              source={require('../images/Button1.png')}
					              >
					              </Image>  
				           </TouchableOpacity>
	                </Row>
	                <Row size={7} ></Row>
	                <Row size={13} >
							<TouchableOpacity onPress={() => navigate('Gallary', { user: 'Lucy' })} >
							              <Image
							              source={require('../images/Button2.png')}
							              >
							              </Image>  
				           </TouchableOpacity>      

	                </Row>

	                <Row size={5} ></Row>
	                <Row size={13} >
							<TouchableOpacity onPress={() => navigate('Contact', { user: 'Lucy' })} >
							              <Image
							              source={require('../images/Buttom3.png')}
							              >
							              </Image> 

				           </TouchableOpacity>  


	                </Row>
	                <Row size={7} ></Row>
	            </Col>

	        </Grid>
         </Image>

      	);


	}

}

//<Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Open draw nav"/>

const styles = StyleSheet.create({
 mainContainer: {
  flex: 1,
  alignSelf: 'stretch',
  width: null,
  //backgroundColor:'transparent',
  /*justifyContent: 'center',
  alignItems: 'center',*/
  },
  orange_box: {
    borderColor: 'orange', borderWidth: 1,
    backgroundColor: 'orange'
  },
  green_box: {
    borderColor: 'green', borderWidth: 1,
    backgroundColor: 'green'
  },
  gray_box: {
    borderColor: 'gray', borderWidth: 1,
    backgroundColor: 'gray'
  }

});
