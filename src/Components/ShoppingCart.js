import React from 'react';
import {Link} from 'react-router-dom';

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

export default function ShoppingCart(props) {
  const { availableInstallations, cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
  const houzeyPrice = itemsPrice * 0.06;
  const laborPrice = 100;
  const totalPrice = houzeyPrice + laborPrice + itemsPrice;
  return (

    <div className="CartWrapper">
      <aside>
        <h2>Your Cart</h2>
        <div>

          <div className="ShoppingCartSection1">
            {cartItems.length === 0 && <div>Cart is empty</div>}
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
              {cartItems.length !== 0 && 
                    <div className="row">
                      <Link availableInstallations={availableInstallations} onClick={scrollToTop} className="CheckoutButton" to="/Checkout" >Checkout</Link>
                    </div>
              } 
            </>
          )}
          
        </div>
      </aside>
    </div>

  );
}