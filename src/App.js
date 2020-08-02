import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './components/Home';
import Quotes from './components/Quotes';
import Jokes from './components/Jokes';



function App() {
  return (
    <Router>
      <div className="App">
        <nav className={}>
          <Link to="/Home">Home </Link> 
          <Link to="/Quotes"> Quotes </Link> 
          <Link to="/Jokes"> Jokes </Link>
        </nav>
        <Switch>
          <Route path='/Home'>
            <Home />
          </Route>
          <Route path='/Quotes'>
            <Quotes />
          </Route>
          <Route path='/Jokes'>
            <Jokes />
          </Route>
        </Switch>
      
      </div>

    </Router>
    
  );
}

export default App;
