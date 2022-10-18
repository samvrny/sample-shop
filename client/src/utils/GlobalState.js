import React, { createContext, useContext } from 'react';
import { useProductReducer } from './reducers';

//instantiate global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: ''
    });
    //use these lines to ensure functionality works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props}/>;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };