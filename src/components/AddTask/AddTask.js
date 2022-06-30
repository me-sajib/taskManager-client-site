import React, { useState } from "react";
import Task from "../AllTask/Task";

const AddTask = () => {
  const [tasks, setTasks] = useState([]);
  const handleTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;
    setTasks([...tasks, task]);
  };
  return (
    <div className="container flex justify-center">
      <div className="justify-start">
        <h2 className="text-4xl font-bold text-primary pb-4">Add a task</h2>
        <form onSubmit={handleTask}>
          <input
            name="task"
            type="text"
            placeholder="Add Task"
            className="input input-bordered w-full max-w-xs"
          />
        </form>
        <Task task={tasks} />
      </div>
    </div>
  );
};

export default AddTask;
