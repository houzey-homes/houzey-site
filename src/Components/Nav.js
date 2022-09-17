import logo from './trimmedhouse-logo.png';
import '../Styles/main.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">

      <h1 className="TextLogo">Houzey</h1>

      <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/SignIn" className="nav-link">SignIn</Link>
            <Link to="/SignUp" className="nav-link">Sign Up</Link>
        </nav>

      <img src={logo} className="NavLogo" alt="logo" />

    </div>
  );
}

export default Nav;

