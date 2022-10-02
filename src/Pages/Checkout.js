import React from 'react';
import '../Styles/main.css';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer';

export default function Checkout(props) {

  const { availableInstallations, cartItems, decorations, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const houzeyPrice = itemsPrice * 0.06;
  const laborPrice = 100;
  const totalPrice = houzeyPrice + laborPrice + itemsPrice;

  return (
    <>
      <UserNav />
      <div className="Checkout">

        <div className="InnerShoppingCart">
          <h3>Checkout</h3>
          <ul className="CheckoutBullets">
            <li>- Scroll through the available installations below and pick a time that works for you. Takedown services will be automatically scheduled for the same time 30 days after installation.</li>
            <br></br>
            <li>- Enter the address of the home being decorated, your phone number, and your email address.</li>
            <br></br>
            <li>- Make sure that your cart details are correct, then click 'Place Order'. You will receive an email confirming the order.</li>
            <br></br>
            <li>- Two of our Houzey Helpers will arrive at your address at the scheduled time. You must be there to confirm and pay for the order (we accept cash, credit/debit, and Venmo). </li>
            <br></br>
            <li>- You can watch, guide, or go back inside - it's up to you.</li>
            <br></br>
            <li>- 30 days later, Houzey Helpers will return and take everything down for you. In the meantime, any maintenance or repairs will be covered by Houzey free of charge.</li>
          </ul>
        </div>


        <div className="InnerShoppingCart">
          <div className="InstallationsBox">


            {availableInstallations && availableInstallations.data.listAvailableInstallations.items.map(installation => (
              <div className="Installation" key={installation.id} installation={installation}>

                <span> <label>{installation.day} at {installation.time}</label><input type="radio" name="option" value={installation.day}></input></span>
              </div>
            ))}

          </div>
        </div>


        <div className="InnerShoppingCart">
          <form className="OrderForm">
            <h5>Enter Address</h5>
            <label>Street: </label>
            <input type="text" required></input>
            <label>City: </label>
            <input type="text" required></input>
            <label>State: </label>
            <input type="text" required></input>
            <label>Zip: </label>
            <input type="text" required></input>


            <h5>Enter Contact Information</h5>
            <label>First Name: </label>
            <input type="text" required></input>
            <label>Last Name: </label>
            <input type="text" required></input>
            <label>Phone: </label>
            <input type="text" required></input>
            <label>Email: </label>
            <input type="text" required></input>
          </form>
        </div>
        


        <div className="InnerShoppingCart">
          {cartItems.length === 0 && <div>Cart is empty</div>}

          {cartItems.map((item) => (
            <div classname="ConfirmCartItem" key={item.id} className="row">
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

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Houzey Helpers</div>
                <div className="col-1 text-right">${laborPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Houzey Fee</div>
                <div className="col-1 text-right">
                  ${houzeyPrice.toFixed(2)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />

            </>
          )}



        </div>

        <div className="InnerShoppingCart">
          <button id="Nav1" className="NavLink1">Place Order</button>
        </div>

      </div>
      <Footer />
    </>
  );

}


// <span>{installation.assignedContractor1} & {installation.assignedContractor2}</span>