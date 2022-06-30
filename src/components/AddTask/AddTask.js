import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Task from "../AllTask/Task";

const AddTask = () => {
  const { data: tasks, isLoading } = useQuery("tasks", () =>
    fetch("http://localhost:5000/task").then((res) => res.json())
  );
  if (isLoading) return <div>Loading...</div>;
  //   post task to database
  const handleTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;

    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Task added successfully");
          e.target.task.value = "";
        }
      });
  };
  return (
    <div className="container flex justify-center">
      <h2 className="text-4xl font-bold text-primary pb-4 mt-12">Add a task</h2>
      <form onSubmit={handleTask}>
        <input
          name="task"
          type="text"
          placeholder="Add Task"
          className="input input-bordered w-full max-w-xs"
        />
      </form>
      <div className="my-4">
        <h2 className="text-6xl text-secondary font-bold">All Task</h2>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            {tasks.map((task, index) => (
              <Task task={task} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
