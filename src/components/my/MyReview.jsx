import { useContext, useEffect, useState } from "react";
import { data, Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoPencil } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter'
import Swal from "sweetalert2";

const MyReview = () => {
    const review = useLoaderData()
    const[removes, setRemoves] = useState(review)
    const{user}= useContext(AuthContext)

    // const[removes, setRemoves] = useState([])

    // useEffect(() => {
    //     const filteredReviews = review.filter((reviews) => reviews.email === user?.email);
    //     setRemoves(filteredReviews);
    //   }, [review, user]);
    
    

    const filteredReviews = review.filter((reviews) => reviews.email === user?.email);

    const handleReviewDelete= id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            


           
        fetch(`http://localhost:5000/review/${id}`, {
            method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log('delete is done',data)})
             if(data.deletedCount > 0){
                Swal.fire({
                        title: "Deleted!",
                        text: "Your review has been deleted.",
                        icon: "success"
                      });

                  const remainingReviews = removes.filter(remove => remove._id !== id)
                  setRemoves(remainingReviews)

             }
            }
          });
    }


    return (
       <div>
 <h2 className=" text-4xl font-bold text-center text-orange-600 my-8">

<Typewriter words={['My Review Page']}></Typewriter>

 </h2>

<div className="overflow-x-auto pt-10">
      <table className="table-auto w-full">
    
        <thead>
          <tr className='font-bold  sm:text-base md:text-lg lg:text-xl'>
            <th >Image</th>
            <th>Game</th>
            <th>Genres</th>
            <th>Rating</th>
            <th className="text-center">Description</th>
            <th className="text-center">Buttons</th>
          </tr>
        </thead>
        <tbody>
         
          {filteredReviews.map((reviews) => (
            <tr key={reviews._id}
            className="text-xs sm:text-sm md:text-base lg:text-lg border-b"
            >
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className=" sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-40 lg:w-40">
                      <img src={reviews.image} alt={reviews.game} />
                    </div>
                  </div>
                </div>
              </td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{reviews.game}</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{reviews.genres}</td>
              <td className='font-semibold sm:text-base md:text-lg lg:text-lg '>{reviews.rating} ⭐</td>
              <td className='font-semibold w-40 sm:w-64 md:w-80'>
                {reviews.description}
              </td>
              <td className='font-semibold text-lg'>
                <div className="flex flex-col sm:flex-row items-center gap-3">

                <button onClick={()=>handleReviewDelete(reviews._id)} className="bg-gradient-to-r from-orange-400 to-orange-600 text-white sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-3 "><IoTrashBinOutline /></button>

            <Link to={`/myReview/update/${reviews._id}`}>
            <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white sm:text-base md:text-lg lg:text-xl px-3 py-2 sm:px-4 sm:py-3 "><IoPencil /></button>
            </Link>
              
              

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

       </div>
    );
};

export default MyReview;