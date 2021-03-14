import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/skills' component={Skills}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>

        </Switch>
      </Router>
      <Navigation />
    </div>
  );
}

export default App;
