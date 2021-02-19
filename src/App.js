import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage'
import Skills from './components/Skills/Skills'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/skills' component={Skills}/>

        </Switch>
      </Router>
      <Navigation />
    </div>
  );
}

export default App;
