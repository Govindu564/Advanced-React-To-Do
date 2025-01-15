import React from "react";
import { useSelector } from "react-redux";
import "./navbar.css";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav>
      <h1>Advanced To-Do</h1>
      {isAuthenticated ? (
        <>
          <p className="welcome-text">Welcome !</p>
        </>
      ) : null}
    </nav>
  );
};

export default Navbar;
