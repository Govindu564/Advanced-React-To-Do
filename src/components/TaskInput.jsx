import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/actions/taskActions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { id: Date.now(), text: task, priority: 'Medium' };
      dispatch(addTask(newTask));
      setTask('');
    }
  };

  return (
    <div style={{marginBottom:"15px"}}>
      <input 
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={e => setTask(e.target.value)}
        style={{marginRight:"5px"}}
      />
      <button className="btn btn-primary"  onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
