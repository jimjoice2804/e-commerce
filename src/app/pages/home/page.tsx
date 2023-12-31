import React from "react";
import FirstHeader from "@/app/components/firstHeader/firstHeader";
import MainHeader from "../../components/MainHeader/mainHeader";
import NavBar from "@/app/components/NabBar/NavBar";

const page = () => {
  return (
    <div>
      <FirstHeader />
      <MainHeader />
      <NavBar />
    </div>
  );
};

export default page;
