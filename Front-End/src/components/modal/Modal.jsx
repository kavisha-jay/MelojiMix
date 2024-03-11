import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';  // Change this import
import axios from 'axios';
import "./Modal.css";

function Modal() {
  const navigate = useNavigate();  // Change this line
  const [modal, setModal] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [emojisArray, setEmojisArray] = useState(["😂", "🥰", "💪", "😌", "💔", "😔"]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEmojiSelection = (emoji) => {
    setSelectedEmoji(emoji);
    toggleModal();
    // Navigate to the emotion page with the selected emoji
    navigate(`/emotion/${emoji}`);  // Change this line
  };

  useEffect(() => {
    // Open the modal when the component mounts
    toggleModal();
  }, []); // Empty dependency array to ensure it runs only once on mount

  useEffect(() => {
    // Fetch data when the selected emoji changes
    if (selectedEmoji) {
      fetchData();
    }
  }, [selectedEmoji]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/Emotion?emotion=${selectedEmoji}`);
      // Handle the response, for example, update state with the fetched data
      console.log(response.data);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

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
                  <button key={index} className="emoji" onClick={() => handleEmojiSelection(emoji)}>
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
