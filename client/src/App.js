import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './Components/Landing Page/LandingPage';
import Home from './Components/Home/Home';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import NavBar from './Components/NavBar/NavBar';
import PostActivity from './Components/Activity/PostActivity';

function App() {
    return (
      <div className="App">
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={NavBar}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/countries/:id" component={CountryDetails}/>
        <Route path="/createActivity" component={PostActivity}/>
      </div>
    );
  }

export default App;
