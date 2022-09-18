import './Styles/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import Homeowner from './Pages/Homeowner'; 
import PageNotFound404 from './Pages/PageNotFound404'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Homeowner" element={<Homeowner />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

