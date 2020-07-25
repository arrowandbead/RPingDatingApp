import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import colorScheme from '../../color_scheme.js'


function thing(){
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

    render(){
        return(
            <View style={styles.loginScreen}>
                <Text>Login Screen</Text>
                <View>
                    <TouchableOpacity style={styles.loginButton} title="Login" onPress={() => this.props.navigation.replace("Dicks Out")}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginButton: {
      backgroundColor: colorScheme.defaultButtonColor,
      width : 50,
      height: 20,
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
        paddingTop : 15
    }
  });

export default LoginScreen;