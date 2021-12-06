import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen = () => {
    return <View style={styles.container}>
        <Text>ProfileScreen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1
      }
});

export default ProfileScreen;