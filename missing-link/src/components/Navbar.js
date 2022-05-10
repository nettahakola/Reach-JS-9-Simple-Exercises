import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <li>
        <Link to="/ex1">ex1</Link>
      </li>
      <li>
        <Link to="/ex2">ex2</Link>
      </li>
      <li>
        <Link to="/ex3">ex3</Link>
      </li>
      <li>
        <Link to="/ex4">ex4</Link>
      </li>
      <li>
        <Link to="/ex5">ex5</Link>
      </li>
      <li>
        <Link to="/ex6">ex6</Link>
      </li>
      <li>
        <Link to="/ex7">ex7</Link>
      </li>
      <li>
        <Link to="/ex8">ex8</Link>
      </li>
      <li>
        <Link to="/ex9">ex9</Link>
      </li>
    </ul>
  </div>
  );
}

  export default Navbar;