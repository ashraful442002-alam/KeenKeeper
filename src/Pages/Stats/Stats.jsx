import React, { useEffect, useState } from 'react';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const Stats = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    const timeline =
      JSON.parse(localStorage.getItem("timeline")) || [];

    const calls =
      timeline.filter(item => item.type === "Call").length;

    const texts =
      timeline.filter(item => item.type === "Text").length;

    const videos =
      timeline.filter(item => item.type === "Video").length;

    setData([
      { name: "Call", value: calls },
      { name: "Text", value: texts },
      { name: "Video", value: videos }
    ]);

  }, []);

  const COLORS = [
    "#22C55E",
    "#0EA5E9",
    "#EF4444"
  ];

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-4xl font-bold text-center mb-10">

        Friendship Analytics

      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-6">

        <div className="w-full h-[500px]">

          <ResponsiveContainer>

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label
              >

                {
                  data.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />

                  ))
                }

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
};

export default Stats;