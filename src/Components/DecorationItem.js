import React from 'react';
import Modal from 'react-modal';
import '../Styles/main.css';
import '../Styles/decorationitemcard.css';
import { useState, useContext } from 'react';
import CartContext from '../Contexts/CartContext';

function DecorationItem(props) {

    const [quantity, setQuantity] = useState(0);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState(['Loading Name', 'Loading Description']);

    const decorationsList = props.items;
    console.log('decoList:', decorationsList);

    const cart = useContext(CartContext);
    
    console.log(cart);

    
    const adjustQuantityUp = (quantity) => {
        setQuantity(quantity + 1);
    }

    const adjustQuantityDown = (quantity) => {
        if(quantity > 0){
            setQuantity(quantity - 1);
        }
    }

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
                                <div className="DecorationItemRemoveFromCartButton"><button className="CartButton" onClick={ () => {
                                    adjustQuantityDown(quantity);
                                }}>-</button></div>
                                <div className="DecorationItemAmountInCart">({quantity})</div>
                                <div className="DecorationItemAddToCartButton"><button className="CartButton" onClick={ () => {
                                    adjustQuantityUp(quantity);
                                }}>+</button></div>
                                
                            </div>

                        </div>
                        
                        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} >
                        <div className="popup-box">
                            <div className="box">
                                <h1>{modalData[0]}</h1>
                                <p>{modalData[1]}</p> 
                                <div>
                                    <button className="CartButton" onClick={() => setModalIsOpen(false)}>X</button>
                                </div>
                            </div>
                        </div>
                            
                        </Modal>
                    </div> 
                ))}
            </div>
               

  );
}

export default DecorationItem;
