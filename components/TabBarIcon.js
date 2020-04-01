import * as React from 'react';
import Icon from "react-native-vector-icons/Feather";

import colors from '../constants/colors' ;

export default function TabBarIcon(props) {
  return (
    <Icon 
      name={props.name}
      size={30} 
      color={props.focused ? colors.tabIconSelected : colors.tabIconDefault}
    />
    
  );
}

