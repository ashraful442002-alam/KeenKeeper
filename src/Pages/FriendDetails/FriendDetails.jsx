import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FriendsInfo from './FriendsInfo';

const FriendDetails = () => {

  const friends = useLoaderData();

  const { id } = useParams();

const friend = friends.find(
  friend => friend.id === parseInt(id)
);
  
  if (!friend) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

    return (
  <div className="container mx-auto px-4 py-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      <FriendsInfo friend={friend} />

    </div>

  </div>
);

};

export default FriendDetails;