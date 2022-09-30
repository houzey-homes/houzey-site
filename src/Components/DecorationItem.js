import React from 'react';
import Modal from 'react-modal';
import '../Styles/main.css';
import '../Styles/decorationitemcard.css';
import { useState, useContext } from 'react';
import DecorationInfoModal from './DecorationInfoModal';
import CartContext from '../Contexts/CartContext';

function DecorationItem(props) {

    const [quantity, setQuantity] = useState(0);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState(['Loading Name', 'Loading Description']);

    const decorationsList = props.items;
    console.log('decoList:', decorationsList);

    const cart = useContext(CartContext);
    
    console.log(cart);

    return (        

            <div>
                {decorationsList && decorationsList.data.listDecorations.items.map(decoration => (
                    
                    <div className="DecorationItemCard">
                        <div className="DecorationItemBox" key={decoration.id}>

                            <h5>{decoration.name}<br></br>{decoration.price}</h5>
                            <img src={decoration.imglink} className="DecorationItemImage" alt="decoration" />

                            <div className="DecorationItemCartOptions"> 
                                <div className="DecorationItemInfoButton"><button className="CartButton" onClick={ () => {
                                    setModalData([decoration.name, decoration.description]);
                                    setModalIsOpen(true);
                                }}>i</button></div>
                                <div className="DecorationItemRemoveFromCartButton"><button className="CartButton" onClick={() => setQuantity(quantity - 1)}>-</button></div>
                                <div className="DecorationItemAmountInCart">({cart.quantity})<br></br>$2,000,000.00</div>
                                <div className="DecorationItemAddToCartButton"><button className="CartButton" onClick={() => setQuantity(quantity + 1)}>+</button></div>
                                
                            </div>

                        </div>
                        
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                            <h1>{modalData[0]}</h1>
                            <p>{modalData[1]}</p> 
                            <div>
                            <button className="CartButton" onClick={() => setModalIsOpen(false)}>X</button>
                            </div>
                        </Modal>
                    </div> 
                ))}
            </div>
               

  );
}

export default DecorationItem;
