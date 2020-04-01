import React from 'react' ;
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Button
} from 'react-native' ;
import Constants from 'expo-constants';

class NewConversationScreen extends React.Component{
    constructor(props){
        super(props) ;

    }
    render(){
        const {navigation} = this.props ;
        return (
            <View style={styles.container}>
                <Text> new Conversation  Screen</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }
}) ;

export default NewConversationScreen ;