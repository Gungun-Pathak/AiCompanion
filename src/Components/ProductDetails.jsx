import React from "react";
import image from "../assets/image.png";
import image1 from "../assets/51NbjzUopGL._SX679_.jpg";

const ProductDetails = () => {
  return (
    <div className="flex flex-row text-black m-1 mx-8 h-screen">
      <div className="basis-1/6">
        <div className="flex flex-col">
          <div className="basis-1/4">        <img className="w-2/3 " src={image1} /></div>
          <div className="basis-1/4">        <img className="w-2/3 " src={image1} /></div>
          <div className="basis-1/4">        <img className="w-2/3 " src={image1} /></div>
          <div className="basis-1/4">        <img className="w-2/3 " src={image1} /></div>
        </div>
      </div>
      <div className="basis-3/6 ">
        <img className="w-2/3 " src={image1} />
      </div>
      <div className="basis-2/6 pt-6">
        <img src={image} />
        <button className="rounded- mt-4 ml-2 p-2 bg-red-800 text-white">
          Limited time deal
        </button>
        <h2 className="ml-2 mt-2 text-xl">
          <span className="text-red-700 ">57%</span>
          <span className=""> Rs30,490</span>
        </h2>
        <div className="p-2 px-8 my-4 mx-2 bg-cyan-500 w-max rounded-xl"><button>Chat to Negotiate</button></div>
      </div>
    </div>
  );
};

export default ProductDetails;
