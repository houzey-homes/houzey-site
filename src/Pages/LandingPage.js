import '../Styles/main.css';
import logo from '../Images/house-logo.png';
import cartoon1 from '../Images/cartoon1.png';
import cartoon1v2 from '../Images/cartoon1v2.png';
import cartoon2 from '../Images/cartoon2.png';
import cartoon3 from '../Images/cartoon3.png';
import cartoon4 from '../Images/cartoon4.png';
import cartoon5 from '../Images/cartoon5.png';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import GuestZipForm from '../Components/GuestZipForm'

function Home () {
    return (
        <main>
        <div className="App">
            
            <Nav />

            <div className="GuestZipFormBar">
                <GuestZipForm /> 
            </div>

            <div className="NameBar">
                  
                <h1>Houzey</h1>
            </div>

            <header className="App-header">
                <img src={logo} className="Home-logo" alt="logo" />
            </header>

            <body className="App-body">
                <h1>Everyone likes a nicely decorated home... 
                    <br></br>but it's not always so easy.</h1>
                <img src={cartoon1} className="Cartoon" alt="cartoon" />
                <img src={cartoon1v2} className="Cartoon" alt="cartoon" />
                <img src={cartoon2} className="Cartoon" alt="cartoon" />
                <img src={cartoon3} className="Img-rotate" alt="cartoon" />
                <img src={cartoon4} className="Cartoon" alt="cartoon" />
                <img src={cartoon5} className="Cartoon" alt="cartoon" />
            </body>

            <body className="App-body">
                <h1>Let our Houzey Helpers, help you.</h1>
                <div className="BulletinList">
                    <h3>Use our website or app to purchase or rent decorations.</h3>
                    <h3>Schedule a time that works for you.</h3>
                    <h3>Then, just wait for our Houzey Helpers to show up.</h3>
                    <h3>Watch our team do everything - from installation to takedown.</h3>
                </div>
            </body>

            <Footer />

        </div>
        </main>
    );
}

export default Home;