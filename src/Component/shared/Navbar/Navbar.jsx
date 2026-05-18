import { useState } from "react";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaHistory,
  FaBars,
} from "react-icons/fa";
import { GoGraph } from "react-icons/go";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-extrabold text-[#1F2937]">
          Keen<span className="font-semibold text-2xl text-[#244D3F]">Keeper</span></h1>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          <FaBars size={24} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-4">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl font-medium ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-gray-200"
                }`
              }
            >
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl font-medium ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-gray-200"
                }`
              }
            >
              <FaHistory />
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-xl font-medium  ${
                  isActive
                    ? "bg-[#244D3F] text-white"
                    : "hover:bg-gray-200"
                }`
              }
            >
              <GoGraph />
              Stats
            </NavLink>
          </li>
              
        </ul>
      </div>

      {/* Mobile Menu */}
      {
        open && (
          <ul className="lg:hidden px-4 pb-4 space-y-2 font-medium text-gray-600">

            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/timeline">Timeline</NavLink>
            </li>
            <li>
              <NavLink to="/stats">Stats</NavLink>
            </li>

          </ul>
        )
      }
    </div>
  );
};

export default Navbar;