import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CharacterSheetScreen from '../screens/CharacterSheetScreen.js'
import AdventuresScreen from '../screens/AdventuresScreen.js'
import TavernScreen from '../screens/TavernScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen.js'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen.js';
import { useNavigation } from '@react-navigation/native';
import TabNavigation from './TabNavigation.js'


const Stack = createStackNavigator();
function login({screenName}){
    console.log("WEEEEEEEE")
    const navigation = useNavigation();
    navigation.navigate(screenName)
}
export default function MainNavigation() {
    
    return(

        <Stack.Navigator initialRouteName="LoginScreen" options={{headerShown: false}}
        screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Dicks Out" component={TabNavigation} />
        </Stack.Navigator>
        )
}