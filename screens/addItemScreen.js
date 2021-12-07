import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from "../contexts/UserFoodContext"
import { Context } from "../contexts/FoodContext"

const HeroDetailScreen = (props) => {
	
const { addHero, state } = useContext(Context);
const { addFood, userState } = useContext(UserContext);

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


const hero = generateNewHero();




return <View> 
	<Text style={styles.title}>Add item list</Text>
	<FlatList
	data = {state}
	keyExtractor={(hero) => {return hero.id}}
	renderItem={ ({item}) => {return <TouchableOpacity onPress={() => {addFood(item.name, item.calories, item.carbs, item.protein, item.fat, item.sugar)}}>
	<View><Text style={styles.battle}>Name: {item.name} calories: {item.calories} carbs: {item.carbs} protein: {item.protein} fat: {item.fat} --- Sugar: {item.sugar}</Text></View>
		</TouchableOpacity>}}
	
	
	/>
	<View>
	<Button title="Add Hero!" onPress={() => {addHero(hero.name, hero.level, hero.power, hero.MaxHealth, hero.MaxHealth, hero.gold) 
	}}/>
	</View>
</View>

}

const styles = StyleSheet.create({
	name: {
    alignSelf: "center",
	color: 'black',
    fontSize: 40,
	top: 40
	
  },
	message: {
    alignSelf: "center",
	color: 'black',
    fontSize: 20,
	top: 10
	
  },
  	stats: {
	top: 100,
	fontSize: 20
  },
	level: {
	top: 200,
	
  },
  	navbar: {
	position: 'absolute',
	justifyContent:"flex-end",
	},
	
});

export default HeroDetailScreen;