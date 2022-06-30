import React from "react";

const Task = ({ task }) => {
  const clickTask = (e) => {
    console.log(e);
  };
  return (
    <div className="my-4">
      <h2 className="text-6xl text-secondary font-bold">All Task</h2>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          {task.map((task, index) => (
            <p className="mb-4">
              <input
                type="checkbox"
                onClick={() => clickTask(task)}
                class="checkbox-sm mr-2"
              />
              <span className="text-3xl">{task}</span>
              <button className="btn  btn-accent btn-sm ml-4">edit</button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
