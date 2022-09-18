import '../Styles/main.css';
import UserNav from '../Components/UserNav.js'
import Authentication from '../Components/Authentication.js'

function Homeowner () {
    return (
        <main>
            <div className="HomeownerPage">
                <UserNav />
                <h1 className="PageHeader">Homeowner Login</h1>
                <Authentication />
            </div>
        </main>
    );
}

export default Homeowner;