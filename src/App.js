import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppContainer from './components/AppContainer/AppContainer'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={AppContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
