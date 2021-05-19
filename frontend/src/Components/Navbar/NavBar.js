import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <ul className="d-flex justify-content-between align-items-center h-100">
        <li>
          <NavLink to="/" className="h3" replace>
            Home
          </NavLink>
        </li>

        <li className="pt-1">
          <NavLink to="/plantform" replace>
            Adding Plant
          </NavLink>
        </li>
        <li className="pt-1">
          <NavLink to="/plantlist" replace>
            Plant List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
