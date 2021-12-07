import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button, FlatList} from 'react-native';
import Header from '../../components/Header';
import food from '../api/food';
import { Context } from "../contexts/FoodContext"
import { ShoppingContext } from "../contexts/shoppingContext"
import { useContext } from 'react';

const ShoppingListScreen = (props) => {
    // ingredient data is the information displayed by our api
    const [ingredientData, setIngredientData] = useState();
    // ingredient name is the parameter used for the search query to find an ingredient
    const [ingredientName, setIngredientName] = useState('')
    // call to the api
	
	const { addHero, state } = useContext(Context);
	const { addFood, ShoppingState } = useContext(ShoppingContext);
	
	const generateNewHero = () => {
	let hero = {};
	hero.level = 1;
	
	let firstNameList = ["Mark", "Sally", "Bob", "Daniel", "David", "Kevin", "Jane", "Sam", "Jill", "Kelly", "Betty", "Greg", "Jeff", "Ben", "Jay", "Ted", "Matt", "Lisa" ];
	
	let lastNameList = ["Fitzimmons", "Smith", "Thrillseeker", "Bonecruncher", "Mindblaster", "Knucklebuster", "Kite-flayer"]
	
	hero.name = firstNameList[Math.floor(Math.random() * firstNameList.length)] + " " + lastNameList[Math.floor(Math.random() * lastNameList.length)]
	
	hero.gold = 100;
	hero.power = Math.floor(Math.random() * 5) + 1;
	hero.MaxHealth = Math.floor(Math.random() * 7) + 3;
	return hero;
}
	
	
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
        <Header type={"shopping"}/>
        <TouchableOpacity style={styles.imageCont} onPress={()=>props.navigation.navigate('AddShoppingItem')}>
            <Image style={styles.image} source={require('../../assets/plus.png')}/>
        </TouchableOpacity>
		
		<View> 
	<FlatList
	data = {ShoppingState}
	keyExtractor={(hero) => {return hero.id}}
	renderItem={ ({item}) => {return <TouchableOpacity onPress={() => {}}>
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

ShoppingListScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

export default ShoppingListScreen;