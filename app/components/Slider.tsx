"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductOne from "../images/image-product-1.jpg";
import Next from "../images/icon-next.svg";
import Previous from "../images/icon-previous.svg";
import ProductTwo from "../images/image-product-2.jpg";
import ProductThree from "../images/image-product-3.jpg";
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
  ];
  const [current, setCurrent] = useState<number>(0);
  function next() {
    setCurrent((i) => (i + 1) % slides.length);
  }
  function prev() {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  }
  return (
    <div>
      <div className="transition-all">
        <Image
          src={slides[current].img}
          alt={`Slide ${current}`}
          width={415}
          height={300}
        />
      </div>
      <div className="absolute top-1/3 flex justify-between w-full">
        <button onClick={prev} className="rounded-full p-3 mx-3 bg-white"> <Image src={Previous} alt="Previous button"/></button>
        <button onClick={next} className="rounded-full p-3 mx-3 bg-white"> <Image src={Next} alt="Next button"/></button>
      </div>
    </div>
  );
};

export default Slider;
