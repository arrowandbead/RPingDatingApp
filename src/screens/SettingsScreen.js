import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'



class SettingsScreen extends Component{
    componentDidMount(){
        //ssss
        console.log("did mount")
    }

    render(){
        return(
            <View>
                <Text>SettingsScreen</Text>
                <TouchableOpacity style={styles.logoutButton} title="Login" onPress={() => this.props.navigation.replace("LoginScreen")}>
                    <Text>
                        wewew
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoutButton: {
      backgroundColor: 'blue',
    },
  });

export default SettingsScreen;