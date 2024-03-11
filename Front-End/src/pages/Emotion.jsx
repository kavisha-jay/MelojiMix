import React from 'react';
import { useSelector } from 'react-redux';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import Error from '../components/Error';
import Loader from '../components/Loader';
import SongCard from '../components/SongCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Emotion = () => {
  const navigate = useNavigate();
  const [emotion, setEmotion] = useState([]);
  const [songNames, setSongNames] = useState([]);

  const { emotion: selectedEmoji } = useParams();  // Updated line

  useEffect(() => {
    axios.get(`http://localhost:5000/Emotion?emotion=${selectedEmoji}`)
      .then((emotionData) => {
        const emotionSongNames = emotionData.data.map((emotion) => emotion.Songname);
        setSongNames(emotionSongNames);
        setEmotion(emotionData.data);
        openModal();
      })
      .catch((err) => {
        console.error(err);
        // Handle the error, e.g., redirect to an error page
      });
  }, [selectedEmoji]);
  

  const openModal = () => {
    // Navigate to the emotion route
    navigate('/emotion');
  };

  // const songNames = ['Perfect', 'Think Out Loud', 'Lose Yourself', 'Let Her Go', 'Attention'];
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
  //   <div>
  //   {emotion.map((emotionItem) => (
  //     <div key={emotionItem.Songname}>{emotionItem.Songname}</div>
  //   ))}

    
  //   {songNames.map((songName, index) => (
  //     <div key={index}>{songName}</div>
  //   ))}
  // </div>
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
  );
};

const SearchResults = ({ searchTerm, activeSong, isPlaying }) => {
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits?.map((song) => song.track);

  if (isFetching) return <Loader title={`Loading search for ${searchTerm}...`} />;
  if (error) return <Error />;

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
