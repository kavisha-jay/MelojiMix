import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, MusicPlayer, TopPlay } from './components';
import  Searchbar  from './components/Searchbar';
import Search from './pages/Search';
import ArtistDetails from './pages/ArtistDetails';
import TopArtists from './pages/TopArtists';
import AroundYou  from './pages/AroundYou';
import Discover from './pages/Discover';
import SongDetails from './pages/SongDetails';
import TopCharts from './pages/TopCharts';
import back from './assets/back.jpg';
import './App.css';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="w-full relative overflow-hidden flex z-10 flex-grow h-screen ">
      <Sidebar />
      <div className="background">
        
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse bg-[rgba(34,34,34,0.6)]  backdrop-blur-3xl">
          <div className="flex-1 h-fit pb-40 ">
          
         

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

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
