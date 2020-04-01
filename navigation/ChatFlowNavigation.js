import React from 'react' ;
import {createStackNavigator} from '@react-navigation/stack'

import ChatStackScreen from './MainConversationNavigation' ;
import NewConversationScreen from '../screens/NewConversationScreen' ;


const RootFlowNavigation = createStackNavigator();

export default function ChatFlowNavigation() {
    return (
      <RootFlowNavigation.Navigator mode="modal">
        <RootFlowNavigation.Screen
          name="conversationListItem"
          component={ChatStackScreen}
          options={{ headerShown: false }}
        />
        <RootFlowNavigation.Screen name="NewConversation" component={NewConversationScreen} />
      </RootFlowNavigation.Navigator>
    );
}
