import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HightestRated = () => {
    const[games, setGames] = useState([])
    
    
    useEffect(()=>{
        fetch('https://gamer-review-server.vercel.app/review')
        .then((res) => res.json())
        .then((data) =>{
            const sortedReview = data.sort((a, b) => b.rating - a.rating)
            setGames(sortedReview.slice(0,6))
        })
    },[])
    
    return (
        <div className="mt-16 mb-10">
            <p className="text-orange-700 text-xl mb-5"><Typewriter words={['Highest--']}></Typewriter> </p>
      <h2 className="text-4xl font-bold   mb-8">
        Highest Rated Games
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div key={game._id} className="rounded-2xl w-80 lg:w-full bg-base-100 shadow-xl">
            <figure>
              <img
                src={game.image}
                alt={game.game}
                className="h-52 w-full object-cover rounded-t-2xl"
              />
            </figure>
            <div className="px-5 py-5">
              <h2 className="font-bold text-2xl pb-3 text-center">{game.game}</h2>
              <div className="flex justify-between pb-4">
              <p className="text-md text-gray-500 font-bold">{game.genres}</p>
              <p className="text-lg font-semibold text-gray-500">Rating: {game.rating}⭐</p>
              </div>
              <div>
                <Link to={`/allReview/${game._id}`}>
                  <button className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold">Explore Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
 
        </div>
    );
};

export default HightestRated;