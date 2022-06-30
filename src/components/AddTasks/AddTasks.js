import React from "react";

const AddTasks = () => {
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
      </div>
    </div>
  );
};

export default AddTasks;
