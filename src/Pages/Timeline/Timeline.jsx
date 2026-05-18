import React, { useEffect, useState } from 'react';

const Timeline = () => {

  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {

    const storedActivities =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const sortedActivities = storedActivities.reverse();

    setActivities(sortedActivities);

  }, []);

  const filteredActivities =
    filter === "All"
      ? activities
      : activities.filter(
        activity => activity.type === filter
      );

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Timeline
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">

        <button
          onClick={() => setFilter("All")}
          className="btn"
        >
          All
        </button>

        <button
          onClick={() => setFilter("Call")}
          className="btn "
        >
          Call
        </button>

        <button
          onClick={() => setFilter("Text")}
          className="btn "
        >
          Text
        </button>

        <button
          onClick={() => setFilter("Video")}
          className="btn "
        >
          Video
        </button>

      </div>

      {/* Timeline Items */}
      <div className="space-y-6">

        {
          filteredActivities.map(activity => (

            <div
              key={activity.id}
              className="card bg-base-100 shadow-xl"
            >

              <div className="card-body">

                <div className="flex items-center justify-between">

                  <div>

                    <h2 className="card-title">
                      {activity.title}
                    </h2>

                    <p className="text-gray-500">
                      {activity.date}
                    </p>

                  </div>

                  <div className="text-3xl">

                    {
                      activity.type === "Call" && <img src="/src/assets/call.png" alt="" />
                    }

                    {
                      activity.type === "Text" && <img src="/src/assets/text.png" alt="" />
                    }

                    {
                      activity.type === "Video" && <img src="/src/assets/video.png" alt="" />
                    }

                  </div>

                </div>

              </div>

            </div>

          ))
        }

      </div>

    </div>
  );
};

export default Timeline;