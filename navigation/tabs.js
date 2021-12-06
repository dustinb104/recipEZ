import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PantryScreen from "../src/screens/PantryScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import RecipeListScreen from "../src/screens/RecipeListScreen";
import ShoppingListScreen from "../src/screens/ShoppingListScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Pantry' component={PantryScreen}/>
            <Tab.Screen name='ShoppingList' component={ShoppingListScreen}/>
            <Tab.Screen name='RecipeList' component={RecipeListScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
            
        </Tab.Navigator>
    )
}

export default Tabs;