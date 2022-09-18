import logo from './trimmedhouse-logo.png';
import '../Styles/main.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">

      <h1 className="TextLogo">Houzey</h1>

      <nav>
            <Link to="/Homeowner" id="Nav1" className="NavLink1">SIGN IN</Link>
            <Link to="/Homeowner" id="Nav2" className="NavLink2">SIGN UP</Link>
      </nav>

      <img src={logo} className="NavLogo" alt="logo" />

    </div>
  );
}

export default Nav;

