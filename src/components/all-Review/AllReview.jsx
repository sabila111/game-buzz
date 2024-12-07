import { useLoaderData } from "react-router-dom";
import AllReviewCard from "./AllReviewCard";

const AllReview = () => {
    const reviews = useLoaderData()
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
            {
                reviews.map(review => <AllReviewCard key={review._id} review={review}></AllReviewCard>)
            }
        </div>
    );
};

export default AllReview;