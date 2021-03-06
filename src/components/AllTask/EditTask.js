import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../Spinner/Spinner";

const EditTask = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://tranquil-peak-12585.herokuapp.com/task/" + id)
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
      fetch("https://tranquil-peak-12585.herokuapp.com/task/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            Swal.fire("Updated!", "Task Updated successfully", "success");
            e.target.task.value = "";
          }
        });
    }
  };
  if (loading) return <Spinner />;
  return (
    <div className="container flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title mb-3">
            Updating <em className="text-primary font-bold">{task.task}</em>
          </h2>
          <form onSubmit={updateTask}>
            <input
              name="task"
              type="text"
              placeholder="Update Task"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="card-actions mt-4 ">
              <button className="btn btn-primary" type="submit" name="submit">
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
