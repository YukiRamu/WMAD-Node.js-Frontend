import React from 'react';
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Home/Home';
import ForgotCredential from './components/Authentication/ForgotCredential';

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
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
