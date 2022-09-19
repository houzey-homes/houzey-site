import logo from '../Images/trimmedhouse-logo.png';
import '../Styles/main.css';
import {Link} from 'react-router-dom';


function Nav() {
  return (
    <div className="Nav">

      <Link to="/" id="Nav0" className="NavLink0"><h1 className="TextLogo">Houzey</h1></Link>
      

      <nav className="NavLinks">
            <Link to="/Homeowner" id="Nav1" className="NavLink1">SIGN IN</Link>
            <Link to="/Homeowner" id="Nav2" className="NavLink2">SIGN UP</Link>
      </nav>

      <Link to="/" id="Nav0" className="NavLink0"><img src={logo} className="NavLogo" alt="logo" /></Link>

    </div>
  );
}

export default Nav;

