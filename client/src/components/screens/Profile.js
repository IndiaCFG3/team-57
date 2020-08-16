import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Profile=()=>{
    return (
        <div>
            <nav>
                {/* <div className="nav-wrapper black">
                <Link to="/" className="left">
                    <h3>CodeStars</h3></Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                </div> */}
            </nav>
            <div className="container">
                <table className="table">
                    <tr>
                        <td>Name</td>
                        <td><input className="fluid" type="text"></input></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input className="fluid" type="text"></input></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input className="fluid" type="password"></input></td>
                    </tr>
                </table>
            </div>
        </div>
    )
};
export default Profile;