import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
    <Header/>

    <Switch>
      <Route path='/home'>
       <Home/>
      </Route>
       <Route exact path="/">
       <Home/>
      </Route>
    </Switch>

  </Router>
  );
}

export default App;
