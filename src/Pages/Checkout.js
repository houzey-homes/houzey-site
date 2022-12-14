import React from 'react';
import { useState, useEffect, useRef } from 'react'
import '../Styles/main.css';
import 'react-calendar/dist/Calendar.css';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer';
import { API } from 'aws-amplify';
import { createBetaOrder } from '../graphql/mutations';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';

export default function Checkout(props) {

  const navigate = useNavigate();
  const form = useRef();

  const { availableInstallations, cartItems, decorations, onAdd, onRemove, updateCalendarSelection } = props;
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

  const [value, setValue] = useState('');

  function onChange(nextValue) {
    setValue(nextValue);
    updateCalendarSelection(nextValue);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dateString = chosenInstallation.toString();
    const dateArray = dateString.split('-');

    const year = dateArray[0];
    const month = dateArray[1];

    const remainder = dateArray[2];
    const day = remainder.substring(0, 2);
    const time = remainder.substring(3, 11);

    const items = JSON.stringify(cartItems, null, 4);

    let cartReceipt = '';
    for (let i = 0; i < cartItems.length; i++) {
      cartReceipt = cartReceipt.concat((i + 1) + ": " + cartItems[i].name + " $" + cartItems[i].price + " Qty: " + cartItems[i].qty + "\n");
    }

    await API.graphql({
      query: createBetaOrder,
      variables: {
        input: {
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
      year: year,
      month: month,
      day: day,
      time: time,
      homeStreet: homeStreet,
      homeCity: homeCity,
      totalPrice: totalPrice,
      cartReceipt: cartReceipt,
    };

    emailjs.send('service_2sciwag', 'template_74cj89v', templateParams, 'ejHLYsSf4f-mAIKXu')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        navigate(`/OrderConfirmation`);
      }, function (error) {
        alert('Something went wrong. Please try again. Contact support@houzey.homes for help if the problem continues.')
        console.log('FAILED...', error);
      });

  }

  return (
    <>
      <UserNav />
      <div className="Checkout">

        <div className="InnerCheckoutSection">
          <h3>Checkout</h3>
          <ul className="CheckoutBullets">
            <li>- Use the calendar below to pick a date, then select an available install time that works for you. Takedown services will be automatically scheduled for the same time 30 days after installation.</li>
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

        <div className="InnerCheckoutSection">
          <h5>Select a date.</h5>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>

        <div className="InnerCheckoutSection">
          <div className="InstallationsBox">
            <h5>Available installations</h5>

            {(() => {
              if (value === '') {
                return (
                  <div className="Installation">No date selected.</div>
                )
              } else if (availableInstallations.data.listAvailableInstallations.items.length === 0) {
                return (
                  <div className="Installation">No available installations found</div>
                )
              } else {
                return (
                  availableInstallations.data.listAvailableInstallations.items.map(installation => (

                    <div className="Installation" key={installation.id} installation={installation}>

                      <span>
                        <label>
                          {installation.dayOfWeek}: {installation.monthAsWord} {installation.dayAsNumber}, at {installation.timeAsString}
                        </label>
                        <input
                          type="radio"
                          name="option"
                          value={installation.startDateTime}
                          onChange={(e) => setChosenInstallation(e.target.value)}></input>
                      </span>

                    </div>
                  ))
                )
              }
            })()}

          </div>
        </div>

        <div className="InnerCheckoutSection">
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

        <div className="InnerCheckoutSection">
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

        <div id="OrderButton" className="InnerCheckoutSection">
          <button id="Nav1" className="NavLink1" form='order-form' onClick={scrollToTop} onSubmit={handleSubmit}>Place Order</button>
        </div>

      </div>
      <Footer />
    </>
  );

}
