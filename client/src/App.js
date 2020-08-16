import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/screens/Profile'
import Home from './components/screens/Home'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import Navbar from './components/Navbar';
// import Landing from './components/layout/Landing';
// import Routes from './components/routing/Routes';
import "./App.css";

function App() {
  return (
   <Router>

    <Navbar/>
    <Switch>
    <Route path='/' exact component={Home}/>
<Route path='/login' exact component={Login} />
<Route path='/signup' exact component={Signup} />
    </Switch>
    </Router> 
  );
}

export default App;


