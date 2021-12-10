import React,{useState} from "react";
import { View, Text, FlatList, Image, StyleSheet, Dimensions, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Header from '../../components/Header'

const RecipeScreen = (props) => {

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

  return (
    <View> 
      <ScrollView>
      <Header type='recipe' />
      <Image style={styles.foodImage} source={{ uri: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=962&q=80' }} />
                  
      <View style={styles.container}>
        <View style={styles.headingGroup}>
            <Text style={styles.headingGroup__title}>Pizza Pockets</Text>          
        </View>

        <View style={styles.ingredientGroup}>
          <Text style={styles.ingredientGroup__title}>Ingredients</Text>          
          <View style={styles.ingredientGroup__list}>        
            <Text style={styles.ingredientGroup__listItem}>{'\u2B24'} Some ingredient</Text>          
            <Text style={styles.ingredientGroup__listItem}>{'\u2B24'} Some ingredient</Text>          
            <Text style={styles.ingredientGroup__listItem}>{'\u2B24'} Some ingredient</Text>                      
          </View>
        </View>
        <View>
          <Text style={styles.stepHeader}>Recipe/Steps</Text>
          <View style={styles.stepContainer}>
            <Text>Step 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan vitae massa vitae aliquet. Donec suscipit lacinia mi in rutrum. Ut aliquet lectus vitae tellus iaculis, vitae mattis sapien vulputate. Quisque sagittis tristique nunc fringilla aliquet.</Text>
            <Text>Step 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan vitae massa vitae aliquet. Donec suscipit lacinia mi in rutrum. Ut aliquet lectus vitae tellus iaculis, vitae mattis sapien vulputate. Quisque sagittis tristique nunc fringilla aliquet.</Text>
          </View>
        </View>
        <View style={styles.container1}>
                    <Text>RecipeScreen1</Text>
                </View>
                <TextInput style={styles.textBox} onChangeText={recipeSearchTerm => setRecipeSearchTerm(recipeSearchTerm)}/>
                <Button title='Search Recipe' onPress={()=>{getRecipe()}}/>
      </View>
        </ScrollView>
    </View>
    
  );

};

const window = Dimensions.get('window');

const styles = StyleSheet.create({ 
  container: {
    paddingHorizontal: 40,
    height: '100%',
    backgroundColor: '#FFF7ED'
  },
  foodImage: {
    width: window.width,
    height: 200,
  },
  headingGroup: {
    backgroundColor: '#FDBA74',
    transform: [{ translateY: -50 }],
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FED7AA'
  },
  headingGroup__title: {
    color: '#C2410C',
    textAlign: 'center',
    padding: 20,
    fontSize: 35,
    fontWeight: '700'
  },
  ingredientGroup__title: {
    fontSize: 24,    
    color: 'black',    
  },
  ingredientGroup__list: {
    marginTop: 10,
  },
  ingredientGroup__listItem: {
    fontSize: 16,
    color: '#9A3412',
    marginTop: 7,
    
  },
  container1: {
    justifyContent:'center',
    alignItems:'center',
  },
  textBox: {
    width: 100,
    height: 50,
    borderWidth: 3
},
stepHeader:{
  fontSize: 25,
  marginTop: 10,
  marginBottom: 5,
},
stepContainer:{
  marginBottom: 50,
}
});

export default RecipeScreen;
