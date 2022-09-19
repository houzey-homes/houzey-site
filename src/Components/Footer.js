import logo from './trimmedhouse-logo.png';
import '../Styles/main.css';
import {Link} from 'react-router-dom';
  
const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

function Footer() {
  return (
    <div className="Footer">
            <h3>Interested?<br></br>We bet you are!</h3>
            <p>Houzey is currently fundraising!<br></br>Investors can contact us at investors@houzey.homes.</p>
            <p>Reach out to us via contact@houzey.homes for any other comments/questions.</p> 
             
            <Link to="/" id="Nav0" className="NavLink0"><img src={logo} className="NavLogo" alt="logo" onClick={scrollToTop}/></Link>
            <Link to="/" id="Nav0" className="NavLink0"><h1 className="TextLogo" onClick={scrollToTop}>Houzey</h1></Link>

            <p>Copyright © 2022</p>
            </div>
  );
}

export default Footer;

