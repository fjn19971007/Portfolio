import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Work from './components/Work';
import Resume from './components/Resume';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Route component={NavBar} />
            <Switch>
              <Route path='/work/dose_health' component={Work} />
              <Route path='/resume' component={Resume} />
              <Route path='/contact' component={Contact} />
              <Route path='/' component={Work} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
