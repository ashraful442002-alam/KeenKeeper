import { useEffect, useState } from "react";
import FriendCard from "./FriendCard";

const Friends = () => {

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data))
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">

      <h2 className="text-4xl font-bold mb-8">
        Your Friends
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {
          friends.map(friend => (
            <FriendCard
              key={friend.id}
              friend={friend}
            />
          ))
        }

      </div>

    </div>
  );
};

export default Friends;