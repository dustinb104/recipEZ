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
                    currentHealth: action.payload.currentHealth,
					maxHealth: action.payload.maxHealth,
					gold: action.payload.gold,
					power: action.payload.power,
					level: action.payload.level
                }
            ]
        case 'delete_hero':
            return state.filter((hero) => {
                return hero.id !== action.payload
            });
        case 'level_hero':
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
    return (name, level, power, currentHealth, maxHealth, gold, callback) => {
		
        dispatch({ type: 'add_hero', payload: { name: name, level: level, power: power, currentHealth: currentHealth, maxHealth: maxHealth, gold: gold } })
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
    return (id, name, level, power, currentHealth, maxHealth, gold, callback) => {
        dispatch({type: 'level_hero', payload: { id: id, name: name, level: level, power: power, currentHealth: currentHealth, maxHealth: maxHealth, gold: gold}})
       if(callback){
        callback();
		}
    }
}

export const {Context, Provider} = createDataContext(blogReducer, 
                                    {addHero: addHero, deleteHero: deleteHero, levelHero: levelHero, getBlogPosts:getBlogPosts}, 
                                    [ ]
                                );