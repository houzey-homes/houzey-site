import '../Styles/main.css';
import UserNav from '../Components/UserNav.js'
import Authentication from '../Components/Authentication.js'
import Footer from '../Components/Footer.js'

function Homeowner () {
    return (
        <main>
            <div className="HomeownerPage">
                <UserNav />
                <h1 className="PageHeader">Homeowner Login</h1>
                <div className="HomeownerBody">
                    <Authentication />
                </div>
                <Footer />
            </div>
        </main>
    );
}

export default Homeowner;