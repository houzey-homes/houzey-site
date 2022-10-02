import React from 'react';
import '../Styles/main.css';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer';

export default function Checkout(props) {

  const { availableInstallations, cartItems, decorations, onAdd, onRemove } = props;
  console.log(availableInstallations);

  return (
    <>
    <UserNav />
    <div className="Checkout">

        <div className="InnerShoppingCart">
          <h3>Checkout</h3>
         <ul className="CheckoutBullets">
            <li>Use the calendar to look for an install date. Takedown services will be automatically scheduled for 30 days after installation.</li>
            <li>Enter your address below.</li>
            <li>Two of our Houzey Helpers will arrive at your address at the scheduled time. You must be there to confirm and pay for the order (we accept cash, credit/debit, and Venmo). </li>
            <li>You can watch, guide, or go back inside - it's up to you.</li>
          </ul>
        </div>

          <div className="InnerShoppingCart">
            {availableInstallations && availableInstallations.data.listAvailableInstallations.items.map(installation => (
              <div key={installation.id} installation={installation}>
                <span>{installation.assignedContractor1} & {installation.assignedContractor2}</span>
                <br></br>
                <span>{installation.day} at {installation.time}</span>  
              </div>
            ))}
          </div>

        {cartItems.length === 0 && <div>Cart is empty</div>}
        <div className="InnerShoppingCart">
            {cartItems.map((item) => (
              <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{' '}
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>

                <div className="col-2 text-right">
                  {item.qty} x ${item.price}
                </div>
              </div>
            ))}
        </div>
        

    </div>
    <Footer />
    </>
  );
              
}