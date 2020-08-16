import React, { Fragment, useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login=({history})=>{
   
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
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
        <button className="btn waves-effect waves-light" onClick={signin}>Signup</button>
      </div>
    </div>
  );

};
export default Login