import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Profile from './components/screens/Profile'
import Home from './components/screens/Home'
import Signup from './components/screens/Signup'
import Login from './components/screens/Login'
import Navbar from './components/Navbar';
import Teacher from './components/screens/Teacher';
import StudentTeacher from './components/screens/StudentTeacher';
import CreateTeam from './components/screens/CreateTeam';
// import Landing from './components/layout/Landing';
// import Routes from './components/routing/Routes';
import "./App.css";

function App() {
  return (
   <Router>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/profile' exact component={Profile}/>
    <Route path='/teacher' exact component={Teacher}/>
    <Route path='/studentteacher' exact component={StudentTeacher}/>
    <Route path='/createteam' exact component={CreateTeam}/>
    <Route path='/login' exact component={Login} />
    <Route path='/signup' exact component={Signup} />
    </Switch>
    </Router> 
  );
}

export default App;


