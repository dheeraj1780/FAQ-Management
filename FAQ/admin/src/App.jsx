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
  AddCategory,
  EditFAQ,
  EditCategory,
} from "./pages";

//actions
import { action as loginAction } from "./pages/login";
import { action as addCategoryAction } from "./pages/Categories/AddCategory";

//loaders
import { loader as getAllCategoryLoader } from "./pages/Categories/GetCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginAction,
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
            loader: getAllCategoryLoader,
          },
          {
            path: "editfaq",
            element: <EditFAQ />,
          },
          {
            path: "editcategory",
            element: <EditCategory />,
          },
          {
            path: "addcategory",
            element: <AddCategory />,
            action: addCategoryAction,
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
