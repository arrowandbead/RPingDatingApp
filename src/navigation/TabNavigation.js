import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import CharacterSheetScreen from '../screens/CharacterSheetScreen.js';
import AdventuresScreen from '../screens/AdventuresScreen.js';
import TavernScreen from '../screens/TavernScreen.js';
import SettingsScreen from '../screens/SettingsScreen.js';
import { FontAwesome5, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainNavigation() {
    return(
        <Tab.Navigator initialRoute = 'Adventures'>
            <Tab.Screen name="Adventures" component = {AdventuresScreen}
            options={{
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="sword-cross" color={color} size={25} />,
              }}
              />
            <Tab.Screen name="CharacterSheet" component = {CharacterSheetScreen} 
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome5 name="scroll" color={color} size={25}/>,
                  }}/>
            <Tab.Screen name="Settings" component = {SettingsScreen}
                 options={{
                    tabBarIcon: ({ color }) => <Feather name="settings" color={color} size={25}/>,
                  }}/>
            <Tab.Screen name="Tavern" component = {TavernScreen}
            options={{
                tabBarIcon: ({ color }) => <FontAwesome name="beer" color={color} size={25} />,
              }}
            />
        </Tab.Navigator>
        )
}
