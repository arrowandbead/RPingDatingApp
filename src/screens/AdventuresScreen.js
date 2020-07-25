import React, { Component } from 'react'
import {Text, View, FlatList, SafeAreaView, Image} from 'react-native'
import colorScheme from '../../color_scheme'
import { Ionicons } from '@expo/vector-icons';


const renderNewMatch = ({ item }) => (
    <Item title={item.title} />
  );

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aeddasa5-3ad53abb28ba',
        title: 'First Item',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa"
      },
      {
        id: '3ac68afc-c605-48d3-dda4f8-fbd91aa97f63',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa",
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471dasf-bd96-145571e29d72',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa",
        title: 'Third Item',
      },
      {
        id: '3ac68afc-c605-48ddahs3-a4f8-fbd91aa97f63',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa",
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-47dsa1df-bd96-145571e29d72',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa",
        title: 'Third Item',
      },
      {
        id: '3ac68afc-c605-48d3-dafa4f8-fbd91aa97f63',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa",
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-dsabhd96-145571e29d72',
        lastmessage: "My baby don't need no juice, she's got the LORDDDDDjdsiadjisa",
        title: 'Third Item',
      },
    ]
const Item = ({ title }) => (
    <View style = {styles.newMatch}>
        <Image style={styles.thumbnail} source = {{uri: "https://i.pinimg.com/736x/ce/35/a2/ce35a263dba9ac3cf5370a84f489b04f.jpg"}}></Image>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
    </View>
    );

const Convo = ({ title, lastmessage }) => (
    <View style = {styles.convo}>
        <View style = {styles.thumbnail_name}>
            <Image style={styles.thumbnail} source = {{uri: "https://i.pinimg.com/736x/ce/35/a2/ce35a263dba9ac3cf5370a84f489b04f.jpg"}}></Image>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
        </View>
        <View style = {styles.arrowHolder} >
            <Ionicons name="md-arrow-round-forward" color="gray" size={20}/>
        </View>
        <View style = {styles.lastmessageHolder}>
            <Text numberOfLines={2} style = {{fontSize : 15}} >
                {lastmessage}
            </Text>
        </View>
    </View>
    );
const renderNewConvo = ({ item }) => (
    <Convo title={item.title} lastmessage =  {item.lastmessage} />
);

class AdventuresScreen extends Component{
    componentDidMount(){
        //ssss
        console.log("did mount")
    }



    render(){
        return(
            <View style={styles.mainAdventuresStyle}>

                <Text style = {styles.titleText}>Adventures</Text>
                <View style = {styles.adventuresUnderline}></View>
                <Text>New Matches</Text>
                <SafeAreaView style = {styles.newMatchesScrollable}>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={renderNewMatch}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </SafeAreaView>
                <Text style = {styles.ActiveAdventures} >Active Adventures</Text>
                <SafeAreaView style = {styles.conversations}>
                    <View style = {{paddingLeft : 5, paddingRight: 5}}>
                        <FlatList
                                data={DATA}
                                renderItem={renderNewConvo}
                                keyExtractor={item => item.id}
                            >
                        </FlatList>
                    </View>
                </SafeAreaView>
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

    titleText : {
        marginBottom : -9,
        color : colorScheme.adventuresTitleText,
        fontSize : 35,
        borderRadius : 20,
        padding : 5
    },
    newMatchesScrollable : {
        marginTop : 10,
        borderRadius : 20,
        width : "98%",
        height : "14%",
        borderWidth : 2,
        borderColor : colorScheme.adventuresTitleBackground,
    },
    conversations : {
        width : "98%",
        flex : 1,
        borderColor : "blue",
        borderRadius : 11,
        borderWidth : 2
      },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 5,
        alignItems : "center",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius : 100
      },
    newMatch : {
        borderRadius : 10,
        width : 55,
        margin : 5,
        height : "90%",
        backgroundColor : "red",
        alignItems : "center",
        padding : 5
    },
    arrowHolder : {
        padding : 2,
        justifyContent : "center"
    },
    convo : {
        flexDirection : "row",
        width : "100%",
        marginBottom : 3,
        borderRadius : 10,
        backgroundColor : "white",
        borderWidth : 1

    },
    title: {
        fontSize: 12,
    },
    thumbnail : {
        width: 45, 
        height: 45,
        borderRadius : 100
    },
    thumbnail_name: {
        alignItems : "center",
        width : "20%",
        backgroundColor : "red",
        borderBottomLeftRadius : 10,
        borderTopLeftRadius : 10 

    },
    adventuresUnderline: {
        width: 0,
        height: 0,
        borderLeftWidth: 100,
        borderRightWidth: 100,
        borderTopWidth: 10,
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: colorScheme.adventuresTitleBackground
      },
    ActiveAdventures : {
        fontSize : 22
    },
    lastmessageHolder : {
        flex : 1,
        borderTopRightRadius : 10,
        borderBottomRightRadius : 10,
        justifyContent : "center",
        backgroundColor : "pink"
    }
}

export default AdventuresScreen;