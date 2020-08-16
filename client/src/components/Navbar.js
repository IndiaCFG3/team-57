import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const Navbar=()=>{
return (
    <nav>
    <div className="nav-wrapper black">
      <Link to="/" className="brand-logo left">CodeStars</Link>
      <ul id="nav-mobile" className="right ">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/evalForm">Evaluate</Link></li>
      </ul>
    </div>
  </nav>
)
};
export default Navbar;