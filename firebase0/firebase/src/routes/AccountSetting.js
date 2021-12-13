import React from "react";
import { authService } from "../myBase";
import { Link } from "react-router-dom";

function AccountSetting() {
  const onLogOutClick = () => authService.signOut();
    return (
      <Link to="/">
        <button onClick={onLogOutClick}>Log Out</button>
      </Link> 
    );
  }
export default AccountSetting;