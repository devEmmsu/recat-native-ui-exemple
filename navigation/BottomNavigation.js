import React from 'react' ;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' ;
import { TabBar } from "react-native-animated-nav-tab-bar";

import HomeScreen from '../screens/HomeScreen' ;
import ContactScreen from '../screens/ContactScreen' ;
import AccountScreen from '../screens/AccountScreen' ;
import TabBarIcon from '../components/TabBarIcon';

import ChatFlowNavigation from './ChatFlowNavigation' ;

const Tab = createBottomTabNavigator();

export default function BottomNavigation(props) {

  return (
      <Tab.Navigator 
        initialRouteName="chat" 
        tabBarOptions={{
          showLabel: ({ focused }) => focused ? true : false,
        }}
        tabBar={props => (
          <TabBar
            activeColors={['#e6b580', '#8e87d6', '#c095c9']} // or activeColors={'#e6b580'}
            activeTabBackgrounds={['#ede7e6', '#eae3f6', '#eae4f6']} // or activeTabBackgrounds={'#ede7e6'}
            {...props}
          />
        )}
       >
        <Tab.Screen 
          name="chat" 
          component={ChatFlowNavigation} 
          options={{
            title:'chat',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="message-circle" />,
          }}
        />
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            title:'home',
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home" />,
          }}
        />
        <Tab.Screen 
          name="ContactScreen" 
          component={ContactScreen}
          options={{
            title:'contact',
            header: null,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user-plus" />,
          }}
         />
        <Tab.Screen 
          name="AccountScreen" 
          component={AccountScreen}
          options={{
            title:'profile',
            header: null,
            tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
          }}
        />
      </Tab.Navigator>
  );
}
