import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './Styles/App.css';
import Home from './views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './views/Services';
import Products from './views/Products';
import SignUp from './views/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
