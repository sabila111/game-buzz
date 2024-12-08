import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'
const Trending = () => {
    return (
        <div className="mt-14 mb-12">
          <p className="text-orange-700 text-xl"><Typewriter words={['Trending--']}></Typewriter> </p>
          <div className="flex justify-between">
          <Fade><h3 className="mt-4 text-3xl md:text-3xl lg:text-5xl font-bold">Trending Now</h3></Fade>
          <button className="px-3 py-3 rounded-lg bg-orange-600 text-white font-semibold">View All</button>
          </div>


<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-5 mt-12 pb-12">

<div className=" bg-base-100 w-72 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co.com/zNqGh4K/tockcake.jpg"
      alt="Shoes" />
  </figure>
  <div className="-mt-40 text-white  ml-8 ">
    <h2 className="mb-4 text-3xl font-bold">Warrior Queen</h2>
    <p>$ 24.55</p>
    <div className=" mt-4">
      <button className="px-4 py-3 rounded-lg bg-orange-600 font-bold">Shop Now</button>
    </div>
  </div>
</div>

<div className=" bg-base-100 w-72 shadow-xl">
  <figure>
    <img
    className="h-72 w-full"
      src="https://i.ibb.co.com/2nJhc52/q.jpg"
      alt="Shoes" />
  </figure>
  <div className="-mt-40 text-white  ml-8 ">
    <h2 className="mb-4 text-3xl font-bold">Minecraft</h2>
    <p>$ 24.55</p>
    <div className=" mt-4">
      <button className="px-4 py-3 rounded-lg bg-orange-600 font-bold">Shop Now</button>
    </div>
  </div>
</div>


<div className="bg-base-100 w-72 shadow-xl">
  <figure>
    <img
    className="h-72"
      src="https://i.ibb.co.com/dLYCV9p/feature2.jpg"
      alt="Shoes" />
  </figure>
  <div className="-mt-40 text-white  ml-8 ">
    <h2 className="mb-4 text-2xl font-bold">Call of Duty: Warzone</h2>
    <p>$ 24.55</p>
    <div className=" mt-4">
      <button className="px-4 py-3 rounded-lg bg-orange-600 font-bold">Shop Now</button>
    </div>
  </div>
</div>


<div className=" bg-base-100 w-72 shadow-xl">
  <figure>
    <img
    className="h-72"
      src="https://i.ibb.co.com/gPqHzcn/images-2.jpg"
      alt="Shoes" />
  </figure>
  <div className="-mt-40 text-white  ml-8 ">
    <h2 className="mb-4 text-2xl font-bold">League of Legends </h2>
    <p>$ 24.55</p>
    <div className=" mt-4">
      <button className="px-4 py-3 rounded-lg bg-orange-600 font-bold">Shop Now</button>
    </div>
  </div>
</div>



</div>

        </div>
    );
};

export default Trending;