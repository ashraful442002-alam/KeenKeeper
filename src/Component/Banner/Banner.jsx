import React from 'react';

import { FaUserPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC] text-white">

      <div className="max-w-7xl mx-auto px-4 py-20 text-center">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1F2937]">
          Keep Your Friendships Alive
        </h1>

        <p className="max-w-2xl mx-auto text-[#64748B]  md:text-xl  mb-8">
          Track your friendships, stay connected,
          and never forget to check in again.
        </p>

        <button className="btn bg-[#244D3F] text-white border-none  px-8 rounded-xl">

          <FaUserPlus />

          Add a Friend

        </button>

      </div>

    </div>
  );
};

export default Banner;

