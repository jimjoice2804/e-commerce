"use client";
import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const products = ["Product 1", "Product 2", "Product 3"];
  const [cart, setCart] = useState([]);

  return (
    <div className="py-4 bg-[#0189FE] border-t-2 border-black flex justify-around text-white">
      <div
        className="relative font-bold text-base bg-[#0189FE]  z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link  className='flex gap-1 items-center
        ' href="all-products">All products{<FaCaretDown />}</Link>
        {isHovered && (
          <div className="flex flex-col absolute bg-[#0189FE] w-64 h-64 px-5 py-6 gap-5">
            {products.map((product, index) => (
              <Link href={`product/${product}`} key={index}>
                {product}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-5">
        <h1>
          <Link href={""}>Home appliances</Link>
        </h1>

        <h1>
          <Link href={""}>Audio & Video</Link>
        </h1>

        <h1>
          <Link href={""}>Refrigerator</Link>
        </h1>

        <h1>
          <Link href={""}>New arrivals</Link>
        </h1>

        <h1>
          <Link href={""}>Today`s deal</Link>
        </h1>

        <h1>
          <Link href={""}>Gifts cards</Link>
        </h1>
      </div>

      <div className="flex gap-5 items-center">
        <div className="border-r border-gray-400 px-5">
          <Link href={""} className="">
            <FaShoppingCart />
          </Link>
        </div>
        <div className="px-4">
          <Link href={""}>Log in</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;