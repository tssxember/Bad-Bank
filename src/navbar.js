import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './App.css'

function Navbar() { 
  return( 
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Bad Bank</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="navbar-item">
              <NavLink className="nav-link" to="/create-account">Create Account</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/deposit">Deposit</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/withdraw">Withdraw</NavLink>
            </li>
            <li className="navbar-item">
              <NavLink className="nav-link" to="/all-data">All Data</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  
  );
}


export default Navbar;