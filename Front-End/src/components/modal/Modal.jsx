import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';  
import axios from 'axios';
import "./Modal.css";

function Modal() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [songNames, setSongNames] = useState([]); 
  const [emojisArray] = useState(["💪", "😌", "❤️", "😊", "😢", "😍"]); // Use const for static data

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleEmojiSelection = async (emoji) => {
    try {
      setSelectedEmoji(emoji);
      toggleModal();

      // Make API call with the selected emoji
      const response = await axios.get('http://localhost:5000/Emotion', {
        params: { emotion: emoji } // Pass emoji as query parameter
      });

      const newSongNames = response.data.map(emotionData => emotionData.Songname);
      setSongNames(newSongNames);
      

      console.log("Fetched Songnames:", newSongNames);  // Handle the API response (emotionSongs)
      
      // You can use the emotionSongs data to display songs or perform other actions

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    toggleModal(); // Open the modal on mount
  }, []); // Empty dependency array ensures it runs only once

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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
