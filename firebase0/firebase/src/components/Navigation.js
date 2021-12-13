import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account_settings">Account Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
