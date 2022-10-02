import React from 'react';
import '../Styles/main.css';

export default function Checkout(props) {

  const { availableInstallations } = props;
  console.log(availableInstallations);

  return (

    

    <div className="box">

      <h3>Checkout</h3>
         <ul>
            <li>Use the calendar to look for an install date. Takedown services will be automatically scheduled for 30 days after installation.</li>
            <li>Enter your address below.</li>
            <li>Two of our Houzey Helpers will arrive at your address at the scheduled time. You must be there to confirm and pay for the order (we accept cash, credit/debit, and Venmo). </li>
            <li>You can watch, guide, or go back inside - it's up to you.</li>
          </ul>
          
          {availableInstallations && availableInstallations.data.listAvailableInstallations.items.map(installation => (
            <div key={installation.id} installation={installation}>
              <span>{installation.assignedContractor1} & {installation.assignedContractor2}</span>
              <br></br>
              <span>{installation.day} at {installation.time}</span>  
            </div>
          ))}

      

    </div>
  );

}