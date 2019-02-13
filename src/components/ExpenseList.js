import React from 'react'; 
import {connect} from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'; 


 class ExpenseList extends React.Component {

    constructor(props){
        super(props); 
    }


    render(){
        console.log('From store ', this.props.expenses); 
        return (
            <div>
                <h1>Expense List {this.props.expenses.length}</h1>
                {console.log('Type of ', typeof this.props.expenses)}
                {this.props.expenses.map((expense )=> {
                    return <ExpenseListItem key={expense.id} {...expense}/>    
                })}
            </div>
        ); 
    }
}

const mapStateToProps = (state) => ({
    filter : state.filter, 
    expenses : selectExpenses(state.expenses, state.filter)

    //expenses : state.expenses
})

export default connect(mapStateToProps)(ExpenseList); 