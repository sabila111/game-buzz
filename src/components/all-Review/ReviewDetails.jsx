import { Link, useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
    const review = useLoaderData()
    const { _id,name, email, game, genres, rating, description, image, publish } = review
    console.log(review)
    return (
        <div className="card card-compact bg-base-100 max-w-3xl shadow-xl mx-auto">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="my-5">
    <h2 className="text-center font-bold text-4xl pb-3">{game}</h2>
    <p className="text-center pb-3 font-medium text-base">{description}</p>
    <p className="text-center pb-4 font-bold text-gray-500">Genre: {genres}</p>
   <div className="flex justify-between pb-3 mx-10">
   <p className="text-xl font-semibold mb-4">Published on: {publish}</p>
   <p className="font-semibold text-xl ">Rating: {rating} ⭐</p>
   </div>
    <div className="text-center">
    <Link to={`/game/${review._id}`}>  <button className="px-3 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold">Add to WatchList</button></Link>
    </div>
  </div>
</div>
    );
};

export default ReviewDetails;