import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FriendsInfo from './FriendsInfo';
import toast from 'react-hot-toast';

const FriendDetails = () => {

  const friends = useLoaderData();

  const { id } = useParams();

const friend = friends.find(
  friend => friend.id === parseInt(id)
);
  
  if (!friend) {
    return <span className="loading loading-spinner loading-lg"></span>
  }


  const handleInteraction = (type) => {

  const newActivity = {
    id: Date.now(),
    type,
    title: `${type} with ${friend.name}`,
    date: new Date().toLocaleDateString(),
  };

  const existingActivities =
    JSON.parse(localStorage.getItem("timeline")) || [];

  const updatedActivities = [
    ...existingActivities,
    newActivity
  ];

  localStorage.setItem(
    "timeline",
    JSON.stringify(updatedActivities)
  );

  toast.success(`${type} added to timeline`);
};

    return (
  <div className="container mx-auto px-4 py-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Left Side */}
      <FriendsInfo friend={friend} />

      {/* Right Side */}
      <div className="space-y-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">

              <h2 className="text-2xl font-bold ">
                {friend.days_since_contact}
              </h2>

              <p>Days Since Contact</p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">

              <h2 className="text-2xl font-bold">
                {friend.goal}
              </h2>

              <p>Goal (Days)</p>

            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body text-center">

              <h2 className="text-lg font-bold">
                {friend.next_due_date}
              </h2>

              <p>Next Due Date</p>

            </div>
          </div>

        </div>

        {/* Relationship Goal */}
        <div className="card card-border bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Relationship Goal</h2>
    <p> Contact every {friend.goal} days</p>
    <div className="card-actions justify-end">
      <button className="btn bg-gray-100">Edit</button>
    </div>
  </div>
</div>

        {/* Quick Check-In */}
        <div className="card bg-base-100 shadow-2xl">

          <div className="card-body">

            <h2 className="card-title">
              Quick Check-In
            </h2>

            <div className="flex gap-4 mt-4">

              <button onClick={()=>handleInteraction("Call")} className="btn "><img src="/src/assets/call.png" alt="" width="16"/>
                Call
              </button>

              <button onClick={()=>handleInteraction("Text")} className="btn"><img src="/src/assets/text.png" alt="" width="20" />
                Text
              </button>

              <button onClick={()=>handleInteraction("Video")} className="btn "><img src="/src/assets/video.png" alt="" width="20"/>
                Video
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
);

};

export default FriendDetails;