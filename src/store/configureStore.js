
import {createStore, combineReducers, applyMiddleware} from 'redux'; 
//import { composeWithDevTools } from 'redux-devtools-extension';
import expensesReducer from '../reducers/expenses'; 
import filterReducer from '../reducers/filters'; 

export default () => {

    const store = createStore( 
        combineReducers({
            expenses : expensesReducer, 
            filter : filterReducer, 
            
        }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 
    
    return store; 
}

