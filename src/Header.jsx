import React from "react";
import { NavLink, Link } from "react-router-dom";

const activeStyle = {
    color: "#815440",   // #76dd8d
}

export default function Header() {
  return (
    <header class="page-header">
      <nav>
        <ul>
          <li>
            <Link to="/"><img alt="Twitch Logo" src="/logo.png" width="100px" height="100px"/></Link>
          </li>
          <li>
              <NavLink activeStyle={activeStyle} to="/help">Help</NavLink>
          </li>
          <li>
              <NavLink activeStyle={activeStyle} to="/birds">Birds</NavLink>
          </li>
          <li>
              <NavLink activeStyle={activeStyle} to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
