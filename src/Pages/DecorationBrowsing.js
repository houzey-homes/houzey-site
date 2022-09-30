import '../Styles/main.css';
import React from 'react';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { useEffect, useState, useContext } from 'react';
import CartContext from '../Contexts/CartContext';
import DecorationItem from '../Components/DecorationItem';
import ShoppingCart from '../Components/ShoppingCart';

const itemCart = [{id: 0, quantity: 77}];
    
function DecorationBrowsing() {

    const [decorations, setDecorations] = useState();

    useEffect(() => {
       const pullData = async () => {
        
        const halloweenDecorations = await API.graphql(
          graphqlOperation(queries.listDecorations, { filter: { holiday: { contains: "Halloween" } } })
        );    

        setDecorations(halloweenDecorations);

       }
       pullData()
    }, [])

    const location = useLocation();

    return (
 

        <main>
        <div className="App">
          <UserNav />
            <div className="BrowsingHead">
              <h1>Decoration Browsing Feature - Coming Soon</h1>
              <div>USER: {location.state.user}</div>
              <div>CITY: {location.state.city}</div>
            </div>
            <div className="DecorationGridArea">
         
                <CartContext.Provider value={itemCart}>
                  <DecorationItem items={decorations} />
                </CartContext.Provider>
 
              
            </div>
          <Footer />
        </div>
        </main>
      

    );
  }
  export default DecorationBrowsing;
