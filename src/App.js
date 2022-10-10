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

  const [selectedYear, setSelectedYear] = useState('No Date Selected');
  const [selectedMonth, setSelectedMonth] = useState('No Date Selected');
  const [selectedDay, setSelectedDay] = useState('No Date Selected');

  const updateCalendarSelection = (date) => {

     const dateString = date.toString();
     const dateArray = dateString.split(' ');

     const month = dateArray[1];
     const day = dateArray[2];
     const year = dateArray[3];
     
     setSelectedYear(year);
     setSelectedMonth(month);
     setSelectedDay(day);

     
     
  };
  
  const [availableInstallations, setAvailableInstallations] = useState();

  useEffect(() => {

      const pullData = async () => {

        let filter = {
          and: [{ yearAsNumber: { contains: selectedYear } },
            { monthAsWord: { contains: selectedMonth } },
            { dayAsNumber: { contains: selectedDay } }]
        };

        console.log('filter', filter);
      
      const contractorEvents = await API.graphql( graphqlOperation(queries.listAvailableInstallations, { filter: filter } ));    

      setAvailableInstallations(contractorEvents);

     }
     pullData()
  }, [selectedYear, selectedMonth, selectedDay])

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
        <Route path="/Checkout" element={<Checkout availableInstallations={availableInstallations} cartItems={cartItems} decorations={decorations} onAdd={onAdd} onRemove={onRemove} updateCalendarSelection={updateCalendarSelection}/>} />
        <Route path="/OrderConfirmation" element={<OrderConfirmation availableInstallations={availableInstallations} cartItems={cartItems} decorations={decorations} onAdd={onAdd} onRemove={onRemove} />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
  );
}

export default App;

