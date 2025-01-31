import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Login,
  Categories,
  GetFaq,
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
import { action as editCategoryAction } from "./pages/Categories/EditCategory";
import { action as deleteCategoryAction } from "./pages/Categories/DeleteCategory";
import { action as deleteFaqAction } from "./pages/FAQ/DeleteFaq";

//loaders
import { loader as dashboardLoader } from "./pages/dashboard";
import { loader as editFaqLoader } from "./pages/FAQ/EditFAQ";
import { loader as editCategoryLoader } from "./pages/Categories/EditCategory";

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
            element: <GetFaq />,
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
            loader: editCategoryLoader,
            action: editCategoryAction,
          },
          {
            path: "addcategory",
            element: <AddCategory />,
            action: addCategoryAction,
          },
          {
            path: "deletecategory/:id",
            action: deleteCategoryAction,
          },
          {
            path: "deletefaq/:id",
            action: deleteFaqAction,
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
