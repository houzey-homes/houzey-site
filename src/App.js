import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import SignInSignUp from './Pages/SignInSignUp'; 
import Homeowner from './Pages/Homeowner'; 
import PageNotFound404 from './Pages/PageNotFound404'; 
import Nav from './Components/Nav'; 

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignInSignUp />} />
        <Route path="/SignUp" element={<SignInSignUp />} />
        <Route path="/Homeowner" element={<Homeowner />} />
        <Route path="*" element={<PageNotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

