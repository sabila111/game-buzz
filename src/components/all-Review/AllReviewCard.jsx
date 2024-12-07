import { Link } from "react-router-dom";

const AllReviewCard = ({review}) => {
    const { _id,name, email, game, genres, rating, description, image, publish } = review
    return (
        <div className="card card-compact bg-base-100 w-[300px] shadow-xl">
  <figure>
    <img
    className="w-full h-60"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="text-center my-5">
    <h2 className="text-2xl font-bold mb-3">{game}</h2>
    <p className="text-lg text-gray-500 font-semibold mb-2">Genre: {genres}</p>
   <p className="font-semibold text-lg pb-3">Rating: {rating} ⭐</p>
   <p className="text-xl font-bold mb-4">Published on: {publish}</p>
    <div className="">
      <Link to={`/allReview/${review._id}`}><button className="px-4 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold">Explore Now</button></Link>
    </div>
  </div>
</div>
    );
};

export default AllReviewCard;