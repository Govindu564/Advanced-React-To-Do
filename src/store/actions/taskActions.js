export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});

export const setPriority = (id, priority) => ({
  type: "SET_PRIORITY",
  payload: { id, priority },
});
