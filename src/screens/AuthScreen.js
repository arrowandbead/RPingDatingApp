import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import colorScheme from '../../color_scheme.js'
import { TextInput } from 'react-native-gesture-handler'
import { signin, signup } from '../services/firebase/account'
import {
    Link, Redirect
  } from "react-router-native";

const Screens = {
    LOGIN: 'Login',
    REGISTER: 'Register',
    NONE: 'none',
}


class LoginButton extends Component{
    constructor(props) {
        super(props)
        this.props.onPress = this.props.onPress.bind(this)
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.loginButton} title="Login" onPress={this.props.onPress}>
                <Link to="/tabnavigator">
                    <Text style={styles.loginText}>Login</Text>
                </Link>
                </TouchableOpacity>
                
                <Link to="/register"><Text>Need to register?</Text></Link>
                
            </View>
        )
    }
}

class RegisterButton extends Component{
    constructor(props) {
        super(props)
        this.props.onPress = this.props.onPress.bind(this)
    }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.loginButton} title="Login" onPress={this.props.onPress}>
                    <Link to="/tabnavigator">
                        <Text style={styles.loginText}>Register</Text>
                    </Link>
                </TouchableOpacity>
                <Link to="/login"><Text>Already have an account?</Text></Link>
            </View>
        )
    }
}


class EnterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: Screens.NONE,
            error: null,
            email: '',
            password: '',
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(text) {
        this.setState({
            ...this.state,
            email: text
        });
    }

    handleChangePass(text) {
        this.setState({
            ...this.state,
            password: text
        });
    }

    async handleSubmit() {
        this.setState({ ...this.state, error: '' });
        try {
            if (this.state.type === Screens.LOGIN) {
                await signin(this.state.email, this.state.password);
            } else if (this.state.type === Screens.REGISTER) {
                await signup(this.state.email, this.state.password);
            }
        } catch (error) {
            this.setState({...this.state, error: error.message });
        }
    }

    render(){
        return(
            <View style={styles.loginScreen}>
                <Text>{this.state.type} Screen</Text>
                <View style={styles.loginForm}>

                    <TextInput style = {styles.textInputs} placeholder="email" onChangeText={this.handleChangeEmail} value={this.state.email} autoCompleteType="username"></TextInput>
                    <TextInput style = {styles.textInputs} placeholder="password" onChangeText={this.handleChangePass} value={this.state.password} autoCompleteType="password" secureTextEntry={true}></TextInput>

                    <Text style={styles.error}> {this.state.error ? <Text>{this.state.error}</Text> : null}</Text>
                    { this.state.type === Screens.LOGIN ? <LoginButton onPress={this.handleSubmit}/> : null } 
                    { this.state.type === Screens.REGISTER ? <RegisterButton onPress={this.handleSubmit}/> : null } 
                </View>
                
            </View>
        )
    }
}


export class LoginScreen extends EnterScreen{
    constructor(props) {
        super(props)
        this.state.type = Screens.LOGIN
    }
}

export class RegisterScreen extends EnterScreen{
    constructor(props) {
        super(props)
        this.state.type = Screens.REGISTER
    }
}



const styles = StyleSheet.create({
    error: {
        fontFamily : "Cochin",
        color: "#FF0000",
    },
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