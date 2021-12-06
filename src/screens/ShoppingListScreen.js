import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Header from '../components/Header'

const ShoppingListScreen = () => {
    return <View>
                <Header type={"shopping"}/>
                <View style={styles.container}>
                    <Text>ShoppingScreen</Text>
                </View>
            </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      }
});

export default ShoppingListScreen;