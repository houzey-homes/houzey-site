import '../Styles/main.css';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'


function OrderConfirmation () {
    return (
        <main>
        <div className="OrderConfirmPage">
            
            <Nav />
       
            <div className="OrderConfirmDiv">
            <h3>Order complete!<br></br>Check your email for an order confirmation.<br></br>We look forward to serving you soon!</h3>
            </div>
            

            <Footer />

        </div>
        </main>
    );
}

export default OrderConfirmation;