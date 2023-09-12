import "./globals.css";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import AddToCart from "./components/AddToCart";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <div className="block md:flex flex-1 justify-center">
        <div className=" md:w-1/2 md:mx-10 ">
          <Slider />
        </div>
        <div className="md:w-1/2">
          <Hero />
          <AddToCart />
        </div>
       
      </div>
   
    </div>
  );
};

export default Home;
