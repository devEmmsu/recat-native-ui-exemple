import 'react-native-gesture-handler';
import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import MainNavigation from './navigation/AuthNavigation' ;

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer> 
  );
}
