import React from 'react';
import NAVBAR from './Navbar'
import Home from './Home'
import Rashi from './Rashi'
import {BrowserRouter as Router  , Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div >
       <Router >
      <NAVBAR/>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/rashi' component={Rashi}/>
    </Router>
    </div>
  );
}

export default App;
