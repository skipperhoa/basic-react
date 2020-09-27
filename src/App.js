import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import Product from './components/Product';
import Edit from './components/Edit';
import Post from './components/Post';
function App() {
  return (
    <Router>
      <div className="container">
         <Link to="/">List Product</Link> | 
         <Link to="/post">List Product</Link>
      </div>
       <Switch>
         <Route path="/" exact component={Product} />
         <Route path ="/edit/:id" component={Edit} />
         <Route path = "/post" component={Post} />
       </Switch>
    </Router>
  );
}

export default App;
