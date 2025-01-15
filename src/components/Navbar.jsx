import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <nav>
      <h1>Advanced To-Do</h1>
      {isAuthenticated ? (
        <div>
          <p style={{ color: "#FFFF00" }}>Welcome !</p>
          <button
            className="btn btn-danger btn-lg"
            style={{ position: "fixed", bottom: "50px", right: "50px" }}
            onClick={() => dispatch(logout())}
          >
            Logout
          </button>
        </div>
      ) : null}
    </nav>
  );
};
export default Navbar;
