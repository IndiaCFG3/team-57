import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const Navbar=()=>{
return (
    <nav>
    <div className="nav-wrapper black">
      <Link to="/" className="left">
        <h3>CodeStars</h3></Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/login">About</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  </nav>
)
};
export default Navbar;