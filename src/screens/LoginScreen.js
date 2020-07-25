import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import colorScheme from '../../color_scheme.js'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler'



function tryLogin(){
    console.log("thing")
}
class LoginScreen extends Component{
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        //ssss
        console.log("did mount")
    }

    tryLogin(){
        this.props.navigation.navigate("Dicks Out")
    }

    render(){
        return(
            <View style={styles.loginScreen}>
                <Text>Login Screen</Text>
                <View style={styles.loginForm}>

                    <TextInput style = {styles.textInputs} placeholder="email"></TextInput>
                    <TextInput style = {styles.textInputs} placeholder="password"></TextInput>

                    <TouchableOpacity style={styles.loginButton} title="Login" onPress={() => this.tryLogin()}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
      backgroundColor: colorScheme.defaultButton,
      width : "50%",
      height: 30,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center"
    },
    loginText: {
        fontFamily : "Cochin",
        fontWeight : "bold",
        fontSize : 20
    },
    loginScreen: {
        backgroundColor: colorScheme.defaultBackground,
        flex : 1,
        padding : 15
    },
    textInputs: {
        backgroundColor : "white",
        borderWidth : 1,
        margin : 5,
        borderRadius : 10,
        width : "50%",
        height : "8%"
    },
    loginForm: {
        height : "60%",
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 3,
        borderRadius : 15
    }
  });

export default LoginScreen;