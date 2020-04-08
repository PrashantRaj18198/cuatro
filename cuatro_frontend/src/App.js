import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';

import './App.css';

import SignInForm from './components/pages/SignInForm';
import SignUpForm from './components/pages/SignUpForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';

import LoginFail from './components/pages/LoginFail';
import SignUpFail from './components/pages/SignUpFail';
import LoggedIn from './components/pages/LoggedIn';
import SubscriptionPlans from './components/pages/SubcriptionPlans';
import MusicPlayer from './components/pages/MusicPlayer';
import Payment from './components/pages/Payment';

function App() {
  return (
       
          <div className="App">
            <BrowserRouter>
            <Switch>
              <Route exact path="/" component={SignUpForm} />
              <Route exact path="/sign-in" component={SignInForm} />
              <Route exact path="/login-fail" component={LoginFail} />
              <Route exact path="/signup-fail" component={SignUpFail} />
              <Route exact path="/loggedin" component={LoggedIn} />
              <Route exact path='/musicplayer' component={MusicPlayer} />
              <Route exact path='/subscriptionplans' component={SubscriptionPlans} />
              <Route exact path='/subscriptionplans/payment' component={Payment} />
            </Switch>
            </BrowserRouter>
          </div>
    
  );
}

export default App;
