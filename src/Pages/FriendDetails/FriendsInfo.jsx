import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArchive } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";




const FriendsInfo = ({ friend }) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-2xl shadow-xl">

      <img
        src={friend.picture}
        alt={friend.name}
        className="w-40 h-40 rounded-full mx-auto object-cover"
      />

      <div className="text-center mt-4">

        <h1 className="text-3xl font-bold">
          {friend.name}
        </h1>

        <p className="mt-2 text-sm bg-green-100 text-green-700 inline-block px-4 py-1 rounded-full">
          {friend.status}
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          
              <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
  {friend.tags}
</span>
            
          
        </div>

        <p className="mt-6 text-gray-600">
          {friend.bio}
        </p>

        <p className="mt-3 font-medium">
          {friend.email}
        </p>

      </div>

      <div className="mt-8 flex flex-col gap-3">

        <button className="btn font-medium">
          <IoIosNotificationsOutline />
Snooze 2 Weeks

        </button>

        <button className="btn font-medium ">
          <IoIosArchive />
Archive
        </button>

        <button className="btn text-red-500 font-medium">
          <RiDeleteBinLine className='text-red-500'/>
Delete
        </button>

      </div>

    </div>
    </div>
  );
};

export default FriendsInfo;