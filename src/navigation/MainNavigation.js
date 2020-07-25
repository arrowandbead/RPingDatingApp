import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen.js';
import TabNavigation from './TabNavigation.js'


const Stack = createStackNavigator();
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
