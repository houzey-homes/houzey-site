/* import React, {useContext} from "react";
import ModalContext from '../Contexts/ModalContext';
 
function DecorationInfoModal() {

  return (
    <>
    <div className="popup-box">
      <div className="box">
        <h3>{modal}</h3>
        <input type="button" value="X" className="CartButton" />
      </div>
    </div>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customStyles}>
      <h1>{modalData.title}</h1>
      <p>{modalData.content}</p> 
      <div>
     <button onClick={() => setModalIsOpen(false)}>X</button>
    </div>
  </Modal>
  </>
  );
};
 
export default DecorationInfoModal;


 //<button className="Button" onClick={togglePopup}>Close</button>*/