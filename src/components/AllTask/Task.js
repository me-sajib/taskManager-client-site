import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Task = ({ task }) => {
  const completeTask = (task) => {
    const id = task._id;
    fetch("https://tranquil-peak-12585.herokuapp.com/task/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        fetch("https://tranquil-peak-12585.herokuapp.com/completeTask/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Complete", "Task Completed Successfully", "success");
          });
      });
  };

  return (
    <>
      <p className="mb-4">
        <input
          type="checkbox"
          onClick={() => completeTask(task)}
          className="checkbox-sm mr-2"
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
