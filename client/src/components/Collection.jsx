import React from "react";
import img from "../assets/img/collection.png";

export default function Collection() {
  return (
    <div className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-PrimaryColor mt-14 lg:px-32 px-5">
      {/* img section */}
      <div className=" flex justify-center w-full lg:w-2/4 pt-6">
        <img src={img} alt="img" />
      </div>

      {/* content section */}
      <div className=" w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
        <h1 className=" text-4xl font-semibold text-indigo-800">
          Best Summer Collection
        </h1>
        <h3 className=" text-lg font-medium text-indigo-600">
          Sale Get Up To 60% off
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          assumenda sapiente a iste hic explicabo laboriosam praesentium. Harum,
          aperiam voluptatem!
        </p>

        <button className=" bg-indigo-800 text-white px-4 py-2 font-medium active:bg-amber-800">
          Shop Now
        </button>
      </div>
    </div>
  );
}
