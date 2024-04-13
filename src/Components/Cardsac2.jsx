import React from "react";
import ac1 from "../assets/ac1.webp";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col glass rounded-lg">
        <div className="basis-2/3">
          <div className="m-2 py-10 px-14 bg-white rounded-lg ">
            <img src={ac1} className="object-cover" />
          </div>
        </div>
        <div className="basis-1/3 m-2 glass ">
          <p>
            LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, AI Convertible
            6-in-1 Cooling, 2 Way Swing, HD Filter with Anti-Virus Protection,
            2024 Model, TS-Q18JNXE3, White)
          </p>

          <button className="bg-slate-900 rounded-md text-white ml-32 p-2 ">
            View Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
