import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, FAQ, HomeLayout, Error } from "./pages";

//loaders
import { loader as dashboardLoader } from "./pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
