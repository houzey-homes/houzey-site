import '../Styles/main.css';
import React from 'react';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';
import DecorationItem from '../Components/DecorationItem';
import ShoppingCart from '../Components/ShoppingCart';
    
function DecorationBrowsing(props) {

    const { cartItems, decorations, onAdd, onRemove } = props;
    console.log('cart: ', cartItems);   

    const location = useLocation();

    return (
 
        <main>
          <div className="App">
            <UserNav />
              <div className="NewBrowsingHead">
                <h1>Decoration Browsing Feature - Coming Soon</h1>
                <div>USER: {location.state.user}</div>
                <div>CITY: {location.state.city}</div>
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
                <ShoppingCart 
                  cartItems={cartItems} 
                  onAdd={onAdd}
                  onRemove={onRemove} />
                 
              </div>
            <Footer />
          </div>
        </main>

    );
  }
  export default DecorationBrowsing;
