import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Layout/MainLayout";

import Homepage from "../Pages/Homepage/Homepage";
import Timeline from "../Pages/Timeline/Timeline";
import Stats from "../Pages/Stats/Stats";
import FriendDetails from "../Pages/FriendDetails/FriendDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />, 

    children: [
      {
        index: true,
        element: <Homepage />,
      },

      {
        path: "timeline",
        element: <Timeline />,
      },

      {
        path: "stats",
        element: <Stats />,
      },

      {
        path: "friend/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
      },
    ],
  },
]);