import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet,Button,ScrollView } from 'react-native'

export default class JoinusScreen extends React.Component {
   static navigationOptions={
     title: 'انضم الينا',
      //drawerLabel:'انضم الينا',
      drawerLabel: ()=>{
           return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <Text>
              انضم الينا 
              </Text>
            </View>

            );
         }
   }
   constructor(props){
      super(props);
      this.state = {
        email: '',
        userName: '',
        phone: '',
        message:''
      };
   }
   /*handleEmail(text){
      this.setState({ email: text })
   }
   handlePassword(text){
      this.setState({ password: text })
   }*/
   validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
   };
   login(){
      alert('email: ' + this.state.email + ' userName: ' + this.state.userName)
   }
   _handlePress() {
     console.log(this.state.email);
     console.log(this.state.userName);
     if (!this.validateEmail(this.state.email) || this.state.userName=='' || this.state.phone =='') {
        alert('مطلوب ادخال الحقول');
     }else{
        alert('تم الارسال بنجاح');
        //this.state.email
     }
   }
   render(){
      return (
        <ScrollView style={{ backgroundColor: '#1b1c1c',flex:1 }}>
           <View style = {styles.container}>
              <Text style={{color:'white',fontSize: 20,textAlign: 'center'}}>انضم الينا</Text>

              <Text style={{color:'#fff'}}> الاسم </Text>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "User Name"
                 placeholderTextColor = "#fff"
                 autoCapitalize = "none"
                 returnKeyLabel = {"next"}
                 onChangeText={(text) => this.setState({userName:text})}/>

              <Text style={{color:'#fff'}}> البريد الالكتروني </Text>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Email"
                 placeholderTextColor = "#fff"
                 autoCapitalize = "none"
                 returnKeyLabel = {"next"}
                 onChangeText={(text) => this.setState({email:text})}/>
              

              <Text style={{color:'#fff'}}>  الهاتف </Text>
              <TextInput style = {styles.input}
                 underlineColorAndroid = "transparent"
                 placeholder = "Phone"
                 placeholderTextColor = "#fff"
                 autoCapitalize = "none"
                 returnKeyLabel = {"next"}
                 onChangeText={(text) => this.setState({phone:text})}/>
               
              <Text style={{color:'#fff'}}>  التفاصيل  </Text>
              <TextInput style = {{height: 100,margin: 15,borderColor: '#fff',borderWidth: 1,backgroundColor: '#fff'}}
                 underlineColorAndroid = "transparent"
                 placeholder = "Phone"
                 placeholderTextColor = "#fff"
                 autoCapitalize = "none"
                 returnKeyLabel = {"next"}
                 multiline
                 numberOfLines = {4}
                 onChangeText={(text) => this.setState({message:text})}/>
              


              <Button 
                onPress={() => this._handlePress()}
                style={styles.submitButton} title="ارسل">
              </Button>



           </View>
         </ScrollView >
      )
   }
}
//export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      backgroundColor: '#1b1c1c',
      flex:1
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#fff',
      borderWidth: 1,
      backgroundColor: '#fff',

   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   heading: {
        fontSize: 30,
        marginTop: 20
    },
});