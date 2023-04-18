import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function Home(){
    return (
      <div id="home-card">
        <div className="card" id="card1" style={{ textAlign: 'center'}}>
        <h5 className="card-title"  style={{fontSize: 30 + "px", fontWeight: 'bold', color: "Black"}}>Bad Bank</h5>
        <img src={require('.//images/bank.png')} className="card-img-top" alt="bank" id="homeImg"/>
          
        <div className="card-body" id="homeBody">
    
          <Link to="/create-account"><button type="submit" className="btn btn-primary" id="createAcctBtn" style={{fontSize: 20 + "px", fontWeight: 'bold', backgroundColor: "navy", opacity: .85}}>Join Bad Bank</button></Link>
        </div>
        </div>
      </div>
      
    );  
}
  
export default Home;
