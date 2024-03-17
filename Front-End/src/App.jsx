import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MusicPlayer from './components/MusicPlayer';
import Sidebar from './components/Sidebar';
import TopPlay from './components/TopPlay';
import Searchbar from './components/Searchbar';
import Search from './pages/Search';
import Emotion from './pages/Emotion';
import Discover from './pages/Discover';
import Modal from './components/modal/Modal';
// import './App.css';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="w-full relative overflow-hidden flex z-10 flex-grow h-screen">
      <Sidebar />
      <div className="background">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse bg-[rgba(34,34,34,0.6)]  backdrop-blur-3xl">
          <div className="flex-1 h-fit pb-40 ">
            <Searchbar />
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/emotion" element={<Emotion />} />
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
