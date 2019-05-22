import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login'

class App extends Component  {
  render() {
    return (
      <Router>
        <div>
          <Link to="/login">Login</Link>
          <h1>Hey there</h1>
          <Route path="/login" component={Login} />
        </div>
      </Router>
  );
}
}

export default App;
