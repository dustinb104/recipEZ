import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import Header from '../components/Header'

const RecipeListScreen = () => {

    // recipe term search
    const [recipeSearchTerm, setRecipeSearchTerm] = useState();
    // recipe data
    const [recipeData, setRecipeData] = useState();

    const getRecipe = () => {
        fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ab73e0127b1c4c79922270ecd7f15b71&query=${recipeSearchTerm}&number=3`)
        .then((response) => response.json())
        .then((data) => {
            setRecipeData(data)
            console.log({data});
        })
        .catch(() =>{
            console.log('error');
        })
    }

    return <View>
                <Header type={"recipe"}/>
                <View style={styles.container}>
                    <Text>RecipeScreen1</Text>
                </View>
                <TextInput style={styles.textBox} onChangeText={recipeSearchTerm => setRecipeSearchTerm(recipeSearchTerm)}/>
                <Button title='Search Recipe' onPress={()=>{getRecipe()}}/>
            </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      },
      textBox: {
        width: 100,
        height: 50,
        borderWidth: 3
    }
});

export default RecipeListScreen;