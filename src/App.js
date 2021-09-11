import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    //BEM convention for class name
    <Router>
      <div className="App">
      <Header/>
        <Switch>
         
          <Route path="/checkout">
            <Checkout/>
          </Route>

          {/*Default route should be at bottom*/}
          <Route path="/">{/* when in this route render the following*/}
            <Home/>
          </Route>
        </Switch>
      
        {/*Footer*/}
      </div>

    </Router>
    
  );
}

export default App;
