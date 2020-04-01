
import React from 'react' ;
import {createStackNavigator} from '@react-navigation/stack'

import ConversationScreen from '../screens/ConversationScreen' ;
import DetailConversationScreen from '../screens/DetailConversationScreen' ;

const MainStack = createStackNavigator();


export default function(){
    return (
        <MainStack.Navigator screenOptions={{headerShown:false}}>
            <MainStack.Screen name="conversation" component={ConversationScreen} />
            <MainStack.Screen name="DetailsConversation" component={DetailConversationScreen} />
        </MainStack.Navigator>
    )
}