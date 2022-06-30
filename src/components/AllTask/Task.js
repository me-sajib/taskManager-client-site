import React from "react";

const Task = ({ task }) => {
  const completeTask = (id) => {
    fetch("http://localhost:5000/task/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <p className="mb-4">
        <input
          type="checkbox"
          onClick={() => completeTask(task._id)}
          class="checkbox-sm mr-2"
        />
        <span className="text-3xl">{task.task}</span>
        <button className="btn  btn-accent btn-sm ml-4">edit</button>
      </p>
    </>
  );
};

export default Task;
