import React from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Image from "next/image";
import "../globals.css";
import Avatar from "../images/image-avatar.png";
import { Maiden_Orange } from "next/font/google";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-col m-7 items-center justify-center w-full">
      <div className="flex justify-between items-center relative  w-10/12 ">
        <div className="flex md:w-3/4  md:pb-5  ">
          <div className="w-1/4 cursor-pointer">
            <Image
              src={Menu}
              alt="Menu"
              width={16}
              className=" md:hidden pb-5"
            />
            <Image
              src={Logo}
              alt="Logo"
              className="pb-5 "
              width={137.5}
              height={20}
            />
          </div>
          <div className=" hidden md:flex w-3/5 max-w-lg justify-items-start items-center ">
            <ul className=" md:flex w-full container justify-between text-gray-600 text-sm items-center ">
              <li className=" hover:text-black cursor-pointer pb-5  transition-all hover:border-b-2 border-orange-400">
                Collections
              </li>
              <li className=" hover:text-black cursor-pointer pb-5  transition-all hover:border-b-2 border-orange-400">
                Men
              </li>
              <li className=" hover:text-black cursor-pointer pb-5  transition-all hover:border-b-2 border-orange-400">
                Women
              </li>
              <li className=" hover:text-black cursor-pointer pb-5 transition-all  hover:border-b-2 border-orange-400">
                About
              </li>
              <li className=" hover:text-black cursor-pointer pb-5  transition-all hover:border-b-2 border-orange-400">
                Contact
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-end md:pb-8  w-1/4 mx-2 cursor-pointer ">
          <Image
            src={Cart}
            alt="cart"
       
            className="mr-5 hover:text-black"
            width={23.821}
            height={20}
          />
          <div className="hover:border-2 border-orange-400 border-solid rounded-full transition-ease-in-out duration-100 ">
            <Image src={Avatar} alt="Avatar" width={24} height={24} />
          </div>
        </div>
      </div>
      <hr className="w-full text-black " />
    </div>
  );
};

export default Navbar;
