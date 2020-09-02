import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Landingpage from './components/Landingpage/Landingpage'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Landingpage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
