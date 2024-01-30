import React, { useState, useEffect } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    // Open the modal when the component mounts
    toggleModal();
  }, []); // Empty dependency array to ensure it runs only once on mount

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  return (
    <>
      {/* The button is not needed as the modal opens automatically */}
     
      {modal &&  (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <h2>Hello Modal</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam illum adipisci ad itaque sunt sequi vitae quod qui
                cumque tempore!
              </p>
              <button className='close-modal' onClick={toggleModal}>X</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
