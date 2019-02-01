import {createStore, combineReducers } from 'redux'; 

// ADD_EXPENSE 
// REMOVE_EXPENSE 
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE
// 

const expensesReducerDefaultState = []; 

const expensesReducer = (state = expensesReducerDefaultState, action) => {

    switch (action.type){
        default : 
            return state; 
    }
}



export default storeTest = createStore( 
    combineReducers({
        expenses : expensesReducer
    })
); 


console.log(storeTest.getState()); 

const demoState = {
    expenses : [{
        id : 'dgbdgb', 
        description : 'Jan rent ' ,
        note : 'This was the final payment for that adddress', 
        amount : 545000, 
        createdAt : 0 
    }], 
    filters : {
        text : 'rent' , 
        sortBy : 'amount', // data or amount 
        startDate : undefined, 
        endDate : undefined
    }
}

