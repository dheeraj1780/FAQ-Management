import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Categories, Faq, HomeLayout, Dashboard, Error } from "./pages";

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
            element: <Faq />,
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
