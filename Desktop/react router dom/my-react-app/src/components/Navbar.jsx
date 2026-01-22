import React from "react";
import { createBrowserRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/about">
        <li>About</li>
      </a>
    </div>
  );
};

export default Navbar;
