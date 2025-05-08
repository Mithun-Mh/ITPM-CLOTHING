import React from "react";
import img from "../assets/img/hero.png";

export default function HomeCon() {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-PrimaryColor">
      {/* content section  */}
      <div className=" space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight text-indigo-800 w-full lg:w-3/4">
          Step Into Modern Stylish Affordble Outfiting!.
        </h1>
        <p className=" w-full lg:w-3/4 text-indigo-600 font-medium"> 
        Discover and Define Your Own Fashion Sense with enabling smart features.. .
        </p>

        <button className=" bg-indigo-800 text-white px-4 py-2 font-medium active:bg-amber-800">
          shop now
        </button>
      </div>

      {/* img section */}
      <div className=" bg-indigo-600 p-5 rounded-tr-[290px] rounded-tl-3xl rounded-br-3xl mt-20">
       
        {<img className=" -ml-5 -mb-2 mt-3" width={680} src={img} alt="img" />}
      </div>
    </div>
  );
}
