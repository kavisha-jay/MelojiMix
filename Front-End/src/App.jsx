import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import MusicPlayer from './components/MusicPlayer';
import Sidebar from './components/Sidebar';
import TopPlay from './components/TopPlay';
import  Searchbar  from './components/Searchbar';
import Search from './pages/Search';
import ArtistDetails from './pages/ArtistDetails';
import TopArtists from './pages/TopArtists';
import AroundYou  from './pages/AroundYou';
import Discover from './pages/Discover';
import SongDetails from './pages/SongDetails';
import TopCharts from './pages/TopCharts';
import back from './assets/back.jpg';
import Modal from './components/modal/Modal';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Signup from './components/LoginSignup/LoginSignup';
const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  const [calm, SetCalm] = useState([])
  useEffect(() =>{

    axios.get('http://localhost:5000/Calm')
    .then(Calm => SetCalm(Calm.data))
    .catch(err => console.log(err))
  }, [])

  return (


    <div className="w-full relative overflow-hidden flex z-10 flex-grow h-screen ">
      <Sidebar />
      <div className="background">
      
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse bg-[rgba(34,34,34,0.6)]  backdrop-blur-3xl">
          <div className="flex-1 h-fit pb-40 ">
         
          <Searchbar/>

            <Routes>
              <Route path="/" element={ <Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>
      <Modal/>
      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
