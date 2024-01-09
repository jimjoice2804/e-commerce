"use client";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { dataShareState } from "@/store/atoms/dataShare";
import Link from "next/link";

const Page = () => {
  const categoriesData = useRecoilValue(dataShareState);
  console.log("categoriesData =>", categoriesData);

  let tags: string[] = [];

  categoriesData.forEach((category) => {
    if (!tags.includes(category.tag)) {
      tags.push(category.tag);
    }
  });

  console.log("tags =>", tags);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const indexOfLastRecord = currentPage * itemsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - itemsPerPage;
  const currentItems = categoriesData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const totalPages = Math.ceil(categoriesData.length / itemsPerPage);

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-1 bg-blue-200 sticky top-0 p-5 text-black">
        <h1 className="font-semibold text-2xl text-center p-5">Categories</h1>
        {tags.map((tag, index) => {
          return (
            <div key={index} className="flex justify-between items-center p-1">
              <Link href={`products/${tag}`} className="text-l">
                <p className="text-l">{tag}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="col-span-4 bg-green-200 overflow-auto p-5 text-black">
        <h1 className="font-semibold text-2xl text-center p-5">Shop</h1>
        <div className="data-container flex flex-wrap">
          {currentItems.map((item, index) => (
            <div key={index} className="item w-1/3 p-5">
              {item.name}
              {item.description}
            </div>
          ))}
        </div>
        <div className="flex justify-center p-5 gap-5">
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              &larr; Previous
            </button>
          )}
          {Array.from({ length: 3 }, (_, i) => currentPage + i - 1)
            .filter((pageNumber) => pageNumber >= 1 && pageNumber <= totalPages)
            .map((pageNumber, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={currentPage === pageNumber ? "active" : ""}
                >
                  {pageNumber}
                </button>
              );
            })}
          {currentPage < totalPages && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;