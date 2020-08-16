import React, { Fragment, useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login=({history})=>{
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const role = "StudentTeacher";
  const signint = () => {
    
  }
  const signinst = () => {

  }
  const signin=()=>{
   
    fetch('/signin',{
        method: 'POST',
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            
            email, password
        })
    }).then(response =>response.json()).then(data =>
        {
            if(data.error){
                console.log(data.error);
            }
            else{
                console.log(data);
               history.push('/')
            }
        }
        );
}
  return (
    <div className="mycard">
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
      <div className="card auth-card input-field">
        <h2>Code stars</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {role == "StudentTeacher" ? <Link to="/studentteacher">
          <button className="btn waves-effect waves-light" onClick={signin}>Log In</button>
        </Link> : <Link to="/teacher">
          <button className="btn waves-effect waves-light" onClick={signint}>Log In</button>
        </Link>}
      </div>
    </div>
  );

};
export default Login