import React, { useState, useEffect } from "react";
import "./Modal.css";

function Modal() {
  const [modal, setModal] = useState(false);
  const [emojisArray, setEmojisArray] = useState(["😂", "🥰", "💪", "😌", "💔", "😔"]);

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    // Open the modal when the component mounts
    toggleModal();
  }, []); // Empty dependency array to ensure it runs only once on mount

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2>Select the Emotion state</h2>
              <div className="set1" style={{ marginTop: "3rem" }}>
                {emojisArray.map((emoji, index) => (
                  <button key={index} className="emoji">
                    {emoji}
                  </button>
                ))}
              </div>
              <a href="#" style={{ marginLeft: "22rem" }}>
                More
              </a>

              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
              <div className="footer">
                <button onClick={toggleModal} id="cancelBtn">
                  Cancel
                </button>
                <button onClick={toggleModal}>Done</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
