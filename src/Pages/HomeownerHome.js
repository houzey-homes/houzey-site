import '../Styles/main.css';
import {Link} from 'react-router-dom';

function HomeownerHome () {
    return (
        <main>
            <div className="HomeownerHomeContent"> 
                <Link to="/Browsing" className="Button">BROWSE DECORATIONS</Link>                         
            </div>
        </main>
    );
}

export default HomeownerHome;