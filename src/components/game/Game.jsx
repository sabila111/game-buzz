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
      <table className="sm:table-auto md:table lg:table w-full">
    
        <thead>
          <tr className=' font-bold  sm:text-base md:text-lg lg:text-xl  '>
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
            <tr key={games._id}
             className="text-xs sm:text-sm md:text-base lg:text-lg border-b"
            >
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className=" sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-40 lg:w-40">
                      <img src={games.image} alt='' />
                    </div>
                  </div>
                </div>
              </td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg'>{games.game}</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg'>{games.genres}</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg'>{games.rating} ⭐</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg'>
                {games.publish}
              </td>
              <td className='font-semibold w-40 sm:w-64 md:w-80'>
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