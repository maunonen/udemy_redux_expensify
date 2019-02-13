import React  from 'react';
import ExpenseList from './ExpenseList';
import ExpenselistFilters from './ExpenseListFilters';


export default class ExpenseDashboardPage extends React.Component {
  render() {
    return (
      <div>
        <ExpenselistFilters/>  
        <ExpenseList/>
      </div>
    );
  }

  
}


