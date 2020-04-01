import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image
}
from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Constants from 'expo-constants';

import colors from '../constants/colors' ;

class ProfileScreen extends React.Component {
    constructor(props){
      super(props) ;
    }
    render(){
      const {params} = this.props.route ;
      const SCREEN_HEIGHT = 400 ;
      return (
        <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.left} >
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon
                        name="arrow-left" color="#fff" size={23}
                        style={{ paddingLeft: 10 }}
                        />
                </TouchableOpacity>
                <Text style={styles.chatTitle}>{params.name}</Text>
            </View>
            <View style={styles.right} >
                {/* <Icon name="search" color="#fff" size={23} style={{ padding: 5 }} /> */}
                <Icon name="more-vertical" color="#fff" size={23} style={{ padding: 5 }} />
            </View>
        </View>

        {/*  end Header */}
       <Image source={{uri:params.image}} style={{height:350}}  />
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.text}>Mute</Text>
          </View>
          <View style={styles.row} >

            <Text style={styles.text}>Custom notifications</Text>
          </View>
          <View style={styles.encrypt}>
            <View>
              <Text style={styles.text}>Encryption</Text>
              <Text style={styles.subText}>Messages you send to this
              chat and calls are secured with end to end Encryption. Tap to verify</Text>
            </View>
            <Icon name="lock" color={colors.topHeader} size={23} style={{ padding: 5 }} />

          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.green}>Status and Phone</Text>
            <Text style={styles.text}>{params.status}</Text>
            <Text style={styles.subText}>January 5</Text>
          </View>
          <View style={styles.number}>
            <View style={{ paddingHorizontal: 5 }}>
              <Text style={styles.text}>+00 9874563212</Text>
              <Text style={styles.subText}>Mobile</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="message-circle" color={colors.topHeader} size={23} style={{ padding: 5 }} />
              <Icon name="phone" color={colors.topHeader} size={23} style={{ padding: 5 }} />
              <Icon name="video" color={colors.topHeader} size={23} style={{ padding: 5 }} />
            </View>
          </View>
        </View>
       </View>
      )
    }

}


export default ProfileScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
},
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginTop: 270,
    padding: 20,
  },
  card: {
    marginTop: 10,
  },
  row: {
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  encrypt: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
    padding:5
  },
  number: {
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '400',
  },
  subText: {
    fontSize: 8,
    color: '#555',
  },
  green: {
    color: '#075e54',
    fontSize: 10,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.topHeader,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
      color: '#fff',
      fontWeight: '600',
      margin: 10,
      fontSize: 15,
    },
});
