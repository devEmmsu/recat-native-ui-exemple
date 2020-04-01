import React from 'react' ;
import {
    View,
    StyleSheet,
    Platform,
    Image,
    Text,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    TextInput
}from 'react-native' ;
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ListView from 'deprecated-react-native-listview' ;
import InvertibleScrollView from 'react-native-invertible-scroll-view';
import Feather from "react-native-vector-icons/Feather";


import colors from '../constants/colors' ;


const { width, height } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const conversation = [
  {
    sent: true,
    msg: 'all cool!',
  },
  {
    sent: false,
    msg: 'Hey wassup?',
  },
];

// mes messages
const EachMsg = (props) => {
  if (props.sent === false) {
    return (
      <View style={styles.eachMsg}>
        <Image source={{ uri: props.image }}style={styles.userPic} />
        <View style={styles.msgBlock}>
          <Text style={styles.msgTxt}>{props.msg}</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.rightMsg} >
      <View style={styles.rightBlock} >
        <Text style={styles.rightTxt}>{props.msg}</Text>
      </View>
      <Image source={{uri:'https://i.ibb.co/jvJVq2p/tobias.jpg'}} style={styles.userPic} />
    </View>
  );
};


class DetailConversationScreen extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            msg: '',
            dataSource: ds.cloneWithRows(conversation),
        };
        this.send = this.send.bind(this);
        this.reply = this.reply.bind(this);
        
    }
    send() {
        if (this.state.msg.length > 0) {
            conversation.unshift({
              sent: true,
              msg: this.state.msg,
            });
            this.setState({
              dataSource: ds.cloneWithRows(conversation),
              msg: '',
            });
            setTimeout(() => {
              this.reply();
            }, 2000);
        }
    } 
    reply() {
        conversation.unshift({
            sent: false,
            msg: 'React Native  is Awesome!',
          });
          this.setState({
            dataSource: ds.cloneWithRows(conversation),
          });
    }

    render(){
        const {params} = this.props.route ;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.left} >
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon
                        name="arrow-back" color="#fff" size={23}
                        style={{ paddingLeft: 10 }}
                        />
                    </TouchableOpacity>
                    <Image
                        source={{ uri: params.image }}
                        style={styles.chatImage}
                    />
                    <TouchableOpacity
                        onPress={() => {
                        this.props.navigation.navigate('profile',{
                          name:params.name,
                          status:'hey i use Emmsu app',
                          image:params.image
                        })
                        }}
                    >
                    <Text style={styles.chatTitle}>{params.name}</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.right} >
                        <Icon name="call" color="#fff" size={23} style={{ padding: 5 }} />
                        {/* <Icon name="attach-file" color="#fff" size={23} style={{ padding: 5 }} /> */}
                        <Icon name="more-vert" color="#fff" size={23} style={{ padding: 5 }} />
                    </View>
                </View>
                {/* end hjeader custom bar  */}
                <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
                    <ListView
                        enableEmptySections
                        noScroll
                        renderScrollComponent={props =>
                        <InvertibleScrollView {...props} inverted />}
                        dataSource={this.state.dataSource}
                        contentContainerStyle={{ justifyContent: 'flex-end' }}
                        renderRow={rowData => <EachMsg {...rowData} image={params.image} />}
                        style={{ flex: 1 }}
                    />
                    {/* fixed bottom bar message */}
                    <View style={styles.input}>
                        <TouchableOpacity 
                        onPress={()=>console.log('file upload')}
                        style={{borderRightWidth:1 ,borderRightColor:'gray',paddingRight:5}}
                        >
                            <Icon name="attach-file"  size={23}  />
                        </TouchableOpacity>
                        <TextInput
                            style={{ flex: 1 }}
                            value={this.state.msg}
                            onChangeText={msg => this.setState({ msg })}
                            blurOnSubmit={false}
                            onSubmitEditing={() => this.send()}
                            placeholder="Type a message"
                            returnKeyType="send"
                        />
                        <Text style={{fontSize:20}}>></Text>
                    </View>
                </KeyboardAvoidingView>
            </View>

        )
    }
}


export default DetailConversationScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
    keyboard: {
      flex: 1,
      justifyContent: 'center',
    },
    image: {
      width,
      height,
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
    chatImage: {
      width: 30,
      height: 30,
      borderRadius: 15,
      margin: 5,
    },
    input: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      padding: 10,
      height: 40,
      width: width - 20,
      backgroundColor: '#fff',
      margin: 10,
      shadowColor: '#3d3d3d',
      shadowRadius: 2,
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 1,
      },
    },
    eachMsg: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      margin: 5,
    },
    rightMsg: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      margin: 5,
      alignSelf: 'flex-end',
    },
    userPic: {
      height: 40,
      width: 40,
      margin: 5,
      borderRadius: 20,
      backgroundColor: '#f8f8f8',
    },
    msgBlock: {
      width: 220,
      borderRadius: 5,
      backgroundColor: '#ffffff',
      padding: 10,
      shadowColor: '#3d3d3d',
      shadowRadius: 2,
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 1,
      },
    },
    rightBlock: {
      width: 220,
      borderRadius: 5,
      backgroundColor: '#97c163',
      padding: 10,
      shadowColor: '#3d3d3d',
      shadowRadius: 2,
      shadowOpacity: 0.5,
      shadowOffset: {
        height: 1,
      },
    },
    msgTxt: {
      fontSize: 15,
      color: '#555',
      fontWeight: '600',
    },
    rightTxt: {
      fontSize: 15,
      color: '#202020',
      fontWeight: '600',
    },
  });