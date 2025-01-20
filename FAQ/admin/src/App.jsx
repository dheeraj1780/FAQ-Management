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
import { action as addFaqAction } from "./pages/FAQ/AddFAQ";
import { action as editFaqAction } from "./pages/FAQ/EditFAQ";

//loaders
import { loader as getAllFaqLoader } from "./pages/FAQ/GetFaq";
import { loader as dashboardLoader } from "./pages/dashboard";
import { loader as editFaqLoader } from "./pages/FAQ/EditFAQ";

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
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <FAQ />,
            loader: getAllFaqLoader,
          },
          {
            path: "addFaq",
            element: <AddFAQ />,
            action: addFaqAction,
          },
          {
            path: "category",
            element: <Categories />,
          },
          {
            path: "editfaq/:id",
            element: <EditFAQ />,
            loader: editFaqLoader,
            action: editFaqAction,
          },
          {
            path: "editcategory/:id",
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
