import React from "react";
import Menu from "../images/icon-menu.svg";
import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Image from "next/image";
import "../globals.css";
import Avatar from "../images/image-avatar.png";
type Props = {};

const Navbar = (props: Props) => {
  return (
   
      <div className="flex justify-between px-6 py-5 w-full">
        <div className="flex">
          <Image src={Menu} alt="Menu" width={16} height={15} />
          <Image src={Logo} alt="Logo" className="ml-5" width={137.5} height={20}/> 
        </div>
        <div className="flex">
        <Image src={Cart} alt="cart" className="mr-5" width={21.821} height={20}/>
        <Image src={Avatar} alt="Avatar" width={24} height={24} />
        </div>
      </div>
 
  );
};

export default Navbar;
