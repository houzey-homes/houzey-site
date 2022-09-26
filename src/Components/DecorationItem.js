import decorationimg from '../Images/testimg.jpg';
import decorationimg2 from '../Images/testimg2.jpg';
import '../Styles/main.css';
import '../Styles/decorationitemcard.css';
import React, { useState } from 'react';
import DecorationInfoModal from '../Components/DecorationInfoModal';

function DecorationItem() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (

    <div className="DecorationItemCard">

        <div className="DecorationItemBox">

            <h5>Christmas Lights!<br></br>$25.00</h5>
            <img src={decorationimg2} className="DecorationItemImage" alt="decoration" />

            <div className="DecorationItemCartOptions"> 

                <input type="button" value="i" className="CartButton" onClick={togglePopup}/>
                    {isOpen && <DecorationInfoModal
                    content={<>
                        <b>Christmas Lights</b>
                        <p>Look at these beauts! Amazing aren't they? You'll be the envy of the street with these.</p>
                        <button className="Button" onClick={togglePopup}>Close</button>
                    </>}
                    handleClose={togglePopup}
                />}
                <div className="DecorationItemRemoveFromCartButton"><button className="CartButton">-</button></div>
                <div className="DecorationItemAmountInCart">(x1111)<br></br>$2,000,000.00</div>
                <div className="DecorationItemAddToCartButton"><button className="CartButton">+</button></div>
                
            </div>

        </div>

    </div>

  );
}

export default DecorationItem;
