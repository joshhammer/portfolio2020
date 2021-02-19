import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navigation from './components//Navigation/Navigation';
import LandingPage from './components/LandingPage/LandingPage'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          {/* <Route path='/navigation' component={Navigation}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
