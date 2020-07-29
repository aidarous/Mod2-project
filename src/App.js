import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <navbar>
          <Link to="/Home">Home </Link> 
          <Link to="/Quotes"> Quotes </Link> 
          <Link to="/Jokes"> Jokes </Link>
        </navbar>
        <Switch>
          <Route path='/Home'>
            
          </Route>
        </Switch>
      
      </div>

    </Router>
    
  );
}

export default App;
