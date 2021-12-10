// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements'

const SignInScreen = (props) => {
    return <View>
        <Text>Sign In Screen</Text>
        <Button title={'Sign-in'} onPress={() => {props.navigation.navigate('pantryFlow')}}/>
    </View>
}

const styles = StyleSheet.create({});

SignInScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default SignInScreen;