import '../Styles/main.css';
import React from 'react';
import UserNav from '../Components/UserNav.js'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom';

function DecorationBrowsing() {

    const location = useLocation();

    return (
      <main>
        <div className="App">
          <UserNav />
            <div className="BrowsingBody">
              <h1>Decoration Browsing Feature - Coming Soon</h1>
              <div>USER: {location.state.user}</div>
              <div>CITY: {location.state.city}</div>
            </div>
          <Footer />
        </div>
        </main>
    );
  }
  
  export default DecorationBrowsing;
