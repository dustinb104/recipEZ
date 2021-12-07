import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Constant from 'expo-constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import SearchBar from './SearchBar';
// 

const Header = (props) => {

    const [barState, changeBarState] = useState(props.type);

    var whatToDisplay;

    switch(barState){
        case 'pantry':
            whatToDisplay = <View>
                <View style={styles.head}>
                    <View style={styles.panButtonContainer}>
                        <Image source={require('../assets/006-snowflake.png')}/>
                        <Image style={styles.image} source={require('../assets/004-fridge-1.png')}/>
                        <Image source={require('../assets/009-stand.png')}/>
                    </View>
                    <View style={styles.searchBar}>
                        <SearchBar/>
                    </View>
                    <TouchableOpacity onPress={()=> console.log("Three dots pressed")}>
                        <Entypo name={'dots-three-vertical'} size={28}/>
                    </TouchableOpacity>
                </View>
            </View>
            break;
            case 'shopping':
                whatToDisplay = <View>
                    <View style={styles.head}>
                        <Text style={styles.text}>Shopping</Text>
                        <View style={styles.searchBar}>
                            <SearchBar style={styles.searchBar}/>
                        </View>
                        <TouchableOpacity onPress={()=> console.log("Three dots pressed")}>
                        <Entypo name={'dots-three-vertical'} size={28}/>
                    </TouchableOpacity>
                    </View>
                </View>
            break;
            case 'recipe':
                whatToDisplay = <View>
                    <View style={styles.head}>
                        <Text style={styles.text}>Recipes</Text>
                        <View style={styles.searchBar}>
                            <SearchBar />
                        </View>
                        <TouchableOpacity onPress={()=> console.log("Heart Pressed")}>
                            <Entypo name={'heart'} size={35}/>
                        </TouchableOpacity>
                    </View>
                </View>
    }

    return whatToDisplay;
}

const styles = StyleSheet.create({
    head: {
        height: 55,
        marginTop: Constant.statusBarHeight,
        backgroundColor: '#6948f4',
        alignItems: 'center',
        flexDirection: 'row',
        display: 'flex',
    },
    text: {
        fontSize: 30,
        color: 'white'
    },
    panButtonContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        borderWidth: 2,
        width: 135,
        height: 45,
        alignItems: 'center',
        justifyContent: 'space-around',
        
        
    },
    searchBar: {
        alignItems: 'flex-end',
        flex: 1,
        marginRight: 5
    }
})

export default Header;