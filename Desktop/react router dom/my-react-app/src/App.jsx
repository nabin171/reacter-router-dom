import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import About from "./components/About";
import User from "./components/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />,
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />,
        </>
      ),
    },

    {
      path: "/user/:nabin",
      element: <User />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
