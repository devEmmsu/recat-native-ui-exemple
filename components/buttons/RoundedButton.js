/**
 * @author: Emmsu
 * @Url: https://www.hugueso.com
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  TouchableOpacity,
  StyleSheet
} from "react-native";

import colors from '../../constants/colors' ;
import Icon from 'react-native-vector-icons/Feather';


export default class RoundedButton extends Component {
  constructor(props){
    super(props) ;
  }
  clickHandler = () => {
    //function to handle click on floating Action Button
    this.props.navigation.navigate('NewConversation')
  };

  render() {
      return (
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.clickHandler}
        style={styles.TouchableOpacityStyle}>
          <Icon
          name="message-square"
          color={colors.conversation}
          size={23}
        />
      </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    backgroundColor:'#cecece',
    //Here is the trick
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    borderColor:colors.topHeader,
    borderRadius:50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,

 },
})
  