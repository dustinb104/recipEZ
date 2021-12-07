import React, {useReducer} from "react";
import createDataContext from "./createUserDataContext";


const blogReducer = (userState, action) => {
    switch(action.type){
        case 'get_blogposts':
            return action.payload;
        case 'add_hero':
            return [...userState, { 
                    id: Math.floor(Math.random() * 999999), 
					name: action.payload.name,
                    calories: action.payload.calories,
					carbs: action.payload.carbs,
					protein: action.payload.protein,
					fat: action.payload.fat,
					sugar: action.payload.sugar
                }
            ]
        case 'delete_hero':
            return userState.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'calories_hero':
            return userState.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return hero;
                }
            })
        default:
            return userState;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        console.log("about to make network request...?")
        try{
            const response = await jsonServer.get("/blogposts");
            console.log("network request completed!!!");
            //response.data === [{}, {}, {}]
            console.log(response.data);
            dispatch({type: 'get_blogposts', payload: response.data})
        }
        catch(e){
            console.log("something went wrong...")
            console.log(e);
        }
    }
}

const addFood = (dispatch) => {
    return (name, calories, carbs, protein, fat, sugar, callback) => {
		
        dispatch({ type: 'add_hero', payload: { name: name, calories: calories, carbs: carbs, protein: protein, fat: fat, sugar: sugar } })
		if(callback){
        callback();
		}
    }
}

const deleteHero = (dispatch) => {
    return (id) => {
       
        dispatch({ type: 'delete_hero', payload: id  })
    }
}

const editHero = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title: title, content: content})
        dispatch({type: 'edit_blogpost', payload: { id: id, title: title, content: content}})
        callback();
    }
}

const levelHero = (dispatch) => {
    return (id, name, calories, carbs, protein, fat, sugar, callback) => {
        dispatch({type: 'calories_hero', payload: { id: id, name: name, calories: calories, carbs: carbs, protein: protein, fat: fat, sugar: sugar}})
       if(callback){
        callback();
		}
    }
}

export const {UserContext, Provider} = createDataContext(blogReducer, 
                                    {addFood: addFood, deleteHero: deleteHero, levelHero: levelHero, getBlogPosts:getBlogPosts}, 
                                    [ ]
                                );