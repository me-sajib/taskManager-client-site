import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:5000/task/" + id)
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setLoading(false);
      });
  }, [id]);

  const updateTask = (e) => {
    e.preventDefault();
    const task = e.target.task.value;

    if (task.length > 0) {
      fetch("http://localhost:5000/task/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            alert("Task updated successfully");
            e.target.task.value = "";
          }
        });
    }
  };
  if (loading) return <div>Loading...</div>;
  return (
    <div className="container flex justify-center">
      <div class="card w-96 bg-base-100 shadow-xl ">
        <div class="card-body">
          <h2 class="card-title mb-3">
            Updating <em className="text-primary font-bold">{task.task}</em>
          </h2>
          <form onSubmit={updateTask}>
            <input
              name="task"
              type="text"
              placeholder="Update Task"
              className="input input-bordered w-full max-w-xs"
            />
            <div class="card-actions mt-4 ">
              <button class="btn btn-primary" type="submit" name="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
