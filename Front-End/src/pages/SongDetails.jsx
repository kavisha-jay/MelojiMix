import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import Discover from './Discover';

const SongDetails = () => {
    const dispatch = useDispatch();
    const { songid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player)

    console.log(songid);

    return(
        <div className='flex flex-col'>
            <h1>Lyrics</h1>
            {/* <DetailsHeader artistId={artistId} songData={songData}/> */}

            <div className='mb-10'>
                <h2 className='text-white text-3xl font-bold'>Lyrics:</h2>

                <div className='mt-5'>
                   {songData?.type === 'LYRICS' ?
                   songData?.text.map((line, i) => (
                    <p className='text-gray-400 text-base my-1'>{line}</p>
                   )): <p className='text-gray-400 text-base my-1'>Sorry, no lyrics found!</p>}
                </div>
            </div>

        </div>
        
    );
}

export default SongDetails;
