import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';
import Error from '../components/Error';
import Loader from '../components/Loader';
import SongCard from '../components/SongCard';


const Searchresults = ({ searchTerm, activeSong, isPlaying }) => {
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

  export default Searchresults;