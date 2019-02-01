
import {createStore, combineReducers} from 'redux'; 
import React  from 'react';
import uuid from 'uuid'; 
import { stat } from 'fs';

export default class ReduxTest extends React.Component {
  render() {




    

    // ADD_EXPENSE 
    const addExpense = (
        {description = '', 
        note = '', 
        amount = 0 , 
        createdAt = 0 
    } = {}
    ) => ({
        type : 'ADD_EXPENSE',
        expense : {
            id : uuid(), 
            description, 
            note, 
            amount, 
            createdAt
        }
    });
 
    // REMOVE_EXPENSE 
    const removeExpense = (
        {id } = {} ) => ({
        type : 'REMOVE_EXPENSE',
        id 
    });

    // EDIT_EXPENSE
    const editExpense = (id, updates ) => ({
       type : 'EDIT_EXPENSE', 
       id, 
       updates

    })
    // SET_TEXT_FILTER

    const setTextFilter = (text = '') => ({
        type  : 'SET_TEXT_FILTER', 
        text 
    })
    // SORT_BY_DATE
    const sortByDate = () => ({
        type : 'SORT_BY_DATE'
        
    }) 
    // SORT_BY_AMOUNT
    const sortByAmount = () => ({
        type : 'SORT_BY_AMOUNT'
        
    })

    // SET_START_DATE
    const setStartDate = (date ) => ({
        type : 'SET_START_DATE', 
        date
    })
    
    // SET_END_DATE

    const setEndDate = (date ) => ({
        type : 'SET_END_DATE', 
        date
    })

    // get Visible expenses 

    const getVisibleExpenses = (expenses , {text, sortBy, startDate, endDate } ) => {
        
        //console.log('EXPENSES', expenses)
        console.log(startDate ,  endDate); 

        let count = 0; 
        return expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate; 
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
            const textMatch = true; 
            
            console.log(count ++, expense.createdAt);
            return startDateMatch && endDateMatch && textMatch ; 


        }) ; 
    };

    
    
    const expensesReducerDefaultState = []; 
    
    const expensesReducer = (state = expensesReducerDefaultState, action) => {
    
        switch (action.type){
            case 'ADD_EXPENSE': 
            return [
                ...state, 
                action.expense
            ];

            case 'REMOVE_EXPENSE' : 
            return state.filter(({id}) => id !== action.id )

            case 'EDIT_EXPENSE' : 
            console.log('EDIT EXPEnsis'); 
            
            console.log(state.map((expense) => {
                if (expense.id === action.id ) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                    console.log(expense);
                }
            })); 
            return 0; 
            default : 
                return state; 
        }
    }

    const filterReducerDefaultState = {
            text : '' , 
            sortBy : 'date', 
            startDate : undefined, 
            endDate : undefined
    }; 
    const filterReducer = (state = filterReducerDefaultState, action) => {
        switch (action.type) {
            case 'SET_TEXT_FILTER': 
            return {
                ...state, 
                text : action.text
            }; 
            case 'SORT_BY_DATE': 
            return {
                ...state, 
                sortBy : 'date'
            }
            case 'SORT_BY_AMOUNT' : 
            return {
                ...state, 
                sortBy : 'amount'

            }
            case 'SET_START_DATE' : 
            return {
                ...state, 
                startDate : action.date

            }
            case 'SET_END_DATE' : 
            return {
                ...state, 
                endDate : action.date

            }

            default : 
                return state; 
        }
    }
    
    const user = {
        name : 'Jen', 
        age : 24
    }; 
    
    console.log({
        ...user, 
        location : 'Philadilphia', 
        age : 27 
    });  
    
    const store = createStore( 
        combineReducers({
            expenses : expensesReducer, 
            filter : filterReducer
        })
    ); 
    
  
    store.subscribe(() => {
        const state = store.getState(); 
        const visibleExpenses = getVisibleExpenses(state.expenses, state.filter); 
        console.log('VISIBLE', visibleExpenses); 
    }); 

    const expenseOne = store.dispatch(addExpense({ description : 'Rent', amount : 100, createdAt : -1000 }));  
    const expenseTwo = store.dispatch(addExpense({ description : 'Coffee', amount : 300, createdAt : 1000 }));  
    const expenseThree = store.dispatch(addExpense({ description : 'Test1', amount : 40, createdAt : -500 }));  
    const expenseFoor = store.dispatch(addExpense({ description : 'Test2', amount : 50, createdAt : -2000 }));  

    //store.dispatch(setTextFilter('rent')); 
   

    //console.log(expenseOne); 
    //console.log(expenseTwo);  

    //store.dispatch(removeExpense({ id : expenseOne.expense.id})); 
    

    store.dispatch(editExpense( expenseTwo.expense.id , { amount : 500 }))

    //store.dispatch(setTextFilter( 'rent')); 
    //store.dispatch(setTextFilter( )); 


    //store.dispatch(sortByAmount()); 
    //store.dispatch(sortByDate()); 

    store.dispatch(setStartDate(-5000)); 
    //store.dispatch(setStartDate(0)); 

    //store.dispatch(setEndDate(1250)); 
    //store.dispatch(setEndDate()); 

    

    //store.dispatch(addExpense({ description : 'Rent', amount : 100 }));  
    //store.dispatch(addExpense({ description : 'Coffee', amount : 300 }));  
   
    
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
    




 /*        const add = ({a , b }, c ) => {
            return a + b; 
        }

        console.log({a : 1 , b : 12 } ,100 )

        const incrementCount = ({incrementBy = 1 } = {}) => ({
            type : 'INCREMENT', 
            incrementBy
        })
        
        const decrementCount = ({decrementby = 3} = {}) => ({
            type : 'DECREMENT', 
            decrementby
        })

        const setCount = ({count = 0} = {}) => ({
            type : 'SET', 
            count
        })

        const resetCount = () => ({
            type : 'RESET'
        })

        const countReducer = (state = { count : 0 }, action) => {
            switch (action.type){
                case 'INCREMENT' : 
                const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
                return {
                    count : state.count + incrementBy
                }
                case 'DECREMENT' : 
                const decrementby =  typeof action.decrementby === 'number' ? action.decrementby : 1 ; 
                return {
                    count : state.count - decrementby
                }
                case 'RESET' : 
                return {
                    count : 0
                }
                case 'SET' : 
                return {
                    count : action.count
                }
                default: 
                return state; 
            }
        }

   /*      const store = createStore((state = { count : 0 }, action) => {
        //console.log('running', action.type); 
        
        switch (action.type){
            case 'INCREMENT' : 
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return {
                count : state.count + incrementBy
            }
            case 'DECREMENT' : 
            const decrementby =  typeof action.decrementby === 'number' ? action.decrementby : 1 ; 
            return {
                count : state.count - decrementby
            }
            case 'RESET' : 
            return {
                count : 0
            }
            case 'SET' : 
            return {
                count : action.count
            }
            default: 
            return state; 
        }
    });  */
/* 
    const unsubcribe = store.subscribe(() => {
        console.log(store.getState())
    })

    store.dispatch(incrementCount()); 
    store.dispatch(decrementCount()); 

    store.dispatch(incrementCount({
        incrementBy : 5
    })); 

    store.dispatch(decrementCount({
        decrementby : 10
    })
    ); 
    store.dispatch(setCount({ count : 100 })); 
    store.dispatch(decrementCount()); 
    store.dispatch(incrementCount()); 

    store.dispatch(resetCount());  */
 

  

    //console.log(store.getState()); 

    return (
      <div className="App">
        <h1>Hello from HELP PAGE</h1>
      </div>
    );
  }
}






