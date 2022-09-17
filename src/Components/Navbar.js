import '../Styles/main.css';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/SignIn" className="nav-link">SignIn</Link>
            <Link to="/SignUp" className="nav-link">SignUp</Link>
        </nav>
    );
}

export default Navbar;