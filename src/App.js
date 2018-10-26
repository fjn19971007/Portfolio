import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';
import DoseHealth from './components/DoseHealth';

const PUBLIC_URL = process.env.PUBLIC_URL;
console.log(PUBLIC_URL)

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={PUBLIC_URL}>
        <div className="App">
            <Route component={NavBar} />
            <Switch>
              <Route exact path='/work/dose_health' component={DoseHealth} />
              <Route exact path='/resume' component={Resume} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/' component={Work} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
