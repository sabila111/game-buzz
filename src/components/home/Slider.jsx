import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
    return (
        <div className="carousel w-full h-96 mt-8">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/7nSG9Xt/e.jpg"
      className="w-full" />
      
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <div>
      <p className="text-4xl font-bold mb-8"><Typewriter words={['A New Place For Professional Gamers']}></Typewriter> </p>
     <div className="flex justify-center items-center">
     <button className="px-3 py-3 bg-orange-600 text-white rounded-lg">Join Us</button>
    
     </div>
      </div>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/mFgzn87/5f.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <div>
      <p className="text-4xl font-bold mb-8"><Typewriter words={['A New Place For Professional Gamers']}></Typewriter> </p>
     <div className="flex justify-center items-center">
     <button className="px-3 py-3 bg-orange-600 text-white rounded-lg">Join Us</button>
    
     </div>
      </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/bKNxywN/RE55VeM.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <div>
      <p className="text-4xl font-bold mb-8"><Typewriter words={['A New Place For Professional Gamers']}></Typewriter> </p>
     <div className="flex justify-center items-center">
     <button className="px-3 py-3 bg-orange-600 text-white rounded-lg">Join Us</button>
    
     </div>
      </div>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/KzppHR1/unnamed.png"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <div>
      <p className="text-4xl font-bold mb-8"><Typewriter words={['A New Place For Professional Gamers']}></Typewriter> </p>
     <div className="flex justify-center items-center">
     <button className="px-3 py-3 bg-orange-600 text-white rounded-lg">Join Us</button>
    
     </div>
      </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Slider;