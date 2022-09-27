import decorationimg from '../Images/testimg.jpg';
import decorationimg2 from '../Images/testimg2.jpg';
import React from 'react';
import '../Styles/main.css';
import '../Styles/decorationitemcard.css';
import { useState } from 'react';
import DecorationInfoModal from '../Components/DecorationInfoModal';
import { Collection, Card} from '@aws-amplify/ui-react';

function DecorationItem(props) {

    const [isOpen, setIsOpen] = useState(false);

    const [quantity, setQuantity] = useState(0);
 
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    
    const decorationsList = props.items;
    console.log('decoList:', decorationsList);

    return (        

            <div className="DecorationItemCard">
                 {decorationsList && decorationsList.data.listDecorations.items.map(decoration => (
                    
                    <div className="DecorationItemBox">

                        <h5>{decoration.name}<br></br>{decoration.price}</h5>
                        <img src={decorationimg2} className="DecorationItemImage" alt="decoration" />

                        <div className="DecorationItemCartOptions"> 

                            <input type="button" value="i" className="CartButton" onClick={togglePopup}/>
                                {isOpen && <DecorationInfoModal
                                content={<>
                                    <b>{decoration.name}</b>
                                    <p>{decoration.description}</p>
                                    <button className="Button" onClick={togglePopup}>Close</button>
                                </>}
                                handleClose={togglePopup}
                            />}
                            <div className="DecorationItemRemoveFromCartButton"><button className="CartButton">-</button></div>
                            <div className="DecorationItemAmountInCart">({quantity})<br></br>$2,000,000.00</div>
                            <div className="DecorationItemAddToCartButton"><button className="CartButton">+</button></div>
                            
                        </div>

                    </div>

                ))}

            </div>    

  );
}

export default DecorationItem;
