import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Login,
  Categories,
  FAQ,
  HomeLayout,
  Dashboard,
  Error,
  AddFAQ,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <FAQ />,
          },
          {
            path: "addFaq",
            element: <AddFAQ />,
          },
          {
            path: "category",
            element: <Categories />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
