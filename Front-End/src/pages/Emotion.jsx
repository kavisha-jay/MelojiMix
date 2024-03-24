import React from 'react';
import { useSelector } from 'react-redux';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import Error from '../components/Error';
import Loader from '../components/Loader';
import SongCard from '../components/SongCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Searchresults from '../components/Searchresults';


const Emotion = () => {
 
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('');
  const [songNames, setSongNames] = useState([]); 
  const [songN, setSongN] = useState([]);
  const [emojisArray] = useState(["💪", "😌", "❤️", "😊", "😢", "😍"]);
  const emojiToWordMap = {
    "💪": "Energetic",
    "😌": "Calm",
    "❤️": "Love",
    "😊": "Happy",
    "😢": "Sad",
    "😍": "Angry"
  };

  const handleEmojiSelection = async (emoji) => {
    try {
      const word = emojiToWordMap[emoji];
      setSelectedEmoji(emoji);
      
      const response = await axios.get('http://localhost:5000/Emotion', {
        params: { emotion: word }
      });

      const newSongNames = response.data.map(emotionData => emotionData.Songname);
      setSongNames(newSongNames);
      

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (


  <>
  <div>
                {emojisArray.map((emoji, index) => (
                  <button key={index} style={{fontSize:"2rem"}}
                   className="emoji" onClick={() => {handleEmojiSelection(emoji)
                  }}>
                    {emoji}
                    
                  </button>
                ))}
               <p style={{color:"white", fontSize:"3rem"}}>{emojiToWordMap[selectedEmoji]}</p>
              </div>
    <div className='flex flex-row flex-wrap pt-5 sm:justify-start justify-center gap-8'>
      {songNames.map((searchTerm, index) => (
        <SearchResults
          key={index}
          searchTerm={searchTerm}
          activeSong={activeSong}
          isPlaying={isPlaying}
        />
      ))}
      
    </div>
    </>
  );
};

const SearchResults = ({ searchTerm, activeSong, isPlaying }) => {
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title={`Loading search for ${searchTerm}...`} />;
  if (error) return '';

  const firstSong = songs?.[0];

  return (
    <div className='flex flex-row'>
      {/* <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Showing results for{' '}
        <span className='font-black'>{searchTerm}</span>
      </h2> */}

      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {firstSong && (
          <SongCard
            key={firstSong.key}
            song={firstSong}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={0}
          />
        )}
      </div>
    </div>
  );
};

export default Emotion;