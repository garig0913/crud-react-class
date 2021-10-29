import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './Components/User/User'
import Post from './Components/User/Post'
import Todos from './Components/User/Todos';
import Login from './Components/Login/Login'
import Profile from './Components/Timeline/Profile';
import TimeLine from './Components/Timeline/TimeLine';
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/user' component={User} />
      <Route exact path='/post' component={Post} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/timeline' component={TimeLine} />
      <Route exact path='/to-do' component={Todos} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);