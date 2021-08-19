import React from 'react';
import './App.css';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import Home from './components/Home/Home';

const App = () => {
  return (
    <>
      <Home />
      <Login />
      <Register />
    </>
  );
};

export default App;
