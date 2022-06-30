import React from "react";

const Task = ({ task }) => {
  console.log(task);
  return (
    <div className="my-4">
      <h2 className="text-6xl text-secondary font-bold">All Task</h2>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          {task.map((task, index) => (
            <p>
              <input type="checkbox" class="checkbox-sm mr-2" />
              <span>{task}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
