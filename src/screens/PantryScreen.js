import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button, FlatList} from 'react-native';
import Header from '../../components/Header';
import food from '../api/food';
import { Context } from "../contexts/FoodContext"
import { UserContext } from "../contexts/UserFoodContext"
import { useContext } from 'react';

const PantryScreen = (props) => {
    // ingredient data is the information displayed by our api
    const [ingredientData, setIngredientData] = useState();
    // ingredient name is the parameter used for the search query to find an ingredient
    const [ingredientName, setIngredientName] = useState('')
    // call to the api
	
	const { addHero, state } = useContext(Context);
	const { addFood, userState } = useContext(UserContext);	
	
    const getIngredient = () => {
        fetch(
            `https://api.spoonacular.com/food/ingredients/search?apiKey=ab73e0127b1c4c79922270ecd7f15b71&query=${ingredientName}&number=2&sort=calories&sortDirection=desc`
        )
        .then((response) => response.json())
        .then((data) => {
            setIngredientData(data)
            console.log({data});
        })
        .catch(() => {
            console.log('error');
        });
    }

    return <View style={styles.page}>
        <Header type={"pantry"}/>
        <TouchableOpacity style={styles.imageCont} onPress={()=>props.navigation.navigate('AddItem')}>
            <Image style={styles.image} source={require('../../assets/plus.png')}/>
        </TouchableOpacity>
		
		<View> 
            <Text>Pantry Screen</Text>
	<FlatList
	data = {userState}
	keyExtractor={(hero) => {return hero.id}}
	renderItem={ ({item}) => {return <TouchableOpacity onPress={() => {props.navigation.navigate("Detail", {id : item.id})}}>
	<View><Text style={styles.battle}>Name: {item.name} calories: {item.calories} carbs: {item.carbs} protein: {item.protein} fat: {item.fat} --- Sugar: {item.sugar}</Text></View>
		</TouchableOpacity>}}
	
	
	/>
	</View>
		
	
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      },
	 battle: {
    alignSelf: "center",
	color: 'black',
	fontWeight: 'bold',
    fontSize: 15,
	borderColor: 'black',
	borderWidth: 3,
	paddingLeft: 10,
	},
    imageCont: {
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    image: {
        height: 50,
        width: 50,
    },
    page: {
        flex: 1
    },
    textBox: {
        width: 100,
        height: 50,
        borderWidth: 3
    }
});

PantryScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default PantryScreen;