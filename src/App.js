import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import Header from './components/views/Header/Header';
import NavBar from './components/views/NavBar/NavBar';
import Welcome from './components/views/Welcome/Welcome';
import AboutMe from './components/views/AboutMe/AboutMe';
import Project from './components/views/Project/Project';


function App() {
  return (
    <Router>

      <Header />

      <NavBar />

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/project" component={Project} />
        </Switch>
        
    </Router>
  );
}

export default App;
