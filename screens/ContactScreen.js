import React from 'react' ;
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native' ;
import Constants from 'expo-constants';
import * as Contacts from 'expo-contacts';
import Icon from 'react-native-vector-icons/Feather';

import colors from '../constants/colors' ;

class ContactScreen extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            contacts:[]
        }
        this.loadContact() ;
    }

    loadContact(){
        const { status } =  Contacts.requestPermissionsAsync();
        if (status === 'granted') {
                const { data } =  Contacts.getContactsAsync({
                    fields: [
                        Contacts.Fields.Name,
                        Contacts.Fields.PhoneNumbers,
                        Contacts.Fields.Image
                    ],
                sort: Contacts.SortTypes.FirstName 
            });componentWillMount
            if (data.length > 0) {
                const contact = data[0];
                console.log(contact);
            }
        }

        
    }
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.left} >
                    <Text style={styles.chatTitle}>Contact</Text>
                    </View>
                    <View style={styles.right} >
                        <Icon name="search" color="#fff" size={23} style={{ padding: 5 }} />
                        <Icon name="more-vertical" color="#fff" size={23} style={{ padding: 5 }} />
                    </View>
                </View>
                {/* end header */}
            </View>
            
        )
    }
}

export default ContactScreen ;


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
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