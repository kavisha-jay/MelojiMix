import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";


const TopChartCard = ({song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => {
  return(
    <div className="flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointe mb-2 w-80">
       <h3 className="fot-bold text-base text-white mr-3">{i + 1}.</h3>
       <div className="flex-1 flex flex-row justify-between
       items-center">
      <img className='w-10 h-10 rounded-lg' src={song?.images?.coverart} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-l font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-ase text-gray-300 mt-1">{song?.subtitle}</p>
        </Link>
      </div>

       </div>
       <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
       />
    </div>
  );

}
const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying} = useSelector((state) =>
   state.player);

   const { data } = useGetTopChartsQuery();
   const divRef = useRef(null); 

   useEffect(() =>{
       divRef.current.scrollIntoView({ behavior: 'smooth'})
   })

   const topPlays = data?.slice(0, 5);

   const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) =>{
      dispatch(setActiveSong({ song, data, i}));
      dispatch(playPause(true));
  };

  return(
    <div ref={divRef} className=" bg-[rgba(34,34,34,0.2)] xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full w-full flex flex-col">
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold text-2xl pl-6">Top Charts</h2>
            
          </div>
          <div className="mt-4 flex flex-col gap-1">
            {topPlays?.map((song, i) => (
              <TopChartCard
                key={song.key}
                song={song}
                i={i}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
              />
            ))}
          </div>
        </div>
    </div>
  );
};

export default TopPlay;
