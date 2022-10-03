import './Styles/main.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/LandingPage'; 
import Homeowner from './Components/HomeownerLogin'; 
import PageNotFound404 from './Pages/PageNotFound404'; 
import DecorationBrowsing from './Pages/DecorationBrowsing';
import Checkout from './Pages/Checkout';
import OrderConfirmation from './Pages/OrderConfirmation';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from './graphql/queries';
import { useEffect, useState } from 'react';

function App() {

  const [availableInstallations, setAvailableInstallations] = useState();
  useEffect(() => {
      const pullData = async () => {
      
      const contractorEvents = await API.graphql(
        graphqlOperation(queries.listAvailableInstallations)
      );    

      setAvailableInstallations(contractorEvents);

     }
     pullData()
  }, [])

  const [cartItems, setCartItems] = useState([]);
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

  const onAdd = (decoration) => {
    const exists = cartItems.find((x) => x.id === decoration.id);
    if (exists) {
      const newCartItems = cartItems.map((x) =>
        x.id === decoration.id ? { ...exists, qty: exists.qty + 1} : x
      );
      setCartItems(newCartItems);
    } else {
      const newCartItems = [ ...cartItems, { ...decoration, qty: 1}];
      setCartItems(newCartItems);
    }
  };

  const onRemove = (decoration) => {
    const exists = cartItems.find((x) => x.id === decoration.id);
    if(exists.qty === 1) {
      const newCartItems = cartItems.filter((x) => x.id !== decoration.id);
      setCartItems(newCartItems);
    } else {
      const newCartItems = cartItems.map((x) =>
        x.id === decoration.id ? { ...exists, qty: exists.qty - 1 } : x
      );
      setCartItems(newCartItems);
    }

  };

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Homeowner" element={<Homeowner availableInstallations={availableInstallations} cartItems={cartItems} decorations={decorations} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/Browsing" element={<DecorationBrowsing availableInstallations={availableInstallations} cartItems={cartItems} decorations={decorations} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/Checkout" element={<Checkout availableInstallations={availableInstallations} cartItems={cartItems} decorations={decorations} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation availableInstallations={availableInstallations} cartItems={cartItems} decorations={decorations} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
  );
}

export default App;

