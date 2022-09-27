import '../Styles/main.css';
import React from 'react';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';
import DecorationItem from '../Components/DecorationItem';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { useEffect, useState } from 'react';
    
function DecorationBrowsing() {

    const [decorations, setDecorations] = useState();

    useEffect(() => {
       const pullData = async () => {

        const allDecorations = await API.graphql({ query: queries.listDecorations });
        
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
              <DecorationItem items={decorations}/>
            </div>
          <Footer />
        </div>
        </main>
      

    );
  }
  export default DecorationBrowsing;
