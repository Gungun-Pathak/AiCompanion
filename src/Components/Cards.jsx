import React from "react";
import ac1 from "../assets/51NbjzUopGL._SX679_.jpg";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col glass rounded-lg">
        <div className="basis-2/3">
          <div className=" px-10  bg-white rounded-lg ">
            <img src={ac1} className="object-cover " />
          </div>
        </div>
        <div className="basis-1/3 m-2 glass ">
          <p>
            Voltas 1.4 Ton 3 Star Inverter Split AC(Copper, Adjustable Cooling,
            Anti-dust Filter, 2023 Model, 173V Vectra Platina, White)
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
