import '../Styles/main.css';
import React from 'react';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';
import DecorationItem from '../Components/DecorationItem';
import ShoppingCart from '../Components/ShoppingCart';
import {Link} from 'react-router-dom';

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};
    
function DecorationBrowsing(props) {

    const { availableInstallations, cartItems, decorations, onAdd, onRemove } = props;

    const location = useLocation();

    return (
 
        <main>
          <div className="BrowsingPage">
            <UserNav />
              <div className="NewBrowsingHead">
                <h1>Scroll down through the window below to choose what you like. <br></br>Click 'Checkout' at the bottom of the shopping cart to schedule a time and place an order. </h1>
              </div>
              <div className="ShoppingScreen">                       
                <div className="DecorationGridArea">
                    {decorations && decorations.data.listDecorations.items.map(decoration => (
                      <DecorationItem 
                        key={decoration.id} 
                        decoration={decoration} 
                        item={cartItems.find((x) => x.id === decoration.id)}
                        onAdd={onAdd}
                        onRemove={onRemove}/>
                    ))}
                </div>     

                <div className="CartContainer">                    
                  <ShoppingCart 
                    availableInstallations={availableInstallations}
                    cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove} />
                    
                </div>              
                 
              </div>
            <Footer />
          </div>
        </main>

    );
  }
  export default DecorationBrowsing;

  // <div>Current user: {location.state.user}</div>
  // <div>City selected: {location.state.city}</div>