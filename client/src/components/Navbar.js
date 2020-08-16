import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const Navbar=()=>{
return (
    <nav>
    <div className="nav-wrapper black">
      <Link to="/" className="left">
        <h3>CodeStars</h3></Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/evalForm">Evaluate</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createteam">Create Team</Link></li>
        {/* <li><Link to="/teacher">Teacher</Link></li>
        <li><Link to="/studentteacher">Student Teacher</Link></li> */}
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  </nav>
)
};
export default Navbar;