import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'; 
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
//import ReduxTest from '../playground/redux-101';


export default class AppRouter extends Component {
    render() {
      return (
        <div className="App">
          <BrowserRouter>
              <div>
              <Header/>
              <Switch>
              <Route 
                  path="/" 
                  exact
                  component={ExpenseDashboardPage}
              />
              <Route 
                  path="/create" 
                  component={AddExpensePage}
                  exact
              />
              <Route 
                  path="/edit/:id" 
                  component={EditExpensePage}
              />
              <Route 
                  path="/help" 
                  component={HelpPage}
              />
         
             
           
              <Route 
                  component={NotFoundPage}
              />
              </Switch>
              </div>
           
          </BrowserRouter>
        </div>
      );
    }
  }
  