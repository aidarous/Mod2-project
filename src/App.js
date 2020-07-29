import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <navbar>
          <Link to="Home">Home </Link>
          <Link></Link>
        </navbar>
      
      </div>

    </Router>
    
  );
}

export default App;
