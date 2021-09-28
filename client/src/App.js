import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Components/Landing Page/LandingPage';
import Home from './Components/Home/Home';

function App() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/home" component={Home}/>
      </div>
    );
  }

export default App;
