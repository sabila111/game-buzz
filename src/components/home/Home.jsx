
import HightestRated from "./HightestRated";
import News from "./News";
import Slider from "./Slider";
import Trending from "./Trending";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <HightestRated></HightestRated>
           <Trending></Trending>
           <News></News>
        </div>
    );
};

export default Home;