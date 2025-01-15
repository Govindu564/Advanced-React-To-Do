import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/actions/authActions";

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button
          className="btn btn-success btn-lg"
          onClick={() => dispatch(login())}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
