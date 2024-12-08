import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";

const ReviewDetails = () => {
    const review = useLoaderData()
    const{user}= useContext(AuthContext)
    const { _id,name, email, game, genres, rating, description, image, publish } = review
    console.log(review)

    const handleWatchList = ()=>{



        if (!user) {
            alert("You must be logged in to add to the watchlist!");
            return;
          }

          const watchlistData = {
            game,
            genres,
            rating,
            description,
            image,
            publish,
           email: user.email,
            name: user.displayName,
          };

        fetch('http://localhost:5000/game', {
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            
            body:JSON.stringify(watchlistData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'Added to watchlist successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
    
            })
    } 

   

    return (
       <div>

<h1 className="text-4xl font-bold text-center mt-8 mb-12 text-orange-600"><Typewriter  words={['Review Details']}></Typewriter></h1>

         <div className="card card-compact bg-base-100 max-w-sm md:max-w-xl lg:max-w-3xl shadow-xl mx-auto">
  <figure>
    <img
    className="w-full h-80 lg:h-96"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="my-5">
    <h2 className="text-center font-bold text-4xl pb-3">{game}</h2>
    <p className="text-center pb-3 font-medium text-base">{description}</p>
    <p className="text-center pb-4 font-bold text-gray-500">Genre: {genres}</p>
   <div className="flex justify-between pb-3 mx-10">
   <p className="text-base md:text-lg lg:text-xl font-semibold mb-4">Published on: {publish}</p>
   <p className="font-semibold text-base md:text-lg lg:text-xl ">Rating: {rating} ⭐</p>
   </div>
    <div className="text-center">
      <button onClick={handleWatchList} className="px-3 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold">Add to WatchList</button>
    </div>
  </div>
</div>
       </div>
    );
};

export default ReviewDetails;