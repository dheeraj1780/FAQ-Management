import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage, Questions, ViewQuestion } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Questions />,
      },
      {
        path: "view",
        element: <ViewQuestion />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
