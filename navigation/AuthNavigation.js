import React from 'react' ;
import {createStackNavigator} from '@react-navigation/stack'

import LoginScreen from '../screens/LoginScreen' ;
import ProfileScreen from '../screens/ProfileScreen' ;
import BottomNavigation from './BottomNavigation' ;

const Stack = createStackNavigator() ;

export default function AuthNavigation(){
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="loginScreen"
                component={LoginScreen}
            />
            <Stack.Screen 
                name="profile"
                component={ProfileScreen}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen
                name="welcome"
                component={BottomNavigation} 
            />
        </Stack.Navigator>
    )
}