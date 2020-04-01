import React from 'react' ;
import {
    View,
    StyleSheet,
    Platform,
    StatusBar
} from 'react-native' ;
import Constants from 'expo-constants';
import { Container, Item, Input, Button, Text } from 'native-base';
import PhoneInput from 'react-native-phone-input';

class LoginScreen extends React.Component{
    constructor(props){
        super(props) ;
        this.state = {
            valid: true,
            phone:''
        }

    }
    renderPhoneNumberInput() {
        return (
            <View
                style={{
                    paddingRight: 20,
                    paddingLeft: 20
                }}
            >
                <Item 
                    rounded
                    style={{
                        backgroundColor: 'white', 
                        alignContent: 'center',
                    }}
                >
                    
                </Item>
                
            </View>
        );
    }

    onLoginButtonPress(){
        this.props.navigation.navigate('welcome') ;
       
    }
    onPhoneChange(text) {
        this.setState({phone:text})
        
    }
 
    render(){
        const {navigation} = this.props ;
        return (
            <Container style={{ flex: 1, backgroundColor: '#4F6D7A'}}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#062b40"
                />
                <Container style={{ flex: 1, justifyContent: 'center', backgroundColor: '#4F6D7A' }}>
                    {this.renderPhoneNumberInput()}
                    <Button
                    light 
                    rounded 
                    style={{
                        width: '100%', 
                        marginTop: 10, 
                        justifyContent: 'center' 
                    }}
                    onPress={this.onLoginButtonPress.bind(this)}
                >
                    <Text 
                        style={{
                            fontSize: 20, 
                            color: '#042a41', 
                            fontWeight: 'bold'
                        }}
                    >
                        Log in With Phone
                    </Text>
                </Button>
                </Container>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    }
}) ;

export default LoginScreen ;