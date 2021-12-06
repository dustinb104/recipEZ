import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SignInScreen = (props) => {
    return <View>
        <Text>Sign In Screen</Text>
        <Button title={'Sign-in'} onPress={props.navigation.navigate('Home')}/>
    </View>
}

const styles = StyleSheet.create({});

export default SignInScreen;