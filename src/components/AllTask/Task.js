import React from "react";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const completeTask = (task) => {
    const id = task._id;
    fetch("http://localhost:5000/task/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("http://localhost:5000/completeTask/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Task completed successfully");
          });
      });
  };

  return (
    <>
      <p className="mb-4">
        <input
          type="checkbox"
          onClick={() => completeTask(task)}
          class="checkbox-sm mr-2"
        />
        <span className="text-3xl">{task.task}</span>
        <Link to={`/edit/${task._id}`} className="btn  btn-accent btn-sm ml-4">
          edit
        </Link>
      </p>
    </>
  );
};

export default Task;
