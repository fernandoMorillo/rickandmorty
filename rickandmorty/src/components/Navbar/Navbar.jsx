import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/character"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/locations"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/episodes"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
