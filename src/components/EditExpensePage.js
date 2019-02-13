import React  from 'react';
import {connect} from 'react-redux'; 
import ExpenseForm from './ExpenseForm'; 
import {editExpense,  removeExpense} from '../actions/expenses'; 



class EditExpensePage extends React.Component {
  
  constructor(props){
      super(props); 
      console.log('From constructor', this.props); 
  } 
  render() {
    //console.log('From render ', this.props); 
    return (
      <div className="App">
        <h1>EDIT ExpensePage {this.props.match.params.id}</h1>
        <ExpenseForm 

          expense= {this.props.expense}
          onSubmit={(expense) => {
            console.log('updated', expense); 
            this.props.dispatch(editExpense(  this.props.expense.id, expense )); 
            this.props.history.push('/');  

          }} 
        />
        <button id= {this.props.id} onClick={()=> {
            this.props.dispatch(removeExpense({id : this.props.expense.id }));  
            this.props.history.push('/'); 
        }}>Remove</button>

      </div>
    );
  }
}

const mapStateToPrpos = (state, props ) => {

  //console.log('FROM MAP STATE ID : ', props.match.params.id); 
  //console.log('FROM MAP STATE EXPENSES: ', state.expenses ); 
  return {
    expense : state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect (mapStateToPrpos)(EditExpensePage);

