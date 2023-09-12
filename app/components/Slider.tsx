"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductOne from "../images/image-product-1.jpg";
import ProductTwo from "../images/image-product-2.jpg";
import ProductThree from "../images/image-product-3.jpg";
import ProductFour from "../images/image-product-4.jpg";
import Next from "../images/icon-next.svg";
import Previous from "../images/icon-previous.svg";
type Props = {};

const Slider = (props: Props) => {
  const slides = [
    {
      id: 1,
      img: ProductOne,
    },
    {
      id: 2,
      img: ProductTwo,
    },
    {
      id: 3,
      img: ProductThree,
    },
    {
      id: 4,
      img: ProductFour,
    },
  ];
  

  const [current, setCurrent] = useState<number>(0);
  const [selected, setSelected] = useState(slides[0]);
  function handleThumbnail(i: any) {
    setSelected(i);
  }
  function next() {
    setCurrent((i) => (i + 1) % slides.length);
  }
  function prev() {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  }
  return (
    <>
      <div className="md:hidden">
        <div className="transition-all">
          <Image
            src={slides[current].img}
            alt={`Slide ${current}`}
           className="w-full h-1/2"
           
          />
        </div>
        <div className="absolute top-1 bottom-1/2 border-2 border-black border-solid flex justify-between  items-center w-full">
          <button onClick={prev} className="rounded-full p-3 mx-3 bg-white">
            {" "}
            <Image src={Previous} alt="Previous button" />
          </button>
          <button onClick={next} className="rounded-full p-3 mx-3 bg-white">
            {" "}
            <Image src={Next} alt="Next button" />
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center flex-col">
        <Image src={selected.img} alt={`Slide`} className=" w-96 rounded-2xl" />
        <div className="flex justify-center">
          {slides.map((i) => (
            <Image
              src={i.img}
              alt={`Thumbnail ${i}`}
              className={`w-14 my-5 hover:opacity-70
              h-12 cursor-pointer transition duration-200 ease-in transform mx-5 rounded-[10px] active:${
                selected === i ? "border-2 border-orange-400 border-solid" : ""
              } `}
              onClick={() => (handleThumbnail(i)
                
                )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
