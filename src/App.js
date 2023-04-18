import { HashRouter, Route, Routes } from 'react-router-dom';
import { UserContext } from './context.js';
import Navbar from './navbar';
import Home from './home';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';

function App() {
  return (
   <HashRouter basename="/">
      <Navbar />
      <UserContext.Provider value={{users:[{name:'vinny',email:'vincent.fezzuoglio@protonmail.com',password:'secret',balance:1000}]}}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/deposit' element={<Deposit />} />
          <Route path='/withdraw' element={<Withdraw />} />
          <Route path='/all-data' element={<AllData />} />
        </Routes>
      </UserContext.Provider>
   </HashRouter>
  );
}

export default App;