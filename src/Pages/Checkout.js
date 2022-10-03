import React from 'react';
import { useState, useRef } from 'react'
import '../Styles/main.css';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer';
import { API } from 'aws-amplify';
import { createBetaOrder } from '../graphql/mutations';
import emailjs from 'emailjs-com';
import {Link} from 'react-router-dom';
import OrderConfirmation from '../Pages/OrderConfirmation';

export default function Checkout(props) {

  const form = useRef();

  const { availableInstallations, cartItems, decorations, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const houzeyPrice = itemsPrice * 0.06;
  const laborPrice = 100;
  const totalPrice = houzeyPrice + laborPrice + itemsPrice;

  const [chosenInstallation, setChosenInstallation] = useState('');

  const [homeStreet, setHomestreet] = useState('');
  const [homeCity, setHomecity] = useState('');
  const [homeState, setHomestate] = useState('');
  const [homeZip, setHomezip] = useState('');

  const [homeownerFirstName, setHomeownerFirstName] = useState('');
  const [homeownerLastName, setHomeownerLastName] = useState('');
  const [homeownerPhone, setHomeownerPhone] = useState('');
  const [homeownerEmail, setHomeownerEmail] = useState('');

  const [id, setId] = useState('TBI26');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.graphql({
      query: createBetaOrder,
      variables: {
        input: {
          id,
          cartItems,
          totalPrice,
          chosenInstallation,
          homeStreet,
          homeCity,
          homeState,
          homeZip,
          homeownerFirstName,
          homeownerLastName,
          homeownerPhone,
          homeownerEmail,
        },
      },
    });

    var templateParams = {
      homeownerEmail: homeownerEmail,
      homeownerFirstName: homeownerFirstName,
      chosenInstallation: chosenInstallation,
      homeStreet: homeStreet,
      homeCity: homeCity,
      totalPrice: totalPrice,
    };

    emailjs.send('service_2sciwag', 'template_74cj89v', templateParams, 'ejHLYsSf4f-mAIKXu')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

  }

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

                <span>
                  <label>
                    {installation.day} at {installation.time}
                  </label>
                  <input
                    type="radio"
                    name="option"
                    value={installation.startDateTime}
                    onChange={(e) => setChosenInstallation(e.target.value)}></input>
                </span>

              </div>
            ))}

          </div>
        </div>

        <div className="InnerShoppingCart">
          <form
            ref={form}
            onSubmit={handleSubmit}
            form id='order-form'
            className="OrderForm">
            
            <h5>Enter Address</h5>
            <label>Street: </label>
            <input
              type="text"
              required
              value={homeStreet}
              name="homeStreet"
              onChange={(e) => setHomestreet(e.target.value)}></input>
            <label>City: </label>
            <input
              type="text"
              required
              value={homeCity}
              name="homeCity"
              onChange={(e) => setHomecity(e.target.value)}></input>
            <label>State: </label>
            <input
              type="text"
              required
              value={homeState}
              onChange={(e) => setHomestate(e.target.value)}></input>
            <label>Zip: </label>
            <input
              type="text"
              required
              value={homeZip}
              onChange={(e) => setHomezip(e.target.value)}></input>

            <h5>Enter Contact Information</h5>
            <label>First Name: </label>
            <input
              type="text"
              required
              value={homeownerFirstName}
              name="homeownerFirstName"
              onChange={(e) => setHomeownerFirstName(e.target.value)}></input>
            <label>Last Name: </label>
            <input
              type="text"
              required
              value={homeownerLastName}
              onChange={(e) => setHomeownerLastName(e.target.value)}></input>
            <label>Phone: </label>
            <input
              type="text"
              required
              value={homeownerPhone}
              onChange={(e) => setHomeownerPhone(e.target.value)}></input>
            <label>Email: </label>
            <input
              type="text"
              required
              value={homeownerEmail}
              name="homeownerEmail"
              onChange={(e) => setHomeownerEmail(e.target.value)}></input>
          </form>
        </div>

        <div className="InnerShoppingCart">
          {cartItems.length === 0 && <div><h3>Your Cart</h3>Cart is empty</div>}
          {cartItems.length !== 0 && <h3>Your Cart</h3>}

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

        <div id="OrderButton" className="InnerShoppingCart">
          <Link id="Nav1" className="NavLink1" to="/OrderConfirmation" form='order-form' onSubmit={handleSubmit}>Place Order</Link>
        </div>

      </div>
      <Footer />
    </>
  );

}

