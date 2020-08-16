import React, { Fragment, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TeamList from './TeamList';
class Teacher extends Component {
    state = {
        teams: [
          {
            id: 1,
            title: 'Harsh Sandesara',
          },
          {
            id: 2,
            title: 'Jinit Jain',
          },
          {
            id: 3,
            title: 'Naman Jain',
          },
          {
            id: 4,
            title: 'Sai Prathyusha',
          },
          {
            id: 5,
            title: 'Ishitaa Gangadhara',
          },
          {
            id: 6,
            title: 'Yaswanth Talapanti',
          }
        ],
        teacher: "Harsh"
      }
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
                <nav className="navbar navbar-light btn-info lighten-4">
                
                <span>Hello, {this.state.teacher}</span>
                
                <button className="btn btn-info btn-stretch" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span className="dark-blue-text">...</span></button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item right">
                        <a className="nav-link btn btn-info" href="#">Show Teams</a>
                    </li>
                    <li className="nav-item right">
                    <Link to="/createteam">
                        <span className="nav-link btn btn-info" href="#">Create New Team</span>
                    </Link>
                    </li>
                    </ul>
                </div>
                </nav>
                <br />
                <div className="container">
                <h3>Teams List</h3>
                <hr />
                <div>
                    <TeamList teams = {this.state.teams} />
                </div>
                </div>
            </div>
        )
    }
}
export default Teacher;