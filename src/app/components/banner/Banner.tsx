import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-black w-full h-full">
      <div className="bg-black h-full w-full">
        <Image
          src="/images/banner.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
