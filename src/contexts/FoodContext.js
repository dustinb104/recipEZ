import React, {useReducer} from "react";
import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
    switch(action.type){
        case 'get_blogposts':
            return action.payload;
        case 'add_hero':
            return [...state, { 
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
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'calories_hero':
            return state.map((hero) => {
                if (hero.id === action.payload.id) {
                    return action.payload;
                }
                else{
                    return hero;
                }
            })
        default:
            return state;
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

const addHero = (dispatch) => {
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

export const {Context, Provider} = createDataContext(blogReducer, 
                                    {addHero: addHero, deleteHero: deleteHero, levelHero: levelHero, getBlogPosts:getBlogPosts}, 
                                    [{id:1, name:'Apple', calories: 52, carbs: 14, protein: 0, fat:0, sugar: 10},
                                    {id: 2,name: 'Banana', calories: 110, carbs: 28, protein: 1, fat: 0, sugar: 15},
                                    {id:3, name: 'Carrot', calories:25, carbs: 6, protein: 0, fat: 0, sugar: 0},
                                    {id: 4, name: 'Avacodo', calories: 250, carbs: 12, proteins: 3, fat: 24, sugar: 0}]
                                );