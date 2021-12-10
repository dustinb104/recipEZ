import React, {useReducer} from 'react';

export default (reducer, actions, initialState) => {
    const ShoppingContext = React.createContext();

    const Provider = ({ children}) => {
        const [ShoppingState, dispatch] = useReducer(reducer, initialState);

        //actions === { addBlogPost : (dispatch) => { return () => {} } }
        const boundActions = {};
        for (let key in actions){
            // key === 'addBlogPost
            boundActions[key] = actions[key](dispatch);
        }

        return <ShoppingContext.Provider value={ {ShoppingState: ShoppingState, ...boundActions}}>
            {children}
        </ShoppingContext.Provider>
    }

    return {ShoppingContext, Provider};
};