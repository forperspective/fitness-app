/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Button,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import { DrawerNavigator } from 'react-navigation';

//import Icon from 'react-native-vector-icons/FontAwesome';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';

import SplashScreen from 'react-native-splash-screen';

import FirstScreen from './screens/FirstScreen';
import GallaryScreen from './screens/GallaryScreen';
import ContactScreen from './screens/ContactScreen';
import AbouyUSScreen from './screens/AbouyUSScreen';
import JoinusScreen from './screens/JoinusScreen';


const Gallarystack = StackNavigator({
  Second: {
    screen: GallaryScreen,
    navigationOptions: ({navigation}) => ({
    title: 'الجاليري',
    headerStyle: {
       //backgroundColor: '#212222', 
       elevation: null
       //

    },
    headerTitleStyle: {
      //color: '#fff',
      marginLeft:150,
    },
    params: navigation.state.params,
    headerRight: (
        <TouchableOpacity
        onPress={() => navigation.navigate('DrawerOpen')}
        underlayColor={'#444444'}
        >
        <Image source={require('./images/if_menu-alt_134216.png')} ></Image>
        </TouchableOpacity>
      
     )
    })

  

  }
  
});

const Contactstack = StackNavigator({
  Second: {
    screen: ContactScreen,
    navigationOptions: ({navigation}) => ({
    title: 'تواصل معنا',
    headerStyle: {
       //backgroundColor: '#212222', 
       elevation: null
       //

    },
    headerTitleStyle: {
      //color: '#fff',
      marginLeft:150,
    },
    params: navigation.state.params,
    headerRight: (
        <TouchableOpacity
        onPress={() => navigation.navigate('DrawerOpen')}
        underlayColor={'#444444'}
        >
        <Image source={require('./images/if_menu-alt_134216.png')} ></Image>
        </TouchableOpacity>
      
     )
    })

  

  }
  
});



const Joinusstack = StackNavigator({
  Second: {
    screen: JoinusScreen,
    navigationOptions: ({navigation}) => ({
    title: 'انضم الينا',
    headerStyle: {
       //backgroundColor: '#212222', 
       elevation: null
       //

    },
    headerTitleStyle: {
      //color: '#fff',
      marginLeft:150,
    },
    params: navigation.state.params,
    headerRight: (
        <TouchableOpacity
        onPress={() => navigation.navigate('DrawerOpen')}
        underlayColor={'#444444'}
        >
        <Image source={require('./images/if_menu-alt_134216.png')} ></Image>
        </TouchableOpacity>
      
     )
    })

  

  }
  
});




const AbouyUSstack = StackNavigator({
  Second: {
    screen: AbouyUSScreen,
    navigationOptions: ({navigation}) => ({
    title: 'من نحن',
    headerStyle: {
       //backgroundColor: '#212222', 
       elevation: null
       //

    },
    headerTitleStyle: {
      //color: '#fff',
      marginLeft:150,
    },
    titleStyle: {
          color: "green",
            
    },
    style: {
        backgroundColor: 'blow'
    },

    params: navigation.state.params,
    headerRight: (
        <TouchableOpacity
        onPress={() => navigation.navigate('DrawerOpen')}
        underlayColor={'#444444'}
        >
        <Image source={require('./images/if_menu-alt_134216.png')} ></Image>
        </TouchableOpacity>
      
     )
    })

  

  }
  
});


const  SimpleAppNavigator = DrawerNavigator(
{
  First: { path:'/',screen: FirstScreen },
  Gallary: { path:'/galary',screen: Gallarystack },
  Contact: { path:'/contactus',screen: Contactstack },
  Joinus: { path:'/joinus',screen: Joinusstack },
  AbouyUS: { path:'/aboutus',screen: AbouyUSstack }
},
{ 
  initialRouteName:'First',
  drawerPosition  :'right',
  contentOptions: {
       activeTintColor: '#000',
    },
}
);


//export default SimpleAppNavigator;



const AppNavigation = () => (
  <SimpleAppNavigator  />

);

export default class bodytech extends React.Component {
  componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
  }
  render() {
    return (
      <AppNavigation/>
    );
  }
}
AppRegistry.registerComponent('bodytech', () => bodytech);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


