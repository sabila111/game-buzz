import { useLoaderData } from "react-router-dom";
import AllReviewCard from "./AllReviewCard";
import { Typewriter } from "react-simple-typewriter";

const AllReview = () => {
    const reviews = useLoaderData()
    return (
        <div>
<h1 className="text-4xl font-bold text-center mt-8 mb-12 text-orange-600"><Typewriter  words={['All Reviews']}></Typewriter></h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
            
            {
                reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
            }
        </div>
        </div>
    );
};

export default AllReview;