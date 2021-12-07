import React, {useReducer} from 'react';

export default (reducer, actions, initialUserState) => {
    const UserContext = React.createContext();

    const Provider = ({ children}) => {
        const [userState, dispatch] = useReducer(reducer, initialUserState);

        //actions === { addBlogPost : (dispatch) => { return () => {} } }
        const boundActions = {};
        for (let key in actions){
            // key === 'addBlogPost
            boundActions[key] = actions[key](dispatch);
        }

        return <UserContext.Provider value={ {userState: userState, ...boundActions}}>
            {children}
        </UserContext.Provider>
    }

    return {UserContext, Provider};
};