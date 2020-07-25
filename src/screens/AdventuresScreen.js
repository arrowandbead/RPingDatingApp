import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import colorScheme from '../../color_scheme'



class AdventuresScreen extends Component{
    componentDidMount(){
        //ssss
        console.log("did mount")
    }

    render(){
        return(
            <View style={styles.mainAdventuresStyle}>
                <View style={styles.title}>
                    <Text style>Adventures</Text>
                </View>
                
            </View>
        )
    }
}

const styles = {
    mainAdventuresStyle : {
        padding : 20,
        backgroundColor : colorScheme.defaultBackground,
        flex : 1,
        alignItems : "center",
    },
    title : {
        backgroundColor : colorScheme.adventuresTitleBackground,
        color : colorScheme.adventuresTitleText,
        fontSize : 35,
        borderRadius : 20,
        padding : 5

    }
}

export default AdventuresScreen;