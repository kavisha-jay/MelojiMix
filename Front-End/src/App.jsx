import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MusicPlayer from './components/MusicPlayer';
import Sidebar from './components/Sidebar';
import TopPlay from './components/TopPlay';
import Searchbar from './components/Searchbar';
import Search from './pages/Search';
import Emotion from './pages/Emotion';
import Discover from './pages/Discover';
import Modal from './components/modal/Modal';
import Login from './components/LoginSignup/LoginSignup';
import { useState } from 'react'; // Import useState hook

const App = () => {
  const { activeSong } = useSelector((state) => state.player);
  const navigate = useNavigate();
  const [signupClicked, setSignupClicked] = useState(false); 

  const handleSignupClick = () => {
    setSignupClicked(true); // Set signupClicked state to true when Signup button is clicked
    navigate('/register');
  };

  return (
    <div className="w-full relative overflow-hidden flex z-10 flex-grow h-screen">
      <Sidebar />
      <div className="background">
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse bg-[rgba(34,34,34,0.6)]  backdrop-blur-3xl ">
          <div className="flex-1 h-fit pb-40 ">
            <div className='flex flex-row space-x-6 xl:space-x-44 '>
              <Searchbar />
              {!signupClicked && ( 
                <div className="bg-blue-500 hover:bg-blue-700 h-9 mt-5 rounded">
                  <button className="text-white font-bold px-4" onClick={handleSignupClick}>
                    Signup
                  </button>
                </div>
              )}
            </div>
           <div className='route'>
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/emotion" element={<Emotion />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
              </div> 
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
