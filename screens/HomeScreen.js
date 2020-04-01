import React from 'react' ;
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native' ;
import Constants from 'expo-constants';

class HomeScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
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

export default HomeScreen ;