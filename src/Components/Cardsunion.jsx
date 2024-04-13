import React from "react";
import Cards from "./Cards";
import Cardsac2 from "./Cardsac2";
import Cardsac3 from "./Cardsac3";

const Cardsunion = () => {
  return (
    <div className="">
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">Refrigerators</h1>
      </div>
      <div className="flex gap-8 p-5">
        <Cards />
        <Cardsac2 />
        <Cardsac3 />
      </div>
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">TeleVisions</h1>
      </div>
      <div className="flex gap-8 p-5">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="w-full h-24 bg-slate-900 pl-8 pt-5">
        <h1 className="text-4xl font-medium text-white ">Washing Machines</h1>
      </div>
      <div className="flex gap-8 p-5">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Cardsunion;
