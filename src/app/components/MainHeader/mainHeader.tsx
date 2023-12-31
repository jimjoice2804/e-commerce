"use client";
import React from "react";
import logo from "../../../../public/electronic-store-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const MainHeader = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(search);
  };

  /////////////////////////////////////////////////// SEARCH FOR PRODUCTS  ///////////////////////////////////////////////////
  const productSearchHandler = async () => {
    console.log(search);
    try {
    } catch (error) {}
  };

  return (
    <div className="bg-[#0189FE] py-5 flex justify-around">
      <div>
        <Link href="/pages/home">
          <Image
            src={logo}
            alt="Electronic Store Logo"
            width={123} // specify the width
            height={24} // and the height
          />
        </Link>
      </div>

      <div></div>
      <div></div>

      <div className="flex gap-5">
        <input
          placeholder="Search for products"
          type="text"
          value={search}
          onChange={searchHandler}
          className="border-2 border-[#0189FE] rounded-md px-2 py-1"
        />

        <button
          className="bg-[#0189FE] text-white px-2 py-1 rounded-md hover:bg-white hover:text-[#0189FE]"
          onClick={productSearchHandler}
        >
          {<FaSearch />}
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
