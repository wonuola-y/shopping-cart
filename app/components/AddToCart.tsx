"use client";
import React, { useState } from "react";
import Image from "next/image";
import Add from "../images/icon-plus.svg";
import Minus from "../images/icon-minus.svg";
import Cart from "../images/cart.svg";
type Props = {};

function AddToCart({}: Props) {
  const [number, setnumber] = useState<number>(0);
  function addClick() {
    setnumber(number + 1);
  }
  function reduceClick() {
    setnumber(number > 0 ? number - 1 : 0);
  }
  return (
    <div className="flex justify-between">
      <div className="flex  w-1/3 items-center  justify-between px-3 rounded-lg bg-gray-100">
        <button>
          <Image onClick={reduceClick} src={Minus} alt="Minus sign" />
        </button>
        <span>{number}</span>
        <button onClick={addClick}>
          <Image src={Add} alt="Plus sign" />
        </button>
      </div>
      <div className="w-2/3 mx-3">
        <button className="flex bg-orange-500 text-white rounded-lg p-3 w-[272px] justify-center">
          <Image src={Cart} alt="shopping cart" className="mx-3" />
          <span className=" text-base font-bold ">Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
