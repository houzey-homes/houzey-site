import React from 'react';
import Modal from 'react-modal';
import '../Styles/main.css';
import '../Styles/decorationitemcard.css';
import { useState } from 'react';

function DecorationItem(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalData, setModalData] = useState(['Loading Name', 'Loading Description']);

    const { item, decoration, onAdd, onRemove } = props;

    return (        

            <div>
                
                    <div className="DecorationItemCard" key={decoration.id}>
                        <div className="DecorationItemBox">

                            <h5>{decoration.name}<br></br>${decoration.price}</h5>
                            <img src={decoration.imglink} className="DecorationItemImage" alt="decoration" />

                            <div className="DecorationItemCartOptions"> 
                                <div className="DecorationItemInfoButton"><button className="CartButton" onClick={ () => {
                                    setModalData([decoration.name, decoration.description]);
                                    setModalIsOpen(true);
                                }}>i</button></div>
                                <div className="DecorationItemRemoveFromCartButton"><button className="CartButton" onClick={ () => onRemove(item)}>-</button></div>
                                <div className="DecorationItemAmountInCart">
                                    {item ? (
                                    <div className="DecorationItemCartOptions">
                                    <div className="DecorationItemAmountInCart">({item.qty})</div>     
                                    <div className="DecorationItemAddToCartButton"><button className="CartButton" onClick={ () => onAdd(item)}>+</button></div>  
                                    </div>
                                    ) : (
                                        <div className="DecorationItemCartOptions">
                                            <div className="DecorationItemAmountInCart">(0)</div>    
                                            <div className="DecorationItemAddToCartButton"><button className="CartButton" onClick={ () => onAdd(decoration)}>+</button></div>        
                                        </div>
                                        
                                    )}
                                </div>
                                
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
                
            </div>
               
  );
}

export default DecorationItem;

