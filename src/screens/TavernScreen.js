import React, { Component } from 'react'
import {Text, View} from 'react-native'
import colorScheme from '../../color_scheme'
import TavernProfile from '../Components/TavernComponents/TavernProfile'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {FontAwesome5, FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';



class TavernScreen extends Component{
    constructor(props){
        super(props)
    }
    loadProfiles() {

    }
    nextProfile() {
        
    }
    render(){
        return(
            <View style = {styles.MainTavernStyle}>
                <TavernProfile/>
                <View style = {styles.buttonHolder}>
                    <TouchableOpacity style = {styles.bottomBarButton}>
                        <MaterialCommunityIcons name = "treasure-chest" size={20} color="gold"></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bottomBarButton}>
                        <MaterialCommunityIcons name = "kabaddi" size={20}></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bottomBarButton}>
                        <FontAwesome name = "handshake-o" size={20} color="green"></FontAwesome>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bottomBarButton}>
                        <FontAwesome5 name = "dragon" size={20} color="red"></FontAwesome5>
                    </TouchableOpacity>
                </View>
        </View>
        )
    }
}

const styles = {
    MainTavernStyle : {
        backgroundColor : colorScheme.defaultBackground,
        flex : 1,
    },
    ProfileHolder : {
        borderRadius : 20,
        flex : 1,
        padding : 10,
        backgroundColor : "white"
    },
    buttonHolder : {
        backgroundColor : "pink",
        flex : 1,
        borderBottomRightRadius : 20,
        borderBottomLeftRadius : 20,
        justifyContent : "space-between",
        flexDirection : "row",
        alignItems : "center",
        paddingLeft : 15,
        paddingRight : 15
    },
    bottomBarButton : {
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 100,
        backgroundColor : "white",
        height : 50,
        width : 50
    }
}

export default TavernScreen;