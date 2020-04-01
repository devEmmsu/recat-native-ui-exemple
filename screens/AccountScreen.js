import React from 'react' ;
import {
    View,
    StyleSheet,
    Platform,
    Image
} from 'react-native' ;
import Constants from 'expo-constants';
import Feather from 'react-native-vector-icons/Feather';
import {
    Container,
    Content,
    Button,
    ListItem,
    Text,
    Icon,
    Left,
    Body,
    Right,
    Switch,
} from 'native-base' ;

import colors from '../constants/colors' ;


class AccountScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                {/* header top */}
                <View style={styles.header}>
                    <View style={styles.left} >
                    <Text style={styles.chatTitle}>Profile</Text>
                    </View>
                    <View style={styles.right} >
                        {/* <Feather name="search" color="#fff" size={23} style={{ padding: 5 }} /> */}
                        <Feather name="more-vertical" color="#fff" size={23} style={{ padding: 5 }} />
                    </View>
                </View>

                {/* end header */}

                <View style={{flex:1,padding:5}}>
                    <View style={{
                        flexDirection:"row",
                        flex:1,
                        borderBottomColor:'gray',
                        borderBottomWidth:1
                    }}>
                        {/* profil picture */}
                        <View style={{
                            flex:1,
                            // borderColor:'red',
                            // borderWidth:2
                        }}>
                            <Image 
                                style={{
                                    height:120,
                                    width:120
                                }}
                                source={require('../images/tobias.jpg')} 
                            />
                        </View>
                        <View style={{
                            flex:2,
                            // borderColor:'black',
                            // borderWidth:2,
                            padding:10
                        }}>
                            <Text style={{fontSize:18}}>Tobiad alisa eraly</Text>
                            <Text>ID : NXTP 25425485624</Text>
                        </View>
                    </View>

                    {/* bottom another parameters here */}
                    <View style={{
                        flex:3,
                        marginTop:25
                    }}>
                       <Container>
                        <Content>
                            <ListItem icon style={{marginTop:5}}>
                                <Left>
                                    <Button style={{backgroundColor:'#2f4f4f'}}>
                                        <Feather name="settings"  color="#fff" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>settings  </Text>
                                </Body>
                                <Right>
                                    <Icon active name="arrow-forward"  />
                                </Right>
                            </ListItem>
                            <ListItem icon style={{marginTop:5}}>
                                <Left>
                                    <Button style={{backgroundColor:'#2f4f4f'}}>
                                        <Feather name="lock" color="#fff" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>security  </Text>
                                </Body>
                                <Right>
                                    <Icon active name="arrow-forward"  />
                                </Right>
                            </ListItem>
                            <ListItem icon style={{marginTop:5}}>
                                <Left>
                                    <Button style={{backgroundColor:'#2f4f4f'}}>
                                        <Feather name="bell" color="#fff" />
                                    </Button>
                                </Left>
                                <Body>
                                    <Text>notifications  </Text>
                                </Body>
                                <Right>
                                    <Icon active name="arrow-forward"  />
                                </Right>
                            </ListItem>
                           
                        </Content>
                       </Container>
                    </View>
                </View>
            </View>
        )
    }
}

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
}) ;

export default AccountScreen ;