import React from 'react';
import { UserContext } from './context';
import './App.css'

function AllData(){
  const ctx = React.useContext(UserContext);
  const data = ctx.users;
  const tableCells = data.map((item) =>
    <tr>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <td>{item.balance}</td>
    </tr>
  );
  return (
    <>
    <h3 className="dataHeader">All Data in Store</h3>
    <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" className="tableCell">Name</th>
            <th scope="col" className="tableCell">Email</th>
            <th scope="col" className="tableCell">Password</th>
            <th scope="col" className="tableCell">Balance</th>
          </tr>
        </thead>
        <tbody>
          {tableCells}
        </tbody>
      </table>
    </>
  );
}
export default AllData;
