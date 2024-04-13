import React from "react";
import ac1 from "../assets/ac1.webp";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col glass rounded-lg">
        <div className="basis-2/3">
          <div className="m-2 py-10 px-10 bg-white rounded-lg ">
            <img src={ac1} className="object-cover" />
          </div>
        </div>
        <div className="basis-1/3 m-2 glass ">
          <p>text</p>
          <p>text</p>
          <p>text</p>
        </div>
      </div>
    </>
  );
};

export default Cards;