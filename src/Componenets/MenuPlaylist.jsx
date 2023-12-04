import React from 'react';
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";


function MenuPlaylist() {
    const PlayList = [
        {id: 1, name:'Top hit 2021'},
        {id: 2, name:'Dance'},
        {id: 3, name:'Relaxing Music'},
        {id: 4, name:'Hip pop'},
       
    ]
  return (
    <div className='playListContainer'>
        <div className="nameContainer">
            <p>PlayList</p>
            <i>
                <FaPlus/>
            </i>
        </div>
        <div className="playListScroll">
          {
            PlayList.map((list)=>(
                <div className="platlist" key={list.id}>
                      <i className='list'>
                          <BsMusicNoteList/>
                     </i>
                     <p>{list.name}</p>
                     <i className='trash'>
                            <BsTrash/>
                     </i>
                </div>
            ))
          }
          

           
        </div>
    </div>
  )
}

export { MenuPlaylist };