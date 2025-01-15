import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, setPriority } from "../store/actions/taskActions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            margin: "20px",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginRight: "40px",
          }}
          className="d-grid gap-2"
        >
          <p style={{ margin: "0px" }}>{task.text}</p>
          <button
            style={{
              marginRight: "-11px",
              marginLeft: "8px",
              marginBottom: "-5px",
              marginTop: "0px",
            }}
            className="btn btn-danger "
            type="button"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            Delete
          </button>
          <select
            class="form-select"
            aria-label="Default select example"
            value={task.priority}
            onChange={(e) => dispatch(setPriority(task.id, e.target.value))}
          >
            <option selected>Choose the Prioritization</option>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
