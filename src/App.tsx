import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { PageNotFound } from "./components/PageNotFound";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
      errorElement:<PageNotFound/>
    },
    {
      path: "/LoginPage",
      element: <Login/>,
    },
    {
      path: "/SignupPage",
      element: <Signup/>,
    },
  ]);

  return  <RouterProvider router={router} />
}

export default App;
