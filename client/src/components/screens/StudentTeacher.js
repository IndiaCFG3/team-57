import React, { Fragment, useEffect, Component }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
class StudentTeacher extends Component {
    render() {
        return (
            <div>
                <nav>
                <div className="nav-wrapper black">
                <Link to="/" className="left">
                    <h3>CodeStars</h3></Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}
export default StudentTeacher;