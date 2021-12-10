import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button, FlatList, Image, ScrollView} from 'react-native';
import Header from '../../components/Header';
import food from '../api/food';
import ResultList from '../../components/ResultList';

const RecipeListScreen = () => {

    // recipe term search
    const [recipeSearchTerm, setRecipeSearchTerm] = useState();
    // recipe data
    const [recipeData, setRecipeData] = useState([]);
    const [recipeDataInfo, setRecipeDataInfo] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    // console.log(recipeData);

    const getRecipe = async () => {
        try{
        const response = await food.get('/recipes/complexSearch',{
            params: {
                apiKey: "c7ac0785a05741e28b9dd4a31491bd15",
                query: recipeSearchTerm,
                number: 10
            }
        });
        setRecipeData(response.data.results);
        console.log(recipeData);
        }
        catch(e){
            setErrorMessage("opps. something went wrong!");
        }
    }

    const getRecipeInfo = async (id) => {
        try{
            const response = await food.get('recipes',{
                params: {
                    apiKey: "c7ac0785a05741e28b9dd4a31491bd15",
                    id: this.id,
                    includeNutrition: false,
                }
            });
            setRecipeDataInfo(response.data);
            console.log(recipeDataInfo);
        }
        catch(e){
            setErrorMessage('opps. something went wrong!');
        }
    }

    return <View>
                <Header type={"recipe"}/>
                <View style={styles.container}>
                    <Text>RecipeScreen1</Text>
                </View>
                <TextInput style={styles.textBox} onChangeText={(recipeSearchTerm) => setRecipeSearchTerm(recipeSearchTerm)}/>
                <Button title='Search Recipe' onPress={()=>{getRecipe()}}/>
                <View>
                <FlatList 
                data={recipeData}
                renderItem={({item}) => {
                    return <View>
                        <TouchableOpacity onPress={() => getRecipeInfo(recipeData.id)}>
                            <Image style={styles.image} source={{uri: `${item.image}`}}></Image>
                            <Text>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                }}
                keyExtractor={(recipeData) => {return recipeData.id}}
                />
                </View>
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
    },
    image: {
        width: 100,
        height: 100
    }
});

export default RecipeListScreen;