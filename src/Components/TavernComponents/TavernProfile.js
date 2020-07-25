import React, { Component } from "react";
import {Text, View, ImageBackground} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler'





class TavernProfile extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <View style = {styles.ProfileMain}>
                <ImageBackground style = {styles.ImageRow} source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7ac9d87d-89b9-4836-be74-57fc66ad4908/dc1tlg2-bc71c084-18d5-4cb9-a5fe-553eddb8795e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvN2FjOWQ4N2QtODliOS00ODM2LWJlNzQtNTdmYzY2YWQ0OTA4XC9kYzF0bGcyLWJjNzFjMDg0LTE4ZDUtNGNiOS1hNWZlLTU1M2VkZGI4Nzk1ZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.T4y2KFZxFB7crHXmzF7ZAPRscERFJcGjOoQTlGlLqSw"}}>
                    <TouchableHighlight title="GoLeft" style = {styles.TO} underlayColor="rgba(52, 52, 52, 0.5)" onPress={() => console.log("Help")}>
                            <AntDesign name="arrowleft" size={15}></AntDesign>
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.TO} title="GoRight"  underlayColor="rgba(52, 52, 52, 0.5)" onPress={() => console.log("Help")}>
                        <AntDesign name="arrowright" size={15}></AntDesign>
                    </TouchableHighlight>
                </ImageBackground>
                <Text> Waccka</Text>
            </View>
        )
    }
} 

const styles = {
    ProfileMain : {
        backgroundColor : "goldenrod",
        height : "85%",
        width : "100%",
        paddingTop : 20,
    },
    ImageRow : {
        width : "100%",
        height : "100%",
        flexDirection : "row",
        justifyContent : "space-between",
    },
    TO : {
        height : "100%",
        width : 100,
        justifyContent : "center",
        alignItems : "center"
    }
}
export default TavernProfile