
import React, { Fragment, useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const EvalForm=({history})=>{
   
  const [classPresence, setclassPresence] = useState();
  const [confidence, setconfidence] = useState();
  const [initiative, setinitiative] = useState();
  const [leadership, setleadership] = useState();
  const [mentoring, setmentoring] = useState();
  const [description, setdesc] = useState("");
  const [subject, setsubject] = useState("solar");
  const [team, setteam] = useState("Code stars1");

const eval1=()=>{
    "use strict";
    fetch('/evalForm',{
        method: 'POST',
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            
            classPresence,confidence,initiative,leadership,mentoring,description,subject,team
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
//    <div>
//   <div id="root" />
//     <center>
//       <p>
//         <label style={{"color":"blueviolet","font-size":"20px"}}><b>Class Prsence</b>
//           <input type="text" style={{"-webkit-text-align":"center","text-align":"center"}} placeholder="Class Presence score"  value={classPresence}
//           onChange={(e) => setclassPresence(e.target.value)} required />
//         </label> 
//       </p>
//       <p>
//         <label style={{"color":"blueviolet","font-size":"20px"}}><b>Initiative</b>
//           <input type="text" style={{"-webkit-text-align":"center","text-align":"center"}} placeholder="Initiative score"  value={initiative}
//           onChange={(e) => setinitiative(e.target.value)} required />
//         </label>
//       </p>  
//       <p>
//         <label style={{"color":"blueviolet","font-size":"20px"}}><b>Mentoring</b>
//           <input type="text" style={{"-webkit-text-align":"center","text-align":"center"}} placeholder="Mentoring score"  value={mentoring}
//           onChange={(e) => setmentoring(e.target.value)} required />
//         </label>
//       </p>  
//       <p>
//         <label style={{"color":"blueviolet","font-size":"20px"}}><b>Leadership</b>
//           <input type="text" style={{"-webkit-text-align":"center","text-align":"center"}} placeholder="Leadership score"  value={leadership}
//           onChange={(e) => setleadership(e.target.value)} required />
//         </label>
//       </p>
//       <label style={{"color":"blueviolet","font-size":"20px"}}><b>Confidence</b></label>
//       <input type="text" style={{"-webkit-text-align":"center","text-align":"center"}} placeholder="confidence score"  value={confidence}
//           onChange={(e) => setconfidence(e.target.value)} required />
//       <p /> 
//       <label style={{"color":"blueviolet","font-size":"20px"}}><b>Remarks</b>
//         <textarea rows={8} cols={20} style={{"-webkit-text-align":"center","text-align":"center"}} placeholder="REMARKS"  value={desc}
//           onChange={(e) => setdesc(e.target.value)} />
//         <b>image to upload:</b>
//         <input type="file"  id="fileToUpload" required />
//         <br />
//         <br />
//         <button type="submit" onClick={eval} />
//         <br />
//       </label></center>
// </div>
<div className="mycard">
      <div className="card auth-card input-field">
        <h2>Code stars</h2>
        <input
          type="text"
          placeholder="Class Presence"
          value={classPresence}
          onChange={(e) => setclassPresence(e.target.value)}
        />
        
        <input
          type="text"
          placeholder="Leadership"
          value={leadership}
          onChange={(e) => setleadership(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mentoring"
          value={mentoring}
          onChange={(e) => setmentoring(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confidence"
          value={confidence}
          onChange={(e) => setconfidence(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setdesc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Initiative"
          value={initiative}
          onChange={(e) => setinitiative(e.target.value)}
        />
        <button className="btn waves-effect waves-light" onClick={eval1}>Submit</button>
      </div>
    </div>
 );

};

export default EvalForm;