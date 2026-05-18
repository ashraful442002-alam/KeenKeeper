import React from 'react';
import { Link } from "react-router-dom";


const FriendCard = ({friend}) => {
    const {
    name,
    picture,
    days_since_contact,
    tags,
    status
  } = friend;

  return (
    <Link to="/friend/1">
    <div className="card bg-base-100 shadow-xl">

      <figure className="pt-5">
        <img
          src={picture}
          alt={name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">

        <h2 className="card-title">
          {name}
        </h2>

        <p>
          {days_since_contact} days ago
        </p>

        

           <span className="badge bg-[#CBFADB] text-[#244D3f] text-center">
    {tags}
  </span>


     

        <div
          className={`
            px-3 py-1 rounded-full text-white text-sm mt-3

            ${status === "overdue" && "bg-[#EF4444]"}
            ${status === "almost due" && "bg-[#EFAD44]"}
            ${status === "on-track" && "bg-[#244D3F]"}
          `}
        >
          {status}
        </div>

      </div>

    </div>
    </Link>
  );
};

export default FriendCard;