import React, { useContext } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from "../contexts/FoodContext"
import { UserContext } from "../contexts/UserFoodContext"

const HeroDetailScreen = (props) => {
	
const { levelHero, state } = useContext(Context);
const { deleteHero, userState } = useContext(UserContext);


const heroID = props.navigation.getParam("id");
const message = props.navigation.getParam("message");

const hero = userState.find((hero) => {
	return heroID === hero.id;


})

return <View> 
	{message? <Text style={styles.message}> {message} </Text> : null}
	<Text style={styles.name}>{hero.name}</Text>
	<Text style={styles.stats}>Calories: {hero.calories}</Text>
	<Text style={styles.stats}>Carbs: {hero.carbs}/{hero.protein}</Text>
	<Text style={styles.stats}>Fat: {hero.fat} </Text>
	<Text style={styles.stats}>Sugar: {hero.sugar}</Text>
	<View style={styles.level}>
	<Button title={'Delete item'} onPress={() => {props.navigation.navigate("Pantry"), deleteHero(hero.id)}} />
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