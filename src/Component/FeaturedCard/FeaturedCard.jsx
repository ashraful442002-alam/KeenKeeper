import React from 'react';

const FeaturedCard = ({ friends = [] }) => {

  const totalFriends = friends.length;

  const onTrack =
    friends.filter(
      friend => friend.status === "on-track"
    ).length;

  const needAttention =
    friends.filter(
      friend =>
        friend.status === "overdue" ||
        friend.status === "almost due"
    ).length;

  const totalInteractions =
    JSON.parse(localStorage.getItem("timeline"))?.length || 0;

  return (

    <div className='container mx-auto mt-4 px-4 py-8'>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

        {/* Card 1 */}
        <div className="card bg-base-100 shadow-2xl rounded-2xl">

          <div className="card-body items-center text-center">

            <h2 className="card-title font-semibold text-3xl text-[#244D3F]">
              {totalFriends}
            </h2>

            <p className='text-lg text-[#64748B]'>
              Total Friends
            </p>

          </div>

        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-2xl rounded-2xl">

          <div className="card-body items-center text-center">

            <h2 className="card-title font-semibold text-3xl text-[#244D3F]">
              {onTrack}
            </h2>

            <p className='text-lg text-[#64748B]'>
              On Track
            </p>

          </div>

        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-2xl rounded-2xl">

          <div className="card-body items-center text-center">

            <h2 className="card-title font-semibold text-3xl text-[#244D3F]">
              {needAttention}
            </h2>

            <p className='text-lg text-[#64748B]'>
              Need Attention
            </p>

          </div>

        </div>

        {/* Card 4 */}
        <div className="card bg-base-100 shadow-2xl rounded-2xl">

          <div className="card-body items-center text-center">

            <h2 className="card-title font-semibold text-3xl text-[#244D3F]">
              {totalInteractions}
            </h2>

            <p className='text-lg text-[#64748B]'>
              Interactions
            </p>

          </div>

        </div>

      </div>

    </div>

  );
};

export default FeaturedCard;