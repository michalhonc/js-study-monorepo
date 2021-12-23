import React from 'react';

const MenuContext = React.createContext();

const initialState = { opened: false };

const reducer = (state, action) => {
    switch (action.type) {
        case 'close':
            return { ...state, opened: false };
        case 'open':
            return { ...state, opened: true };
    
        default:
            return initialState;
    }
};

const MenuProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <MenuContext.Provider value={value}>
            {props.children}
        </MenuContext.Provider> 
    );
};

const MenuConsumer = MenuContext.Consumer;
export { MenuContext, MenuProvider, MenuConsumer };