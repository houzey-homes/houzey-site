import '../Styles/main.css';
import logo from '../Images/house-logo.png';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'


function OrderConfirmation () {
    return (
        <main>
        <div className="App">
            
            <Nav />
       
            <h3>Order complete!<br></br>Check your email for an order confirmation.<br></br>We look forward to serving you soon!</h3>

            <Footer />

        </div>
        </main>
    );
}

export default OrderConfirmation;