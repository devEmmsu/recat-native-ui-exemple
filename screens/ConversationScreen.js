import React from 'react';
import {
   View,
   Image,
   Text,
   TouchableOpacity,
   StyleSheet,
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListView from 'deprecated-react-native-listview' ;
import Constants from 'expo-constants';

import TopHeader from '../components/TopHeader' ;
import RoundedButton from '../components/buttons/RoundedButton' ;


const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const Row = props => (
  <TouchableOpacity
    onPress={() => {
        props.navigation.navigate('DetailsConversation',{
            image:props.image,
            msg:props.message,
            name:props.name
        })
    }}
  >
    <View style={styles.row}>
      <Image source={{ uri: props.image }} style={styles.pic} />
      <View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}>{props.name}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
        <View style={styles.msgContainer}>
          <Icon
            name={props.icon} size={15} color="#b3b3b3"
            style={{ marginLeft: 15, marginRight: 5 }}
          />
          <Text style={styles.msgTxt}>{props.message}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const ConversationScreen = props => (
  <View 
    style={{ 
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
    }} >
    <TopHeader />
    <ListView
      dataSource={ds.cloneWithRows(ChatsData)}
      renderRow={Chats => <Row {...Chats} {...props} />}
    />
    <RoundedButton navigation={props.navigation} />
  </View>
  );

export default ConversationScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#f7f7f7',
    borderBottomWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,

  },
  time: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
});


const ChatsData = [
    {
        "name": "Quincy Larson",
        "time": "8:54 AM",
        "message": "learn to code.",
        "icon": "done",
        "isViewed": "false",
        "image": "https://i.ibb.co/r5p7QYY/wes.jpg"
    },
    {

        "name": "Dan Abramov",
        "time": "3:05 PM",
        "message": "integer tincid", 
        "icon": "done-all",
        "isViewed": true,
        "image": "https://i.ibb.co/MZ6pF17/tom.jpg"
    },
    {
      "name": "Tobias Van Schnieder",
      "time": "5:06 AM",
      "message": "felis sed lacus",
      "icon": "done-all",
      "isViewed": true,
      "image": "https://i.ibb.co/jvJVq2p/tobias.jpg"
  },
  {
      "name": "Wes Bos",
      "time": "11:28 PM",
      "message": "purus aliquet at",
      "icon": "done-all",
      "isViewed": "false",
      "image":"https://i.ibb.co/3zR2p4x/quincy.jpg"
  },
  {

    "name": "Dan Abramov",
    "time": "3:05 PM",
    "message": "integer tincid", 
    "icon": "done-all",
    "isViewed": true,
    "image": "https://i.ibb.co/R9kTJ1q/eric.jpg"
},
{
  "name": "Tobias Van Schnieder",
  "time": "5:06 AM",
  "message": "felis sed lacus",
  "icon": "done-all",
  "isViewed": true,
  "image": "https://i.ibb.co/BwzzGM5/mxstbr.jpg"
},
{
  "name": "Wes Bos",
  "time": "11:28 PM",
  "message": "purus aliquet at",
  "icon": "done-all",
  "isViewed": "false",
  "image":"https://i.ibb.co/XkfGcdM/kyle.jpg"
},
{

    "name": "Dan Abramov",
    "time": "3:05 PM",
    "message": "integer tincid", 
    "icon": "done-all",
    "isViewed": true,
    "image": "https://i.ibb.co/MZ6pF17/tom.jpg"
},
{
  "name": "Tobias Van Schnieder",
  "time": "5:06 AM",
  "message": "felis sed lacus",
  "icon": "done-all",
  "isViewed": true,
  "image": "https://i.ibb.co/jvJVq2p/tobias.jpg"
},
] ;