import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../provider/AuthProvider';

const Game = () => {
    const gamee = useLoaderData()
    const{user}= useContext(AuthContext)

    
    const filteredGames = gamee.filter((games) => games.email === user?.email);
    return (
       <div>
<h2 className="text-4xl font-bold text-center text-orange-600 my-8">

<Typewriter words={['Your Game Watchlist ']}></Typewriter>

 </h2>
<div className="overflow-x-auto pt-8">
      <table className="table">
    
        <thead>
          <tr className='font-bold text-xl '>
            <th>Image</th>
            <th>Game</th>
            <th>Genres</th>
            <th>Rating</th>
            <th>Published on</th>
            <th className='text-center'>Description</th>
          </tr>
        </thead>
        <tbody>
         
          {filteredGames.map((games) => (
            <tr key={games._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className=" h-40 w-40">
                      <img src={games.image} alt={games.game} />
                    </div>
                  </div>
                </div>
              </td>
              <td className='font-semibold text-lg'>{games.game}</td>
              <td className='font-semibold text-lg'>{games.genres}</td>
              <td className='font-semibold text-lg'>{games.rating} ⭐</td>
              <td className='font-semibold text-lg'>
                {games.publish}
              </td>
              <td className='font-semibold text-lg w-80'>
                {games.description}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>

       </div>
    );
};

export default Game;