import { NavigationContainer, NavigationEvents } from "react-navigation";
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import {StyleSheet,View} from 'react-native';
import PantryScreen from "./src/screens/PantryScreen";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipeListScreen from "./src/screens/RecipeListScreen";
import ShoppingListScreen from "./src/screens/ShoppingListScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import addItemScreen from "./src/screens/addItemScreen";
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as AuthProvider} from './src/contexts/AuthContext'
import { Provider as FoodProvider } from "./src/contexts/FoodContext";
import { Provider as UserFoodProvider } from "./src/contexts/UserFoodContext";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignUpScreen,
    Signin: SignInScreen
  }
  ),
  mainFlow: createMaterialBottomTabNavigator({
        pantryFlow: createStackNavigator({
        Pantry: {
          screen: PantryScreen,
          navigationOptions:{
            tabBarLabel: 'Pantry',
            tabBarIcon: ({tintColor}) => (
              <View>
                <Icon name={'home'} size={25}/>
              </View>
            )
          }
        },
        AddItem: addItemScreen,
		Detail: FoodDetailScreen
      }), //end stack navigator
        ShoppingList: {
              screen: ShoppingListScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                  <View>
                    <Feather name={'shopping-cart'} size={25}/>
                  </View>
                )
              }
            },
        RecipeList: {
              screen: RecipeListScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                  <View>
                    <MaterialCommunityIcon name={'chef-hat'} size={25}/>
                  </View>
                )
              }
            },
        Account: {
              screen: ProfileScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => (
                  <View>
                    <Icon name={'person-circle'} size={25}/>
                  </View>
                )
              }
            }
          },
  ) //end mainFlow
}) //end switchNavigator

// const TabNavigator = createMaterialBottomTabNavigator(
//   {
  // Pantry:{
  //   screen: PantryScreen,
  //   navigationOptions:{
  //     tabBarIcon: ({tintColor}) => (
  //       <View>
  //         <Icon name={'home'} size={25}/>
  //       </View>
  //     )
  //   }
  // },
//   Shopping:{
//     screen: ShoppingListScreen,
//     navigationOptions:{
//       tabBarIcon: ({tintColor}) => (
//         <View>
//           <Feather name={'shopping-cart'} size={25}/>
//         </View>
//       )
//     }
//   },
//   Recipe:{
//     screen: RecipeListScreen,
//     navigationOptions:{
//       tabBarIcon: ({tintColor}) => (
//         <View>
//           <MaterialCommunityIcon name={'chef-hat'} size={25}/>
//         </View>
//       )
//     }
//   },
//   Profile:{
//     screen: ProfileScreen,
//     navigationOptions:{
//       tabBarIcon: ({tintColor}) => (
//         <View>
//           <Icon name={'person-circle'} size={25}/>
//         </View>
//       )
//     }
//   }
// },
// {
//   initialRouteName: 'Pantry',
//   activeColor: '#ffffff',
//   inactiveColor: '#bda1f7',
//   barStyle: { backgroundColor: '#6948f4' },
// }
// )


const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <FoodProvider>
	<UserFoodProvider>
	<App />
	</UserFoodProvider>
	</FoodProvider>
    </AuthProvider>
  )
};