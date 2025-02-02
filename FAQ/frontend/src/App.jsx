import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard, FAQ, HomeLayout, Error } from "./pages";

//loaders
import { loader as dashboardLoader } from "./pages/dashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
    loader: dashboardLoader,
    children: [
      {
        index: true,
        element: <FAQ />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
