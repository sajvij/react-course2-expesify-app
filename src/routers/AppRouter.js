import React from 'react';
import  ReactDOM  from 'react-dom';
import ExpenseDashboardPage from '../component/ExpenseDashboard';
import AddExpensePage from '../component/AddExpensePage';
import EditExpensePage from '../component/EditExpensePage';
import HelpPage from '../component/HelpPage';
import NotFoundPage from '../component/NotFoundPage';
import Header from '../component/Header';
import{BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}> </Route>
                <Route path="/create" component={AddExpensePage}> </Route>
                <Route path="/edit/:id" component={EditExpensePage}> </Route>
                <Route path="/help" component={HelpPage}> </Route>
                <Route component={NotFoundPage} ></Route>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;