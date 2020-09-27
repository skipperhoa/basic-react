import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Router>
          <div className="App">
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" component={Home} />
              <Route path="/carts" component={Cart} />
            </Switch>
          </div>
      </Router>
    )
  }
}
export default App;
