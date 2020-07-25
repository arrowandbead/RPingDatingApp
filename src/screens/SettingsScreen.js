import React, { Component } from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { signout } from '../services/firebase/account'
import { Link } from "react-router-native"


class SettingsScreen extends Component{
    componentDidMount(){
        console.log("did mount")
    }

    render(){
        return(
            <View>
                <Text>SettingsScreen</Text>
                <TouchableOpacity style={styles.logoutButton} title="Logout" onPress={signout}>
                <Link to="/tabnavigator">
                    <Text>
                        gjhghjkghjkghjghjghgkjhhg
                    </Text>
                </Link>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logoutButton: {
      backgroundColor: 'blue',
      marginTop: 20,
      padding: 20,
    },
  });

export default SettingsScreen;