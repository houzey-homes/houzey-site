import decorationimg from '../Images/testimg.jpg';
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

        <div className="DecorationItemInfo">
            <p>Look at these beauts! Amazing aren't they? You'll be the envy of the street with these.</p>
        </div>

        <div className="DecorationItemImage">
            <h5>Christmas Lights!<br></br>$25.00</h5>
            <img src={decorationimg} className="DecorationItemImage" alt="decoration" />

            <div className="DecorationItemCartOptions"> 
            
                <input type="button" value="i" className="Button" onClick={togglePopup}/>
                    {isOpen && <DecorationInfoModal
                    content={<>
                        <b>Design your Popup</b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <button className="Button">Test button</button>
                    </>}
                    handleClose={togglePopup}
                />}
                <div className="DecorationItemRemoveFromCartButton"><button className="Button">-</button></div>
                <div className="DecorationItemAmountInCart">(x0)</div>
                <div className="DecorationItemTotalCostInCart">$0.00</div>
                <div className="DecorationItemAddToCartButton"><button className="Button">+</button></div>
                
            </div>

        </div>

    </div>

  );
}

export default DecorationItem;
