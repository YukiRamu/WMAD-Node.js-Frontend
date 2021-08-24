import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Login from '../Authentication/Login';
import Register from '../Authentication/Register';
import Home from '../Home/Home';
import ForgotCredential from '../Authentication/ForgotCredential';
import dashboard from '../Dashboard/dashboard';

const App = () => {
  return (
    <>
      {/* React Router*/}
      <BrowserRouter>
        {/* Router Switch */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgotCredential" component={ForgotCredential} />
          <Route path="/dashboard" component={dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
