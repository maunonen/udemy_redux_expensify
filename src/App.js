import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 

import {Provider } from 'react-redux'; 

import './App.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'; 
import {addExpense} from './actions/expenses'; 
import {setTextFilter, sortByAmount, sortByDate}  from './actions/filters'; 

import getVisibleExpenses from './selectors/expenses'; 




const store = configureStore(); 
console.log('APP PAGE', store.getState()); 


store.dispatch(addExpense({ description : 'Water bill ', amount : 100, createdAt : -1000 }));  
store.dispatch(addExpense({ description : 'Gas bill', amount : 300, createdAt : 1000 }));  
store.dispatch(addExpense({ description : 'Rent bill', amount : 109500, createdAt : -2000 }));  
store.dispatch(setTextFilter('water')); 
store.dispatch(sortByAmount()); 

setTimeout(() => {
  store.dispatch(setTextFilter('bill')); 
  //store.dispatch(sortByDate()); 
}, 3000); 


store.subscribe(() => {
  const state = store.getState(); 
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter); 
  console.log('VISIBLE', visibleExpenses); 
  console.log(state); 
}); 





class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <AppRouter/>
        </div>
      </Provider>
      
    );
  }
}

export default App;
