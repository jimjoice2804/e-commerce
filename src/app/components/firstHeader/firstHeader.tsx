import React from "react";
import Link from "next/link";

const firstHeader = () => {
  return (
    <div className="flex justify-around bg-[#0A6DD1] text-white py-1">
      <div className="font-light">
        24/7 Customer service <strong>1-800-234-5678</strong>
      </div>

      <div></div>
      <div></div>

      <div className="flex gap-5 font-light">
        <Link href={''}>Shipping & return</Link>
        <Link href={''}>Track order</Link>
      </div>
    </div>
  );
};

export default firstHeader;
