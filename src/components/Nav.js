import logo from './trimmedhouse-logo.png';
import './Nav.css';

function Nav() {
  return (
    <div className="Nav">

      <h1 className="TextLogo">Houzey</h1>

      <img src={logo} className="NavLogo" alt="logo" />

    </div>
  );
}

export default Nav;

