import logo from './trimmedhouse-logo.png';
import '../Styles/main.css';
import {Link} from 'react-router-dom';

function UserNav() {
  return (
    <div className="Nav">

      <Link to="/" id="Nav0" className="NavLink0"><h1 className="TextLogo">Houzey</h1></Link>

      <Link to="/" id="Nav0" className="NavLink0"><img src={logo} className="NavLogo" alt="logo" /></Link>

      

    </div>
  );
}

export default UserNav;

