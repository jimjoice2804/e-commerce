"use client";
import React, { use } from "react";
import { useState } from "react";
import { useEffect } from "react";
import fetchedData from "@/app/data/data";
import { useRecoilState } from "recoil";
import { dataShareState } from "@/store/atoms/dataShare";

const Page = () => {
  const [dataShare, setDataShare] = useRecoilState(dataShareState);

  console.log("dataShare =>", dataShare);
  useEffect(() => {
    setDataShare(fetchedData);
  }, [dataShare, setDataShare]);

  return <div></div>;
};

export default Page;
