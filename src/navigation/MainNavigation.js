import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation.js'

const Stack = createStackNavigator();
export default function MainNavigation() {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen" component={TabNavigation} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      )
}
