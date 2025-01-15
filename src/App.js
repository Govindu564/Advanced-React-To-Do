import React from "react";
import { useSelector } from "react-redux";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="container">
      <Navbar />
      {isAuthenticated ? (
        <>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
