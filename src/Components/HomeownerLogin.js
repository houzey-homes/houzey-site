import '../Styles/main.css';
import UserNav from './UserNav.js'
import Authentication from './Authentication.js'
import Footer from './Footer.js'

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