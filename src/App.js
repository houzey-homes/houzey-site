import './Styles/main.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/LandingPage'; 
import Homeowner from './Components/HomeownerLogin'; 
import PageNotFound404 from './Pages/PageNotFound404'; 
import DecorationBrowsing from './Pages/DecorationBrowsing';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Homeowner" element={<Homeowner />} />
        <Route path="/Browsing" element={<DecorationBrowsing />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
  );
}

export default App;

