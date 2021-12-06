import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from "../contexts/FoodContext"

const HeroDetailScreen = (props) => {
	
const { levelHero, state } = useContext(Context);

const heroID = props.navigation.getParam("id");
const message = props.navigation.getParam("message");

const hero = state.find((hero) => {
	return heroID === hero.id;


})
const levelupPrice = hero.level * 10;
const updatedGold = hero.gold - levelupPrice;
const updatedHealth = hero.maxHealth + Math.floor(Math.random() * 7) + 3
const updatedLevel = hero.level + 1
const updatedPower = hero.power + Math.floor(Math.random() * 5) + 1

return <View> 
	{message? <Text style={styles.message}> {message} </Text> : null}
	<Text style={styles.name}>{hero.name}</Text>
	<Text style={styles.stats}>level:{hero.level}</Text>
	<Text style={styles.stats}>Health:{hero.currentHealth}/{hero.maxHealth}</Text>
	<Text style={styles.stats}>power: {hero.power} </Text>
	<Text style={styles.stats}>Gold is: {hero.gold}</Text>
	<View style={styles.level}>
	<Button title={'Level Up! (' + levelupPrice + ' Gold)'} onPress={() => {levelHero(hero.id, hero.name, updatedLevel, updatedPower, updatedHealth, updatedHealth, updatedGold)}} />
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