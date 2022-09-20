import '../Styles/main.css';
import {Link} from 'react-router-dom';
import QuickZipUserForm from '../Components/QuickZipUserForm'

function HomeownerHome () {
    return (
        <main>
            <div className="HomeownerHomeContent">             
                <QuickZipUserForm />                    
            </div>
        </main>
    );
}

export default HomeownerHome;

// <Link to="/Browsing" className="Button">BROWSE DECORATIONS</Link>  