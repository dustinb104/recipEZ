import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../../components/Spacer';
import Constant from 'expo-constants';

const SignUpScreen = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up Screen</Text>
        </Spacer>
        <Input 
            label ='Email'
            autoCapitalize='none'
            value={email}
            onChangeText={(newEmail) =>{setEmail(newEmail)}}/>
        <Spacer/>
        <Input 
            label='Password'
            secureTextEntry={true}
            autoCapitalize='none'
            autoCorrect={false}
            value={password}
            onChangeText={(newPassword) => {setPassword(newPassword)}}/>
        <Spacer>
            <Button title='Sign Up' onPress={()=>{props.navigation.navigate('mainFlow')}}/>
        </Spacer>
    </View>
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: Constant.statusBarHeight,
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignUpScreen;