import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <nav>
    <li>
      <Link to="/">Welcome</Link> |{" "}
    </li>
    <li>
      <Link to="/ex1">ex1</Link>
    </li>
    <li>
      <Link to="/ex2">ex2</Link>
    </li>
  </nav>
  );
}

  export default Navbar;