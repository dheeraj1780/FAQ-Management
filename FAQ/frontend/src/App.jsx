import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, FAQ, HomeLayout, Error } from "./pages";

//loaders
import { loader as getAllFaqLoader } from "./pages/FAQ.jsx";
import { loader as dashboardLoader } from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "faq",
        element: <Dashboard />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <FAQ />,
            loader: getAllFaqLoader,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
