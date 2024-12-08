import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import AllReviewCard from "./AllReviewCard";
import { Typewriter } from "react-simple-typewriter";

const AllReview = () => {
  const reviews = useLoaderData();
  const [sortedReviews, setSortedReviews] = useState(reviews);
  const [filterGenre, setFilterGenre] = useState("All");

  useEffect(() => {
    setSortedReviews(reviews); 
  }, [reviews]);

  const handleSort = (type, order) => {
    const sorted = [...sortedReviews].sort((a, b) => {
      if (type === "rating") {
        return order === "asc" ? a.rating - b.rating : b.rating - a.rating;
      } else if (type === "publish") {
        return order === "asc" ? a.publish - b.publish : b.publish - a.publish;
      }
      return 0;
    });
    setSortedReviews(sorted);
  };

  const handleFilter = (genre) => {
    setFilterGenre(genre);
    if (genre === "All") {
      setSortedReviews(reviews);
    } else {
      const filtered = reviews.filter((review) => review.genres === genre);
      setSortedReviews(filtered);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-8 mb-12 text-orange-600">
        <Typewriter words={["All Reviews"]}></Typewriter>
      </h1>

      
      <div className="flex justify-between items-center mb-8">

      <div className="dropdown dropdown-top">
          <label tabIndex={0} className="btn  bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bol m-1">
            Filter by Genre
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => handleFilter("All")}>All</button>
            </li>
            <li>
              <button onClick={() => handleFilter("Action")}>Action</button>
            </li>
            <li>
              <button onClick={() => handleFilter("Adventure")}>
                Adventure
              </button>
            </li>
            <li>
              <button onClick={() => handleFilter("Farming")}>
                Farming
              </button>
            </li>
            <li>
              <button onClick={() => handleFilter("RPG")}>RPG</button>
            </li>
          </ul>
        </div>

        
        <div className="dropdown dropdown-top">
          <label tabIndex={0} className="btn border-2 border-orange-600 font-bold bg-white text-orange-600 m-1">
            Sort by
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={() => handleSort("rating", "asc")}>
                Rating 
              </button>
            </li>
            <li>
              <button onClick={() => handleSort("publish", "asc")}>
                Year 
              </button>
            </li>
            
          </ul>
        </div>

       
        
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
        {sortedReviews.map((review) => (
          <AllReviewCard key={review._id} review={review}></AllReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
