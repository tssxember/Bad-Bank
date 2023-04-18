import './App.css'
import React, { useState, useContext } from 'react';
import {UserContext, Card} from './context';
import {Link} from 'react-router-dom';

function CreateAccount(){
    const [show, setShow]         = useState(true);
    const [status, setStatus]     = useState('');
    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);  
  
    
    function createForm(){
      console.log(name,email,password);
      if (!validate(name,     'Name required'))     return;
      if (!validate(email,    'Email required'))    return;
      if (!validate(password, 'Password required')) return;
      if (password.length < 8) {
        setStatus(`Error: Password must be at least 8 characters.`);
        setTimeout(() => setStatus(''), 3000);
        return false
    }
      ctx.users.push({name,email,password,balance:100});
      setShow(false);
    }    
  


    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        } 
        return true;
    }
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

  return (
    
    <div id="actCard">
    <div  id="card2">
      <Card
        bgcolor = "primary"
        header="Create Account"
        status={status}
        body={show ? (  
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter Full Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" disabled={name === '' || email==='' || password==='' ? true : false} onClick={createForm}>Create Account</button>
                </>
              ):(
              <>
                  <h3>Account added.</h3>
                  <h5>Thank you for choosing Bad Bank!</h5>
                  <button type="submit" className="btn btn-light" onClick={clearForm}>Add account</button>
                  <hr/>
                  <Link to="/deposit"><button type="submit" className="btn btn-light" id="depositBtn">Make Deposit</button></Link>
                  </> 
              )}
      />
    </div>
  </div>
)
}

export default CreateAccount;
