import React, {useReducer} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo'

const SearchBar = (props) => {
    
    return (
        <View style={styles.bar}>
            <Entypo name={'magnifying-glass'} size={32}/>
            <TextInput style={styles.search}
            placeholder='Search'/>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        height: 45,
        width: 200,
        borderWidth: 1,
        fontSize: 25
    },
    bar: {
        flexDirection: 'row'
    }
})

export default SearchBar;